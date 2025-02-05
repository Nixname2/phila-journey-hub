import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
}

const DestinationCard = ({ title, description, image, price, location }: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-secondary" />
          <CardDescription>{location}</CardDescription>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-lg font-semibold text-primary">
          Από €{price}
        </div>
        <Button variant="secondary">
          Περισσότερα
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;