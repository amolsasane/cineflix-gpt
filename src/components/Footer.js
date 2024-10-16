import React from "react";
import logoImg from "../utils/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDev,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-9">
      <div className="lg:px-10">
        <hr className="h-px my-6 lg:mx-auto bg-zinc-600 border-none" />
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-2/5 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left">
            <div className="pl-4 lg:pl-10">
              <img
                className="w-[10rem] mx-auto lg:mx-0"
                src={logoImg}
                alt="logo"
              />

              <h1 className="text-white">
                DEVELOPED BY{" "}
                <span className="inline-flex">
                  <a
                    href="https://amolsasane.netlify.app/"
                    className="block mt-2 text-sm hover:underline hover:font-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    AMOL SASANE
                  </a>
                </span>
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                Connect with me and find my corner of web development. Find me
                below!
              </p>

              <div className="flex justify-center lg:justify-start mt-3 -mx-2 text-white text-2xl">
                <a
                  href="https://www.linkedin.com/in/amolsasane"
                  className="mx-2 hover:opacity-75"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href="https://github.com/amolsasane"
                  className="mx-2 hover:opacity-75"
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href="https://dev.to/amolsasane_"
                  className="mx-2 hover:opacity-75"
                  aria-label="DEV"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faDev} />
                </a>

                <a
                  href="https://twitter.com/amolsasane_"
                  className="mx-2 hover:opacity-75"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 lg:pt-5">
            <div className="grid grid-cols-1 gap-6 text-center md:ml-[7rem] sm:ml-[10rem] lg:ml-0 sm:text-left sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 lg:mt-0">
              <div>
                <h3 className="text-white font-bold uppercase">About</h3>
                <a
                  href="https://amolsasane.netlify.app/"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
                <a
                  href="https://www.linkedin.com/in/amolsasane/overlay/1729061869895/single-media-viewer/?profileId=ACoAAC5CvzcB1oXHxIlPZb02JT9UDziLWKqvFug"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
                <a
                  href="https://amolsasane.netlify.app/about"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  About Me
                </a>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase">Projects</h3>
                <a
                  href="https://foodexpresss.netlify.app/"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Food Express
                </a>
                <a
                  href="https://bookwiseadvisor.netlify.app/"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Adviser
                </a>
                <a
                  href="https://emojipediainterpreter.netlify.app/"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Emojipedia
                </a>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase">Blogs</h3>
                <a
                  href="https://dev.to/amolsasane_/understanding-css-box-model-1ap"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  CSS Box Model
                </a>
                <a
                  href="https://dev.to/amolsasane_/color-psychology-in-web-design-4cmf"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Color Psychology
                </a>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase">Contact</h3>
                <span className="block mt-2 text-sm hover:text-white">
                  +917249498769
                </span>
                <span className="block mt-2 text-sm hover:text-white">
                  amolsasane001@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-zinc-600 border-none" />

        <div>
          <p className="text-center text-white text-sm lg:text-base">
            © CineflixGPT 2024 - All rights reserved |{" "}
            <span className="inline-flex">
              <a
                href="https://amolsasane.netlify.app/"
                className="block mt-2 hover:underline hover:font-bold"
                target="_blank"
                rel="noreferrer"
              >
                Amol Sasane
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
