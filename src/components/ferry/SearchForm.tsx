
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Ship } from 'lucide-react';
import { SearchParams } from '../../types/ferry';

interface SearchFormProps {
  departurePort: string;
  setDeparturePort: (value: string) => void;
  arrivalPort: string;
  setArrivalPort: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  passengers: string;
  setPassengers: (value: string) => void;
  cars: string;
  setCars: (value: string) => void;
  pets: string;
  setPets: (value: string) => void;
  onSearch: () => void;
  loading: boolean;
}

const SearchForm = ({
  departurePort,
  setDeparturePort,
  arrivalPort,
  setArrivalPort,
  date,
  setDate,
  passengers,
  setPassengers,
  cars,
  setCars,
  pets,
  setPets,
  onSearch,
  loading
}: SearchFormProps) => {
  return (
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
                <SelectItem value="volos">Βόλος</SelectItem>
                <SelectItem value="thessaloniki">Θεσσαλονίκη</SelectItem>
                <SelectItem value="heraklion">Ηράκλειο</SelectItem>
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
                <SelectItem value="ios">Ίος</SelectItem>
                <SelectItem value="skiathos">Σκιάθος</SelectItem>
                <SelectItem value="skopelos">Σκόπελος</SelectItem>
                <SelectItem value="tinos">Τήνος</SelectItem>
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

          <div className="space-y-2">
            <label className="text-sm font-medium">Αυτοκίνητα</label>
            <Select value={cars} onValueChange={setCars}>
              <SelectTrigger>
                <SelectValue placeholder="Αριθμός αυτοκινήτων" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Χωρίς αυτοκίνητο</SelectItem>
                <SelectItem value="1">1 Αυτοκίνητο</SelectItem>
                <SelectItem value="2">2 Αυτοκίνητα</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Κατοικίδια</label>
            <Select value={pets} onValueChange={setPets}>
              <SelectTrigger>
                <SelectValue placeholder="Αριθμός κατοικιδίων" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Χωρίς κατοικίδιο</SelectItem>
                <SelectItem value="1">1 Κατοικίδιο</SelectItem>
                <SelectItem value="2">2 Κατοικίδια</SelectItem>
                <SelectItem value="3">3 Κατοικίδια</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button 
            size="lg" 
            className="w-full md:w-auto"
            onClick={onSearch}
            disabled={loading}
          >
            <Ship className="mr-2 h-5 w-5" />
            {loading ? 'Αναζήτηση...' : 'Αναζήτηση Δρομολογίων'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
