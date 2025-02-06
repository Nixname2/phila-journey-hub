import Navbar from '../components/Navbar';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Οι καλύτεροι προορισμοί για το καλοκαίρι 2024",
      excerpt: "Ανακαλύψτε τους κορυφαίους προορισμούς για τις καλοκαιρινές σας διακοπές το 2024. Από εξωτικές παραλίες μέχρι κοσμοπολίτικα νησιά...",
      date: "15 Μαρτίου 2024",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000"
    },
    {
      id: 2,
      title: "Ταξιδιωτικός οδηγός: Σαντορίνη",
      excerpt: "Όλα όσα πρέπει να γνωρίζετε για τη Σαντορίνη. Από τα καλύτερα εστιατόρια και ξενοδοχεία μέχρι τις κρυμμένες ομορφιές του νησιού...",
      date: "10 Μαρτίου 2024",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2000"
    },
    {
      id: 3,
      title: "5 μυστικοί προορισμοί στην Ελλάδα",
      excerpt: "Ανακαλύψτε πέντε μοναδικούς προορισμούς στην Ελλάδα που δεν είναι τόσο γνωστοί στο ευρύ κοινό αλλά προσφέρουν μοναδικές εμπειρίες...",
      date: "5 Μαρτίου 2024",
      image: "https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=2000"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000"
          alt="Blog Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl md:text-2xl">Ταξιδιωτικές εμπειρίες και συμβουλές</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <h2 className="text-xl font-bold text-primary mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="secondary">
                  Διαβάστε περισσότερα
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;