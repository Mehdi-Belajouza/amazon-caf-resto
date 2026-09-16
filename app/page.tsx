"use client";

const galleryImages = [
  {
    src: "./Amazon-1.png",
    alt: "Amazon Cafe Resto page 1",
  },
  {
    src: "./Amazon-2.png",
    alt: "Amazon Cafe Resto page 2",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f9f4ee,_#efe6dc_35%,_#e7dccd_100%)] px-4 py-8 text-stone-900 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
            Amazon Cafe Resto
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Menu Pages
          </h1>
        </header>

        <section className="space-y-6 rounded-[2rem] border border-stone-200/80 bg-white/85 p-4 shadow-[0_24px_80px_rgba(120,90,40,0.12)] backdrop-blur-sm md:p-7">
          {galleryImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="overflow-hidden rounded-[1.6rem] border border-stone-200 bg-stone-100 shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="block w-full object-contain"
                style={{ maxHeight: "90vh" }}
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}