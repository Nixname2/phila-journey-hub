
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
  }
];

export const searchRoutes = async (params: SearchParams): Promise<FerryRoute[]> => {
  // Προσομοίωση καθυστέρησης δικτύου
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Search Params:', params);
  console.log('Available Routes:', mockRoutes);
  
  return mockRoutes.filter(route => {
    const dateMatch = true; // Προς το παρόν αγνοούμε την ημερομηνία για το mock
    const departureMatch = route.departurePort === params.departurePort.toLowerCase();
    const arrivalMatch = route.arrivalPort === params.arrivalPort.toLowerCase();
    const seatsAvailable = route.availableSeats >= params.passengers;
    
    console.log(`Route ${route.id} matches:`, {
      departureMatch,
      arrivalMatch,
      seatsAvailable
    });
    
    return dateMatch && departureMatch && arrivalMatch && seatsAvailable;
  });
};
