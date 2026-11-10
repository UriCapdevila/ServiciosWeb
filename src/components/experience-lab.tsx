"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Database,
  MoveRight,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { mailtoUrl } from "@/lib/site-config";

const scenarios = [
  {
    id: "data",
    label: "Datos",
    Icon: Database,
    title: "Decisiones sin una fuente común",
    situation:
      "La información vive en planillas, sistemas y reportes que no siempre cuentan la misma historia.",
    firstMove:
      "Mapeamos fuentes, preguntas de negocio y responsables antes de definir la arquitectura.",
    capability:
      "Una base confiable y un tablero enfocado en las decisiones que el equipo necesita tomar.",
    deliverables: ["Mapa de datos", "Modelo prioritario", "Tablero accionable"],
  },
  {
    id: "automation",
    label: "Automatización",
    Icon: Workflow,
    title: "Procesos manuales que frenan la operación",
    situation:
      "Tareas repetitivas, traspasos y controles manuales consumen tiempo y multiplican errores.",
    firstMove:
      "Observamos el flujo completo y priorizamos dónde automatizar genera valor sin sumar fragilidad.",
    capability:
      "Un proceso integrado, medible y documentado que libera al equipo para tareas de mayor valor.",
    deliverables: ["Mapa del proceso", "Workflow integrado", "Métricas operativas"],
  },
  {
    id: "ai",
    label: "Inteligencia artificial",
    Icon: Bot,
    title: "Conocimiento difícil de encontrar y usar",
    situation:
      "Documentos, procedimientos y experiencia interna existen, pero consultarlos lleva demasiado tiempo.",
    firstMove:
      "Delimitamos el caso de uso, las fuentes válidas y el nivel de control que necesita cada respuesta.",
    capability:
      "Un asistente conectado al conocimiento de la organización, con trazabilidad y alcance definido.",
    deliverables: ["Caso validado", "Prototipo funcional", "Criterios de control"],
  },
] as const;

export function ExperienceLab() {
  const [activeId, setActiveId] = useState<(typeof scenarios)[number]["id"]>(
    "data"
  );
  const activeScenario =
    scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0];

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-20 border-y border-border bg-card section-space"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Experiencia aplicada</p>
            <h2 id="experience-title" className="section-title mt-5">
              Trabajo que podés ver. Enfoques que podés explorar.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:ml-auto">
            Publicamos proyectos cuando contamos con autorización. Mientras
            tanto, nuestro laboratorio muestra cómo traducimos desafíos
            frecuentes en un plan de acción concreto.
          </p>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-[0.86fr_1.14fr]">
          <article className="group overflow-hidden border border-foreground/15 bg-background">
            <a
              href="https://verotejiditosonline.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-foreground/15">
                <Image
                  src="/images/Verotejiditos.png"
                  alt="Vista del sitio web público de Verotejiditos"
                  fill
                  sizes="(min-width: 1280px) 42vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute left-5 top-5 bg-background px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground shadow-sm">
                  Referencias 
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Emprendimiento · Comercio
                    </p>
                    <h3 className="mt-3 font-headline text-3xl font-semibold tracking-tight">
                      Verotejiditos
                    </h3>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Experiencia web responsive para presentar un catálogo
                  artesanal, ordenar la propuesta comercial y facilitar el
                  contacto con potenciales clientes.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {["Estrategia digital", "UX/UI", "Desarrollo web"].map(
                    (item) => (
                      <li
                        key={item}
                        className="border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </a>
          </article>

          <div className="lab-grid relative overflow-hidden bg-foreground p-6 text-background md:p-8">
            <div className="relative z-10">
              <div className="flex flex-col justify-between gap-5 border-b border-background/15 pb-6 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Terradata Lab
                  </p>
                  <h3 className="mt-2 font-headline text-2xl font-semibold md:text-3xl">
                    Explorá un desafío
                  </h3>
                </div>
                <span className="max-w-[220px] text-xs leading-relaxed text-background/55">
                  Demo conceptual. Elegí un escenario para ver cómo lo
                  convertiríamos en capacidad.
                </span>
              </div>

              <div
                role="tablist"
                aria-label="Escenarios de consultoría"
                className="mt-6 grid gap-2 sm:grid-cols-3"
              >
                {scenarios.map(({ id, label, Icon }) => {
                  const isActive = id === activeScenario.id;
                  return (
                    <button
                      key={id}
                      id={`scenario-tab-${id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`scenario-panel-${id}`}
                      onClick={() => setActiveId(id)}
                      className={`flex min-h-12 items-center justify-center gap-2 border px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-background/15 bg-background/[0.03] text-background/65 hover:border-background/35 hover:text-background"
                      }`}
                    >
                      <Icon aria-hidden="true" className="h-4 w-4" />
                      {label}
                    </button>
                  );
                })}
              </div>

              <div
                key={activeScenario.id}
                id={`scenario-panel-${activeScenario.id}`}
                role="tabpanel"
                aria-labelledby={`scenario-tab-${activeScenario.id}`}
                className="demo-panel-enter mt-8"
              >
                <p className="font-headline text-xs text-primary">
                  0{scenarios.findIndex((item) => item.id === activeId) + 1}
                </p>
                <h4 className="mt-3 max-w-lg font-headline text-2xl font-semibold leading-tight md:text-3xl">
                  {activeScenario.title}
                </h4>

                <div className="mt-8 grid gap-px bg-background/15 md:grid-cols-3">
                  {[
                    ["Situación", activeScenario.situation],
                    ["Primer movimiento", activeScenario.firstMove],
                    ["Capacidad que queda", activeScenario.capability],
                  ].map(([label, itemText], index) => (
                    <div
                      key={label}
                      className="min-h-[190px] bg-foreground p-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center border border-primary/50 font-headline text-[10px] text-primary">
                          0{index + 1}
                        </span>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-background/45">
                          {label}
                        </p>
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-background/70">
                        {itemText}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col justify-between gap-5 border-t border-background/15 pt-6 sm:flex-row sm:items-center">
                  <ul className="flex flex-wrap gap-x-5 gap-y-2">
                    {activeScenario.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-background/60"
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="h-4 w-4 text-primary"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={mailtoUrl}
                    className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    Hablemos de tu caso
                    <MoveRight
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          ¿Tenés un proyecto que podamos publicar? Los próximos casos se
          incorporarán con contexto, alcance e impacto una vez que contemos con
          la autorización correspondiente.
        </p>
      </div>
    </section>
  );
}