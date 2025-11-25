import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Building2, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Partnership Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company || "N/A"}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:info@agriflock.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    toast({
      title: "Opening email client",
      description: "Your default email application will open with the pre-filled message.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Partner With Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Join us in revolutionizing poultry farming. Fill out the form below to get in touch.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Company / Organization
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company name (optional)"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your partnership interest..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Or email us directly at{" "}
              <a
                href="mailto:info@agriflock.com"
                className="text-primary hover:underline"
              >
                info@agriflock.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
