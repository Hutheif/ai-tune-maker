import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@spiro.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-BIKE",
      description: "Mon-Fri 9AM-6PM PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Future Street, Tech City, TC 12345",
      description: "Our headquarters & showroom"
    },
    {
      icon: Clock,
      title: "Store Hours",
      content: "Mon-Sat: 9AM-7PM",
      description: "Sunday: 11AM-5PM"
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat"
    },
    {
      icon: Headphones,
      title: "Phone Support",
      description: "Talk to a bike expert right now",
      action: "Call Now"
    },
    {
      icon: Shield,
      title: "Warranty Claims",
      description: "Submit warranty and service requests",
      action: "Submit Claim"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate("/")}
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
              <div className="gradient-text text-2xl font-bold">SPIRO</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigate("/")}
                className="nav-link"
              >
                Home
              </button>
              <button 
                onClick={() => navigate("/products")}
                className="nav-link"
              >
                Products
              </button>
              <button className="nav-link text-primary">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our bikes? Need support? We're here to help you ride into the future.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <div key={index} className="futuristic-card text-center cursor-pointer group">
              <option.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform glow-pulse" />
              <h3 className="text-lg font-semibold mb-2 text-primary">
                {option.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {option.description}
              </p>
              <Button className="btn-secondary">
                {option.action}
              </Button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/30"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/30"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-primary">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/30"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-primary">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/30"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-background/50 border-primary/30 resize-none"
                  placeholder="Tell us more about your question or how we can help..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Contact Information
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="futuristic-card flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary glow-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Find Our Showroom
              </h3>
              <div className="futuristic-card aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4 glow-pulse" />
                  <p className="text-muted-foreground">
                    Interactive map coming soon
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Visit us at our flagship showroom to test ride our bikes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our bikes and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What's the warranty on Spiro bikes?",
                answer: "All Spiro bikes come with a comprehensive 5-year warranty covering frame defects and 2-year warranty on electrical components."
              },
              {
                question: "Do you offer test rides?",
                answer: "Absolutely! Visit our showroom to test ride any of our models. We also offer a 30-day money-back guarantee."
              },
              {
                question: "How long does shipping take?",
                answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available for an additional fee."
              },
              {
                question: "Do you service other bike brands?",
                answer: "Our certified technicians can service most bike brands, though we specialize in Spiro bikes and electric systems."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and offer financing options through our partners."
              },
              {
                question: "Can I customize my bike?",
                answer: "Yes! We offer various customization options including colors, accessories, and performance upgrades."
              }
            ].map((faq, index) => (
              <div key={index} className="futuristic-card">
                <h3 className="font-semibold text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;