import React from 'react'
import { Icon } from '@iconify/react';

export interface menusConteudoProps{
    hiddenCard: string,
    tag:string
}

export const MenusConteudo : React.FC<menusConteudoProps> = ({hiddenCard, tag}) => {
  return (
    <div id='menusContainer' className='flex flex-col md:px-3 py-5'>
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
                  className={hiddenCard == "apostila" ? "hidden text-decoration-none" : "text-decoration-none"}
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
                  className={hiddenCard == "questoes" ? "hidden text-decoration-none" : "text-decoration-none"}
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
                  className={hiddenCard == "complementar" ? "hidden text-decoration-none" : "text-decoration-none"}
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
                  className={hiddenCard == "resumos" ? "hidden text-decoration-none" : "text-decoration-none"}
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
                  className={hiddenCard == "mapa-mental" ? "hidden text-decoration-none" : "text-decoration-none"}
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
    </div>
  )
}
