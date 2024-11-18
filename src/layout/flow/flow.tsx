import {
    Background,
    Controls,
    Edge,
    MiniMap,
    Node,
    NodeTypes,
    ReactFlow,
    useEdgesState,
    useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useMemo } from 'react';
import { OutputNode } from '../../nodes/Output';
import './flow.css';

const initialNodes: Node[] = [{ id: 'output-1', type: 'output', position: { x: 0, y: 0 }, data: {} }];
const initialEdges: Edge[] = [];

const useCustomNodes = () =>
    useMemo<NodeTypes>(
        () => ({
            output: OutputNode,
        }),
        [],
    );

export default function Flow() {
    const nodeTypes = useCustomNodes();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return (
        <ReactFlow
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            colorMode='dark'>
            <Controls />
            <MiniMap />
            {/* @ts-expect-error types are wrong on variant */}
            <Background variant='dots' gap={12} size={1} />
        </ReactFlow>
    );
}
