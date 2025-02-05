import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Επικοινωνία</h1>
        <p className="text-lg text-gray-600">
          Επικοινωνήστε μαζί μας...
        </p>
      </div>
    </div>
  );
};

export default Contact;