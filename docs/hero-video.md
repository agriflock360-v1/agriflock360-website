# Home hero video

Generated on September 9, 2026 with the connected Higgsfield plugin.
Model: Wan 3.0, 30-second generation, 720p, native audio off.
Generation ID: e73b3e49-b3ec-4e0a-ae05-c661fc67d6f3.
Confirmed credit spend for this revision: 52.5.

## Current website assets

- `src/assets/chicks-hero-continuous.mp4`: 28.8 seconds, 1280 × 720, 30 fps, H.264, no audio track, 4,739,926 bytes.
- `src/assets/chicks-continuous-poster.webp`: matching 1280 × 720 still from the finished video.
- `src/assets/chicks-continuous-poster-small.webp`: 768 × 432 version of that still.

The scene contains chicks drinking from nipple drinkers, feeding from the green trough, and walking around the brooder. The camera remains fixed, with natural forward movement at the original frame rate.

## Repeat-point finishing

The generation used the same reference image for its opening and closing frames. Its final 0.6 seconds contained a visible generated reset, so the usable source was trimmed at 29.4 seconds. Playback begins at source time 0.6 seconds and ends by overlapping the source's last 0.6 seconds with its original opening. This produces a 28.8-second repeating sequence with a short blended transition.

Encoded with libx264, preset slow, CRF 21, yuv420p, and +faststart. The source's 30 fps and normal playback speed are preserved. No short clip was repeated or reversed to create the longer video.

FFmpeg filter used:

```text
[0:v]fps=30,settb=AVTB,split=2[body][head];
[body]trim=start=0.6:end=29.4,setpts=PTS-STARTPTS[main];
[head]trim=start=0:end=0.6,setpts=PTS-STARTPTS[intro];
[main][intro]xfade=transition=fade:duration=0.6:offset=28.2,format=yuv420p[out]
```

## Website behavior

Muted, inline, repeating playback with a visible play/pause button. Playback pauses outside the viewport or in a hidden tab, and respects a manual pause when returning. Reduced-motion preferences and failed video loads show a matching still image. Files are served from the website and playback does not use Higgsfield credits.

The original five-second Kling clip (generation b84bbb53-8a02-4a4f-9a0c-55a05a3955ce, 7.5 credits) remains in the source assets but is no longer imported by the hero.

## Generation prompt

```text
A continuous 30-second natural documentary observation of the healthy chicks in the supplied reference image. Animate this exact brooder scene in one unbroken, locked-off shot. Preserve the camera framing, sunlight, wood-shaving bedding, green feed trough, white water pipe and red nipple drinkers throughout. The start and end images are the same scene so the result can repeat gently as a website background.

For the entire take, show three overlapping, independent activities: a foreground chick occasionally stretches its neck upward and gently touches a metal nipple pin with its beak to drink, lowers its head to swallow, looks around and drinks again; the chicks at the green trough take small, irregular pecks of chick-starter feed, lift their heads and resume feeding; the other chicks freely wander a few steps at a time in the open bedding, pause, turn naturally, peck the bedding and walk around or behind the feeding birds. Keep some walking visible in the middle-right area, not only at the far left. All three activities should recur across the whole shot, not as three separate scenes. Natural variation in timing: chicks act independently, rest briefly, look around and continue at their own pace. The viewer should feel they are watching a real flock for half a minute, not repeated gestures.

The water equipment stays stationary. Use the existing nipple drinkers, not bowls. A tiny droplet releases when a beak touches a drinking pin; no spraying water or constant streams. Keep feeder and drinker sizes, bird anatomy and body proportions consistent. Feathers, beaks, eyes and feet remain clear and naturally sharp. Chicks stay separate, with realistic contact between feet and bedding. No birds appear, disappear, merge, change size or turn into different birds.

Ordinary real-time motion, gentle and relaxed but not artificially slowed down. No repeated five-second action cycles. Hold the same camera position and exposure from beginning to end, with no zooms, pans, cuts, scene changes, fades or time lapse. The birds gradually return near their initial positions through natural forward walking and turning, so the last moments match the supplied closing reference without a sudden reset or reversed movement. Keep movement small and plausible near both endpoints; no freeze frames. Avoid aggressive flapping or fast movement.

Maintain the soft daylight and realistic pale-yellow feather color of the reference. No cartoon proportions, oversized eyes, plush texture, plastic sheen, sharpening halos or cinematic haze. No people, text, labels, logos, watermark, interface, music or audio.
```
