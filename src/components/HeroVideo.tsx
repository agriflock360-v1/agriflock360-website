import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  videoSrc: string;
  posterSrc: string;
  posterSmallSrc: string;
};

export const HeroVideo = ({ videoSrc, posterSrc, posterSmallSrc }: HeroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [userPaused, setUserPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(preference.matches);
    preference.addEventListener("change", onChange);
    return () => preference.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isVisible = false;
    const updatePlayback = () => {
      if (isVisible && !document.hidden && !userPaused) {
        void video.play().catch(() => setIsPlaying(false));
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0.1 });

    observer.observe(video);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, [userPaused, reducedMotion, hasError]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setUserPaused(false);
      void video.play().catch(() => setIsPlaying(false));
    } else {
      setUserPaused(true);
      video.pause();
    }
  };

  return (
    <div className="home-hero__photograph">
      <img
        src={posterSrc}
        srcSet={`${posterSmallSrc} 768w, ${posterSrc} 1280w`}
        sizes="(max-width: 1023px) 100vw, 75vw"
        alt="Yellow chicks moving freely on wood-shaving bedding, eating from a green feeder and drinking from a nipple drinker line in a sunlit brooder."
        width={1280}
        height={720}
        fetchPriority="high"
        decoding="async"
      />
      {!reducedMotion && !hasError && (
        <>
          <video
            ref={videoRef}
            className="home-hero__video"
            src={videoSrc}
            poster={posterSrc}
            width={1280}
            height={720}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
            onCanPlay={() => setIsReady(true)}
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => setHasError(true)}
          />
          {isReady && (
            <button
              type="button"
              className="button-gold home-hero__playback"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause background video" : "Play background video"}
            >
              {isPlaying ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
              {isPlaying ? "Pause" : "Play"}
            </button>
          )}
        </>
      )}
    </div>
  );
};
