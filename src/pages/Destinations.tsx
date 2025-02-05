import { useState } from 'react';
import Navbar from '../components/Navbar';
import DestinationCard from '../components/DestinationCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample destination data
const destinations = [
  {
    id: 1,
    title: "Σαντορίνη",
    description: "Ανακαλύψτε τη μαγεία του ηλιοβασιλέματος στην Οία και απολαύστε τις μοναδικές παραλίες με τη μαύρη άμμο.",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1000",
    price: 299,
    location: "Κυκλάδες, Ελλάδα",
    type: "island"
  },
  {
    id: 2,
    title: "Μύκονος",
    description: "Ζήστε την κοσμοπολίτικη ατμόσφαιρα και απολαύστε τις πολυτελείς παροχές στο νησί των ανέμων.",
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=1000",
    price: 399,
    location: "Κυκλάδες, Ελλάδα",
    type: "island"
  },
  {
    id: 3,
    title: "Ρώμη",
    description: "Εξερευνήστε την αιώνια πόλη, τα ιστορικά μνημεία και απολαύστε την αυθεντική ιταλική κουζίνα.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000",
    price: 449,
    location: "Λάτιο, Ιταλία",
    type: "city"
  },
  {
    id: 4,
    title: "Παρίσι",
    description: "Ανακαλύψτε την πόλη του φωτός, επισκεφθείτε τον πύργο του Άιφελ και περιηγηθείτε στα μουσεία.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000",
    price: 499,
    location: "Ιλ ντε Φρανς, Γαλλία",
    type: "city"
  },
];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'all' || dest.type === selectedType;
    
    const matchesPrice = priceRange === 'all' ||
      (priceRange === 'budget' && dest.price < 300) ||
      (priceRange === 'mid' && dest.price >= 300 && dest.price < 500) ||
      (priceRange === 'luxury' && dest.price >= 500);

    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000"
          alt="Destinations Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Προορισμοί</h1>
            <p className="text-xl md:text-2xl">Ανακαλύψτε μοναδικούς προορισμούς για το επόμενο ταξίδι σας</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Αναζήτηση προορισμού..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Τύπος προορισμού" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Όλοι οι τύποι</SelectItem>
                  <SelectItem value="island">Νησιά</SelectItem>
                  <SelectItem value="city">Πόλεις</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Εύρος τιμών" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Όλες οι τιμές</SelectItem>
                  <SelectItem value="budget">€0 - €300</SelectItem>
                  <SelectItem value="mid">€300 - €500</SelectItem>
                  <SelectItem value="luxury">€500+</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              title={destination.title}
              description={destination.description}
              image={destination.image}
              price={destination.price}
              location={destination.location}
            />
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              Δε βρέθηκαν προορισμοί με τα επιλεγμένα κριτήρια.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;