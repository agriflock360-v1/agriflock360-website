import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Target, Eye, Zap, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import teamPlaceholder from "@/assets/team-placeholder.jpg";
import peterPhoto from "@/assets/peter-krahenbuhl.jpg";
import abisaiPhoto from "@/assets/abisai-nandi.jpg";
import jamesPhoto from "@/assets/james-obimbo.png";
import mglobalLogo from "@/assets/mglobal-logo.jpg";
import mititiPhoto from "@/assets/mititi-isaac.jpg";
import mumbuaPhoto from "@/assets/mumbua-mutuku.jpeg";
import dicksonPhoto from "@/assets/dickson-mumo.jpeg";
import hemstonePhoto from "@/assets/hemstone-alumasa.jpg";

const team = [
  {
    name: "Peter Davis Krahenbuhl",
    position: "Co-founder & Chief Advisor",
    image: peterPhoto,
    linkedin: "https://www.linkedin.com/in/peterkrahenbuhl/",
    bio: "Mission-driven business, sustainability and communications leader with decades of experience guiding business, government and NGOs in global climate, equity, and impact ventures. Co-founder and former President of Sustainable Travel International and advisor to multiple ESG, sustainability and business orgs. At AgriFlock 360, Peter leads strategic growth, partnerships, and sustainably-aligned business development, positioning the company at the intersection of regenerative agriculture, fintech, and carbon innovation.",
  },
  {
    name: "Abisai Nandi",
    position: "Founder & CIO",
    image: abisaiPhoto,
    linkedin: "https://www.linkedin.com/in/abisai-nandi-443405145/",
    bio: "Agritech entrepreneur with 10+ years of experience working alongside 10,000+ smallholder poultry farmers across Africa.Built 1M$ company from scratch. As the visionary behind AgriFlock 360, Abisai brings deep market insight and a farmer-first approach to product design. He leads innovation across AI, regenerative agriculture, and carbon credit readiness, ensuring AgriFlock 360 delivers scalable, tech-enabled solutions to the communities that need them most.",
  },
  // {
  //   name: "Chris Moore",
  //   position: "CTO",
  //   image: teamPlaceholder,
  //   linkedin: "",
  //   bio: "AI & creative technology",
  // },
  {
    name: "Jacqueline Maganga",
    position: "Marketing Director",
    image: "/Jacqueline Maganga - AgriFlock 360.png",
    linkedin: "https://www.linkedin.com/in/jacqueline-maganga-05a04391/",
    bio: "With over a decade driving customer acquisition across fintech, FMCG, and digital strategy, including growth roles at Numida (YC W22) and high-profile campaigns for KFC, NCBA Bank, Uber Eats, and Nivea East Africa, Jacqueline brings the CAC management discipline and channel expertise that AgriFlock 360 needs to scale farmer onboarding and activate its buyer network. She is the bridge between AgriFlock 360’s technology and the smallholder farmers, agrovets, and offtakers it exists to serve.",
  },
  {
    name: "James Obimbo",
    position: "Partner & CFO",
    image: jamesPhoto,
    linkedin: "https://www.linkedin.com/in/jamesobimbo/",
    bio: "Finance expert with certifications in CPA(K), CIFA, and CFA, specializing in capital raising, financial modeling, and strategic advising for agribusiness in Africa. James brings deep expertise in capital raising, financial modeling, governance, and investor relations to support AgriFlock 360’s sustainable growth.",
  },
];

const engineeringTeam = [
  {
    name: "Mititi Isaac",
    position: "Lead Engineer",
    image: mititiPhoto,
    linkedin: "https://www.linkedin.com/in/io-mititi/",
  },
  {
    name: "Mumbua Mutuku",
    position: "Backend & DevOps Engineer",
    image: mumbuaPhoto,
    linkedin: "https://www.linkedin.com/in/mumbuamutuku",
  },
  {
    name: "Dickson Mumo",
    position: "IoT Engineer",
    image: dicksonPhoto,
    linkedin: "https://www.linkedin.com/in/dickson-mumo-4bba7697/",
  },
  {
    name: "Hemstone Alumasa",
    position: "Mobile App Engineer",
    image: hemstonePhoto,
    linkedin: "https://www.linkedin.com/in/hemstone-alumasa-software-engineer/",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Empower smallholder poultry farmers with access to smart, sustainable technology, tools and markets under one platform, boosting income by 40%",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "Digitally empowered smallholder poultry farmers driving food security and sustainable livelihoods in Africa and beyond.",
  },
  {
    icon: Zap,
    title: "Our Values",
    description: "Innovation, Farmer-First Design, Regenerative, Data Privacy, Offline Accessibility, Continuous Learning and Growth.",
  },
];

const About = () => {
  const missionSection = useScrollReveal();
  const teamSection = useScrollReveal();
  const ctaSection = useScrollReveal();
  
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-in">
            About AgriFlock 360
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto px-4">
            Pioneering the regenerative AgTech revolution with AI-powered IoT solutions 
            designed specifically for smallholder poultry farmers.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section 
        ref={missionSection.ref}
        className={`py-20 opacity-0 ${
          missionSection.isVisible ? "animate-slide-up-fade" : ""
        }`}
      >
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
                  AgriFlock 360 was born from a decade of observation of bottlenecks affecting poultry value chain and farmers losing 
                  up to 40% of their chicks due to preventable causes. This combined with expertise in sustainable business and climate solutions. 
                </p>
                <p>
                  After years of research, prototyping, and field testing with over 50 farmers across 
                  three countries, we developed the AgriFlock 360 MVP: a complete ecosystem combining 
                  solar-powered smart brooders with mobile-first farm management tools.
                </p>
                <p>
                  Today, we're working with small holder poultry farmers across the world, helping them reduce 
                  mortality rates, optimize feed conversion, and increase profitability—all while promoting 
                  sustainable, solar-powered agriculture.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Video */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/20">
              <video
                className="w-full aspect-video"
                controls
                poster="/og-image.png"
              >
                <source src="/AgriFlock360 Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamSection.ref}
        className={`py-20 opacity-0 ${
          teamSection.isVisible ? "animate-slide-up-fade" : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse group of technologists, agriculturalists, sustainable business leaders and entrepreneurs 
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
            
            {/* Engineering Team Card */}
            <Card
              className="overflow-hidden hover-lift border-2 hover:border-primary/50 transition-all lg:col-span-2"
              style={{ animationDelay: `${team.length * 50}ms` }}
            >
              <div className="p-6 space-y-6">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold">Engineering Team</h3>
                  <a
                    href="https://mglobalbusinessconsultancy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                  >
                    M'Global Business Consultancy
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {engineeringTeam.map((engineer) => (
                    <div key={engineer.name} className="text-center space-y-2">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-muted">
                        <img
                          src={engineer.image}
                          alt={engineer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{engineer.name}</p>
                        <p className="text-xs text-muted-foreground">{engineer.position}</p>
                      </div>
                      {engineer.linkedin && (
                        <a
                          href={engineer.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                          aria-label={`${engineer.name} LinkedIn`}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-gradient">20+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Partner Farms</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-gradient">10K+</div>
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
      <section 
        ref={ctaSection.ref}
        className={`py-20 gradient-dark opacity-0 ${
          ctaSection.isVisible ? "animate-slide-up-fade" : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Join the Digital Agriculture Revolution
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Partner with us to transform smallholder poultry farming
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                variant="accent" 
                size="lg"
              >
                Become a Partner
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-secondary"
              onClick={() => {
                document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
