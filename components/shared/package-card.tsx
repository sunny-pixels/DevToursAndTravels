import Image from "next/image";
import Link from "next/link";
import { Star, Clock, MapPin, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  id: string;
  title: string;
  destination: string;
  image: string;
  price: number;
  duration: number;
  rating: number;
  highlights: string[];
}

export function PackageCard({
  id,
  title,
  destination,
  image,
  price,
  duration,
  rating,
  highlights,
}: PackageCardProps) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full border-slate-200 hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </div>
      </div>
      
      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-1 text-sm text-slate-500 mb-2">
            <MapPin className="w-4 h-4" />
            <span>{destination}</span>
          </div>
          <div className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded text-sm font-semibold">
            <Star className="w-4 h-4 fill-accent" />
            {rating}
          </div>
        </div>

        <h3 className="text-xl font-serif font-bold mb-4 line-clamp-2 text-slate-900 group-hover:text-primary transition-colors">
          <Link href={`/packages/${id}`}>{title}</Link>
        </h3>

        <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            <span>{duration} Days</span>
          </div>
        </div>

        <div className="space-y-2 mb-6 flex-1">
          {highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
              <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
          <div>
            <p className="text-sm text-slate-500">Starting from</p>
            <p className="text-2xl font-bold text-slate-900">
              ${price}<span className="text-sm font-normal text-slate-500">/person</span>
            </p>
          </div>
          <Link href={`/packages/${id}`}>
            <Button>Book Now</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
