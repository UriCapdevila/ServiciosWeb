export type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
};

export const teamMembers: readonly TeamMember[] = [
  {
    name: "Uriel Capdevila",
    role: "Fundador & Director",
    imageSrc: "/images/FotoPerfil.jpg",
    imageAlt: "Uriel Capdevila, fundador y director de Terradata AI Solutions",
  },
];