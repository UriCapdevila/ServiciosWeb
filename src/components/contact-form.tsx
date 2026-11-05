"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const inputClassName =
  "mt-2 h-12 w-full rounded-sm border border-input bg-background px-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const body = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") body.append(key, value);
    }

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error(`Netlify Forms returned ${response.status}`);
      router.push("/gracias");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      id="formulario"
      name="contacto"
      method="POST"
      action="/__forms.html"
      onSubmit={handleSubmit}
      className="border border-border bg-card p-6 md:p-9"
      aria-describedby={status === "error" ? "form-error" : undefined}
    >
      <input type="hidden" name="form-name" value="contacto" />
      <p className="hidden" aria-hidden="true">
        <label>No completar este campo <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Nombre y apellido
          <input className={inputClassName} name="nombre" type="text" autoComplete="name" required />
        </label>
        <label className="text-sm font-semibold">
          Correo de trabajo
          <input className={inputClassName} name="email" type="email" autoComplete="email" required />
        </label>
        <label className="text-sm font-semibold">
          Empresa u organización
          <input className={inputClassName} name="empresa" type="text" autoComplete="organization" />
        </label>
        <label className="text-sm font-semibold">
          Tipo de iniciativa
          <select className={inputClassName} name="servicio" defaultValue="" required>
            <option value="" disabled>Seleccioná una opción</option>
            <option value="automatizacion">Automatización de procesos</option>
            <option value="datos-ia">Datos e inteligencia artificial</option>
            <option value="software">Software a medida o MVP</option>
            <option value="modernizacion">Modernización o nube</option>
            <option value="diagnostico">Todavía necesito definirlo</option>
          </select>
        </label>
        <label className="text-sm font-semibold">
          Momento esperado para comenzar
          <select className={inputClassName} name="plazo" defaultValue="">
            <option value="">Todavía no está definido</option>
            <option value="inmediato">En el próximo mes</option>
            <option value="trimestre">Durante el próximo trimestre</option>
            <option value="exploracion">Estoy explorando alternativas</option>
          </select>
        </label>
        <label className="text-sm font-semibold">
          Inversión estimada
          <select className={inputClassName} name="inversion" defaultValue="">
            <option value="">Todavía no está definida</option>
            <option value="diagnostico">Busco comenzar con un diagnóstico</option>
            <option value="piloto">Hay presupuesto para un piloto</option>
            <option value="implementacion">Hay presupuesto para implementación</option>
          </select>
        </label>
      </div>

      <label className="mt-6 block text-sm font-semibold">
        ¿Qué problema necesitás resolver?
        <textarea
          className="mt-2 min-h-40 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring"
          name="desafio"
          placeholder="Contanos brevemente el proceso, la decisión o el sistema que hoy genera fricción."
          required
        />
      </label>

      <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input type="checkbox" name="consentimiento" value="acepto" className="mt-1 h-4 w-4 accent-primary" required />
        Acepto que Terradata AI Solutions utilice estos datos para responder esta consulta. No se usarán para envíos comerciales automatizados.
      </label>

      {status === "error" && (
        <p id="form-error" role="alert" className="mt-6 border-l-2 border-destructive pl-4 text-sm text-destructive">
          No pudimos enviar la consulta. Probá nuevamente o escribinos por WhatsApp o correo.
        </p>
      )}

      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-7 sm:flex-row sm:items-center">
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">No incluyas contraseñas, credenciales ni información confidencial en este formulario.</p>
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Enviando…" : "Enviar consulta"}<ArrowUpRight aria-hidden="true" />
        </Button>
      </div>
    </form>
  );
}
