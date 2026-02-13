export type NavigationItem = {
  label: string;
  path: string;
};

export const navigationItems: NavigationItem[] = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/servicios" },
  { label: "Contacto", path: "/contacto" },
];
