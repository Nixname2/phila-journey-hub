import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'gr'>('gr');

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero language={language} />
    </div>
  );
};

export default Index;