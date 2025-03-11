"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import {
  ChevronUp,
  CloudDownload,
  Lightbulb,
  Printer,
} from "lucide-react";

import { Icon } from "@iconify/react";

import Link from "next/link";

import { Footer } from "@/components/footer";


import Logo from "@/assets/Logo2.png";
import LogoWhite from "@/assets/Logo.png"

import { Roboto, Nunito } from 'next/font/google';
import { ToggleThemeBtn } from "@/components/ToogleThemeBtn/toggleThemeBtn";
import { useTheme } from "../context/ThemeContext";
import { ToggleFontSizeBtn } from "@/components/ToggleFontSizeBtn/ToggleFontSizeBtn";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '800'],
});


/* ------------------------------------------------------------------
  Types
------------------------------------------------------------------ */

export interface ClientViewProps {
  apostila: Apostila;
  id:string
}

export interface Apostila {
  tags: any
  video_transcript: any
  createdAt: string
  updatedAt: string
  publishedAt: string
  unit_name: string
  learning_objectives: string
  specific_objectives: string
  audio_script: any
  course: Course
  subject: Subject
  content_blocks: ContentBlock[]
  mind_map: MindMap
  additional_content: AdditionalContent[]
  reflective_questions: ReflectiveQuestion[]
  summary: Summary[]
}

export interface Course {
  data: Data
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface Attributes {
  Nome: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Subject {
  data: Data2
}

export interface Data2 {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  Nome: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface ContentBlock {
  id: number
  body_text: string
  title: string
  type: string
}

export interface MindMap {
  data: any
}

export interface AdditionalContent {
  id: number
  body_text: string
  title: string
  type: string
}

export interface ReflectiveQuestion {
  id: number
  body_text: string
}

export interface Summary {
  id: number
  title: string
  body_text: string
}

/* ------------------------------------------------------------------
   Helper: Converts "raw HTML" (for code blocks) to a string
------------------------------------------------------------------ */

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
     <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-50 rounded-full bg-red-600 p-3 shadow-lg transition hover:hover:bg-red-700"
          aria-label="Voltar ao topo"
          
        >
          <ChevronUp className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
  );
}

function menuFixed(){
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return true;

  

}

function handlePrint(){
  window.print()
}

function cleanHtml(text: string | null | undefined): string {
  if (!text) return "";
  return text
    .replace(/<\/?(ul|li|p|div)>/gi, "\n") // Remove <ul>, <li>, <p>, <div>
    .replace(/<br\s*\/?>/gi, "\n") // Converte <br> em quebra de linha
    .replace(/<[^>]+>/g, "") // Remove qualquer outra tag HTML
    .trim();
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export default function QuestoesView({ apostila, id }: ClientViewProps) {
 

  const contentTitles = useMemo(() => {
    return (
      apostila?.reflective_questions?.map((questao) => ({
        id: questao.id,
        title: `Questão: ${questao.id}`,
      })) || []
    );
  }, [apostila?.reflective_questions]);

  /* ---------------------------------------------------------------
     Intersection Observer to highlight active section
  --------------------------------------------------------------- */
  const sectionsRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const {theme} = useTheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setActiveSection(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
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
      {/* Link de pular diretamente para o conteúdo principal (acessibilidade) */}
      <a
        href="#mainContent"
        className="absolute left-[-999px] top-[-999px] z-50 bg-white p-2 text-sm text-black focus:left-2 focus:top-2"
      >
        Ir para o conteúdo
      </a>

      <main className="flex justify-between h-full w-full flex-col min-h-[100vh]">

        {/* ----------------------------------------------------------------
            Cabeçalho (fundo + overlay + logo à esquerda + objetivos)
        ---------------------------------------------------------------- */}
        
        <header className="relative flex  w-full flex-col text-black mb-1">

            {/* Conteúdo do header */}
            <div className="relative z-10 flex h-full flex-col p-4 md:py-[2rem] md:px-[4rem]  mx-auto w-full max-w-[2000px]">
            
            {/* Logo à esquerda */}
              <div id="headerLogo" className="flex items-center p-2 mb-4 flex-col md:flex-row md:items-center md:justify-between">
                <a href={`/apostila/${id}`}>
                  <Image
                    src={theme == "dark" ? LogoWhite : Logo }
                    alt="logo do curso"
                    width={120}
                    aria-hidden="true"
                  />
                </a>
                
                  {
                      menuFixed() ? 
                      (<div className="mt-[2rem] gap-3 md:gap-2 flex flex-row space-x-4 md:mt-0" >
                        <ToggleFontSizeBtn/>
                       
                        <button
                          type="button"
                          className="flex cursor-pointer items-center"
                          aria-label="Avaliar conteúdo"
                        >
                          <Lightbulb
                            className="mr-1"
                            width={15}
                            aria-hidden="true"
                            
                          />
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
                          <Printer
                            className="mr-1"
                            width={15}
                            aria-hidden="true"
                          />
                          <span className="text-sm">Imprimir</span>
                        </button>
                        <ToggleThemeBtn/>
                      </div>): ( <div id="menuFixedMobile" className="md:hidden z-[10] fixed top-[0] flex flex-row items-center justify-center space-x-4 mt-0 p-4 gap-4 bg-white w-full" >
                      <ToggleFontSizeBtn/>
                     
                      <button
                        type="button"
                        className="flex cursor-pointer items-center"
                        aria-label="Avaliar conteúdo"
                      >
                        <Lightbulb
                          className="mr-1"
                          width={15}
                          aria-hidden="true"
                          
                        />
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
                        <Printer
                          className="mr-1"
                          width={15}
                          aria-hidden="true"
                        />
                        <span className="text-sm">Imprimir</span>
                      </button>
                      <ToggleThemeBtn/>
                    </div>)
                  }
                  
              </div>

              {/* Título e Botões */}
              <div className="mt-3 flex w-full flex-col md:mt-5">
                {/* Linha: Nome do Curso + botões */}
                <div className="md:mb-2 flex flex-col md:mb-0 md:flex-row md:items-center md:justify-between">
                  <div className="md:text-sm text-[0.8rem] roboto subtitle-main">
                    {apostila?.course?.data?.attributes?.Nome || ""}
                  </div>
    
                </div>

                {/* Nome da Unidade */}
                <div className="flex md:pb-1 mb-4 flex-col md:flex-row md:items-center md:justify-between" >
                  <h2 className={nunito.className + " my-3 text-[1.65rem] font-bold md:text-[37px] title-red nunito"}>
                    {apostila?.unit_name.substring(apostila?.unit_name.indexOf("-") + 1) }: Questões Reflexivas
                  </h2>
                  
                  <Link className="hidden md:flex" href={`/apostila/${id}/`}> <Icon style={{color:"#AAB2C8", fontSize:"25px", marginBottom:"41px"}} className="iconHover" icon={"akar-icons:arrow-back"}/></Link>
                </div>
                

              </div>
            </div>
        </header>

        {/* ----------------------------------------------------------------
           Conteúdo
        ---------------------------------------------------------------- */}
        <div className="flex-1 my-0 mx-auto max-w-[2000px] pb-[5rem] md:px-[3rem] flex w-full flex-row items-start justify-center">

            {/* Mostrar apenas aside nav em telas médias ou maiores */}
            {contentTitles.length > 0 && (
                <aside
                  className="hidden w-60 border-r border-gray-200 bg-gray-50 md:block"
                  aria-label="Navegação do Conteúdo"
                >
                  <nav className="sticky top-0 h-screen overflow-auto p-4">
                    <h2 className="mb-2 md:text-2xl text-lg font-semibold text-red-600 nunito">
                      Navegação
                    </h2>
                    <ul className="space-y-1 text-[15px]">
                      {contentTitles.map((section) => {
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
                                    behavior: "smooth",
                                  });
                                }
                              }}
                              className={`block rounded px-2 py-4 transition ${
                                isActive
                                  ? "bg-red-100 font-medium text-red-800"
                                  : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                              }`}
                            >
                              {section.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </aside>
              )}

            <div  className="m-0 flex w-full flex-col ">

              <div className="flex flex-1 items-start justify-center text-center text-[17px] px-4 mb-1 md:mb-5">
                 <p className="descParagrah" style={{color:"rgb(124, 122, 128)"}}>
                  Leia, pense e responda algumas perguntas importantes sobre o
                  tema desta unidade. Se necessário, retome o conteúdo ou procure
                  ajuda do professor/tutor.
                </p>
              </div>

              <div className="mt-5 pb-10 text-[18px] leading-8 text-justify px-5 md:px-12">
              
                <div className="mt-5"/>

                {apostila?.reflective_questions.map((questao) =>
                  <div className="py-7 mb-5" id={`section-${questao.id}`} key={questao.id} data-id={questao.id}
                  ref={(el) => {
                    sectionsRefs.current[questao.id] = el;
                  }}>
                    <h2 className="titleMaterial nunito text-[29px] mb-2 text-2xl font-bold uppercase text-red-600">Questão <span className="span-accordion-circle">{questao.id}</span></h2>
                    <p >{cleanHtml(questao.body_text)}</p>
                  </div>
                )}
              </div>

            </div>
        </div>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </main>
    </>
  );
}
