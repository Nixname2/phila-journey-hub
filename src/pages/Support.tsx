
import Navbar from "@/components/Navbar";
import TicketList from "@/components/support/TicketList";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Υποστήριξη</h1>
        <TicketList />
      </div>
    </div>
  );
};

export default Support;
