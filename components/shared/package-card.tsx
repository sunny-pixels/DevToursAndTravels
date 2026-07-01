import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Clock,
  MapPin,
  Check,
  Plane,
  TrainFront,
  Car,
  Bus,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TransportMode = "flight" | "train" | "cab" | "bus";

interface PackageCardProps {
  id: string;
  title: string;
  destination: string;
  description: string;
  image: string;
  price: number;
  duration: number;
  rating: number;
  highlights: string[];
  transportIncluded?: TransportMode[];
}

const transportConfig: Record<
  TransportMode,
  { icon: typeof Plane; label: string }
> = {
  flight: { icon: Plane, label: "Flight" },
  train: { icon: TrainFront, label: "Train" },
  cab: { icon: Car, label: "Cab Transfers" },
  bus: { icon: Bus, label: "Bus" },
};

export function PackageCard({
  id,
  title,
  destination,
  description,
  image,
  price,
  duration,
  rating,
  highlights,
  transportIncluded = ["flight", "cab"],
}: PackageCardProps) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full border-slate-200 hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
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

        <p className="text-sm text-slate-500 mb-5 line-clamp-1">
          {description}
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            <span>{duration} Days</span>
          </div>
        </div>

        <div className="space-y-2 mb-6 flex-1">
          {highlights.slice(0, 3).map((highlight, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 text-sm text-slate-600"
            >
              <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 pt-6 border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-2">
            {transportIncluded.map((mode) => {
              const { icon: Icon, label } = transportConfig[mode];
              return (
                <div
                  key={mode}
                  className="flex items-center gap-1.5 bg-slate-50 text-slate-600 px-2.5 py-1.5 rounded-md text-xs font-medium"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
          <Link href={`/packages/${id}`}>
            <Button>Book Now</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
