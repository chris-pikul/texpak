import { Handle, HandleProps, Position } from '@xyflow/react';
import { FC } from 'react';

export type ExtendedHandleProps = HandleProps & {
    color?: string;
    icon?: string | FC;
    label?: string | FC;
};

export function ExtendedHandle(props: ExtendedHandleProps) {
    const style: Record<string, any> = props.style ?? {};
    if (props.color) style['--handle-color'] = props.color;

    const handleProps: Record<string, any> = { ...props };
    if (props.color) delete handleProps.color;
    if (props.icon) delete handleProps.icon;
    if (props.label) delete handleProps.label;

    return (
        <Handle {...(handleProps as HandleProps)} style={style}>
            {typeof props.icon === 'string' ? (
                <span className='handle-icon'>{props.icon}</span>
            ) : typeof props.icon === 'function' ? (
                //@ts-expect-error this should be right?
                props.icon()
            ) : null}

            {typeof props.label === 'string' ? (
                <span className='handle-label'>{props.label}</span>
            ) : typeof props.label === 'function' ? (
                //@ts-expect-error this should be right?
                props.label()
            ) : null}
        </Handle>
    );
}

export type InputHandleProps = Omit<ExtendedHandleProps, 'type' | 'position'>;
export function InputHandle(props: InputHandleProps) {
    return <ExtendedHandle {...props} type='target' position={Position.Left} />;
}

export type OutputHandleProps = Omit<ExtendedHandleProps, 'type' | 'position'>;
export function OutputHandle(props: OutputHandleProps) {
    return <ExtendedHandle {...props} type='source' position={Position.Right} />;
}
