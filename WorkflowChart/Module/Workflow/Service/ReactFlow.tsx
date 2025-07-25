import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  OnNodesChange,
  OnEdgesChange,
  addEdge,
  Connection,
  MiniMap,
} from 'react-flow-renderer';
import domtoimage from 'dom-to-image-more';

interface ReactFlowElementProps {
  nodes: Node[];
  edges: Edge[];
}

export interface ReactFlowChartHandle {
  exportToPNG: () => void;
    addNodes: (newNodes: Node[]) => void;
}

const ReactFlowElement = forwardRef<ReactFlowChartHandle, ReactFlowElementProps>(
  ({ nodes: initialNodes, edges: initialEdges }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);

    const onNodesChange: OnNodesChange = (changes) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
    };

    const onEdgesChange: OnEdgesChange = (changes) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    };

    const onConnect = (params: Connection) => {
      setEdges((eds) =>
        addEdge({ ...params, type: 'smoothstep', animated: false }, eds)
      );
    };

    const onNodeClick = (_event: React.MouseEvent, node: Node) => {
        const newLabel = window.prompt('Enter new label for node:', node.data.label);
        if (newLabel !== null && newLabel.trim() !== '') {
            setNodes((nds) =>
            nds.map((n) =>
                n.id === node.id
                ? { ...n, data: { ...n.data, label: newLabel } }
                : n
            )
            );
        }
    };

    useImperativeHandle(ref, () => ({
      exportToPNG: () => {
        if (!containerRef.current) return;

        domtoimage
          .toPng(containerRef.current)
          .then((dataUrl) => {
            const link = document.createElement('a');
            link.download = 'react-flow-chart.png';
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.error('Failed to export chart as PNG', err);
          });
      },
      addNodes: (newNodes: Node[]) => {
        setNodes((nds) => [...nds, ...newNodes]);
      }
    }));

    return (
      <div ref={containerRef} style={{ width: '100%', height: 500, border: '1px solid #ddd' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          fitView
        >
          <MiniMap />
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  }
);

export default ReactFlowElement;
