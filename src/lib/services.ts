export type ServiceDetail = {
  slug: string;
  shortName: string;
  eyebrow: string;
  title: string;
  description: string;
  fitFor: readonly string[];
  deliverables: readonly string[];
  process: readonly { title: string; description: string }[];
  questions: readonly { question: string; answer: string }[];
};

export const serviceDetails = {
  automation: {
    slug: "automatizacion-procesos",
    shortName: "Automatización de procesos",
    eyebrow: "Automatización e integraciones",
    title: "Reducí tareas manuales conectando procesos, sistemas y datos.",
    description:
      "Analizamos el flujo actual, detectamos dónde se pierden tiempo y calidad, y construimos una automatización mantenible con reglas, APIs y controles claros.",
    fitFor: [
      "Procesos repetitivos sostenidos con planillas, correos o carga manual",
      "Información que debe copiarse entre sistemas sin una integración confiable",
      "Operaciones que necesitan trazabilidad, alertas o aprobaciones",
      "Equipos que quieren validar una automatización antes de escalarla",
    ],
    deliverables: [
      "Mapa del proceso actual y sus puntos de fricción",
      "Diseño del flujo futuro, integraciones y reglas de negocio",
      "Implementación por etapas con validaciones y manejo de errores",
      "Documentación, transferencia y próximos pasos de evolución",
    ],
    process: [
      { title: "Relevar", description: "Entendemos actores, sistemas, excepciones y volumen real del proceso." },
      { title: "Priorizar", description: "Elegimos el tramo con mejor relación entre impacto, riesgo y esfuerzo." },
      { title: "Implementar", description: "Construimos e integramos en ciclos cortos con resultados verificables." },
      { title: "Estabilizar", description: "Documentamos, medimos y dejamos criterios claros para operar y escalar." },
    ],
    questions: [
      {
        question: "¿Es necesario reemplazar los sistemas que ya usamos?",
        answer: "No necesariamente. Primero evaluamos si conviene integrar lo existente, rediseñar una parte o reemplazar una herramienta. La decisión depende del proceso y del costo total de mantenerlo.",
      },
      {
        question: "¿Se puede comenzar con un solo proceso?",
        answer: "Sí. Un piloto acotado permite validar reglas, adopción e impacto antes de extender la solución a otras áreas.",
      },
      {
        question: "¿Qué pasa con las excepciones y los errores?",
        answer: "Se relevan desde el diagnóstico y se contemplan con validaciones, registro de eventos y mecanismos de revisión humana cuando corresponde.",
      },
    ],
  },
  dataAi: {
    slug: "consultoria-datos-ia",
    shortName: "Consultoría de datos e IA",
    eyebrow: "Datos, analítica e inteligencia artificial",
    title: "Convertí datos dispersos en decisiones y soluciones de IA utilizables.",
    description:
      "Ordenamos fuentes, preguntas de negocio y criterios de calidad antes de elegir herramientas. Después construimos el tablero, modelo, buscador o asistente que el equipo realmente necesita usar.",
    fitFor: [
      "Equipos que toman decisiones con datos inconsistentes o difíciles de reunir",
      "Áreas que necesitan tableros con una definición común de sus indicadores",
      "Organizaciones que quieren evaluar un caso de IA sin iniciar un proyecto sobredimensionado",
      "Productos que necesitan búsqueda, clasificación o asistencia sobre información propia",
    ],
    deliverables: [
      "Inventario de fuentes, responsables y calidad de datos",
      "Definición de preguntas, indicadores y criterios de éxito",
      "Arquitectura y prototipo funcional del caso priorizado",
      "Plan de producción, gobierno, seguridad y evolución",
    ],
    process: [
      { title: "Alinear", description: "Traducimos la necesidad de negocio a preguntas y decisiones concretas." },
      { title: "Preparar", description: "Revisamos fuentes, accesos, calidad y límites antes de modelar o automatizar." },
      { title: "Probar", description: "Construimos una versión acotada para validar utilidad, precisión y adopción." },
      { title: "Productivizar", description: "Definimos operación, monitoreo y controles para una solución sostenible." },
    ],
    questions: [
      {
        question: "¿Todo proyecto de datos necesita inteligencia artificial?",
        answer: "No. Muchas veces el mayor valor aparece al ordenar fuentes, definiciones y procesos. La IA se incorpora solo cuando mejora de forma concreta la solución.",
      },
      {
        question: "¿Podemos hacer un prototipo antes de invertir en producción?",
        answer: "Sí. El prototipo se diseña para responder las incertidumbres principales, con criterios de éxito acordados antes de construirlo.",
      },
      {
        question: "¿Trabajan con los sistemas y datos que ya tenemos?",
        answer: "El punto de partida es el entorno actual. La recomendación puede incluir integrar, ordenar, migrar o complementar, según las restricciones reales.",
      },
    ],
  },
  software: {
    slug: "desarrollo-software-medida",
    shortName: "Software a medida",
    eyebrow: "Productos y sistemas digitales",
    title: "Construí el sistema que tu operación necesita, sin empezar por el código.",
    description:
      "Definimos el problema, el alcance y la primera versión útil antes de desarrollar. Diseñamos aplicaciones web, herramientas internas y MVPs con una base preparada para evolucionar.",
    fitFor: [
      "Operaciones que ya no caben en herramientas genéricas o planillas",
      "Equipos que necesitan un MVP para validar una oportunidad concreta",
      "Empresas que deben integrar reglas de negocio y sistemas propios",
      "Proyectos que necesitan una hoja de ruta técnica antes de sumar desarrollo",
    ],
    deliverables: [
      "Definición del problema, usuarios y alcance de la primera versión",
      "Flujos, arquitectura y backlog priorizado",
      "Aplicación implementada en entregas verificables",
      "Puesta en producción, documentación y transferencia",
    ],
    process: [
      { title: "Descubrir", description: "Acordamos qué problema resolver, para quién y cómo evaluar la primera versión." },
      { title: "Diseñar", description: "Definimos flujos, alcance, arquitectura y riesgos antes de comprometer el build." },
      { title: "Construir", description: "Entregamos incrementos utilizables, revisados con las personas responsables." },
      { title: "Lanzar", description: "Preparamos producción, documentación, observabilidad y un plan de evolución." },
    ],
    questions: [
      {
        question: "¿Trabajan con un alcance cerrado o por etapas?",
        answer: "Ambos modelos son posibles. Para incertidumbre alta conviene comenzar con diagnóstico y una primera etapa acotada; para requerimientos estables puede definirse un alcance cerrado.",
      },
      {
        question: "¿El código y la documentación quedan en nuestra organización?",
        answer: "La propiedad, accesos y modalidad de entrega se definen explícitamente en la propuesta y el acuerdo del proyecto antes de comenzar.",
      },
      {
        question: "¿Pueden integrarse con nuestro equipo técnico?",
        answer: "Sí. El proyecto puede ejecutarse end-to-end o coordinado con perfiles internos, manteniendo responsables y criterios de decisión visibles.",
      },
    ],
  },
} satisfies Record<string, ServiceDetail>;

export const primaryServices = [
  serviceDetails.dataAi,
  serviceDetails.automation,
  serviceDetails.software,
] as const;

export function servicePath(service: ServiceDetail) {
  return `/servicios/${service.slug}`;
}
