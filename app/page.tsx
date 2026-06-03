"use client";
import SkillsBadges from "@/utils/SkillsBadges";
import { useState } from "react";

export default function Home() {
  const images: string[] = [""];

  const cardColors = [
    "142, 249, 252",
    "142, 252, 157",
    "252, 252, 142",
    "204, 142, 252",
  ];

  const [paused, setPaused] = useState<boolean>(false);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      <main
        id="home"
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5  text-center sm:px-6 "
      >
        <div className="animate-[fadeUp_0.7s_ease_both]">
          <div className="mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full ring-4 ring-white shadow-xl sm:mb-6 sm:h-28 sm:w-28">
            <div className="flex h-full w-full items-center justify-center text-2xl font-bold bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-white sm:text-3xl">
              TN
            </div>
          </div>

          <p className="mb-3 text-base font-medium text-gray-600 dark:text-gray-300 sm:text-lg">
            Hola, soy Jose Velasco
          </p>

          <h1
            className="mx-auto mb-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-display), cursive" }}
          >
            Desarrollador full-stack
          </h1>

          <p className="semi'bold mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:mb-12 sm:text-xl">
            +1 año de experiencia. Ingeniero en sistemas Computacionales.
            Apasionado por la tecnología y el desarrollo de software. Siempre
            buscando aprender y mejorar mis habilidades.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#contacto"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-gray-700 active:scale-95 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 sm:w-auto"
            >
              contactame
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="/cv.pdf"
              download
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-gray-800 transition-all hover:scale-105 hover:border-gray-600 active:scale-95 dark:border-white/30 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              mi curriculum
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>

      <section id="sobre-mi" className="px-5 py-17 sm:px-10 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Sobre mí</h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Mi nombre es Jose Velasco y resido en Enseanada, Baja California.
          Desde niño me apasiona el mundo de la tecnología, lo que me llevó a
          estudiar ingeniería en sistemas computacionales.
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Mi objetivo es desarrollar soliciones de software innovadoras y
          eficientes que puedan marcar una diferencia en la vida de las
          personas. Me considero un aprendiz constante, siempre buscando nuevas
          tecnologías y metodologías para mejorar mis habilidades y
          conocimientos.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Algunas de mis habilidades son:
        </p>

        <div className="mt-4">
          <SkillsBadges
            only={[
              "Python",
              "JavaScript",
              "React",
              "Node.js",
              "Vue.js",
              "SQL",
              "Docker",
              "Git",
              "Tailwind CSS",
              "FastAPI",
              "JWT",
              "Nginx",
              "PostgreSQL",
              "Python",
              "Postman",
            ]}
          />
        </div>
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-semibold">Información personal</h3>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e] font-mono shadow-2xl">
            {/* HEADER */}
            <div className="border-b border-white/10 bg-[#2a2a2a] px-5 py-3">
              <p className="text-sm font-bold text-white">personal_info.sql</p>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-2 text-sm sm:text-base">
              {/* LEFT */}
              <div className="border-r border-white/10">
                <div className="border-b border-white/10 bg-[#252525] px-5 py-3 text-gray-400">
                  Campo
                </div>

                <div className="space-y-0">
                  <div className="bg-[#1e1e1e] px-5 py-3 text-white">
                    Nombre
                  </div>

                  <div className="bg-[#252525] px-5 py-3 text-white">Edad</div>

                  <div className="bg-[#1e1e1e] px-5 py-3 text-white">
                    Ubicación
                  </div>

                  <div className="bg-[#252525] px-5 py-3 text-white">
                    Idiomas
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <div className="border-b border-white/10 bg-[#252525] px-5 py-3 text-right text-gray-400">
                  Valor
                </div>

                <div className="space-y-0 text-right">
                  <div className="bg-[#1e1e1e] px-5 py-3 text-[#4ADE80]">
                    Jose Manuel Velasco Garcia
                  </div>

                  <div className="bg-[#252525] px-5 py-3 text-[#60A5FA]">
                    25 años
                  </div>

                  <div className="bg-[#1e1e1e] px-5 py-3 text-[#FACC15]">
                    Ensenada, México
                  </div>

                  <div className="bg-[#252525] px-5 py-3 text-[#C084FC]">
                    Español nativo / Inglés B1+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 space-y-8">
          {/* EDUCACION */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e] font-mono shadow-2xl">
            {/* HEADER */}
            <div className="border-b border-white/10 bg-[#2a2a2a] px-5 py-3">
              <p className="text-sm font-bold text-white">education.sql</p>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-2 text-sm sm:text-base">
              {/* LEFT */}
              <div className="border-r border-white/10">
                <div className="border-b border-white/10 bg-[#252525] px-5 py-3 text-gray-400">
                  Campo
                </div>

                <div>
                  <div className="bg-[#1e1e1e] px-5 py-3 text-white">
                    Carrera
                  </div>

                  <div className="bg-[#252525] px-5 py-3 text-white">
                    Institución
                  </div>

                  <div className="bg-[#1e1e1e] px-5 py-3 text-white">
                    Periodo
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <div className="border-b border-white/10 bg-[#252525] px-5 py-3 text-right text-gray-400">
                  Valor
                </div>

                <div className="text-right">
                  <div className="bg-[#1e1e1e] px-5 py-3 text-[#60A5FA]">
                    Ingeniería en Sistemas
                  </div>

                  <div className="bg-[#252525] px-5 py-3 text-[#4ADE80]">
                    Instituto Tecnológico de Ensenada
                  </div>

                  <div className="bg-[#1e1e1e] px-5 py-3 text-[#FACC15]">
                    2020 - 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXPERIENCIA */}

        <div className="mt-20 space-y-8"></div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e] font-mono shadow-2xl">
          {/* HEADER */}
          <div className="border-b border-white/10 bg-[#2a2a2a] px-5 py-3">
            <p className="text-sm font-bold text-white">experience.sql</p>
          </div>

          {/* TABLE */}
          <div className="text-sm sm:text-base">
            {/* TITLES */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-[#252525] text-gray-400">
              <div className="px-5 py-3">Puesto</div>

              <div className="border-x border-white/10 px-5 py-3">
                Institución
              </div>

              <div className="px-5 py-3 text-right">Periodo</div>
            </div>

            {/* ROW 1 */}
            <div className="grid grid-cols-3 border-b border-white/10">
              <div className="bg-[#1e1e1e] px-5 py-4 text-[#4ADE80]">
                Desarrollador Full Stack
              </div>

              <div className="border-x border-white/10 bg-[#1e1e1e] px-5 py-4 text-[#60A5FA]">
                Instituto Tecnológico de Ensenada
                <p className="mt-1 text-xs text-gray-400">
                  Residencias Profesionales
                </p>
              </div>

              <div className="bg-[#1e1e1e] px-5 py-4 text-right text-[#FACC15]">
                2025 - 2026
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-3">
              <div className="bg-[#252525] px-5 py-4 text-[#4ADE80]">
                Soporte Técnico
              </div>

              <div className="border-x border-white/10 bg-[#252525] px-5 py-4 text-[#60A5FA]">
                Instituto Tecnológico de Ensenada
                <p className="mt-1 text-xs text-gray-400">Servicio Social</p>
              </div>

              <div className="bg-[#252525] px-5 py-4 text-right text-[#FACC15]">
                2025
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-6xl px-5 py-24 sm:px-10">
        {/* TITLE */}

        {/* PROJECT CARD */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#161616] shadow-2xl">
          {/* TOP */}
          <div className="grid gap-10 lg:grid-cols-2">
            {/* LEFT */}
            <div className="p-8 sm:p-10">
              <h3 className="mt-3 text-4xl font-bold text-white">IteScan</h3>

              <p className="mt-6 leading-relaxed text-gray-400">
                Plataforma web para escaneo de redes, monitoreo de dispositivos
                y gestión de vulnerabilidades en tiempo real.
              </p>

              {/* SKILLS */}
              <div className="mt-8">
                <SkillsBadges
                  only={[
                    "Python",
                    "Vue.js",
                    "Docker",
                    "FastAPI",
                    "PostgreSQL",
                    "Nginx",
                    "JWT",
                    "Tailwind CSS",
                  ]}
                />
              </div>

              {/* FEATURES */}
              <div className="mt-10 space-y-4">
                <div className="flex gap-3">
                  <span className="text-green-400">●</span>

                  <p className="text-gray-300">
                    Escaneo de redes y detección de vulnerabilidades.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-400">●</span>

                  <p className="text-gray-300">
                    Backend API REST con autenticación JWT.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-yellow-400">●</span>

                  <p className="text-gray-300">
                    Contenedores Docker y despliegue con Nginx.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-purple-400">●</span>

                  <p className="text-gray-300">
                    Dashboard responsivo usando Vue 3 y Tailwind CSS.
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://github.com/JoseVelasco646/IteScan"
                  className="rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div
  className="flex items-center justify-center bg-[#111111] p-8"
  style={{ perspective: "1000px", minHeight: "420px" }}
>
               <style>{`
               .carousel-inner {
               position: relative;
             width: 200px;
             height: 260px;
             transform-style: preserve-3d;
              animation: carousel-rotate 20s linear infinite;
               }
                .carousel-inner.paused {
                 animation-play-state: paused;
              }
                @keyframes carousel-rotate {
                from { transform: rotateY(0deg); }
                to { transform: rotateY(360deg); }
             }
                .carousel-card {
                  position: absolute;
                inset: 0;
               border-radius: 14px;
               overflow: hidden;
               transform: rotateY(calc(var(--index) * (360deg / var(--quantity)))) translateZ(300px);
             }
                  `}</style>

              <div
                className={`carousel-inner ${paused ? "paused" : ""}`}
                style={{ "--quantity": images.length } as React.CSSProperties}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {images.map((src, i) => (
                  <div
                    key={i}
                    className="carousel-card"
                    style={
                      {
                        "--index": i,
                        "--quantity": images.length,
                        border: `2px solid rgba(${cardColors[i]}, 0.5)`,
                        boxShadow: `0 0 20px rgba(${cardColors[i]}, 0.3)`,
                      } as React.CSSProperties
                    }
                  >
                    <img
                      src={src}
                      alt={`IteScan preview ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              </div>
              </div>
              </div>
             <div className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-[#161616] shadow-2xl">
              <div className="grid gap-10 lg:grid-cols-2">
             {/* LEFT */}
             <div className="p-8 sm:p-10">
              <h3 className="text-4xl font-bold text-white">Chat Server</h3>

              <p className="mt-6 leading-relaxed text-gray-400">
                Desarrollo de un servidor de chat en tiempo real con soporte
                para conversaciones privadas y grupales, envío de imágenes y
                mensajes instantáneos utilizando WebSockets.
              </p>

              {/* SKILLS */}
              <div className="mt-8">
                <SkillsBadges
                  only={[
                    "JavaScript",
                    "Node.js",
                    "WebSockets",
                    "MongoDB",
                    "WebSocket",

                    "JWT",
                  ]}
                />
              </div>

              {/* FEATURES */}
              <div className="mt-10 space-y-4">
                <div className="flex gap-3">
                  <span className="text-green-400">●</span>

                  <p className="text-gray-300">
                    Chats privados y salas grupales en tiempo real.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-400">●</span>

                  <p className="text-gray-300">
                    Comunicación instantánea usando WebSockets.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-yellow-400">●</span>

                  <p className="text-gray-300">
                    Soporte para envío de imágenes y archivos.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-purple-400">●</span>

                  <p className="text-gray-300">
                    Sistema de autenticación y sesiones con JWT.
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://github.com/JoseVelasco646/socket_proyecto"
                  className="rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* RIGHT */}
            
          </div>
        </div>
      </section>
      <section id="contacto" className="h-1" aria-hidden="true" />
      <footer><footer className="mt-24 border-t border-white/10 py-8">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-gray-400 md:flex-row">
    
    <p>
      © {new Date().getFullYear()} Jose Velasco. Todos los derechos reservados.
    </p>

    <div className="flex items-center gap-6">
      <a
        href="https://github.com/JoseVelasco646"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/josexit/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        LinkedIn
      </a>

      <a
        href="manuel.646119@gmail.com"
        className="transition hover:text-white"
      >
        Email
      </a>
    </div>
  </div>
</footer></footer>
    </div>
  );
}
