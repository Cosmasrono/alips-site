export const navLinks = [
  { label: "Home",     id: "home" },
  { label: "About",    id: "about" },
  { 
    label: "Products", 
    id: "products",
    subLinks: [
      { label: "Fungicides", id: "fungicides" },
      { label: "Herbicides", id: "herbicides" },
      { label: "Insecticides", id: "insecticides" },
      { label: "Public Health", id: "publichealth" },
      { label: "Speciality Products", id: "specialty-products" },
      { label: "Veterinary", id: "veterinary" },
    ]
  },
  { label: "Crop Clinic", id: "services" },
  { label: "News",  id: "gallery" },
  { label: "Contact",  id: "contact" },
];


export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
