import { ArrowRight, Home, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found-page" aria-labelledby="not-found-heading">
      <div className="not-found-content">
        <p className="not-found-eyebrow"><span aria-hidden="true" />404 · Page not found</p>

        <svg className="not-found-art" viewBox="0 0 640 300" fill="none" aria-hidden="true" focusable="false">
          <circle className="not-found-art__sun" cx="485" cy="67" r="38" />
          <path className="not-found-art__cloud" d="M110 75h42m-21-12h41" />
          <ellipse className="not-found-art__ground" cx="320" cy="257" rx="247" ry="18" />
          <text className="not-found-art__number" x="139" y="248" textAnchor="middle">4</text>
          <text className="not-found-art__number" x="499" y="248" textAnchor="middle">4</text>

          <g className="not-found-art__chick">
            <path className="not-found-art__feather" d="M307 99c-18-25-2-39 9-13 5-29 24-25 13 2 19-17 31-4 10 13" />
            <path className="not-found-art__body" d="M320 92c-43 0-62 37-62 73-16 15-22 39-13 59 11 24 139 25 150-1 9-20-1-44-15-59 0-38-22-72-60-72Z" />
            <path className="not-found-art__wing" d="M273 174c-13 9-14 26 2 32m90-32c13 9 14 26-2 32" />
            <circle className="not-found-art__eye" cx="300" cy="140" r="4.5" />
            <circle className="not-found-art__eye" cx="340" cy="140" r="4.5" />
            <path className="not-found-art__beak" d="m310 154 10 10 10-10-10-6Z" />
            <ellipse className="not-found-art__cheek" cx="287" cy="154" rx="8" ry="4" />
            <ellipse className="not-found-art__cheek" cx="353" cy="154" rx="8" ry="4" />
          </g>

          <path className="not-found-art__shell" d="m244 191 24 10 20-17 27 23 27-24 25 18 25-12c9 45-18 71-72 71-51 0-80-24-76-69Z" />
          <path className="not-found-art__shell-detail" d="m296 222 13 9-8 14m67-27c-5 16-16 24-31 27" />
          <g className="not-found-art__sprout">
            <path d="M77 249v-29m0 12c-15 0-22-10-22-17 14 0 22 8 22 17Zm0-6c0-13 8-21 20-22-1 11-8 21-20 22Z" />
            <path d="M566 249v-19m0 6c-9 0-15-7-15-13 10 0 15 6 15 13Zm0-4c0-9 5-14 13-15 0 8-5 14-13 15Z" />
          </g>
          <path className="not-found-art__trail" d="M188 277c20 15 50 13 63 3m139 0c30-24 39 25 63 6 13-11-4-21-17-12" />
        </svg>

        <h1 id="not-found-heading">This page has<br /><span>flown the coop.</span></h1>
        <p className="not-found-description">A little detour, that’s all. The page may have moved,<br className="not-found-desktop-break" /> or the address might be a little off. Let’s get you back to the flock.</p>

        <div className="not-found-actions">
          <Button asChild variant="gold" size="lg"><Link to="/"><Home aria-hidden="true" />Return to Home<ArrowRight aria-hidden="true" /></Link></Button>
          <Link className="not-found-explore" to="/features">Explore our features<MoveUpRight size={17} aria-hidden="true" /></Link>
        </div>

        <p className="not-found-help">Still feeling a little lost? <Link to="/contact">Our team can help<ArrowRight size={14} aria-hidden="true" /></Link></p>
      </div>
    </section>
  );
};

export default NotFound;
