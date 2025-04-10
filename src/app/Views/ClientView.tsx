"use client";

import { Icon } from "@iconify/react";
import { CloudDownload, Lightbulb, Minus, Printer } from "lucide-react";
import Image from "next/image";
import React from "react";

import LogoWhite from "@/assets/Logo.png";
import Logo from "@/assets/Logo2.png";
import { Footer } from "@/components/footer";
import { MenuFixed } from "@/components/menuFixed";
import { ScrollToTopButton } from "@/components/scrollToTopButton";
import { ToggleThemeBtn } from "@/components/ToogleThemeBtn/toggleThemeBtn";

import { useTheme } from "../context/ThemeContext";
import type { ClientViewProps } from "../types/MaterialTypes";
import { cleanHtml } from "../utils/cleanHTML";
import { handlePrint } from "../utils/helpers";

function toggleOpenCollapse(e: string) {
  if (e == "especificos") {
    if (
      document
        .querySelector("#accordion-open-body-3")
        ?.classList.contains("open")
    ) {
      document
        .querySelector("#accordion-open-body-3")
        ?.classList.remove("open");
      document
        .querySelector("#accordion-open-heading-3")
        ?.classList.remove("opened");
      document.querySelector("#accordion-open-body-3")?.classList.add("hidden");

      document.querySelector("#aprChevronIcon")?.classList.remove("hidden");
      document.querySelector("#aprMinusIcon")?.classList.add("hidden");
    }

    document
      .querySelector("#accordion-open-heading-1")
      ?.classList.add("opened");

    document
      .querySelector("#accordion-open-body-1")
      ?.classList.remove("hidden");
    document.querySelector("#accordion-open-body-1")?.classList.add("open");

    document.querySelector("#espChevronIcon")?.classList.add("hidden");
    document.querySelector("#espMinusIcon")?.classList.remove("hidden");
  } else {
    if (
      document
        .querySelector("#accordion-open-body-1")
        ?.classList.contains("open")
    ) {
      document.querySelector("#accordion-open-body-1")?.classList.add("hidden");
      document
        .querySelector("#accordion-open-body-1")
        ?.classList.remove("open");
      document
        .querySelector("#accordion-open-heading-1")
        ?.classList.remove("opened");

      document.querySelector("#espChevronIcon")?.classList.remove("hidden");
      document.querySelector("#espMinusIcon")?.classList.add("hidden");
    }

    document
      .querySelector("#accordion-open-heading-3")
      ?.classList.add("opened");

    document
      .querySelector("#accordion-open-body-3")
      ?.classList.remove("hidden");
    document.querySelector("#accordion-open-body-3")?.classList.add("open");

    document.querySelector("#aprChevronIcon")?.classList.add("hidden");
    document.querySelector("#aprMinusIcon")?.classList.remove("hidden");
  }
}

export default function ClientView({ apostila, tag }: ClientViewProps) {
  const { theme } = useTheme();
  return (
    <>
      <main className="flex h-full w-full flex-col">
        <header className="relative flex min-h-[420px]  w-full flex-col text-black">
          <div className="relative z-10 flex h-full flex-col p-4 md:py-[2rem] md:px-[4rem] mx-auto max-w-[1600px] w-full">
            <div
              id="headerLogo"
              className="flex items-center px-2 pb-2 pt-4 md:p-2 mb-4 flex-col md:flex-row md:items-center md:justify-between"
            >
              <a href={`/apostila/${tag}`}>
                <Image
                  src={theme == "dark" ? LogoWhite : Logo}
                  alt="logo do curso"
                  width={120}
                  aria-hidden="true"
                />
              </a>

              {MenuFixed() ? (
                <div className="mt-[2rem] gap-3 md:gap-2 flex flex-row space-x-4 md:mt-0">
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

            <div className="mt-2 flex w-full flex-col md:mt-5">
              <div className="mb-2 flex flex-col md:mb-0 md:flex-row md:items-center md:justify-between">
                <div className="md:text-sm text-[0.8rem] roboto subtitle-main md:mt-0 mt-2">
                  {apostila?.course?.data?.attributes?.Nome || ""}
                </div>
              </div>

              <h2 className="my-3 text-[1.65rem] font-bold md:text-[37px] title-red nunito">
                {apostila?.unit_name}
              </h2>

              <div className="mt-6 flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <div
                  className="w-full"
                  id="accordion-open"
                  data-accordion="open"
                >
                  <h2 id="accordion-open-heading-1" className="opened">
                    <button
                      onClick={() => toggleOpenCollapse("especificos")}
                      type="button"
                      className="flex items-center justify-between w-full md:p-8 py-6 px-4 font-medium rtl:text-right text-gray-500 border-b-0 border-gray-200   hover:bg-gray-100 dark:hover:bg-gray-800 md:gap-3 gap-1"
                      data-accordion-target="#accordion-open-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-open-body-1"
                    >
                      <span className="flex items-center md:text-2xl text-[1.2rem] nunito text-black font-bold">
                        <div className="accordion-circle"> 1 </div>
                        Objetivos Específicos
                      </span>
                      <Minus id="espMinusIcon" className="text-red-600" />
                      <svg
                        data-accordion-icon
                        id="espChevronIcon"
                        className="w-3 h-3 rotate-180 shrink-0 hidden"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-open-body-1"
                    className="open"
                    aria-labelledby="accordion-open-heading-1"
                  >
                    <div className="p-5  border-b-0 border-gray-200 dark:border-gray-700">
                      <div
                        id="specific_objectives_list"
                        className="mb-2 text-gray-800 md:pl-2 dark:text-gray-400"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: apostila?.specific_objectives,
                          }}
                          className="leading-7 md:text-[18px] md:ms-[20px]"
                        />
                      </div>
                    </div>
                  </div>

                  <h2 id="accordion-open-heading-3" className="">
                    <button
                      type="button"
                      onClick={() => toggleOpenCollapse("aprendizagem")}
                      className="flex items-center justify-between w-full md:p-8 py-6 px-4 font-medium rtl:text-right text-gray-500 border-y border-gray-200  hover:bg-gray-100 dark:hover:bg-gray-800 md:gap-3 gap-1"
                      data-accordion-target="#accordion-open-body-3"
                      aria-expanded="false"
                      aria-controls="accordion-open-body-3"
                    >
                      <span className="flex items-center md:text-2xl text-[1.1rem] nunito text-black font-bold">
                        <div className="accordion-circle"> 2 </div> Objetivos de
                        Aprendizagem
                      </span>
                      <Minus
                        id="aprMinusIcon"
                        className="hidden text-red-600"
                      />
                      <svg
                        data-accordion-icon
                        id="aprChevronIcon"
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-open-body-3"
                    className="hidden"
                    aria-labelledby="accordion-open-heading-3"
                  >
                    <div className="p-5  border-t-0 border-gray-200 dark:border-gray-700">
                      <div className="mb-2 mt-2 md:pl-2 text-gray-800 dark:text-gray-400">
                        {" "}
                        <div className="leading-7 md:text-[18px]">
                          {cleanHtml(apostila?.learning_objectives)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="separator"></div>

        <div className="m-0 flex w-full flex-col px-5">
          <div
            id="canais"
            className="row justify-content-center mb-5 mt-8 py-5"
          >
            <div className="text-center">
             
              <h3 className="subtitle nunito md:text-[35px] text-3xl">
                Acesse os Conteúdos Disponíveis
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 pt-6 pb-[8rem] md:pb-[10rem] max-w-[1350px] mx-auto">
          <a
            href={`/apostila/${tag}/conteudo`}
            className=" text-decoration-none"
          >
            <div className="card-page p-4 text-black rounded">
              <div className="m-0 px-0 pb-0 pt-[0.8rem] w-100 h-100">
                <div className="container-card flex flex-col sm:flex-row justify-center items-center gap-[5px]">
                  <div className="avatar-card mx-2">
                    <Icon
                      className="p-1 m-2 avatar-icon"
                      icon="tabler:book"
                    ></Icon>
                  </div>
                  <div className="w-100 ps-2">
                    <h3 className="text-center text-sm-start mt-1 text-[23px] nunito font-bold">
                      Apostila
                    </h3>
                  </div>
                </div>
                <p className="nunito text-gray-400 flex flex-col sm:flex-row justify-center items-center mt-1 ml-[.65rem] md:pt-[0.5rem] md:pb-0 pb-3 text-[14px] text-center">
                  (Material didático em texto)
                </p>
              </div>
            </div>
          </a>

          <a
            href={`/apostila/${tag}/questoes`}
            className=" text-decoration-none"
          >
            <div className="card-page p-4 text-black rounded">
              <div className="m-0 px-0 pb-0 pt-[0.8rem] w-100 h-100">
                <div className="container-card flex flex-col sm:flex-row justify-center items-center gap-[5px]">
                  <div className="avatar-card mx-2">
                    <Icon
                      className="p-1 m-2 avatar-icon"
                      icon="material-symbols:question-mark-rounded"
                    ></Icon>
                  </div>
                  <div className="w-100 ps-2">
                    <h3 className="text-center text-sm-start mt-1 text-[23px] nunito font-bold">
                      Questões
                    </h3>
                  </div>
                </div>
                <p className="nunito text-gray-400 flex flex-col sm:flex-row justify-center items-center mt-1 ml-2 md:pt-[0.5rem] md:pb-0 pb-3 text-[14px] text-center">
                  (Questões reflexivas sobre o material)
                </p>
              </div>
            </div>
          </a>

          <a
            href={`/apostila/${tag}/complementar`}
            className=" text-decoration-none"
          >
            <div className="card-page p-4 text-black rounded">
              <div className="m-0 px-0 pb-0 pt-[1rem] w-100 h-100">
                <div className="container-card flex flex-col sm:flex-row justify-center items-center gap-[5px]">
                  <div className="avatar-card mx-2">
                    <Icon
                      className="p-1 m-2 avatar-icon"
                      icon="lucide:plus"
                    ></Icon>
                  </div>
                  <div className="w-100 ps-2">
                    <h3 className="text-center text-sm-start mt-1 text-[22px] nunito font-bold">
                      Complementar
                    </h3>
                  </div>
                </div>
                <p className="nunito text-gray-400 flex flex-col sm:flex-row justify-center items-center mt-1 ml-2 md:pt-[0.5rem] md:pb-0 pb-3 text-[14px] text-center">
                  (Pesquisas, vídeos e extras sobre o <br /> material didático)
                </p>
              </div>
            </div>
          </a>

          <a
            href={`/apostila/${tag}/resumos`}
            className=" text-decoration-none"
          >
            <div className="card-page p-4 text-black rounded">
              <div className="m-0 px-0 pb-0 pt-[0.8rem] w-100 h-100">
                <div className="container-card flex flex-col sm:flex-row justify-center items-center gap-[5px]">
                  <div className="avatar-card mx-2">
                    <Icon
                      className="p-1 m-2 avatar-icon"
                      icon="iconoir:page-edit"
                    ></Icon>
                  </div>
                  <div className="w-100 ps-2">
                    <h3 className="text-center text-sm-start mt-1 text-[22px] nunito font-bold">
                      Resumos
                    </h3>
                  </div>
                </div>
                <p className="nunito text-gray-400 flex flex-col sm:flex-row justify-center items-center mt-1 ml-[.65rem] md:pt-[0.5rem] md:pb-0 pb-3 text-[14px] text-center">
                  (Resumo em audio e texto)
                </p>
              </div>
            </div>
          </a>

          <a
            href={`/apostila/${tag}/mapa-mental`}
            className=" text-decoration-none"
          >
            <div className="card-page p-4 text-black rounded">
              <div className="m-0 px-0 pb-0 pt-[0.8rem] w-100 h-100">
                <div className="container-card flex flex-col sm:flex-row justify-center items-center gap-[5px]">
                  <div className="avatar-card mx-2">
                    <Icon
                      className="p-1 m-2 avatar-icon"
                      icon="icon-park-outline:mind-mapping"
                    ></Icon>
                  </div>
                  <div className="w-100 ps-2">
                    <h3 className="text-center text-sm-start mt-1 text-[22px] nunito font-bold">
                      Mapa Mental
                    </h3>
                  </div>
                </div>
                <p className="nunito text-gray-400 flex flex-col sm:flex-row justify-center items-center mt-1 ml-[.75rem] md:pt-[0.5rem] md:pb-0 pb-3 text-[14px] text-center">
                  (Mapa mental em imagem)
                </p>
              </div>
            </div>
          </a>
        </div>

        <Footer />

        <ScrollToTopButton />
      </main>
    </>
  );
}
