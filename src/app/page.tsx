"use client";
import { DefaultLayout } from "@/components/theme/defaultPageLayout";
import { useRef, useState } from "react";
import { BsMailboxFlag } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
import Image from "next/image";
import TeamImg from "../../public/team.svg";
import Moto from "../../public/delivery.svg";

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
    <div className="flex flex-col">
      <main className="overflow-hidden">
        <div className="flex justify-center bg-custom-radial">
          <DefaultLayout className="flex min-h-[90vh] items-center justify-center gap-3 lg:gap-10">
            <div className="flex flex-col gap-6 lg:gap-28">
              <p className="text-2xl text-white">
                OI, EU SOU O HÍTALO RODRIGUES
              </p>
              <div className="animate-text-side-left">
                <nav className="relative flex flex-row items-center gap-7">
                  <h1 className="text-4xl font-bold text-white lg:text-[10rem]">
                    REACT
                  </h1>{" "}
                  <div className="group">
                    <a
                      href="https://github.com/Hzimr"
                      target="_blank"
                      rel="noreferrer"
                      className="relative pt-4 text-white group-hover:bottom-2 group-hover:text-amber-200"
                      title="Github"
                    >
                      <FaGithub className="size-10 lg:size-16" />
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
                      <FaLinkedinIn className="size-10 lg:size-16" />
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
                      <LuNewspaper className="size-10 lg:size-16" />
                    </a>
                  </div>
                </nav>
              </div>
              <h1 className="animate-text-side-right text-4xl font-bold text-white lg:text-[10rem]">
                DEVELOPER
              </h1>
            </div>
            <section className="mt-6 px-12 text-center">
              <p className="text-xl text-white lg:text-2xl">
                TENHO 29 ANOS POSSUO MAIS DE 2 ANOS DE EXPERIÊNCIA NA ÁREA DE
                DESENVOLVIMENTO.
              </p>
              <p className="text-xl text-white lg:text-2xl">
                {" "}
                TAMBÉM POSSUO CAPACIDADE DE ATUAR NAS ÁREAS BANCÁRIAS E DE
                ATENDIMENTO AO CLIENTE.
              </p>
            </section>
            <ContactMe />
          </DefaultLayout>
        </div>
      </main>
      <div className="bg-custom-blue flex justify-center">
        <DefaultLayout className="flex w-full gap-3 ">
          <div className="flex w-full flex-col items-center p-10 lg:flex-row">
            {" "}
            <div className="flex flex-col gap-4">
              <h2 className="text-#1C5196 text-2xl font-bold">Habilidades</h2>
              <ul className="flex list-disc flex-col gap-2 pt-3 text-xl font-bold text-[#1C5196]">
                <li>Experiência e afinidade com Tecnologias</li>
                <li>Capacidade de Atendimento ao Público</li>
                <li>Bom ouvinte</li>
                <li>Habilidade com matemática</li>
                <li>Habilidade com finanças</li>
                <li>Bom controle e equilíbrio emocional</li>
                <li>Resistência a Frustação</li>
                <li>Boa capacidade de comunicação</li>
                <li>Bom trabalho em equipe</li>
                <li>Entusiasmado</li>
                <li>Empático</li>
                <li>Pontual e Organizado</li>
                <li>Disponibilidade de fazer viagens</li>
              </ul>
            </div>
            <Image src={TeamImg} alt="" width="580" height="420" />
          </div>
        </DefaultLayout>
      </div>
      <div className="bg-custom-blue flex justify-center">
        <DefaultLayout className="flex h-[40vh] items-center justify-center gap-3 ">
          <h2 className="text-2xl font-bold text-white">Projetos</h2>
        </DefaultLayout>
      </div>
      {/* seção disponibilidade para deslocamento */}
      {/* <div className="bg-custom-green flex justify-center">
        <DefaultLayout className="flex items-center justify-center gap-3 py-16 ">
          <h2 className="text-2xl font-bold text-[#536374]">
            Disponibilidade para deslocamento
          </h2>
          <Image src={Moto} alt="" width="400" height="320" />
          <section className="text-2xl font-bold text-[#536374]">
            Habilitação AB e EAR
          </section>
        </DefaultLayout>
      </div> */}
      <footer className="text-#1C5196 flex flex-col items-center bg-teal-100 font-semibold">
        <a
          className="hover:opacity-50"
          href="https://www.linkedin.com/in/hitalorodrigues/"
        >
          &copy; Desenvolvido por Hítalo Rodrigues de Oliveira
        </a>
        <a className="hover:opacity-50" href="https://storyset.com">
          &copy; illustrations by Storyset
        </a>
      </footer>
    </div>
  );
}
