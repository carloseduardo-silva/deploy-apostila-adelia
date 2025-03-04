"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import {
  ChevronUp,
  CloudDownload,
  Lightbulb,
  Printer,
  Sparkles,
} from "lucide-react";

import { Icon } from "@iconify/react";

import Link from "next/link";

import { Footer } from "@/components/footer";
import { CodeBlock } from "@/components/codeBlock";

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

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export default function SummaryView({ apostila, id }: ClientViewProps) {

  const {theme} = useTheme();

  return (
    <>
      {/* Link de pular diretamente para o conteúdo principal (acessibilidade) */}
      <a
        href="#mainContent"
        className="absolute left-[-999px] top-[-999px] z-50 bg-white p-2 text-sm text-black focus:left-2 focus:top-2"
      >
        Ir para o conteúdo
      </a>

      <main className="flex h-full w-full flex-col min-h-[100vh]">
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
              <h2 className="my-3 text-[1.65rem] font-bold md:text-[37px] title-red nunito">
                {apostila?.unit_name.substring(apostila?.unit_name.indexOf("-") + 1) }: Resumos
              </h2>
              
              <Link className="hidden md:flex" href={`/apostila/${id}/`}> <Icon style={{color:"#AAB2C8", fontSize:"25px", marginBottom:"41px"}} className="iconHover" icon={"akar-icons:arrow-back"}/></Link>
            </div>
            

          </div>
        </div>
        </header>

        {/* Conteúdo*/}
          <div className="flex-1 my-0 mx-auto flex w-full flex-col pb-[5rem] px-5 md:px-[3rem] max-w-[2000px] leading-9 text-[18px]">
            { apostila?.summary?.map((item, index) => (
              <section key={index} className="summaryCard mb-6 py-[1rem] px-[2rem] rounded-[25px] max-w-[700px] mx-auto md:mx-0 bg-[#ffd1d187]">
                <div dangerouslySetInnerHTML={{ __html: item.body_text }} />
              </section>
            ))}

            
          </div>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </main>
    </>
  );
}
