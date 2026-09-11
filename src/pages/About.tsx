import { Button } from "@/components/ui/button";
import { AboutStory } from "@/components/AboutStory";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Eye, ExternalLink, Linkedin, Sprout, Target, Zap } from "lucide-react";
import farmPhoto from "@/assets/hero-poultry-farm.jpg";
import peterPhoto from "@/assets/peter-krahenbuhl.jpg";
import abisaiPhoto from "@/assets/abisai-nandi.jpg";
import jamesPhoto from "@/assets/james-obimbo.png";
import mititiPhoto from "@/assets/mititi-isaac.jpg";
import mumbuaPhoto from "@/assets/mumbua-mutuku.jpeg";
import dicksonPhoto from "@/assets/dickson-mumo.jpeg";
import hemstonePhoto from "@/assets/hemstone-alumasa.jpg";
import "./About.css";

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

const boardAdvisors = [
  {
    name: "Andy Olek",
    position: "Board Advisor, Legal & Corporate Strategy",
    image: "/Andy Olek.jpeg",
    linkedin: "https://www.linkedin.com/in/andyolek/",
    bio: "25+ years as a startup and growth-stage attorney, including Chief Legal Officer roles. Andy advises AgriFlock 360 on fundraising, IP, governance, risk, compliance, and multi-country expansion.",
  },
  {
    name: "Dr. Jon Moyle",
    position: "Board Advisor, Poultry Science & Regulatory",
    image: "/John Moyle.jpeg",
    linkedin: "https://www.linkedin.com/in/jon-moyle-021a3a89/",
    bio: "Extension Poultry Specialist at the University of Maryland with a Ph.D. in Poultry Science and 15 years in commercial poultry operations. Jon brings global poultry development experience across emerging markets, including hands-on advisory support at AgriFlock 360's Nairobi test site.",
  },
  {
    name: "Babu S. Rahman",
    position: "Board Advisor, Hardware & System Engineering",
    image: "/Babu Rahmna.jpeg",
    linkedin: "https://www.linkedin.com/in/babusrahman/",
    bio: "Ph.D. in Mechanical Engineering from UC Berkeley with 25+ years of hardware engineering leadership, including a decade at Apple. Babu strengthens the Solar SmartBrooder's path from prototype to a reliable, manufacturable product.",
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

const impactStats = [
  { value: "20+", label: "Partner Farms" },
  { value: "10K+", label: "Birds Monitored" },
  { value: "30%", label: "Mortality Reduction" },
  { value: "100%", label: "Solar Powered" },
];

type TeamMember = (typeof engineeringTeam)[number] & { bio?: string };

const ProfileCard = ({ member }: { member: TeamMember }) => (
  <article className="about-profile">
    <div className="about-profile__header">
      <img
        src={member.image}
        alt={member.name}
        width={128}
        height={128}
        loading="lazy"
        decoding="async"
        className="about-profile__photo"
      />
      <div className="about-profile__identity">
        <h4>{member.name}</h4>
        <p className="about-profile__role">{member.position}</p>
      </div>
    </div>
    {member.bio && <p className="about-profile__bio">{member.bio}</p>}
    <Button variant="gold" asChild className="about-profile__link">
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Connect with ${member.name} on LinkedIn (opens in a new tab)`}
      >
        <Linkedin size={16} aria-hidden="true" />
        Connect on LinkedIn
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </Button>
  </article>
);

const About = () => (
  <div className="about-page">
    <section className="about-hero about-section" aria-labelledby="about-heading">
      <div className="about-inner about-hero__grid">
        <div className="about-hero__content">
          <p className="about-eyebrow">Rooted in farming. Built for the future.</p>
          <h1 id="about-heading">About <span>AgriFlock 360</span></h1>
          <p className="about-hero__description">
            Pioneering the regenerative AgTech revolution with AI-powered IoT solutions
            designed specifically for smallholder poultry farmers.
          </p>
          <div className="about-actions">
            <Button variant="gold" asChild>
              <a href="#about-story">Our Story <ArrowDown size={16} aria-hidden="true" /></a>
            </Button>
            <Button variant="gold" asChild>
              <a href="#about-team">Meet Our Team <ArrowDown size={16} aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
        <figure className="about-hero__visual">
          <img
            src={farmPhoto}
            alt="Young chickens moving freely around feeders in a naturally lit poultry house"
            width={1600}
            height={1066}
            fetchPriority="high"
            className="about-hero__photo"
          />
          <figcaption>
            <span className="about-hero__caption-icon"><Sprout size={24} aria-hidden="true" /></span>
            <div>
              <p>Farmers at the heart of everything.</p>
              <span>Smart technology. Sustainable livelihoods.</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <section className="about-principles about-section" aria-labelledby="about-principles-heading">
      <div className="about-inner">
        <h2 id="about-principles-heading" className="sr-only">What guides us</h2>
        <div className="about-principles__grid">
          {values.map((value, index) => (
            <article key={value.title} className="about-principle">
              <div className="about-principle__top">
                <span className="about-principle__icon"><value.icon size={24} aria-hidden="true" /></span>
                <span className="about-principle__number" aria-hidden="true">0{index + 1}</span>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="about-story" className="about-story about-section" aria-labelledby="about-story-heading">
      <div className="about-inner">
        <AboutStory />
        <figure className="about-film">
          <div className="about-film__player">
            <video controls preload="none" playsInline poster="/og-image.png" aria-label="AgriFlock 360 company video">
              <source src="/AgriFlock360 Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <figcaption>
            <span className="about-film__icon"><Sprout size={22} aria-hidden="true" /></span>
            <p className="about-eyebrow">Get to know AgriFlock 360</p>
            <h3>The people.{" "}<br />The purpose.{" "}<br /><span>The possibility.</span></h3>
            <p className="about-film__description">Meet the company behind the technology and the vision driving our work.</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section id="about-team" className="about-team about-section" aria-labelledby="about-team-heading">
      <div className="about-inner">
        <header className="about-team__intro">
          <div>
            <p className="about-eyebrow">Shared purpose. Different perspectives.</p>
            <h2 id="about-team-heading" className="about-title">Meet Our <span>Team</span></h2>
          </div>
          <p>A diverse group of technologists, agriculturalists, sustainable business leaders and entrepreneurs passionate about transforming smallholder farming.</p>
        </header>

        <section className="about-team__group" aria-labelledby="about-advisors-heading">
          <header className="about-team__group-heading">
            <div className="about-team__group-title">
              <span aria-hidden="true">01</span>
              <h3 id="about-advisors-heading">Board of Advisors</h3>
            </div>
            <p>Seasoned experts guiding AgriFlock 360 across legal strategy, poultry science, regulatory readiness, and hardware engineering.</p>
          </header>
          <div className="about-team__grid about-team__grid--advisors">
            {boardAdvisors.map((advisor) => <ProfileCard key={advisor.name} member={advisor} />)}
          </div>
        </section>

        <section className="about-team__group" aria-labelledby="about-leadership-heading">
          <header className="about-team__group-heading">
            <div className="about-team__group-title">
              <span aria-hidden="true">02</span>
              <h3 id="about-leadership-heading">Leadership Team</h3>
            </div>
          </header>
          <div className="about-team__grid about-team__grid--leadership">
            {team.map((member) => <ProfileCard key={member.name} member={member} />)}
          </div>
        </section>

        <section className="about-team__group about-team__group--engineering" aria-labelledby="about-engineering-heading">
          <header className="about-team__group-heading">
            <div className="about-team__group-title">
              <span aria-hidden="true">03</span>
              <h3 id="about-engineering-heading">Engineering Team</h3>
            </div>
            <a href="https://mglobalbusinessconsultancy.com" target="_blank" rel="noopener noreferrer" className="about-team__partner">
              M'Global Business Consultancy <ExternalLink size={16} aria-hidden="true" />
            </a>
          </header>
          <div className="about-team__grid about-team__grid--engineering">
            {engineeringTeam.map((engineer) => <ProfileCard key={engineer.name} member={engineer} />)}
          </div>
        </section>
      </div>
    </section>

    <section className="about-impact about-section" aria-labelledby="about-impact-heading">
      <div className="about-inner">
        <div className="about-impact__heading">
          <p className="about-eyebrow">Our work in numbers</p>
          <h2 id="about-impact-heading">Growing together.</h2>
        </div>
        <dl className="about-impact__stats">
          {impactStats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section id="build-the-future" className="about-partnership about-section" aria-labelledby="about-partnership-heading">
      <div className="about-partnership__panel">
        <div>
          <p className="about-eyebrow">Build the future with us</p>
          <h2 id="about-partnership-heading">Join the Digital<br /><span>Agriculture Revolution</span></h2>
          <p className="about-partnership__description">Partner with us to transform smallholder poultry farming</p>
        </div>
        <div className="about-partnership__actions about-actions">
          <Button variant="gold" asChild>
            <Link to="/contact">Become a Partner <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </Button>
          <Button variant="gold" asChild>
            <a href="#site-footer">Contact Us <ArrowDown size={18} aria-hidden="true" /></a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default About;
