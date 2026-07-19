"use client";

import { usePathname } from "next/navigation";
import { FadeUp } from "@/components/motion/fade-up";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Comunidade reunida no campo de futebol" },
  { src: "/images/gallery-2.jpg", alt: "Evento comunitario com palestra" },
  { src: "/images/gallery-3.jpg", alt: "Jovens no programa de futebol" },
  { src: "/images/gallery-4.jpg", alt: "Entrega de presentes na celebracao" },
  { src: "/images/gallery-5.jpg", alt: "Escolinha de Futebol de Itaquera" },
  { src: "/images/gallery-6.jpg", alt: "Equipe da Lifetransformers no campo" },
];

export function PhotoGallery() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-forest/50 text-center mb-4">
            {locale === "pt" ? "Nossa Comunidade" : "Our Community"}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink text-center mb-14">
            {locale === "pt" ? "Momentos que transformam" : "Moments that transform"}
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {/* Large feature photo */}
            <div
              className="col-span-2 md:col-span-2 rounded-2xl overflow-hidden relative group"
              style={{ height: "300px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${photos[0].src}')` }}
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-300" />
            </div>

            {/* Tall right photo */}
            <div
              className="col-span-1 rounded-2xl overflow-hidden relative group row-span-2 md:row-span-1"
              style={{ height: "300px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${photos[1].src}')`, backgroundPosition: "center top" }}
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-300" />
            </div>

            {/* Bottom row — 4 equal photos */}
            {photos.slice(2).map((photo) => (
              <div
                key={photo.src}
                className="col-span-1 rounded-2xl overflow-hidden relative group"
                style={{ height: "200px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${photo.src}')` }}
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
