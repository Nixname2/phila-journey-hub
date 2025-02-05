import Navbar from '../components/Navbar';

const TravelPackages = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Ταξιδιωτικά Πακέτα</h1>
        <p className="text-lg text-gray-600">
          Εξερευνήστε τα ταξιδιωτικά μας πακέτα...
        </p>
      </div>
    </div>
  );
};

export default TravelPackages;