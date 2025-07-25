// import React, { useRef ,useState} from 'react';
// import MermaidChart, { MermaidChartHandle } from './Service/Mermaid';
// import ReactFlowElement , { ReactFlowChartHandle } from './Service/ReactFlow';

// const chartDefinition = `
// graph TD
//     A[Start] --> B{Is it working?}
//     B -- Yes --> C[Great!]
//     B -- No --> D[Check logs]
//     D --> B
// `;

// function App() {
//   const chartRef = useRef<MermaidChartHandle>(null);
//   const chartReactFlowRef = useRef<ReactFlowChartHandle>(null);

//   const handleRender = () => {
//     chartRef.current?.renderChart();
//   };

//   const handleExport = () => {
//     chartRef.current?.exportToPNG();
//   };

//   const handleExport2 = () => {
//     chartReactFlowRef.current?.exportToPNG();
//   };


//   const [nodes, setNodes] = useState([
//     { id: '1', data: { label: 'Node 1' }, position: { x: 0, y: 0 } },
//     { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
//   ]);

//   const [edges, setEdges] = useState([
//     { id: 'e1-2', source: '1', target: '2' },
//   ]);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Mermaid Chart</h1>
//       <MermaidChart ref={chartRef} chart={chartDefinition} />
//       <div className="mt-4 flex gap-4">
//         <button onClick={handleRender} className="bg-blue-500 text-white px-4 py-2 rounded">
//           Render Chart
//         </button>
//         <button onClick={handleExport} className="bg-green-500 text-white px-4 py-2 rounded">
//           Export as PNG
//         </button>
//       </div>
//       <ReactFlowElement ref={chartReactFlowRef} nodes={nodes} edges={edges}></ReactFlowElement>
//     </div>
//   );
// }

// export default App;

import React, { useRef ,useState} from 'react';
import ReactFlowElement , { ReactFlowChartHandle } from './Service/ReactFlow';



function App() {
  const chartRef = useRef<ReactFlowChartHandle>(null);

  
  const handleExport = () => {
    chartRef.current?.exportToPNG();
  };

  const [nodes, setNodes] = useState([
  ]);

  const [edges, setEdges] = useState([

  ]);

  const addNode = () => {
    const newNode = { id: new Date().getTime().toString(), data: { label: '' }, position: { x: 0, y: 0 },draggable: true };
    chartRef.current?.addNodes([newNode]);
  };
  
  const addBasicApiNode = () => {
    const newNode = { id: new Date().getTime().toString(), data: { label: '' }, position: { x: 0, y: 0 },draggable: true };
    chartRef.current?.addNodes([newNode]);
  };

  const addCustomApiNode = () => {
    const newNode = { id: new Date().getTime().toString(), data: { label: '' }, position: { x: 0, y: 0 },draggable: true };
    chartRef.current?.addNodes([newNode]);
  };

  return (
    <div className="p-4">
      <div className="mt-4 flex gap-4">
        <button onClick={addNode} className="bg-green-500 text-white px-4 py-2 rounded">
          Add Node
        </button>
        <button onClick={handleExport} className="bg-green-500 text-white px-4 py-2 rounded">
          Export as PNG
        </button>
      </div>
      <ReactFlowElement ref={chartRef} nodes={nodes} edges={edges}></ReactFlowElement>
    </div>
  );
}

export default App;