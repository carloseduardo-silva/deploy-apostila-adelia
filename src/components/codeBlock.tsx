import { useState } from 'react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative my-4 rounded-md overflow-hidden border border-gray-700 shadow bg-[#282a36]">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 bg-gray-700 hover:bg-gray-600 text-sm px-2 py-1 rounded text-white"
      >
        Copiar
      </button>

      {copied && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-green-400 text-xs px-2 py-1 rounded">
          Código copiado com sucesso
        </div>
      )}

      <SyntaxHighlighter
        language="java"
        style={dracula}
        showLineNumbers
        customStyle={{
          margin: 0,
          padding: '2rem',
          background: 'transparent',
          fontSize: '1rem',
          lineHeight: '1.4',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
