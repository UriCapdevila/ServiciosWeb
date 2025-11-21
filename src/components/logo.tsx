import { DatabaseZap } from "lucide-react";

export function Logo() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-inner shadow-primary/50">
      <DatabaseZap className="h-5 w-5 text-primary-foreground" />
    </div>
  )
}
