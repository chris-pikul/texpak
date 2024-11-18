import { PropsWithChildren } from 'react';
import { InputHandleProps, OutputHandleProps } from './ExtendedHandle';
import { InputHandles, OutputHandles } from './HandleGroup';

import './ExtendedNode.css';

function classNames(...args: (string | [string, boolean] | (() => string))[]): string {
    return args
        .map((arg) =>
            typeof arg === 'string'
                ? arg
                : typeof arg === 'object' && Array.isArray(arg)
                ? arg[1]
                    ? arg[0]
                    : null
                : typeof arg === 'function'
                ? arg()
                : null,
        )
        .filter((arg) => !!arg)
        .join(' ');
}

function longestLabel(props: { label?: any }[]): number {
    return props.reduce<number>((acc, cur) => {
        if ('label' in cur && typeof cur.label === 'string') return Math.max(acc, cur.label.length);
        return acc;
    }, 0);
}

export type ExtendedNodeProps = PropsWithChildren<{
    title: string;

    inputs?: InputHandleProps[];
    outputs?: OutputHandleProps[];
}>;

export default function ExtendedNode(props: ExtendedNodeProps) {
    const { title, inputs = [], outputs = [] } = props;

    return (
        <>
            {inputs.length > 0 && <InputHandles handles={inputs} />}
            <div
                className={classNames(
                    'node-body',
                    ['node-body-inputs', inputs.length > 0],
                    ['node-body-outputs', outputs.length > 0],
                )}
                style={{
                    marginLeft: longestLabel(inputs) * 0.45 + 'rem',
                    marginRight: longestLabel(outputs) * 0.45 + 'rem',
                }}>
                <h2 className='node-title'>{title}</h2>
                <div className='node-content'>{props.children}</div>
            </div>
            {outputs.length > 0 && <OutputHandles handles={outputs} />}
        </>
    );
}
