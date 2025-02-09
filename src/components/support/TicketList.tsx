
import { useQuery } from "@tanstack/react-query";
import { getTickets } from "@/api/mockFreshdeskApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

const statusColors = {
  open: "bg-green-500",
  pending: "bg-yellow-500",
  resolved: "bg-blue-500",
  closed: "bg-gray-500"
};

const priorityLabels = {
  1: "Υψηλή",
  2: "Μεσαία",
  3: "Χαμηλή"
};

const TicketList = () => {
  const { data: tickets, isLoading } = useQuery({
    queryKey: ['tickets'],
    queryFn: getTickets
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tickets?.map((ticket) => (
        <Card key={ticket.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{ticket.subject}</CardTitle>
              <Badge className={statusColors[ticket.status]}>
                {ticket.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
            <div className="flex justify-between items-center text-sm">
              <div>
                <span className="text-gray-500">Προτεραιότητα:</span>{" "}
                {priorityLabels[ticket.priority]}
              </div>
              <div>
                <span className="text-gray-500">Από:</span>{" "}
                {ticket.contact.name}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TicketList;
