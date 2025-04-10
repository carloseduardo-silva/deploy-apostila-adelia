'use client';

import { CloudDownload, Lightbulb, Printer } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface IHeaderProps {
  titleCurso: string;
  titleUnidade: string;
  typePage: string;
}

export const HeaderMaterial: React.FC<IHeaderProps> = ({
  titleCurso,
  titleUnidade,
  typePage,
}) => {
  return (
    <header className="relative flex bg-white w-full flex-col text-black mb-5">
      <div className="relative z-10 flex h-full flex-col p-4 md:py-[2rem] px-[4rem] bg-white">
        <div className="flex items-center p-2 mb-4 flex-col md:flex-row md:items-center md:justify-between">
          <Image
            src={'../assets/Logo2.png'}
            alt="logo do curso"
            width={120}
            aria-hidden="true"
          />

          <div className="mt-2 flex flex-row space-x-4 md:mt-0 ">
            <button
              type="button"
              className="flex cursor-pointer items-center"
              aria-label="Avaliar conteúdo"
            >
              <Lightbulb className="mr-1" width={15} aria-hidden="true" />
              <span className="text-sm">Avaliar</span>
            </button>
            <button
              type="button"
              className="flex cursor-pointer items-center"
              aria-label="Baixar conteúdo"
            >
              <CloudDownload className="mr-1" width={15} aria-hidden="true" />
              <span className="text-sm">Baixar</span>
            </button>
            <button
              type="button"
              className="flex cursor-pointer items-center"
              aria-label="Imprimir conteúdo"
            >
              <Printer className="mr-1" width={15} aria-hidden="true" />
              <span className="text-sm">Imprimir</span>
            </button>
          </div>
        </div>

        {/* Título e Botões */}
        <div className="mt-2 flex w-full flex-col md:mt-5">
          {/* Linha: Nome do Curso + botões */}
          <div className="mb-2 flex flex-col md:mb-0 md:flex-row md:items-center md:justify-between">
            <div className="text-sm roboto subtitle-main">
              {titleCurso || ''}
            </div>
          </div>

          {/* Nome da Unidade */}
          <h2 className="my-3 text-3xl font-bold md:text-[37px] title-red nunito">
            {titleUnidade}: {typePage}
          </h2>
        </div>
      </div>
    </header>
  );
};
