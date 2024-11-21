"use client";
import { DefaultLayout } from "@/components/theme/defaultPageLayout";
import { useRef, useState } from "react";
import { BsMailboxFlag } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";

const ContactMe = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const emailRef = useRef<HTMLSpanElement>(null);

  const handleEmailCopy = () => {
    if (emailRef.current) {
      const email = emailRef.current.textContent;
      if (email) {
        navigator.clipboard
          .writeText(email)
          .then(() => {
            setEmailCopied(true);
            emailRef.current?.classList.add("copied");

            setTimeout(() => {
              setEmailCopied(false);
              emailRef.current?.classList.remove("copied");
            }, 2000);
          })
          .catch((err) => {
            console.error("Failed to copy: ", err);
          });
      }
    }
  };

  return (
    <section className="flex flex-col gap-2 pt-4 text-white">
      <div className="flex flex-row items-center justify-center gap-3 ">
        <div>
          <BsMailboxFlag size={40} />
        </div>
        <span ref={emailRef}>hitalorodriguesdev@gmail.com</span>
      </div>
      <div className="flex flex-col items-center ">
        <button
          onClick={handleEmailCopy}
          className="w-full animate-pulse rounded-md bg-[##452E7A] p-1 text-[#FFC745] hover:cursor-pointer"
        >
          {emailCopied && (
            <span className="copy-notification text-[#12FF39]">
              E-mail copiado!
            </span>
          )}
          {!emailCopied && <span>Click aqui para copiar o e-mail</span>}
        </button>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <main className="w-screen overflow-hidden">
        <div className="flex justify-center bg-custom-radial">
          <DefaultLayout className="flex items-center justify-center gap-3">
            <div className="">
              <p className="text-xl text-white">
                OI, EU SOU O HÍTALO RODRIGUES
              </p>

              <div className="animate-text-side-left">
                <nav className="relative flex flex-row items-center gap-7">
                  <h1 className="text-[10rem] font-bold text-white">REACT</h1>{" "}
                  <div className="group">
                    <a
                      href="https://github.com/Hzimr"
                      target="_blank"
                      rel="noreferrer"
                      className="relative pt-4 text-white group-hover:bottom-2 group-hover:text-amber-200"
                      title="Github"
                    >
                      <FaGithub size={64} />
                    </a>
                  </div>
                  <div className="group">
                    <a
                      href="https://www.linkedin.com/in/hitalorodrigues/"
                      target="_blank"
                      rel="noreferrer"
                      className="relative pt-4 text-white group-hover:bottom-2 group-hover:text-amber-200"
                      title="LinkedIn"
                    >
                      <FaLinkedinIn size={64} />
                    </a>
                  </div>
                  <div className="group">
                    <a
                      href="/pdf.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="relative pt-4 text-white group-hover:bottom-2 group-hover:text-amber-200"
                      title="Currículo"
                    >
                      <LuNewspaper size={64} />
                    </a>
                  </div>
                </nav>
              </div>
              <h1 className="animate-text-side-right text-[10rem] font-bold text-white">
                DEVELOPER
              </h1>
            </div>
            <p className="text-white">
              TENHO 28 ANOS SOU DESENVOLVEDOR FRONTEND COM MAIS DE 1 ANOS DE
              EXPERIÊNCIA TRABALHANDO COMO DESENVOLDEDOR{" "}
            </p>
            <ContactMe />
          </DefaultLayout>
        </div>
        {/* <div className="flex w-screen bg-gradient-to-r from-[#161129] to-[#060F23]">
          <DefaultLayout>
            <div className="text-4xl text-white">
              Projetos que já desenvolvi
            </div>
          </DefaultLayout>
        </div> */}
      </main>
    </div>
  );
}
