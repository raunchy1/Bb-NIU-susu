import { PhotoPlaceholder } from "@/components/photo-placeholder";

type GalleryDisplaySlot = {
  width: number;
  height: number;
};

export function GalleryGrid({ images }: { images: GalleryDisplaySlot[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
      {images.map((img, i) => (
        <PhotoPlaceholder
          key={i}
          className="w-full break-inside-avoid"
          style={{ aspectRatio: `${img.width} / ${img.height}` }}
        />
      ))}
    </div>
  );
}
