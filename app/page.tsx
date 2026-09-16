const galleryImages = [
  { src: "/Amazon-1.png", alt: "Amazon Cafe Resto page 1" },
  { src: "/Amazon-2.png", alt: "Amazon Cafe Resto page 2" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 px-4 py-8 text-stone-900 md:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
            Amazon Cafe Resto
          </p>
          <h1 className="mt-3 text-3xl font-black md:text-5xl">Menu Pages</h1>
        </header>

        <section className="space-y-6">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="block w-full object-contain"
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}