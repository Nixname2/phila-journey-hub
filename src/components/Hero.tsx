import { ArrowRight } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'gr';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    gr: {
      title: "Ανακαλύψτε τον Κόσμο με την Phila Travel",
      subtitle: "Ταξιδέψτε με ασφάλεια και άνεση σε κάθε γωνιά του πλανήτη",
      cta: "Δείτε Προορισμούς",
    },
    en: {
      title: "Discover the World with Phila Travel",
      subtitle: "Travel safely and comfortably to every corner of the planet",
      cta: "View Destinations",
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2560&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          {content[language].title}
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
          {content[language].subtitle}
        </p>
        <a
          href="#destinations"
          className="inline-flex items-center px-8 py-4 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-all text-lg font-medium group"
        >
          {content[language].cta}
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default Hero;