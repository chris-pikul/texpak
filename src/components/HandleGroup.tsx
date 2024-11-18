import { Children, cloneElement, isValidElement, PropsWithChildren, ReactNode } from 'react';
import { InputHandle, InputHandleProps, OutputHandle, OutputHandleProps } from './ExtendedHandle';

function childrenWithProps(children: ReactNode, props: Record<string, any> | ((index: number) => Record<string, any>)) {
    return Children.map(children, (child, index) => {
        if (isValidElement(child)) return cloneElement(child, typeof props === 'function' ? props(index) : props);
        return child;
    });
}

export function HandleGroup(props: PropsWithChildren) {
    return childrenWithProps(props.children, (index: number) => ({
        style: { top: (index + 1) * 1.5 + 'rem' },
    }));
}

export function InputHandles(props: { handles: InputHandleProps[] }) {
    return (
        <HandleGroup>
            {props.handles.map((h, ind) => (
                <InputHandle key={ind} {...h} />
            ))}
        </HandleGroup>
    );
}

export function OutputHandles(props: { handles: OutputHandleProps[] }) {
    return (
        <HandleGroup>
            {props.handles.map((h, ind) => (
                <OutputHandle key={ind} {...h} />
            ))}
        </HandleGroup>
    );
}
