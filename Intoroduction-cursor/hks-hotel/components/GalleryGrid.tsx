import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`group relative overflow-hidden ${
            index === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full" : "aspect-square"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-sm text-foreground">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
