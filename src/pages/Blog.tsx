import Navbar from '../components/Navbar';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Blog</h1>
        <p className="text-lg text-gray-600">
          Διαβάστε τα τελευταία μας νέα και ταξιδιωτικές συμβουλές...
        </p>
      </div>
    </div>
  );
};

export default Blog;