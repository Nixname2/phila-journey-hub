
import { toast } from "@/components/ui/use-toast";

export interface Ticket {
  id: number;
  subject: string;
  description: string;
  status: 'open' | 'pending' | 'resolved' | 'closed';
  priority: 1 | 2 | 3;
  created_at: string;
  contact: Contact;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

const mockTickets: Ticket[] = [
  {
    id: 1,
    subject: "Αλλαγή εισιτηρίου",
    description: "Θα ήθελα να αλλάξω την ημερομηνία του εισιτηρίου μου",
    status: "open",
    priority: 2,
    created_at: new Date().toISOString(),
    contact: {
      id: 1,
      name: "Γιώργος Παπαδόπουλος",
      email: "gpapadopoulos@example.com",
      phone: "6912345678"
    }
  },
  {
    id: 2,
    subject: "Ακύρωση κράτησης",
    description: "Χρειάζομαι βοήθεια με την ακύρωση της κράτησής μου",
    status: "pending",
    priority: 1,
    created_at: new Date().toISOString(),
    contact: {
      id: 2,
      name: "Μαρία Κωνσταντίνου",
      email: "mkonstantinou@example.com"
    }
  }
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const createTicket = async (data: Omit<Ticket, 'id' | 'created_at'>) => {
  await delay(1000);
  const newTicket: Ticket = {
    ...data,
    id: mockTickets.length + 1,
    created_at: new Date().toISOString()
  };
  mockTickets.push(newTicket);
  toast({
    title: "Επιτυχία",
    description: "Το ticket δημιουργήθηκε επιτυχώς",
  });
  return newTicket;
};

export const getTickets = async () => {
  await delay(1000);
  return mockTickets;
};

export const getTicket = async (id: number) => {
  await delay(500);
  const ticket = mockTickets.find(t => t.id === id);
  if (!ticket) {
    throw new Error('Ticket not found');
  }
  return ticket;
};

export const updateTicket = async (id: number, data: Partial<Ticket>) => {
  await delay(1000);
  const index = mockTickets.findIndex(t => t.id === id);
  if (index === -1) {
    throw new Error('Ticket not found');
  }
  
  mockTickets[index] = {
    ...mockTickets[index],
    ...data
  };
  
  toast({
    title: "Επιτυχία",
    description: "Το ticket ενημερώθηκε επιτυχώς",
  });
  
  return mockTickets[index];
};

export const deleteTicket = async (id: number) => {
  await delay(1000);
  const index = mockTickets.findIndex(t => t.id === id);
  if (index === -1) {
    throw new Error('Ticket not found');
  }
  
  mockTickets.splice(index, 1);
  toast({
    title: "Επιτυχία",
    description: "Το ticket διαγράφηκε επιτυχώς",
  });
};

