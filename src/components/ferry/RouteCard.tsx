
import { Button } from '@/components/ui/button';
import { Car, Dog } from 'lucide-react';
import { FerryRoute } from '../../types/ferry';

interface RouteCardProps {
  route: FerryRoute;
  cars: string;
  pets: string;
  passengers: string;
  calculateTotalPrice: (route: FerryRoute) => string;
}

const RouteCard = ({ route, cars, pets, calculateTotalPrice }: RouteCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid md:grid-cols-4 gap-4">
        <div>
          <p className="text-sm text-gray-500">Εταιρεία</p>
          <p className="font-medium">{route.company}</p>
          <p className="text-sm text-gray-500">{route.vessel}</p>
          {route.image && (
            <img 
              src={route.image} 
              alt={route.vessel} 
              className="mt-2 rounded-md w-full h-32 object-cover"
            />
          )}
        </div>
        <div>
          <p className="text-sm text-gray-500">Αναχώρηση</p>
          <p className="font-medium">{route.departureTime}</p>
          <div className="mt-2 space-y-1">
            {parseInt(cars) > 0 && (
              <div className="flex items-center text-sm text-gray-600">
                <Car className="h-4 w-4 mr-1" />
                <span>{route.carPrice}€ / αυτοκίνητο</span>
              </div>
            )}
            {parseInt(pets) > 0 && (
              <div className="flex items-center text-sm text-gray-600">
                <Dog className="h-4 w-4 mr-1" />
                <span>{route.petPrice}€ / κατοικίδιο</span>
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Άφιξη</p>
          <p className="font-medium">{route.arrivalTime}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Συνολική Τιμή</p>
          <p className="text-xl font-bold text-primary">{calculateTotalPrice(route)}€</p>
          <Button size="sm" className="mt-2">
            Κράτηση
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
