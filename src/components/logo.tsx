import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/terradata-logo.svg"
      alt=""
      aria-hidden="true"
      width={36}
      height={36}
      className="h-9 w-9 shrink-0 rounded-sm"
    />
  );
}