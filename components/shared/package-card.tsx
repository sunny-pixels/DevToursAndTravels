import Image from "next/image";
import Link from "next/link";
import { Star, Clock, MapPin, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  id: string;
  title: string;
  destination: string;
  description: string;
  image: string;
  // price: number;
  duration: number;
  rating: number;
  highlights: string[];
}

export function PackageCard({
  id,
  title,
  destination,
  description,
  image,
  duration,
  rating,
  highlights,
}: PackageCardProps) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full border-slate-200/70 shadow-sm shadow-slate-200/50
                      hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300 p-0 gap-0">

      {/* Image with floating badges */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />

        {/* Rating pill */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm
                        text-slate-900 px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          {rating}
        </div>

        {/* Duration pill */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm
                        text-slate-900 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          {duration} Days
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>{destination}</span>
        </div>

        <h3 className="text-xl font-serif font-bold mb-2 line-clamp-2 text-slate-900 group-hover:text-blue-600 transition-colors">
          <Link href={`/packages/${id}`}>{title}</Link>
        </h3>

        <p className="text-sm text-slate-500 mb-5 line-clamp-1">
          {description}
        </p>

        <div className="space-y-2.5 mb-6 flex-1">
          {highlights.slice(0, 3).map((highlight, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-sm text-slate-600"
            >
              <span className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-blue-50 shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-blue-600" />
              </span>
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>

        <Link href={`/packages/${id}`} className="mt-auto">
          <Button
            className="w-full h-11 rounded-xl gap-2 bg-gradient-to-r from-blue-600 to-blue-500
                       shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35
                       transition-all group/btn"
          >
            Book Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}