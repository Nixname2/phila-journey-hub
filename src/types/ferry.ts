
export interface FerryRoute {
  id: string;
  departurePort: string;
  arrivalPort: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  company: string;
  vessel: string;
  availableSeats: number;
}

export interface SearchParams {
  departurePort: string;
  arrivalPort: string;
  date: string;
  passengers: number;
}
