import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import ProjectCard from './ProjectCard';
import VideoBg from './VideoBg';
import certBadges from '../assets/certBadges.png';
import Consultant from '../assets/Consultant.svg';
import IBMLogo from '../assets/IBMLogo.svg';
import targetLogo from '../assets/targetLogo.svg';
import imLogo from '../assets/imLogo.svg';
import ctLogo from '../assets/ctLogo.svg';
import qhLogo from '../assets/qhLogo.svg';
import dbsLogo from '../assets/dbsLogo.svg';
import fireeyeLogo from '../assets/fireeyeLogo.svg';
import mcafeeLogo from '../assets/mcafeeLogo.svg';
import aztecLogo from '../assets/aztecLogo.svg';

function Home() {
  const navigate = useNavigate();

    return (
      <>

        <VideoBg />

        <div className="flex flex-col items-center relative transition-all duration-200 ease-in-out">
          <div className="text-white flex flex-col self-auto w-[1024px] pt-60 h-auto static">
            
            <HeroSection />
            
            <div className="mt-20 w-full py-16 flex flex-col items-center justify-center bg-turquoise-400">
              <div className="mb-14">
                <img
                  src={certBadges}
                  className="w-2xl"
                  alt="Srikumar's Certificates"
                />
              </div>

              <div className="flex flex-row w-full px-16">

                <ProjectCard />
                

                <div className="flex flex-col size-[45%] rounded-lg p-6 border border-[solid] border-turquoise-300 border-opacity-25">
                  <div className="w-auto">
                    <h2 className="flex flex-row text-lg font-semibold leading-tight text-turquoise-900">
                      <svg
                        className="h-5 w-5 mr-2 fill-turquoise-800 group-hover:fill-turquoise-500 transition"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                      </svg>
                      Work
                    </h2>
                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={Consultant}
                            className="w-8 h-8"
                            alt="Independent Consultant Work"
                          />
                        </div>
                        <div className="text-[12px] w-[180px]">
                          <p className="font-semibold">
                            Independent Consultant
                          </p>
                          <p className="text-turquoise-800">
                            UX Design Consultant
                          </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[250px] align-text-bottom text-right">
                        Oct 2024 to Present
                      </div>
                    </div>

                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={IBMLogo}
                            className="w-8 h-8"
                            alt="IBM Logo"
                          />
                        </div>
                        <div className="text-[12px] w-[180px]">
                          <p className="font-semibold">IBM India Pvt Ltd</p>
                          <p className="text-turquoise-800">
                            Senior Design Manager
                          </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[200px] align-text-bottom text-right">
                        Apr 2024 to Oct 2024
                      </div>
                    </div>

                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={Consultant}
                            className="w-8 h-8"
                            alt="Independent Consultant Work"
                          />
                        </div>
                        <div className="text-[12px] w-[180px]">
                          <p className="font-semibold">
                            Independent Consultant
                          </p>
                          <p className="text-turquoise-800">
                            UX Design Consultant
                          </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[250px] align-text-bottom text-right">
                        May 2023 to Mar 2024
                      </div>
                    </div>

                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={targetLogo}
                            className="w-8 h-7"
                            alt="Target Logo"
                          />
                        </div>
                        <div className="text-[12px] w-[180px]">
                          <p className="font-semibold">Target Corp</p>
                          <p className="text-turquoise-800">
                            Senior UX Manager
                          </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[200px] align-text-bottom text-right">
                        Aug 2022 to Apr 2023
                      </div>
                    </div>

                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={imLogo}
                            className="w-8 h-7"
                            alt="Innominds Logo"
                          />
                        </div>
                        <div className="text-[12px] w-[200px]">
                          <p className="font-semibold">
                            Innominds Software Pvt Ltd
                          </p>
                          <p className="text-turquoise-800">
                            Senior UX Manager
                          </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[200px] align-text-bottom text-right">
                        Sep 2021 to Jul 2022
                      </div>
                    </div>

                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={Consultant}
                            className="w-8 h-8"
                            alt="Independent Consultant Work"
                          />
                        </div>
                        <div className="text-[12px] w-[180px]">
                          <p className="font-semibold">Stealth Startups</p>
                          <p className="text-turquoise-800">
                            UX Design Consultant
                          </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[250px] align-text-bottom text-right">
                        Mar 2020 to Sep 2021
                      </div>
                    </div>

                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={ctLogo}
                            className="w-8 h-8"
                            alt="ColorTokens Logo"
                          />
                        </div>
                        <div className="text-[12px] w-[180px]">
                          <p className="font-semibold">ColorTokens</p>
                          <p className="text-turquoise-800">
                            Senior UX Architect{" "}
                          </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[250px] align-text-bottom text-right">
                        Mar 2018 to Mar 2020
                      </div>
                    </div>

                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={qhLogo}
                            className="w-8 h-8"
                            alt="ColorTokens Logo"
                          />
                        </div>
                        <div className="text-[12px] w-[180px]">
                          <p className="font-semibold">
                            Quick Heal Technologies
                          </p>
                          <p className="text-turquoise-800">
                            Senior UX Manager
                          </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[250px] align-text-bottom text-right">
                        Sep 2016 to Mar 2018
                      </div>
                    </div>

                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={dbsLogo}
                            className="w-8 h-8"
                            alt="ColorTokens Logo"
                          />
                        </div>
                        <div className="text-[12px] w-[180px]">
                          <p className="font-semibold">DBS Bank Singapore</p>
                          <p className="text-turquoise-800">
                            UI UX Tech Lead Consultant
                          </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[250px] align-text-bottom text-right">
                        Aug 2015 to Aug 2016
                      </div>
                    </div>

                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={fireeyeLogo}
                            className="w-8 h-8"
                            alt="ColorTokens Logo"
                          />
                        </div>
                        <div className="text-[12px] w-[180px]">
                          <p className="font-semibold">FireEye</p>
                          <p className="text-turquoise-800">UI UX Manager </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[250px] align-text-bottom text-right">
                        Jan 2015 to May 2015
                      </div>
                    </div>

                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={mcafeeLogo}
                            className="w-8 h-8"
                            alt="ColorTokens Logo"
                          />
                        </div>
                        <div className="text-[12px] w-[180px]">
                          <p className="font-semibold">McAfee</p>
                          <p className="text-turquoise-800">UI UX Manager </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[250px] align-text-bottom text-right">
                        May 2006 to Jan 2015
                      </div>
                    </div>

                    <div className="flex flex-row m-auto mt-6 items-center align-middle">
                      <div className="flex flex-row text-turquoise-900 text-[13px] font-medium m-auto mr-4 items-center align-middle">
                        <div className="mr-2 items-center align-middle">
                          <img
                            src={aztecLogo}
                            className="w-8 h-8"
                            alt="ColorTokens Logo"
                          />
                        </div>
                        <div className="text-[12px] w-[180px]">
                          <p className="font-semibold">AZTEC Software</p>
                          <p className="text-turquoise-800">
                            Senior UI Specialist
                          </p>
                        </div>
                      </div>
                      <div className="text-turquoise-800 mt-1 leading-tight text-[11px] w-[250px] align-text-bottom text-right">
                        Aug 2005 to May 2006
                      </div>
                    </div>

                    <a
                      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-turquoise-200 font-medium text-turquoise-800  hover:text-turquoise-900 hover:bg-turquoise-100 group mt-6 w-full"
                      href="https://www.dropbox.com/scl/fi/nkq0e28tzyotnzwdglgpg/Srikumar-Krishnan-Kutty-Resume.docx?rlkey=ek3mdehpjyx2jyyj3lvjgzqyk&e=1&st=dadeqmjx&dl=0"
                      target="_blank"
                    >
                      Download CV
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 stroke-turquoise-700 transition group-hover:stroke-turquoise-900"
                      >
                        <path
                          d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-18 flex flex-col items-center justify-center text-[12px] text-turquoise-500 bg-turquoise-900 font">
              © 2025 srikumar.design
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;

