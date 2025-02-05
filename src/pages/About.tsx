import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Σχετικά με εμάς</h1>
        <p className="text-lg text-gray-600">
          Μάθετε περισσότερα για την Phila Travel...
        </p>
      </div>
    </div>
  );
};

export default About;