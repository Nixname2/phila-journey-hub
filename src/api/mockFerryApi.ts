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
    availableSeats: 120,
    image: '/ships/blue-star-delos.jpg',
    carPrice: 85.00,
    petPrice: 15.00
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
    availableSeats: 85,
    image: '/ships/festos-palace.jpg',
    carPrice: 89.00,
    petPrice: 20.00
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
    availableSeats: 95,
    image: '/ships/fast-ferries.jpg',
    carPrice: 75.00,
    petPrice: 12.00
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
    availableSeats: 150,
    image: '/ships/blue-star-paros.jpg',
    carPrice: 90.00,
    petPrice: 18.00
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
    availableSeats: 180,
    image: '/ships/blue-star-naxos.jpg',
    carPrice: 85.00,
    petPrice: 15.00
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
    availableSeats: 110,
    image: '/ships/fast-ferries-theologos.jpg',
    carPrice: 70.00,
    petPrice: 10.00
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
    availableSeats: 200,
    image: '/ships/worldchampion.jpg',
    carPrice: 82.00,
    petPrice: 18.00
  },
  {
    id: '8',
    departurePort: 'heraklion',
    arrivalPort: 'santorini',
    departureTime: '09:30',
    arrivalTime: '11:15',
    price: 48.50,
    company: 'SeaJets',
    vessel: 'Champion Jet 1',
    availableSeats: 180,
    image: '/ships/champion-jet.jpg',
    carPrice: 78.00,
    petPrice: 15.00
  },
  {
    id: '9',
    departurePort: 'thessaloniki',
    arrivalPort: 'skiathos',
    departureTime: '10:00',
    arrivalTime: '13:30',
    price: 45.00,
    company: 'Hellenic Seaways',
    vessel: 'Flying Cat 4',
    availableSeats: 150,
    image: '/ships/flying-cat.jpg',
    carPrice: 70.00,
    petPrice: 10.00
  },
  {
    id: '10',
    departurePort: 'volos',
    arrivalPort: 'skopelos',
    departureTime: '08:15',
    arrivalTime: '11:00',
    price: 42.50,
    company: 'Hellenic Seaways',
    vessel: 'Flying Cat 3',
    availableSeats: 140,
    image: '/ships/flying-cat.jpg',
    carPrice: 65.00,
    petPrice: 10.00
  }
];

export const searchRoutes = async (params: SearchParams): Promise<FerryRoute[]> => {
  await new Promise(resolve => setTimeout(resolve, 250 + Math.random() * 500));
  
  console.log('Search Params:', params);
  
  const searchDate = new Date(params.date);
  const currentDate = new Date();
  
  if (searchDate < currentDate) {
    throw new Error('Η ημερομηνία δεν μπορεί να είναι στο παρελθόν');
  }

  const filteredRoutes = mockRoutes.filter(route => {
    const departureMatch = route.departurePort === params.departurePort.toLowerCase();
    const arrivalMatch = route.arrivalPort === params.arrivalPort.toLowerCase();
    const seatsAvailable = route.availableSeats >= params.passengers;
    
    console.log(`Route ${route.id} matches:`, {
      departureMatch,
      arrivalMatch,
      seatsAvailable
    });
    
    return departureMatch && arrivalMatch && seatsAvailable;
  });

  if (filteredRoutes.length === 0) {
    console.log('No routes found for the given criteria');
    return [];
  }

  return filteredRoutes.sort((a, b) => a.price - b.price);
};
