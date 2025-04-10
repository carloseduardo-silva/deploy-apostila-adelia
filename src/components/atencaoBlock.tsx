import React from 'react';
export function AtencaoBlock({ htmlContent }: { htmlContent: string }) {
  return (
    <div className="my-4 rounded-md border-l-4 border-yellow-400 bg-yellow-50 p-4">
      <strong className="mb-1 block text-yellow-700">Atenção</strong>
      <div
        className="text-yellow-800"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
