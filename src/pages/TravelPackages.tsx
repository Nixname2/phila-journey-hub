import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Calendar, Users } from 'lucide-react';

const TravelPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Κλασική Ευρώπη",
      description: "Παρίσι - Λονδίνο - Άμστερνταμ",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000",
      duration: "8 ημέρες",
      people: "2-4 άτομα",
      price: 899,
      location: "Ευρώπη"
    },
    {
      id: 2,
      title: "Μαγευτική Σαντορίνη",
      description: "Διαμονή σε πολυτελές ξενοδοχείο με θέα στην Καλντέρα",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2000",
      duration: "5 ημέρες",
      people: "2 άτομα",
      price: 599,
      location: "Ελλάδα"
    },
    {
      id: 3,
      title: "Εξωτική Ταϊλάνδη",
      description: "Μπανγκόκ - Πουκέτ - Κο Σαμούι",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000",
      duration: "12 ημέρες",
      people: "2 άτομα",
      price: 1299,
      location: "Ασία"
    },
    {
      id: 4,
      title: "Γύρος Ιταλίας",
      description: "Ρώμη - Φλωρεντία - Βενετία - Μιλάνο",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2000",
      duration: "10 ημέρες",
      people: "2-4 άτομα",
      price: 999,
      location: "Ευρώπη"
    },
    {
      id: 5,
      title: "Κυκλαδίτικο Όνειρο",
      description: "Μύκονος - Πάρος - Νάξος",
      image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=2000",
      duration: "7 ημέρες",
      people: "2 άτομα",
      price: 799,
      location: "Ελλάδα"
    },
    {
      id: 6,
      title: "Μαγικό Ντουμπάι",
      description: "Πολυτελής διαμονή και desert safari",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000",
      duration: "6 ημέρες",
      people: "2 άτομα",
      price: 899,
      location: "Ηνωμένα Αραβικά Εμιράτα"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000"
          alt="Travel Packages Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ταξιδιωτικά Πακέτα</h1>
            <p className="text-xl md:text-2xl">Ανακαλύψτε μοναδικούς προορισμούς</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden">
              <img 
                src={pkg.image} 
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <CardDescription>{pkg.location}</CardDescription>
                </div>
                <CardTitle className="text-xl">{pkg.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {pkg.people}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="text-lg font-semibold text-primary">
                  από €{pkg.price}
                </div>
                <Button variant="secondary">
                  Περισσότερα
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;