import Image from "next/image";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DestinationCardProps {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  toursCount: number;
}

export function DestinationCard({
  id,
  name,
  country,
  image,
  rating,
  toursCount,
}: DestinationCardProps) {
  return (
    <Link href={`/destinations?country=${country.toLowerCase()}`}>
      <Card className="group overflow-hidden border-0 cursor-pointer h-full">
        <div className="relative h-72 w-full overflow-hidden rounded-xl bg-slate-200">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-80" />
          
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-sm font-semibold text-slate-900">
            <Star className="w-4 h-4 fill-accent text-accent" />
            {rating}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
            <h3 className="text-2xl font-serif font-bold mb-1">{name}</h3>
            <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
              <MapPin className="w-4 h-4" />
              <span>{country}</span>
            </div>
            <p className="text-sm font-medium text-white/90 transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {toursCount} Tours Available
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
