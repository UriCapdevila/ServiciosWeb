export type SolutionDetail = {
  slug: string;
  publicName: string;
  category: string;
  status: string;
  title: string;
  description: string;
  summary: string;
  fitFor: readonly string[];
  capabilities: readonly string[];
  pilotScope: readonly string[];
  boundaries: readonly string[];
  cta: string;
};

export const solutionDetails = {
  knowledge: {
    slug: "asistente-conocimiento-web",
    publicName: "Asistente de conocimiento web",
    category: "Información y asistencia con IA",
    status: "Piloto disponible",
    title: "Convertí el contenido de tu sitio en respuestas útiles y verificables.",
    description:
      "Una solución para consultar información pública de un sitio o centro de ayuda mediante lenguaje natural, con respuestas acompañadas por sus fuentes.",
    summary:
      "Reduce la fricción para encontrar información en documentación, preguntas frecuentes, catálogos y contenidos de soporte.",
    fitFor: [
      "Sitios con documentación valiosa pero difícil de recorrer",
      "Equipos que responden consultas repetidas sobre contenido ya publicado",
      "Procesos de onboarding que dependen de manuales o centros de ayuda",
      "Organizaciones que quieren validar un asistente antes de integrarlo a sus canales",
    ],
    capabilities: [
      "Incorporación controlada de páginas y contenido web",
      "Búsqueda semántica sobre la información incorporada",
      "Respuestas conversacionales con referencias a la fuente",
      "Sesiones acotadas y criterios explícitos de retención",
    ],
    pilotScope: [
      "Seleccionar un conjunto representativo de contenidos",
      "Definir preguntas frecuentes y criterios de respuesta",
      "Configurar una experiencia piloto con identidad del negocio",
      "Revisar utilidad, cobertura y respuestas que requieren mejora",
    ],
    boundaries: [
      "El piloto trabaja sobre fuentes acordadas; no reemplaza a una persona especialista.",
      "La calidad depende de la claridad, vigencia y cobertura del contenido original.",
      "Integraciones, volumen y políticas de datos se definen antes de una puesta en producción.",
    ],
    cta: "Evaluar un piloto",
  },
  finance: {
    slug: "organizador-financiero-conversacional",
    publicName: "Organizador financiero conversacional",
    category: "Educación y organización financiera",
    status: "Prototipo en desarrollo",
    title: "Una conversación guiada para ordenar deudas, prioridades y próximos pasos.",
    description:
      "Un prototipo de asistencia educativa que explora cómo acompañar a una persona para comprender su situación, organizar información y construir hábitos más sostenibles.",
    summary:
      "Busca transformar datos financieros dispersos en un recorrido claro, comprensible y accionable, sin presentarse como asesoramiento profesional.",
    fitFor: [
      "Programas de educación financiera que necesitan una experiencia guiada",
      "Organizaciones que acompañan a personas con dificultades para ordenar sus compromisos",
      "Equipos que quieren validar contenidos y recorridos conversacionales",
      "Iniciativas que necesitan probar el enfoque antes de manejar datos reales",
    ],
    capabilities: [
      "Conversación estructurada para relevar contexto y objetivos",
      "Organización de compromisos y prioridades en un lenguaje accesible",
      "Orientaciones educativas y próximos pasos generales",
      "Arquitectura preparada para evaluar distintos modelos de IA",
    ],
    pilotScope: [
      "Definir audiencia, situaciones frecuentes y límites del acompañamiento",
      "Revisar el contenido educativo con referentes de la organización",
      "Probar recorridos con información ficticia o controlada",
      "Medir comprensión, utilidad percibida y puntos de abandono",
    ],
    boundaries: [
      "No brinda asesoramiento financiero, legal, contable ni crediticio.",
      "No opera cuentas, negocia deudas ni toma decisiones por la persona.",
      "Persistencia, identidad, seguridad y revisión profesional son requisitos previos a un uso productivo.",
    ],
    cta: "Conversar sobre el prototipo",
  },
  gestures: {
    slug: "interfaz-gestual-aprendizaje",
    publicName: "Interfaz gestual para aprendizaje",
    category: "Visión computacional e interacción",
    status: "Caso tecnológico",
    title: "Controlá contenidos y sesiones con gestos, presencia y contexto.",
    description:
      "Una experiencia local de visión computacional que explora interacciones sin contacto para pausar, reanudar y acompañar el consumo de contenidos educativos.",
    summary:
      "Demuestra cómo combinar detección visual, eventos en tiempo real y una interfaz web para crear experiencias más naturales o accesibles.",
    fitFor: [
      "Capacitación donde las manos no siempre están disponibles para usar teclado o mouse",
      "Experiencias interactivas que necesitan reaccionar a presencia y gestos",
      "Pruebas de accesibilidad e interacción sin contacto",
      "Equipos que quieren validar visión computacional en un entorno controlado",
    ],
    capabilities: [
      "Reconocimiento local de gestos definidos para controlar reproducción",
      "Detección de presencia para adaptar el estado de una sesión",
      "Comunicación en tiempo real entre el motor visual y la interfaz",
      "Registro de notas y eventos asociados al contenido",
    ],
    pilotScope: [
      "Elegir el entorno, las acciones y los gestos relevantes",
      "Evaluar cámara, iluminación, distancia y diversidad de usuarios",
      "Ajustar umbrales y confirmaciones para reducir activaciones accidentales",
      "Validar la integración con el contenido o flujo objetivo",
    ],
    boundaries: [
      "El rendimiento depende del dispositivo, la cámara y las condiciones del entorno.",
      "Los gestos deben probarse con la audiencia real antes de una implementación operativa.",
      "El caso actual valida la tecnología en un entorno local; cada despliegue requiere diseño e integración específicos.",
    ],
    cta: "Evaluar una aplicación",
  },
} satisfies Record<string, SolutionDetail>;

export const publicSolutions = [
  solutionDetails.knowledge,
  solutionDetails.finance,
  solutionDetails.gestures,
] as const;

export function solutionPath(solution: SolutionDetail) {
  return `/soluciones/${solution.slug}`;
}
