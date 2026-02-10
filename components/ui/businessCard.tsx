import Image, { StaticImageData } from "next/image";

interface HighlightText {
  text: string;
  highlight?: boolean;
}

interface BusinessCardProps {
  image: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  description: HighlightText[];
  className?: string;
}

export default function BusinessCard({
  image,
  title,
  description,
  className,
}: BusinessCardProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Image */}
      <div className="mb-6 w-full h-45 relative">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-text-body mb-3">{title}</h3>

      {/* Description */}
      <p className="text-text-muted font-extralight text-sm leading-relaxed px-3">
        {description.map((part, index) =>
          part.highlight ? (
            <span
              key={index}
              className="text-brand-blue cursor-pointer hover:underline"
            >
              {part.text}
            </span>
          ) : (
            <span key={index}>{part.text}</span>
          ),
        )}
      </p>
    </div>
  );
}
