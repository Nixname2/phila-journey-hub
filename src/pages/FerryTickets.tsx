
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarIcon, Ship } from 'lucide-react';
import { searchRoutes } from '../api/mockFerryApi';
import { FerryRoute } from '../types/ferry';
import { useToast } from '@/components/ui/use-toast';

const FerryTickets = () => {
  const [departurePort, setDeparturePort] = useState<string>('');
  const [arrivalPort, setArrivalPort] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [passengers, setPassengers] = useState<string>('');
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

      {/* Search Form */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Λιμάνι Αναχώρησης</label>
              <Select value={departurePort} onValueChange={setDeparturePort}>
                <SelectTrigger>
                  <SelectValue placeholder="Επιλέξτε λιμάνι" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="piraeus">Πειραιάς</SelectItem>
                  <SelectItem value="rafina">Ραφήνα</SelectItem>
                  <SelectItem value="lavrio">Λαύριο</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Λιμάνι Άφιξης</label>
              <Select value={arrivalPort} onValueChange={setArrivalPort}>
                <SelectTrigger>
                  <SelectValue placeholder="Επιλέξτε λιμάνι" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="santorini">Σαντορίνη</SelectItem>
                  <SelectItem value="mykonos">Μύκονος</SelectItem>
                  <SelectItem value="paros">Πάρος</SelectItem>
                  <SelectItem value="naxos">Νάξος</SelectItem>
                  <SelectItem value="milos">Μήλος</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Ημερομηνία Αναχώρησης</label>
              <div className="relative">
                <Input 
                  type="date" 
                  className="w-full"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Επιβάτες</label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger>
                  <SelectValue placeholder="Αριθμός επιβατών" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Επιβάτης</SelectItem>
                  <SelectItem value="2">2 Επιβάτες</SelectItem>
                  <SelectItem value="3">3 Επιβάτες</SelectItem>
                  <SelectItem value="4">4 Επιβάτες</SelectItem>
                  <SelectItem value="5">5 Επιβάτες</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button 
              size="lg" 
              className="w-full md:w-auto"
              onClick={handleSearch}
              disabled={loading}
            >
              <Ship className="mr-2 h-5 w-5" />
              {loading ? 'Αναζήτηση...' : 'Αναζήτηση Δρομολογίων'}
            </Button>
          </div>
        </div>

        {/* Results Section */}
        {routes.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Διαθέσιμα Δρομολόγια</h2>
            <div className="space-y-4">
              {routes.map((route) => (
                <div key={route.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Εταιρεία</p>
                      <p className="font-medium">{route.company}</p>
                      <p className="text-sm text-gray-500">{route.vessel}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Αναχώρηση</p>
                      <p className="font-medium">{route.departureTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Άφιξη</p>
                      <p className="font-medium">{route.arrivalTime}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Τιμή</p>
                      <p className="text-xl font-bold text-primary">{route.price.toFixed(2)}€</p>
                      <Button size="sm" className="mt-2">
                        Κράτηση
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary mb-3">Όλες οι ακτοπλοϊκές εταιρείες</h3>
            <p className="text-gray-600">
              Συνεργαζόμαστε με όλες τις ακτοπλοϊκές εταιρείες για να σας προσφέρουμε τα καλύτερα δρομολόγια.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary mb-3">Καλύτερες τιμές</h3>
            <p className="text-gray-600">
              Εξασφαλίζουμε τις καλύτερες τιμές για τα ακτοπλοϊκά σας εισιτήρια.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary mb-3">24/7 Εξυπηρέτηση</h3>
            <p className="text-gray-600">
              Η ομάδα μας είναι διαθέσιμη 24/7 για να σας εξυπηρετήσει σε ό,τι χρειαστείτε.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FerryTickets;
