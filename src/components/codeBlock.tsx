import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
}
export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    // Define um temporizador para esconder o aviso após 2 segundos
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative my-4 rounded-md overflow-hidden border border-gray-700 shadow bg-[#282a36]">
      {/* Botão de copiar posicionado no canto superior direito */}
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 bg-gray-700 hover:bg-gray-600 text-sm px-2 py-1 rounded text-white"
      >
        Copiar
      </button>

      {/* Aviso de “Código copiado com sucesso” (exibido só quando copied = true) */}
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
          padding: "2rem",         // Ajuste o padding interno do código
          background: "transparent", // Usamos a cor de fundo do container (Dracula)
          fontSize: "1rem",        // Aumente ou diminua conforme necessidade
          lineHeight: "1.4",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
