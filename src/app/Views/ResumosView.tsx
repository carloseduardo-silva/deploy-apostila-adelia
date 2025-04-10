'use client';

import { Icon } from '@iconify/react';
import { CloudDownload, Lightbulb, Printer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import LogoWhite from '@/assets/Logo.png';
import Logo from '@/assets/Logo2.png';
import { Footer } from '@/components/footer';
import { MenuFixed } from '@/components/menuFixed';
import { ScrollToTopButton } from '@/components/scrollToTopButton';
import { ToggleFontSizeBtn } from '@/components/ToggleFontSizeBtn/ToggleFontSizeBtn';
import { ToggleThemeBtn } from '@/components/ToogleThemeBtn/toggleThemeBtn';

import { useTheme } from '../context/ThemeContext';
import { ClientViewProps } from '../types/MaterialTypes';
import { handlePrint } from '../utils/helpers';
import { MenusConteudo } from '@/components/menusConteudo';

export default function SummaryView({ apostila, tag }: ClientViewProps) {
  const { theme } = useTheme();

  console.log(apostila);

  return (
    <>
      <a
        href="#mainContent"
        className="absolute left-[-999px] top-[-999px] z-50 bg-white p-2 text-sm text-black focus:left-2 focus:top-2"
      >
        Ir para o conteúdo
      </a>

      <main className="flex h-full w-full flex-col min-h-[100vh]">
        <header className="relative flex  w-full flex-col text-black mb-1">
          <div className="relative z-10 flex h-full flex-col p-4 md:py-[2rem] md:px-[4rem]  mx-auto w-full max-w-[2000px]">
            <div
              id="headerLogo"
              className="flex items-center p-2 mb-4 flex-col md:flex-row md:items-center md:justify-between"
            >
              <a href={`/apostila/${tag}`}>
                <Image
                  src={theme == 'dark' ? LogoWhite : Logo}
                  alt="logo do curso"
                  width={120}
                  aria-hidden="true"
                />
              </a>

              {MenuFixed() ? (
                <div className="mt-[2rem] gap-3 md:gap-2 flex flex-row space-x-4 md:mt-0">
                  <ToggleFontSizeBtn />

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
                    <CloudDownload
                      className="mr-1"
                      width={15}
                      aria-hidden="true"
                    />
                    <span className="text-sm">Baixar</span>
                  </button>
                  <button
                    type="button"
                    className="md:flex cursor-pointer items-center hidden"
                    aria-label="Imprimir conteúdo"
                    onClick={handlePrint}
                  >
                    <Printer className="mr-1" width={15} aria-hidden="true" />
                    <span className="text-sm">Imprimir</span>
                  </button>
                  <ToggleThemeBtn />
                </div>
              ) : (
                <div
                  id="menuFixedMobile"
                  className="md:hidden z-[10] fixed top-[0] flex flex-row items-center justify-center space-x-4 mt-0 p-4 gap-4 bg-white w-full"
                >
                  <ToggleFontSizeBtn />

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
                    <CloudDownload
                      className="mr-1"
                      width={15}
                      aria-hidden="true"
                    />
                    <span className="text-sm">Baixar</span>
                  </button>
                  <button
                    type="button"
                    className="md:flex cursor-pointer items-center hidden"
                    aria-label="Imprimir conteúdo"
                    onClick={handlePrint}
                  >
                    <Printer className="mr-1" width={15} aria-hidden="true" />
                    <span className="text-sm">Imprimir</span>
                  </button>
                  <ToggleThemeBtn />
                </div>
              )}
            </div>

            <div className="mt-3 flex w-full flex-col md:mt-5">
              <div className="md:mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="md:text-sm text-[0.8rem] roboto subtitle-main">
                  {apostila?.course?.data?.attributes?.Nome || ''}
                </div>
              </div>

              <div className="flex md:pb-1 mb-4 flex-col md:flex-row md:items-center md:justify-between">
                <h2 className="my-3 text-[1.65rem] font-bold md:text-[37px] title-red nunito">
                  {apostila?.unit_name}
                  : Resumos
                </h2>

                <Link className="hidden md:flex" href={`/apostila/${tag}/`}>
                  {' '}
                  <Icon
                    style={{
                      color: '#AAB2C8',
                      fontSize: '25px',
                      marginBottom: '41px',
                    }}
                    className="iconHover"
                    icon={'akar-icons:arrow-back'}
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>
        
        <div className=" text-center text-[18px] md:text-[20px] px-4 mb-2 md:mb-5">
            <p className="descParagrah" style={{ color: 'rgb(124, 122, 128)' }}>
              Os Resumos enxutam o material do conteúdo, organizando-o em palavras chaves.
            </p>
        </div>

        {/* Conteúdo*/}
        <div className="flex-1 my-0 flex w-full flex-row flex-wrap gap-5 justify-center pb-[3.75rem] pt-[1rem] px-5 md:px-[3rem] max-w-[2000px] leading-9 text-[18px]">
          {apostila?.summary?.map((item, index) => (
            <section
              key={index}
              className="summaryCard py-[1.1rem] px-[1.5rem] max-w-[600px] mx-auto md:mx-4 bg-[#ffd1d187]"
            >
              <h2>➜ {item.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: item.body_text }} />
            </section>
          ))}
        </div>

        <MenusConteudo tag={tag} hiddenCard='resumos'/>

        <Footer />

        <ScrollToTopButton />
      </main>
    </>
  );
}
