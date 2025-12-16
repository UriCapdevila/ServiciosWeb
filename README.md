# Portfolio Profesional de Uriel Capdevila

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

Este repositorio contiene el código fuente de mi portfolio personal, una plataforma web moderna y escalable construida para demostrar mis habilidades en desarrollo Full Stack y mi especialización en la integración de soluciones de datos e inteligencia artificial.

**[Ver el sitio en vivo](https://[URL_DEL_SITIO_AQUI])** (Recuerda reemplazar esta URL)

---

## ✨ Características Principales

*   **Diseño Moderno y Responsivo**: Experiencia de usuario fluida en cualquier dispositivo, construida con Tailwind CSS y ShadCN/UI.
*   **Arquitectura Escalable**: Basado en Next.js App Router, utilizando Server Components para un rendimiento óptimo.
*   **Integración de IA (próximamente)**: Preparado para incorporar funcionalidades de IA generativa con Google Gemini a través de Genkit.
*   **Código Limpio y Mantenible**: Escrito en TypeScript, siguiendo las mejores prácticas para garantizar la calidad y la facilidad de mantenimiento.

---

## 🛠️ Stack Tecnológico y Arquitectura

Este proyecto fue construido utilizando un stack de tecnologías moderno y orientado al rendimiento.

### **Frontend**
*   **Framework**: [**Next.js**](https://nextjs.org/) (App Router) - Para renderizado híbrido (SSR y SSG), optimización de rendimiento y una excelente experiencia de desarrollo.
*   **Librería**: [**React**](https://reactjs.org/) - Para construir interfaces de usuario declarativas y reutilizables.
*   **Lenguaje**: [**TypeScript**](https://www.typescriptlang.org/) - Para un código robusto, escalable y con tipado estático.
*   **UI Components**: [**ShadCN/UI**](https://ui.shadcn.com/) - Una colección de componentes de UI accesibles y personalizables.
*   **Estilos**: [**Tailwind CSS**](https://tailwindcss.com/) - Para un diseño rápido y consistente directamente en el markup.

### **Backend & IA**
*   **Inteligencia Artificial**: [**Google Genkit (con Gemini)**](https://firebase.google.com/docs/genkit) - Framework para crear flujos de IA robustos y listos para producción.
*   **Hosting**: [**Firebase App Hosting**](https://firebase.google.com/docs/app-hosting) - Para un despliegue continuo, escalable y seguro.

---

## 🚀 Cómo Empezar

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2.  **Instalar dependencias:**
    Este proyecto utiliza `npm` para la gestión de paquetes.
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Si planeas utilizar las funcionalidades de IA, necesitarás una clave de API de Google. Crea un archivo `.env.local` en la raíz del proyecto y añade tu clave:
    ```
    GEMINI_API_KEY=TU_API_KEY_AQUI
    ```

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver el resultado.

---

## 📂 Estructura del Proyecto

El código está organizado para promover la escalabilidad y la claridad:

```
/
├── src/
│   ├── app/         # Rutas, páginas y layouts principales (Next.js App Router).
│   ├── components/  # Componentes de React reutilizables (UI y de lógica).
│   ├── lib/         # Funciones de utilidad, hooks y datos estáticos.
│   └── ai/          # Flujos de Genkit y lógica de inteligencia artificial.
└── public/          # Archivos estáticos como imágenes y favicons.
```

---

## 📬 Contacto

*   **LinkedIn**: [Uriel Capdevila](https://www.linkedin.com/in/uriel-capdevila0024/)
*   **GitHub**: [@UriCapdevila](https://github.com/UriCapdevila)
*   **Email**: hola@urielcapdevila.com
