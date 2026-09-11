import { useId, type ComponentType } from "react";
import {
  BookOpen,
  ClipboardCheck,
  Ear,
  HandCoins,
  Lightbulb,
  Search,
  TrendingUp,
  UsersRound,
  type LucideProps,
} from "lucide-react";
import "./AboutStory.css";

type CycleItem = {
  title: string;
  description: string;
  icon: ComponentType<LucideProps>;
  color: "green" | "orange" | "olive" | "maroon" | "gold" | "charcoal";
};

const ChickMark = ({ size = 24, strokeWidth = 1.7, ...props }: LucideProps) => (
  <svg viewBox="0 0 48 48" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={Number(strokeWidth) * 2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M34 8a8 8 0 0 0-8 8v3c-6 1-10-1-14-4-2 5-2 9 1 13 3 4 8 6 14 6 9 0 15-6 14-15v-3a8 8 0 0 0-7-8ZM41 16l5 3-5 2M18 24c3 3 7 3 10 0M25 34v6m-3 2 3-2 3 2m5-9v7m-3 2 3-2 3 2" />
    <circle cx="35" cy="14" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

const SolarMark = ({ size = 24, strokeWidth = 1.7, ...props }: LucideProps) => (
  <svg viewBox="0 0 48 48" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={Number(strokeWidth) * 2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="24" cy="11" r="5" />
    <path d="M24 1v2M14 4l2 2M11 11h3M34 4l-2 2M34 11h3M18 19l-2 2M30 19l2 2M10 25h28l5 15H5l5-15Zm-3 8h34M20 25l-2 15m10-15 2 15M24 40v5m-6 0h12" />
  </svg>
);

const LossMark = () => (
  <svg viewBox="0 0 48 48" width={36} height={36} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 41h38M8 17h6v20H8Zm11 7h6v13h-6Zm11 7h6v6h-6Z" />
    <path d="m16 7 24 18m-7-1 7 1-1-7" />
  </svg>
);

const journey: CycleItem[] = [
  {
    title: "Listen",
    description: "We listened to farmers and understood their everyday realities.",
    icon: Ear,
    color: "green",
  },
  {
    title: "Research",
    description: "We studied the challenges and explored possible solutions.",
    icon: Search,
    color: "green",
  },
  {
    title: "Prototype",
    description: "We built and designed simple solutions.",
    icon: Lightbulb,
    color: "green",
  },
  {
    title: "Test",
    description: "We tested in real farms and collected honest feedback.",
    icon: ClipboardCheck,
    color: "green",
  },
  {
    title: "Improve",
    description: "We refined, improved and kept building better.",
    icon: TrendingUp,
    color: "green",
  },
];

const farmerBenefits: CycleItem[] = [
  {
    title: "Healthier birds",
    description: "Better care and conditions lead to stronger, healthier flocks.",
    icon: ChickMark,
    color: "green",
  },
  {
    title: "Better decisions",
    description: "Real-time data and insights help farmers make informed choices every day.",
    icon: TrendingUp,
    color: "orange",
  },
  {
    title: "Higher profits",
    description: "Reduce losses, optimize resources and increase profitability.",
    icon: HandCoins,
    color: "olive",
  },
  {
    title: "Sustainable future",
    description: "Eco-friendly solutions that protect our planet and secure the future of poultry farming.",
    icon: SolarMark,
    color: "maroon",
  },
  {
    title: "Stronger communities",
    description: "Empowering farmers strengthens families, communities and food security.",
    icon: UsersRound,
    color: "gold",
  },
  {
    title: "Knowledge access",
    description: "Connect to knowledge, experts and resources when you need them.",
    icon: BookOpen,
    color: "charcoal",
  },
];

const FarmerMark = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Farmer, poultry and a growing plant, following the supplied illustration. */}
    <path d="M25 27h46c5 0 5 7 0 7H25c-5 0-5-7 0-7Zm9 0 3-12c1-4 20-4 22 0l4 12M36 35v8c0 17 25 17 25 0v-8M37 57c-15 2-19 11-20 27l24 4h16" />
    <path d="m30 65-1 14 16 3m17-26 7 9M46 68c-4-5-10-1-7 4l7 6 9-9M69 67c-9-9-2-19 4-17 5 1 6 4 6 8l5 4-6 2c1 13-13 18-24 12" />
    <path d="M68 91c-2-17 7-30 23-31-1 16-10 23-21 22m0 0 14-14M68 89c-12 0-18-7-19-16 9 1 15 5 19 16Z" />
    <circle cx="74" cy="56" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const pointOnCircle = (angle: number, radius = 158) => {
  const radians = angle * Math.PI / 180;
  return { x: 240 + radius * Math.cos(radians), y: 230 + radius * Math.sin(radians) };
};

const CycleGraphic = ({ kind }: { kind: "journey" | "benefits" }) => {
  const markerId = useId();
  const isJourney = kind === "journey";
  const items = isJourney ? journey : farmerBenefits;

  return (
    <figure className={`story-cycle story-cycle--${kind}`}>
      <figcaption className="story-cycle__heading">
        <h4>{isJourney ? "Our journey" : "A better future for farmers"}</h4>
        <p>{isJourney ? "From idea to impact" : "Profitable, sustainable and resilient businesses"}</p>
      </figcaption>
      <div className="story-cycle__diagram" aria-hidden="true">
        <svg className="story-cycle__connections" viewBox="0 0 480 480" fill="none">
          <defs>
            <marker id={markerId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="m2 1 6 4-6 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
          {items.map((item, index) => {
            const angle = -90 + index * 360 / items.length;
            const nextAngle = angle + 360 / items.length;
            const start = pointOnCircle(angle + (isJourney ? 17 : 13));
            const end = pointOnCircle(nextAngle - (isJourney ? 20 : 13));
            return (
              <path
                key={item.title}
                d={`M${start.x},${start.y} A158,158 0 0,1 ${end.x},${end.y}`}
                className={`story-cycle__arc story-color--${isJourney ? "olive" : item.color}`}
                markerEnd={isJourney ? `url(#${markerId})` : undefined}
              />
            );
          })}
        </svg>
        <div className="story-cycle__center">
          {isJourney ? <ChickMark strokeWidth={1.6} /> : <FarmerMark />}
          <p>{isJourney ? <>Built with farmers.<br />Built for impact.</> : <>Farmers<br />at the heart.</>}</p>
        </div>
        {items.map((item, index) => {
          const point = pointOnCircle(-90 + index * 360 / items.length);
          return (
            <div key={item.title} className={`story-cycle__node story-color--${item.color}`} style={{ left: `${point.x / 4.8}%`, top: `${point.y / 4.8}%` }}>
              <span className="story-cycle__node-icon">
                <item.icon strokeWidth={1.6} />
                {isJourney && <span className="story-cycle__node-number">0{index + 1}</span>}
              </span>
              <span className="story-cycle__node-title">{item.title}</span>
            </div>
          );
        })}
      </div>
      {isJourney ? (
        <ol className="story-cycle__key" aria-label="Our journey: built with farmers, built for impact">
          {items.map((item, index) => (
            <li key={item.title} className={`story-cycle__key-item story-color--${item.color}`}>
              <span className="story-cycle__key-icon" aria-hidden="true">0{index + 1}</span>
              <div><h5>{item.title}</h5><p>{item.description}</p></div>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="story-cycle__key" aria-label="Benefits for farmers">
          {items.map((item) => (
            <li key={item.title} className={`story-cycle__key-item story-color--${item.color}`}>
              <span className="story-cycle__key-icon" aria-hidden="true"><item.icon size={18} strokeWidth={1.7} /></span>
              <div><h5>{item.title}</h5><p>{item.description}</p></div>
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
};

export const AboutStory = () => (
  <>
    <header className="about-story__heading">
      <div>
        <p className="about-eyebrow">How it all began</p>
        <h2 id="about-story-heading" className="about-title">Our <span>Story</span></h2>
      </div>
      <p className="about-story__lead">A decade of listening. A future built around farmers.</p>
    </header>
    <div className="about-story__steps">
      <article className="about-story__step">
        <div className="about-story__copy">
          <span className="about-story__number" aria-hidden="true">01 / The challenge</span>
          <h3>Understanding the challenge</h3>
          <p>
            AgriFlock 360 was born from a decade of observation of bottlenecks affecting poultry value chain and farmers losing
            up to 40% of their chicks due to preventable causes. This combined with expertise in sustainable business and climate solutions.
          </p>
        </div>
        <figure className="story-loss" aria-label="Farmers can lose up to 40% of their chicks to preventable causes">
          <span className="story-loss__icon" aria-hidden="true"><LossMark /></span>
          <p className="story-loss__intro">Farmers can lose up to</p>
          <p className="story-loss__value">40<span>%</span></p>
          <p className="story-loss__subject">of their chicks</p>
          <div className="story-loss__divider" />
          <p className="story-loss__cause">To preventable<br />causes.</p>
          <ChickMark className="story-loss__chick" size={54} strokeWidth={1.5} aria-hidden="true" />
        </figure>
      </article>
      <article className="about-story__step">
        <div className="about-story__copy">
          <span className="about-story__number" aria-hidden="true">02 / Our journey</span>
          <h3>Building and testing</h3>
          <p>
            After years of research, prototyping, and field testing with over 50 farmers across
            three countries, we developed the AgriFlock 360 MVP: a complete ecosystem combining
            solar-powered smart brooders with mobile-first farm management tools.
          </p>
        </div>
        <CycleGraphic kind="journey" />
      </article>
      <article className="about-story__step">
        <div className="about-story__copy">
          <span className="about-story__number" aria-hidden="true">03 / Our purpose</span>
          <h3>Growing with farmers</h3>
          <p>
            Today, we're working with small holder poultry farmers across the world, helping them reduce
            mortality rates, optimize feed conversion, and increase profitability—all while promoting
            sustainable, solar-powered agriculture.
          </p>
        </div>
        <CycleGraphic kind="benefits" />
      </article>
    </div>
  </>
);
