import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import mermaid from 'mermaid';
import domtoimage from 'dom-to-image-more';

interface MermaidChartProps {
  chart: string;
}

export interface MermaidChartHandle {
  renderChart: () => Promise<void>;
  exportToPNG: () => void;
}

const MermaidChart = forwardRef<MermaidChartHandle, MermaidChartProps>(({ chart }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSvg = useRef<string | null>(null);
  useImperativeHandle(ref, () => ({
    renderChart: async () => {
      if (!containerRef.current) return;

      mermaid.initialize({ startOnLoad: false });
      containerRef.current.innerHTML = '';

      try {
        const { svg } = await mermaid.render(`mermaid-${Date.now()}`, chart);
        lastSvg.current = svg;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = svg;
        containerRef.current.appendChild(wrapper.firstChild!);
      } catch (error) {
        containerRef.current.innerHTML = `<pre style="color:red;">Error: ${String(error)}</pre>`;
      }
    },
    exportToPNG: () => {
      if (!containerRef.current) return;

      domtoimage.toPng(containerRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'mermaid-chart.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Failed to export chart as PNG', err);
        });
    },
  }));

  return <div ref={containerRef} />;
});

export default MermaidChart;
