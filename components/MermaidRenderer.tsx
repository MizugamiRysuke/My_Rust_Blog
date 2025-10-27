"use client";

import React, { useEffect } from 'react';
import mermaid from 'mermaid';

interface MermaidRendererProps {
  contentHtml: string;
}

const MermaidRenderer: React.FC<MermaidRendererProps> = ({ contentHtml }) => {
  useEffect(() => {
    // mermaid.js を初期化
    mermaid.initialize({ startOnLoad: false });

    // DOM内の全ての <pre class="mermaid"> 要素を探す
    const mermaidElements = document.querySelectorAll('pre.mermaid');

    mermaidElements.forEach((element, index) => {
      const chartDefinition = element.textContent;
      if (chartDefinition) {
        try {
          // レンダリング用のIDを生成
          const chartId = `mermaid-chart-${index}`;
          // レンダリング結果を格納する要素を作成
          const svgContainer = document.createElement('div');
          svgContainer.id = chartId;
          element.parentNode?.replaceChild(svgContainer, element); // 元の <pre> タグを置き換える

          mermaid.render(chartId, chartDefinition).then(({ svg }) => {
            svgContainer.innerHTML = svg;
          });
        } catch (error) {
          console.error('Mermaid rendering failed:', error);
          // エラー時は元のコードを表示
          element.innerHTML = `<pre class="mermaid">${chartDefinition}</pre>`;
        }
      }
    });
  }, [contentHtml]); // contentHtml が変更されたら再実行

  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
};

export default MermaidRenderer;
