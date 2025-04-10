'use client';

import { Icon } from '@iconify/react';
import { ChevronUp, CloudDownload, Lightbulb, Printer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import LogoWhite from '@/assets/Logo.png';
import Logo from '@/assets/Logo2.png';
import { Footer } from '@/components/footer';
import { MenuFixed } from '@/components/menuFixed';
import { ScrollToTopButton } from '@/components/scrollToTopButton';
import { ToggleFontSizeBtn } from '@/components/ToggleFontSizeBtn/ToggleFontSizeBtn';
import { ToggleThemeBtn } from '@/components/ToogleThemeBtn/toggleThemeBtn';

import { useTheme } from '../context/ThemeContext';
import { ClientViewProps } from '../types/MaterialTypes';
import { cleanHtml } from '../utils/cleanHTML';
import { handlePrint } from '../utils/helpers';
import { MenusConteudo } from '@/components/menusConteudo';

export default function QuestoesView({ apostila, tag }: ClientViewProps) {
  const { theme } = useTheme();
  const contentTitles = useMemo(() => {
    return (
      apostila?.reflective_questions?.map((questao) => ({
        id: questao.id,
        title: `Questão: ${questao.id}`,
      })) || []
    );
  }, [apostila?.reflective_questions]);

  const sectionsRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setActiveSection(id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40% 0px',
        threshold: 0,
      }
    );

    contentTitles.forEach((questao) => {
      const ref = sectionsRefs.current[questao.id];
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [contentTitles]);


  return (
    <>
      <a
        href="#mainContent"
        className="absolute left-[-999px] top-[-999px] z-50 bg-white p-2 text-sm text-black focus:left-2 focus:top-2"
      >
        Ir para o conteúdo
      </a>

      <main className="flex justify-between h-full w-full flex-col min-h-[100vh]">
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
              {/* Linha: Nome do Curso + botões */}
              <div className="md:mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="md:text-sm text-[0.8rem] roboto subtitle-main">
                  {apostila?.course?.data?.attributes?.Nome || ''}
                </div>
              </div>

              <div className="flex md:pb-1 mb-4 flex-col md:flex-row md:items-center md:justify-between">
                <h2 className="my-3 text-[1.65rem] font-bold md:text-[37px] title-red nunito">
                  {apostila?.unit_name}
                  : Questões Reflexivas
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

        <div className="flex-1 my-0 mx-auto max-w-[2000px] pb-[3.5rem] md:px-[3rem] flex w-full flex-row items-start justify-center">
          {contentTitles.length > 0 && (
            <aside
              className="hidden w-60 bg-gray-50 md:block"
              aria-label="Navegação do Conteúdo"
            >
              <nav className="sticky top-0 h-auto overflow-auto p-4">
                <h2 className="mb-2 md:text-2xl text-lg font-semibold text-red-600 nunito">
                  Navegação
                </h2>
                <ul className="space-y-1 text-[15px]">
                  {contentTitles.map((section, index) => {
                    const isActive = activeSection === section.id;
                    return (
                      <li key={section.id}>
                        <a
                          href={`#section-${section.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.querySelector(
                              `[data-id="${section.id}"]`
                            );
                            if (element) {
                              element.scrollIntoView({
                                behavior: 'smooth',
                              });
                            }
                          }}
                          className={`block rounded px-2 py-4 transition ${
                            isActive
                              ? 'bg-red-100 font-medium text-red-800'
                              : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                          }`}
                        >
                          Questão: {index + 1}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>
          )}

          <div className="m-0 flex w-full flex-col ">
            <div className="flex flex-1 items-start justify-center text-center text-[18px] md:text-[20px] px-4 mb-1 md:mb-5">
              <p
                className="descParagrah"
                style={{ color: 'rgb(124, 122, 128)' }}
              >
                Leia, pense e responda algumas perguntas importantes sobre o
                tema desta unidade. Se necessário, retome o conteúdo ou procure
                ajuda do professor/tutor.
              </p>
            </div>

            <div className="mt-5 pb-10 text-[18px] md:text-[20px] leading-8 text-justify px-5 md:px-12">
              <div className="mt-5" />

              {apostila?.reflective_questions.map((questao, index) => (
                <div
                  className="py-7 mb-5"
                  id={`section-${questao.id}`}
                  key={questao.id}
                  data-id={questao.id}
                  ref={(el) => {
                    sectionsRefs.current[questao.id] = el;
                  }}
                >
                  <h2 className="titleMaterial nunito text-[29px] mb-2 text-2xl font-bold uppercase text-red-600">
                    Questão{' '}
                    <span className="span-accordion-circle">{index+1}</span>
                  </h2>
                  <p>{cleanHtml(questao.body_text).slice(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

       <MenusConteudo tag={tag} hiddenCard='questoes'/>

        <Footer />

        <ScrollToTopButton />
      </main>
    </>
  );
}
