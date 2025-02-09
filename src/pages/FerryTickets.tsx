
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { searchRoutes } from '../api/mockFerryApi';
import { FerryRoute } from '../types/ferry';
import { useToast } from '@/components/ui/use-toast';
import SearchForm from '../components/ferry/SearchForm';
import RouteCard from '../components/ferry/RouteCard';
import Features from '../components/ferry/Features';

const FerryTickets = () => {
  const [departurePort, setDeparturePort] = useState<string>('');
  const [arrivalPort, setArrivalPort] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [passengers, setPassengers] = useState<string>('');
  const [cars, setCars] = useState<string>('0');
  const [pets, setPets] = useState<string>('0');
  const [routes, setRoutes] = useState<FerryRoute[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!departurePort || !arrivalPort || !date || !passengers) {
      toast({
        title: "Συμπληρώστε όλα τα πεδία",
        description: "Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία για την αναζήτηση.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const results = await searchRoutes({
        departurePort,
        arrivalPort,
        date,
        passengers: parseInt(passengers),
        cars: parseInt(cars),
        pets: parseInt(pets),
      });
      setRoutes(results);
      
      if (results.length === 0) {
        toast({
          title: "Δεν βρέθηκαν δρομολόγια",
          description: "Δεν υπάρχουν διαθέσιμα δρομολόγια για τις επιλεγμένες ημερομηνίες.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Σφάλμα",
        description: "Υπήρξε ένα πρόβλημα κατά την αναζήτηση. Παρακαλώ δοκιμάστε ξανά.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalPrice = (route: FerryRoute) => {
    let total = route.price * parseInt(passengers);
    if (route.carPrice && parseInt(cars) > 0) {
      total += route.carPrice * parseInt(cars);
    }
    if (route.petPrice && parseInt(pets) > 0) {
      total += route.petPrice * parseInt(pets);
    }
    return total.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519666336592-e225a99dcd2f?q=80&w=2000"
          alt="Ferry Tickets Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ακτοπλοϊκά Εισιτήρια</h1>
            <p className="text-xl md:text-2xl">Ταξιδέψτε σε όλους τους προορισμούς</p>
          </div>
        </div>
      </div>

      <SearchForm 
        departurePort={departurePort}
        setDeparturePort={setDeparturePort}
        arrivalPort={arrivalPort}
        setArrivalPort={setArrivalPort}
        date={date}
        setDate={setDate}
        passengers={passengers}
        setPassengers={setPassengers}
        cars={cars}
        setCars={setCars}
        pets={pets}
        setPets={setPets}
        onSearch={handleSearch}
        loading={loading}
      />

      {/* Results Section */}
      {routes.length > 0 && (
        <div className="container mx-auto px-4 mt-8">
          <h2 className="text-2xl font-bold mb-4">Διαθέσιμα Δρομολόγια</h2>
          <div className="space-y-4">
            {routes.map((route) => (
              <RouteCard
                key={route.id}
                route={route}
                cars={cars}
                pets={pets}
                passengers={passengers}
                calculateTotalPrice={calculateTotalPrice}
              />
            ))}
          </div>
        </div>
      )}

      <Features />
    </div>
  );
};

export default FerryTickets;
