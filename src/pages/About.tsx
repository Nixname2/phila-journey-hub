import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000"
          alt="About Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Σχετικά με εμάς</h1>
            <p className="text-xl md:text-2xl">Γνωρίστε το ταξιδιωτικό μας γραφείο</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Το Ταξιδιωτικό μας Γραφείο</h2>
            <p>
              Το ταξιδιωτικό γραφείο PHILA TRAVEL ιδρύθηκε το 1983 και από τότε προσφέρει υψηλού επιπέδου τουριστικές υπηρεσίες σε ιδιώτες και επιχειρήσεις.
            </p>
            <p>
              Με έδρα τη Νέα Σμύρνη, εξυπηρετούμε πελάτες από όλη την Ελλάδα, προσφέροντας ολοκληρωμένες ταξιδιωτικές λύσεις και εξατομικευμένες υπηρεσίες.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Οι Υπηρεσίες μας</h2>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span>Αεροπορικά εισιτήρια εσωτερικού και εξωτερικού</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span>Ακτοπλοϊκά εισιτήρια</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span>Οργανωμένα ταξίδια σε Ελλάδα και εξωτερικό</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span>Κρατήσεις ξενοδοχείων</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span>Ενοικιάσεις αυτοκινήτων</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span>Εκδρομές και περιηγήσεις</span>
              </li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Η Δέσμευσή μας</h2>
            <p>
              Στην PHILA TRAVEL, η ικανοποίηση των πελατών μας είναι η πρώτη μας προτεραιότητα. Με την πολυετή εμπειρία μας και το εξειδικευμένο προσωπικό μας, είμαστε σε θέση να προσφέρουμε:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span>Προσωποποιημένη εξυπηρέτηση</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span>Ανταγωνιστικές τιμές</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span>24ωρη υποστήριξη</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary">•</span>
                <span>Αξιόπιστες συνεργασίες</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;