import Navbar from '../components/Navbar';
import { Check } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000"
          alt="Services Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Υπηρεσίες</h1>
            <p className="text-xl md:text-2xl">Ολοκληρωμένες ταξιδιωτικές λύσεις</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Αεροπορικά Εισιτήρια */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Αεροπορικά Εισιτήρια</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Εσωτερικού και εξωτερικού</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Ανταγωνιστικές τιμές</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Όλες οι αεροπορικές εταιρείες</span>
              </li>
            </ul>
          </div>

          {/* Ακτοπλοϊκά Εισιτήρια */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Ακτοπλοϊκά Εισιτήρια</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Όλοι οι προορισμοί</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Όλες οι ακτοπλοϊκές εταιρείες</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Άμεση έκδοση εισιτηρίων</span>
              </li>
            </ul>
          </div>

          {/* Ξενοδοχεία */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Ξενοδοχεία</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Παγκόσμιο δίκτυο καταλυμάτων</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Ειδικές προσφορές</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Εγγυημένες κρατήσεις</span>
              </li>
            </ul>
          </div>

          {/* Οργανωμένα Ταξίδια */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Οργανωμένα Ταξίδια</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Ελλάδα και εξωτερικό</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Εξατομικευμένα πακέτα</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Πολιτιστικές εκδρομές</span>
              </li>
            </ul>
          </div>

          {/* Ενοικιάσεις Αυτοκινήτων */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Ενοικιάσεις Αυτοκινήτων</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Παγκόσμια κάλυψη</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Ανταγωνιστικές τιμές</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Πλήρης ασφαλιστική κάλυψη</span>
              </li>
            </ul>
          </div>

          {/* Επαγγελματικά Ταξίδια */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Επαγγελματικά Ταξίδια</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Εταιρικά συμβόλαια</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Διοργάνωση συνεδρίων</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Εξειδικευμένη εξυπηρέτηση</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;