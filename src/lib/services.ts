import ac from "@/assets/service-ac.jpg";
import clean from "@/assets/service-clean.jpg";
import electric from "@/assets/service-electric.jpg";
import plumbing from "@/assets/service-plumbing.jpg";
import repair from "@/assets/service-repair.jpg";
import maintenance from "@/assets/service-maintenance.jpg";

export const services = [
  {
    slug: "montaj-aer-conditionat",
    title: "Montaj aer condiționat",
    short: "Instalare profesională a oricărui tip de AC, cu garanție extinsă.",
    image: ac,
    benefits: [
      "Echipă autorizată ANRE & RAR",
      "Materiale incluse de calitate premium",
      "Garanție 2 ani la manoperă",
      "Programări în 24h",
    ],
  },
  {
    slug: "curatare-igienizare-ac",
    title: "Curățare și igienizare AC",
    short: "Igienizare cu ozon și antibacterian. Aer curat și consum redus.",
    image: clean,
    benefits: [
      "Igienizare cu ozon profesional",
      "Curățare evaporator + ventilator",
      "Verificare presiune freon",
      "Recomandat o dată la 6 luni",
    ],
  },
  {
    slug: "instalatii-electrice",
    title: "Instalații electrice",
    short: "Tablouri, prize, întrerupătoare, iluminat. Lucrări la standard.",
    image: electric,
    benefits: [
      "Electrician autorizat ANRE",
      "Materiale conform normativelor",
      "Verificări PRAM la cerere",
      "Intervenții urgente 24/7",
    ],
  },
  {
    slug: "instalatii-sanitare",
    title: "Instalații sanitare",
    short: "Montaj obiecte sanitare, baterii, boilere, distribuții complete.",
    image: plumbing,
    benefits: [
      "Lucrări curate, fără probleme",
      "Materiale germane / italiene",
      "Garanție pe lucrare",
      "Consultanță gratuită",
    ],
  },
  {
    slug: "reparatii",
    title: "Reparații",
    short: "Diagnoză rapidă și reparații pentru AC, electrice și sanitare.",
    image: repair,
    benefits: [
      "Diagnostic în aceeași zi",
      "Piese originale",
      "Tarife transparente",
      "Garanție pe reparație",
    ],
  },
  {
    slug: "mentenanta",
    title: "Mentenanță",
    short: "Contracte de mentenanță pentru locuințe, birouri și HoReCa.",
    image: maintenance,
    benefits: [
      "Plan personalizat",
      "Prioritate la intervenții",
      "Reduceri la consumabile",
      "Raport tehnic după fiecare vizită",
    ],
  },
] as const;

export type Service = (typeof services)[number];