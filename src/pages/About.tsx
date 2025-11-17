import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Target, Eye, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import teamPlaceholder from "@/assets/team-placeholder.jpg";
import peterPhoto from "@/assets/peter-krahenbuhl.jpg";
import abisaiPhoto from "@/assets/abisai-nandi.jpg";
import jamesPhoto from "@/assets/james-obimbo.png";
import sheenaPhoto from "@/assets/sheena-prasad.png";

const team = [
  {
    name: "Peter Davis Krahenbuhl",
    position: "CEO",
    image: peterPhoto,
    linkedin: "https://www.linkedin.com/in/peterkrahenbuhl/",
    bio: "Global Sustainability expert",
  },
  {
    name: "Abisai Nandi",
    position: "Founder & CIO",
    image: abisaiPhoto,
    linkedin: "https://www.linkedin.com/in/abisai-nandi-443405145/",
    bio: "10+ years in the agribusiness industry, with over 10,000+ farmer relationships",
  },
  {
    name: "Chris Moore",
    position: "CTO",
    image: teamPlaceholder,
    linkedin: "",
    bio: "AI & creative technology",
  },
  {
    name: "Sheena Prasad",
    position: "Marketing Director",
    image: sheenaPhoto,
    linkedin: "https://www.linkedin.com/in/sheenaprasad/",
    bio: "Climate tech branding",
  },
  {
    name: "James Obimbo",
    position: "CFO",
    image: jamesPhoto,
    linkedin: "https://www.linkedin.com/in/jamesobimbo/",
    bio: "",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Empower smallholder poultry farmers with affordable, AI-powered IoT technology to increase productivity and profitability while promoting sustainable agriculture.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "Become the leading digital agriculture platform in Africa, transforming millions of smallholder farms into data-driven, profitable businesses.",
  },
  {
    icon: Zap,
    title: "Our Values",
    description: "Innovation, Sustainability, Farmer-First Design, Data Privacy, Offline Accessibility, and Continuous Learning.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-in">
            About AgriFlock360
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto px-4">
            Pioneering the digital agriculture revolution with AI-powered IoT solutions 
            designed specifically for smallholder poultry farmers.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-8 text-center hover-lift border-2 hover:border-primary/50 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-2xl gradient-primary shadow-glow mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Our <span className="text-gradient">Story</span>
            </h2>
            <Card className="p-8 border-2 border-primary/20">
              <div className="prose prose-slate max-w-none space-y-4 text-muted-foreground">
                <p>
                  AgriFlock360 was born from a simple observation: smallholder poultry farmers were losing 
                  up to 30% of their chicks due to preventable causes like temperature fluctuations, missed 
                  vaccinations, and inefficient feeding practices.
                </p>
                <p>
                  Our founders, with backgrounds in agricultural technology and IoT engineering, recognized 
                  that the same smart sensors and AI algorithms transforming large commercial farms could be 
                  adapted for smallholder operations—if designed with affordability, offline capability, and 
                  ease of use as core principles.
                </p>
                <p>
                  After two years of research, prototyping, and field testing with over 50 farmers across 
                  three countries, we developed the AgriFlock360 MVP: a complete ecosystem combining 
                  solar-powered smart brooders with mobile-first farm management tools.
                </p>
                <p>
                  Today, we're working with poultry farmers managing 300-1,000 birds, helping them reduce 
                  mortality rates, optimize feed conversion, and increase profitability—all while promoting 
                  sustainable, solar-powered agriculture.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse group of technologists, agriculturalists, and entrepreneurs 
              passionate about transforming smallholder farming.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="overflow-hidden hover-lift border-2 hover:border-primary/50 transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-center pt-6 pb-4">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.position}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-center"
                    asChild
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-gradient">50+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Partner Farms</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-gradient">15K+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Birds Monitored</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-gradient-accent">30%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Mortality Reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-gradient">100%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Solar Powered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Join the Digital Agriculture Revolution
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Partner with us to transform smallholder poultry farming
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/download">Become a Partner</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-secondary" asChild>
              <Link to="/download">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
