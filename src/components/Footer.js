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
    <footer className="bg-black text-gray-400">
      <div className="container px-7 mx-auto py-9">
        <hr className="h-px my-6 bg-zinc-600 border-none" />
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="pl-20 mb-4">
              <img className="w-[10rem]" src={logoImg} alt="logoImg" />

              <h1 className="max-w-sm text-white">
                DEVELOPED BY{" "}
                <span className="inline-flex">
                  <a
                    href="https://amolsasane.netlify.app/"
                    className="block mt-2 text-sm hover:underline hover:font-bold"
                    target="_blank"
                  >
                    AMOL SASANE
                  </a>
                </span>
              </h1>
              <h1 className="max-w-sm mt-2 text-gray-400">
                Connect with me and find my corner of web development. Find me
                below!
              </h1>

              <div className="flex mt-3 -mx-2 text-white text-3xl">
                <a
                  href="https://www.linkedin.com/in/amolsasane"
                  className="mx-2 hover:opacity-50"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href="https://github.com/amolsasane"
                  className="mx-2 hover:opacity-50"
                  aria-label="Github"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href="https://dev.to/amolsasane_"
                  className="mx-2 hover:opacity-50"
                  aria-label="DEV"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faDev} />
                </a>

                <a
                  href="https://twitter.com/amolsasane_"
                  className="mx-2 hover:opacity-50"
                  aria-label="Twitter"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[2rem]">
              <div>
                <h3 className="text-white font-bold uppercase">About</h3>
                <a
                  href="https://amolsasane.netlify.app/"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                >
                  Portfolio
                </a>
                <a
                  href="https://www.linkedin.com/in/amolsasane/overlay/1716922022455/single-media-viewer/?profileId=ACoAAC5CvzcB1oXHxIlPZb02JT9UDziLWKqvFug"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                >
                  Resume
                </a>
                <a
                  href="https://amolsasane.netlify.app/about"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
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
                >
                  Food Express
                </a>
                <a
                  href="https://bookwiseadvisor.netlify.app/"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                >
                  Book Adviser
                </a>
                <a
                  href="https://emojipediainterpreter.netlify.app/"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
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
                >
                  CSS Box Model
                </a>
                <a
                  href="https://dev.to/amolsasane_/color-psychology-in-web-design-4cmf"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                >
                  Color Phychology
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
          <p className="text-center text-white">
            © CineflixGPT 2024 - All rights reserved |{" "}
            <span className="inline-flex">
              <a
                href="https://amolsasane.netlify.app/"
                className="block mt-2 text-sm hover:underline hover:font-bold"
                target="_blank"
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
