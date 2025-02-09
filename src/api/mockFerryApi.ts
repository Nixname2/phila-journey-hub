
import { FerryRoute, SearchParams } from '../types/ferry';

const mockRoutes: FerryRoute[] = [
  {
    id: '1',
    departurePort: 'piraeus',
    arrivalPort: 'santorini',
    departureTime: '07:25',
    arrivalTime: '15:00',
    price: 59.90,
    company: 'Blue Star Ferries',
    vessel: 'Blue Star Delos',
    availableSeats: 120
  },
  {
    id: '2',
    departurePort: 'piraeus',
    arrivalPort: 'santorini',
    departureTime: '15:00',
    arrivalTime: '23:20',
    price: 54.90,
    company: 'Minoan Lines',
    vessel: 'Festos Palace',
    availableSeats: 85
  },
  {
    id: '3',
    departurePort: 'rafina',
    arrivalPort: 'mykonos',
    departureTime: '07:40',
    arrivalTime: '12:15',
    price: 49.90,
    company: 'Fast Ferries',
    vessel: 'Fast Ferries Andros',
    availableSeats: 95
  },
  {
    id: '4',
    departurePort: 'piraeus',
    arrivalPort: 'mykonos',
    departureTime: '07:30',
    arrivalTime: '12:45',
    price: 57.80,
    company: 'Blue Star Ferries',
    vessel: 'Blue Star Paros',
    availableSeats: 150
  },
  {
    id: '5',
    departurePort: 'piraeus',
    arrivalPort: 'paros',
    departureTime: '08:30',
    arrivalTime: '12:15',
    price: 44.90,
    company: 'Blue Star Ferries',
    vessel: 'Blue Star Naxos',
    availableSeats: 180
  },
  {
    id: '6',
    departurePort: 'rafina',
    arrivalPort: 'paros',
    departureTime: '07:15',
    arrivalTime: '11:00',
    price: 42.50,
    company: 'Fast Ferries',
    vessel: 'Fast Ferries Theologos',
    availableSeats: 110
  },
  {
    id: '7',
    departurePort: 'piraeus',
    arrivalPort: 'milos',
    departureTime: '06:45',
    arrivalTime: '11:30',
    price: 51.50,
    company: 'SeaJets',
    vessel: 'WorldChampion Jet',
    availableSeats: 200
  },
  {
    id: '8',
    departurePort: 'piraeus',
    arrivalPort: 'naxos',
    departureTime: '07:25',
    arrivalTime: '12:30',
    price: 46.50,
    company: 'Blue Star Ferries',
    vessel: 'Blue Star Paros',
    availableSeats: 165
  },
  {
    id: '9',
    departurePort: 'rafina',
    arrivalPort: 'tinos',
    departureTime: '07:30',
    arrivalTime: '10:15',
    price: 38.00,
    company: 'Golden Star Ferries',
    vessel: 'SuperExpress',
    availableSeats: 140
  },
  {
    id: '10',
    departurePort: 'piraeus',
    arrivalPort: 'ios',
    departureTime: '07:25',
    arrivalTime: '14:45',
    price: 55.50,
    company: 'Blue Star Ferries',
    vessel: 'Blue Star Delos',
    availableSeats: 130
  }
];

export const searchRoutes = async (params: SearchParams): Promise<FerryRoute[]> => {
  // Προσομοίωση καθυστέρησης δικτύου (250-750ms)
  await new Promise(resolve => setTimeout(resolve, 250 + Math.random() * 500));
  
  console.log('Search Params:', params);
  
  // Μετατροπή της ημερομηνίας σε αντικείμενο Date για σύγκριση
  const searchDate = new Date(params.date);
  const currentDate = new Date();
  
  // Έλεγχος αν η ημερομηνία είναι στο παρελθόν
  if (searchDate < currentDate) {
    throw new Error('Η ημερομηνία δεν μπορεί να είναι στο παρελθόν');
  }

  const filteredRoutes = mockRoutes.filter(route => {
    const departureMatch = route.departurePort === params.departurePort.toLowerCase();
    const arrivalMatch = route.arrivalPort === params.arrivalPort.toLowerCase();
    const seatsAvailable = route.availableSeats >= params.passengers;
    
    // Καταγραφή για debugging
    console.log(`Route ${route.id} matches:`, {
      departureMatch,
      arrivalMatch,
      seatsAvailable
    });
    
    return departureMatch && arrivalMatch && seatsAvailable;
  });

  // Αν δεν βρέθηκαν δρομολόγια, επιστρέφουμε άδειο πίνακα
  if (filteredRoutes.length === 0) {
    console.log('No routes found for the given criteria');
    return [];
  }

  // Ταξινόμηση με βάση την τιμή (αύξουσα σειρά)
  return filteredRoutes.sort((a, b) => a.price - b.price);
};
