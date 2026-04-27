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

export const productCategories = [
  { name: "Insecticides", image: "https://images.unsplash.com/photo-1590682680393-272f779776bc?auto=format&fit=crop&w=800&q=80" },
  { name: "Herbicides", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80" },
  { name: "Fungicides", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80" },
  { name: "Biological Pesticides", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" },
  { name: "Bio Stimulants", image: "https://images.unsplash.com/photo-1463123081488-789f99829c48?auto=format&fit=crop&w=800&q=80" },
  { name: "Veterinary", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80" },
];

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
