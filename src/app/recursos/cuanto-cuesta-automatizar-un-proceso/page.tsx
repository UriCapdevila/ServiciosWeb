import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Check, CircleDollarSign, Scale, SearchCheck } from "lucide-react";
import { ResourceArticle } from "@/components/resource-article";

const canonicalPath = "/recursos/cuanto-cuesta-automatizar-un-proceso";
const title = "¿Cuánto cuesta automatizar un proceso? Cómo definir el alcance antes de pedir presupuesto";
const description =
  "El costo de una automatización depende del proceso, las excepciones, las integraciones y el nivel de control necesario. Esta guía ayuda a definir un primer alcance comparable y verificable.";

export const metadata: Metadata = {
  title: "Cuánto cuesta automatizar un proceso",
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    type: "article",
    title,
    description,
    url: canonicalPath,
    publishedTime: "2026-11-05",
    modifiedTime: "2026-11-05",
    authors: ["Uriel Capdevila"],
  },
};

const toc = [
  { id: "respuesta-corta", label: "La respuesta corta" },
  { id: "factores-costo", label: "Los factores que explican el costo" },
  { id: "alcance-inicial", label: "Cómo elegir el primer alcance" },
  { id: "comparar-propuestas", label: "Cómo comparar propuestas" },
  { id: "cuando-no-automatizar", label: "Cuándo no conviene automatizar" },
  { id: "preparar-diagnostico", label: "Qué preparar para un diagnóstico" },
] as const;

const costDrivers = [
  {
    title: "Variabilidad del proceso",
    description: "Un flujo estable, con pocas excepciones, es más predecible que uno que cambia según cliente, producto, país o criterio de una persona.",
  },
  {
    title: "Cantidad y calidad de integraciones",
    description: "No cuesta lo mismo leer un archivo bien definido que conectarse con varios sistemas, permisos distintos y APIs incompletas o inexistentes.",
  },
  {
    title: "Riesgo del error",
    description: "Cuando una decisión afecta dinero, contratos, inventario o datos sensibles, hacen falta más validaciones, trazabilidad, revisión humana y pruebas.",
  },
  {
    title: "Volumen y frecuencia",
    description: "El diseño cambia si el proceso ocurre algunas veces al mes o debe responder continuamente, manejar picos y recuperarse sin perder operaciones.",
  },
  {
    title: "Estado de los datos",
    description: "Datos duplicados, campos libres y definiciones inconsistentes suelen exigir una etapa de preparación antes de que la automatización sea confiable.",
  },
  {
    title: "Operación después del lanzamiento",
    description: "Alertas, monitoreo, soporte, documentación y responsables claros son parte del costo real, aunque no se vean en una demostración inicial.",
  },
] as const;

const proposalQuestions = [
  "¿Qué parte exacta del proceso está incluida y cuál queda fuera?",
  "¿Qué supuestos se hicieron sobre datos, accesos e integraciones?",
  "¿Cómo se tratarán las excepciones y quién revisará los casos dudosos?",
  "¿Qué evidencia demostrará que la automatización funciona correctamente?",
  "¿Qué documentación, código y accesos recibe la organización?",
  "¿Cómo se operará, monitoreará y modificará la solución después del lanzamiento?",
] as const;

export default function AutomationCostGuidePage() {
  return (
    <ResourceArticle
      title={title}
      description={description}
      canonicalPath={canonicalPath}
      publishedLabel="el 5 de noviembre de 2026"
      publishedIso="2026-11-05"
      updatedLabel="el 5 de noviembre de 2026"
      updatedIso="2026-11-05"
      readingTime="10 minutos de lectura"
      toc={toc}
    >
      <section id="respuesta-corta" className="scroll-mt-28" aria-labelledby="respuesta-corta-title">
        <p className="eyebrow">La respuesta corta</p>
        <h2 id="respuesta-corta-title" className="mt-4 font-headline text-3xl font-semibold tracking-[-0.03em]">
          El costo no depende de cuántos clics ahorra, sino de cuánta incertidumbre debe resolver.
        </h2>
        <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
          <p>
            Dos procesos que parecen similares desde afuera pueden requerir esfuerzos muy distintos. Copiar datos entre dos herramientas con APIs estables es un problema diferente de interpretar documentos variables, aplicar reglas comerciales, pedir una aprobación y registrar cada decisión para una auditoría.
          </p>
          <p>
            Por eso una cifra aislada, sin conocer el flujo, casi nunca permite comparar alternativas. Una estimación responsable necesita definir al menos el inicio y el final del proceso, los sistemas involucrados, las excepciones conocidas, el volumen, el riesgo del error y el criterio de éxito.
          </p>
          <p>
            La mejor primera pregunta no es “¿cuánto cuesta automatizar todo?”, sino “¿cuál es el tramo más pequeño que puede probar valor sin comprometer la operación?”. Esa pregunta convierte una idea amplia en un alcance que se puede presupuestar y verificar.
          </p>
        </div>

        <div className="mt-8 border-l-4 border-primary bg-card p-6">
          <p className="font-headline text-xl font-semibold">Una fórmula útil para conversar sobre costo</p>
          <p className="mt-3 leading-7 text-muted-foreground">
            Costo total = descubrimiento + implementación + integraciones + controles + puesta en producción + operación y evolución.
          </p>
        </div>
      </section>

      <section id="factores-costo" className="scroll-mt-28" aria-labelledby="factores-costo-title">
        <p className="eyebrow">Factores de costo</p>
        <h2 id="factores-costo-title" className="mt-4 font-headline text-3xl font-semibold tracking-[-0.03em]">
          Seis variables explican la mayor parte de la diferencia entre una automatización simple y una crítica.
        </h2>
        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
          {costDrivers.map(({ title: driverTitle, description: driverDescription }, index) => (
            <article key={driverTitle} className="bg-background p-6">
              <span className="font-headline text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-headline text-xl font-semibold">{driverTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{driverDescription}</p>
            </article>
          ))}
        </div>
        <p className="mt-7 leading-8 text-muted-foreground">
          La inteligencia artificial puede sumar otra capa de incertidumbre: es necesario evaluar calidad, precisión, privacidad y situaciones donde una respuesta debe ser revisada por una persona. Usar IA no vuelve automáticamente mejor ni más barata una automatización.
        </p>
      </section>

      <section id="alcance-inicial" className="scroll-mt-28" aria-labelledby="alcance-inicial-title">
        <p className="eyebrow">Primer alcance</p>
        <h2 id="alcance-inicial-title" className="mt-4 font-headline text-3xl font-semibold tracking-[-0.03em]">
          Elegí un tramo con impacto visible y riesgo controlable.
        </h2>
        <p className="mt-6 leading-8 text-muted-foreground">
          Un buen piloto no intenta demostrar que toda la transformación es posible. Debe responder una incertidumbre concreta con suficiente realidad como para orientar la siguiente decisión. Esta matriz ayuda a priorizar:
        </p>

        <div className="mt-8 overflow-x-auto border border-border">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <caption className="sr-only">Matriz para evaluar el primer alcance de una automatización</caption>
            <thead className="bg-foreground text-background">
              <tr>
                <th scope="col" className="p-4 font-semibold">Criterio</th>
                <th scope="col" className="p-4 font-semibold">Señal favorable</th>
                <th scope="col" className="p-4 font-semibold">Señal de alerta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><th scope="row" className="p-4 font-semibold">Frecuencia</th><td className="p-4 text-muted-foreground">Ocurre de forma repetida</td><td className="p-4 text-muted-foreground">Caso aislado o poco frecuente</td></tr>
              <tr><th scope="row" className="p-4 font-semibold">Reglas</th><td className="p-4 text-muted-foreground">Son explícitas y observables</td><td className="p-4 text-muted-foreground">Dependen de criterio tácito</td></tr>
              <tr><th scope="row" className="p-4 font-semibold">Datos</th><td className="p-4 text-muted-foreground">Tienen formato y responsable</td><td className="p-4 text-muted-foreground">Son incompletos o no accesibles</td></tr>
              <tr><th scope="row" className="p-4 font-semibold">Impacto</th><td className="p-4 text-muted-foreground">Se puede medir antes y después</td><td className="p-4 text-muted-foreground">El beneficio es solamente percibido</td></tr>
              <tr><th scope="row" className="p-4 font-semibold">Riesgo</th><td className="p-4 text-muted-foreground">Permite revisión o reversión</td><td className="p-4 text-muted-foreground">Un error produce daño inmediato</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex gap-4 border border-border bg-card p-6">
          <Scale aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-primary" />
          <p className="leading-7 text-muted-foreground">
            Si el impacto es alto pero también lo es el riesgo, el primer entregable puede ser un sistema de recomendación con aprobación humana, no una ejecución completamente autónoma.
          </p>
        </div>
      </section>

      <section id="comparar-propuestas" className="scroll-mt-28" aria-labelledby="comparar-propuestas-title">
        <p className="eyebrow">Comparación</p>
        <h2 id="comparar-propuestas-title" className="mt-4 font-headline text-3xl font-semibold tracking-[-0.03em]">
          Compará alcance, responsabilidad y operación; no solamente una cifra final.
        </h2>
        <p className="mt-6 leading-8 text-muted-foreground">
          Una propuesta más económica puede estar suponiendo que los datos ya están listos, que la organización resolverá las integraciones o que el monitoreo queda fuera. Otra puede incluir descubrimiento, pruebas y soporte. Sin hacer visibles esos límites, los totales no son comparables.
        </p>
        <ul className="mt-8 space-y-4">
          {proposalQuestions.map((question) => (
            <li key={question} className="flex gap-3 border-b border-border pb-4 leading-7">
              <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
              {question}
            </li>
          ))}
        </ul>
        <p className="mt-7 leading-8 text-muted-foreground">
          También conviene separar los costos de única vez de los recurrentes: infraestructura, licencias, consumo de APIs, mantenimiento y soporte pueden crecer de forma distinta al desarrollo inicial.
        </p>
      </section>

      <section id="cuando-no-automatizar" className="scroll-mt-28" aria-labelledby="cuando-no-automatizar-title">
        <p className="eyebrow">Límites</p>
        <h2 id="cuando-no-automatizar-title" className="mt-4 font-headline text-3xl font-semibold tracking-[-0.03em]">
          A veces el mejor resultado del diagnóstico es decidir no automatizar todavía.
        </h2>
        <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
          <p>
            Automatizar un proceso inestable puede fijar errores y excepciones dentro del software. Si nadie puede explicar quién decide, con qué información y qué ocurre cuando algo sale mal, primero hace falta ordenar la operación.
          </p>
          <p>
            Tampoco suele justificar una implementación compleja un proceso poco frecuente, de bajo impacto o que cambiará en el corto plazo. En esos casos puede alcanzar con una mejora de herramienta, una plantilla, una regla más clara o una integración ya disponible.
          </p>
        </div>
        <div className="mt-8 flex gap-4 border border-amber-500/40 bg-amber-500/10 p-6">
          <AlertTriangle aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-amber-700" />
          <div>
            <p className="font-headline text-lg font-semibold">Señal de alerta</p>
            <p className="mt-2 leading-7 text-muted-foreground">
              Si la única definición disponible es “queremos usar IA”, todavía no existe un alcance. Empezá por la decisión, la tarea o el resultado que necesitás mejorar.
            </p>
          </div>
        </div>
      </section>

      <section id="preparar-diagnostico" className="scroll-mt-28" aria-labelledby="preparar-diagnostico-title">
        <p className="eyebrow">Preparación</p>
        <h2 id="preparar-diagnostico-title" className="mt-4 font-headline text-3xl font-semibold tracking-[-0.03em]">
          Cinco elementos alcanzan para iniciar una conversación útil.
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Una descripción simple del inicio y el final del proceso.",
            "Las personas y sistemas que participan actualmente.",
            "Dos o tres ejemplos reales, sin compartir credenciales ni datos sensibles.",
            "Las excepciones que generan más trabajo, demora o riesgo.",
            "La señal que permitiría afirmar que el cambio funcionó.",
          ].map((item, index) => (
            <li key={item} className="border border-border bg-card p-6">
              <span className="font-headline text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-4 leading-7">{item}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 border border-primary/30 bg-primary/5 p-7">
          <div className="flex gap-4">
            <SearchCheck aria-hidden="true" className="mt-1 h-7 w-7 shrink-0 text-primary" />
            <div>
              <h3 className="font-headline text-2xl font-semibold">El objetivo del diagnóstico</h3>
              <p className="mt-3 leading-8 text-muted-foreground">
                Salir con un mapa del proceso, un tramo priorizado, supuestos explícitos, criterios de éxito y una recomendación de próximos pasos. Recién entonces tiene sentido comparar una implementación.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link className="font-semibold text-primary hover:underline" href="/servicios/automatizacion-procesos">
                  Conocer el servicio de automatización
                </Link>
                <Link className="font-semibold text-primary hover:underline" href="/contacto?servicio=automatizacion-procesos">
                  Solicitar un diagnóstico
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 flex items-start gap-3 text-sm leading-7 text-muted-foreground">
          <CircleDollarSign aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
          Esta guía no publica rangos universales porque serían engañosos sin contexto. Una estimación concreta requiere revisar el proceso, los sistemas, el riesgo y el alcance elegido.
        </p>
      </section>
    </ResourceArticle>
  );
}
