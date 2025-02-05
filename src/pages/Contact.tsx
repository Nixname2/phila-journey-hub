import Navbar from '../components/Navbar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, MapPin, Phone } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες.",
  }),
  email: z.string().email({
    message: "Παρακαλώ εισάγετε ένα έγκυρο email.",
  }),
  subject: z.string().min(5, {
    message: "Το θέμα πρέπει να έχει τουλάχιστον 5 χαρακτήρες.",
  }),
  message: z.string().min(10, {
    message: "Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // TODO: Implement form submission
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Επικοινωνία</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Στοιχεία Επικοινωνίας</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Διεύθυνση:</p>
                    <p>Λεωφόρος Ελευθερίου Βενιζέλου 34</p>
                    <p>Νέα Σμύρνη, 17121</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Τηλέφωνα:</p>
                    <p>210 93 10 555</p>
                    <p>210 93 10 556</p>
                    <p>210 93 10 557</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p>info@philatravel.gr</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Ωράριο Λειτουργίας</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Δευτέρα - Παρασκευή:</span> 09:00 - 17:00</p>
                <p><span className="font-medium">Σάββατο:</span> 09:00 - 14:00</p>
                <p><span className="font-medium">Κυριακή:</span> Κλειστά</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Φόρμα Επικοινωνίας</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ονοματεπώνυμο</FormLabel>
                      <FormControl>
                        <Input placeholder="Το ονοματεπώνυμό σας" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Το email σας" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Θέμα</FormLabel>
                      <FormControl>
                        <Input placeholder="Το θέμα του μηνύματός σας" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Μήνυμα</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Το μήνυμά σας" 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Αποστολή
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.0876714621384!2d23.71323731531701!3d37.94748797972721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd4509917f89%3A0x5c97c042f5eb0df6!2zzpvOtc-Jz4YuIM6Vz4DOtc-FzrguIM6SzrXOvc65zrbOrc67zr_PhSAzNCwgzp3Orc6xIM6jzrzPjc-Bzr3OtyAxNzEyMQ!5e0!3m2!1sel!2sgr!4v1650000000000!5m2!1sel!2sgr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;