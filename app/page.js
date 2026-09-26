"use client";

import { useState, useRef } from "react";

const houses = [
  {
    numeral: "I",
    label: "You",
    eyebrow: "Your personality",
    headline: "Ever noticed",
    image: "/3.jpeg",
    imagePos: "center 20%",
    body: "Your Moon in Pisces made you feel everything before you understood it — soft, endless, achingly kind. Saturn sight never let that softness break. Jupiter blessing never let it go unnoticed. That's the girl with a strong character and the gentlest heart I have ever met.",
    foot: "Soft as Pisces",
    symbol: "pisces",
  },
  {
    numeral: "II",
    label: "Values-",
    eyebrow: "Your worth",
    headline: "Ever Respected",
    image: "/2.jpg",
    imagePos: "center 20%",
    body: "Aries never let yourself shrink to fit. You speak your value with fire — in your voice, in your choices, in the way you refuse to settle. It's not arrogance, it's truth: the world sees you exactly as you see yourself. You taught me that one should respect value of others.",
    foot: "Fiery as Aries",
    symbol: "aries",
  },
  {
    numeral: "III",
    label: "Speech-Efforts",
    eyebrow: "Your Efforts ",
    headline: "None can Match",
    image: "/4.jpeg",
    imagePos: "center 20%",
    body: "Taurus slows your words into something tender and soft. Rahu stirs inside, restless and daring, making your thoughts sparkle with curiosity. Mars fire so that when you finally speak every word you give  feels like a promise  want to hold and last forever.",
    foot: "Steadfast as Taurus",
    symbol: "taurus",
  },
  {
    numeral: "IV",
    label: "Emotions",
    eyebrow: "Where Love lives",
    headline: "Home is you",
    image: "/5.jpeg",
    imagePos: "center 20%",
    body: "Gemini makes your home feel alive in conversation — laughter, stories, the way you turn walls into warmth. Venus and Saturn here make your devotion unshakable. You stay, you keep, you love with promises that last. For me, home isn't a place anymore — it's wherever you are happy and safe.",
    foot: "Alive of Gemini",
    symbol: "gemini",
  },
  {
    numeral: "V",
    label: "Expression",
    eyebrow: "Your Endless Love ",
    headline: "is unconditional",
    image: "/6.jpeg",
    imagePos: "center 20%",
    body: "In Cancer's embrace, Sun, Jupiter, and Mercury gather to make your love radiant. You feel deeply, speak it openly, and give with a heart that never runs out. Being with you is more than romance — it's joy, devotion, and the kind of love I want to keep forever.",
    foot: "Radiant as Cancer",
    symbol: "cancer",
  },
  {
    numeral: "VI",
    label: "Fights",
    eyebrow: "Your Daily Battles",
    headline: "wrapped in Love",
    image: "/7.jpeg",
    imagePos: "center 20%",
    body: "Leo lights up your daily life, turning even routines into something proud and radiant. Mars adds fire to your effort, Saturn steadies it with discipline. With you, even ordinary moments shine — proof that love is not just grand gestures, but the golden way you carry me through the everyday.",
    foot: "Proud as Leo",
    symbol: "leo",
  },
  {
    numeral: "VII",
    label: "Me",
    eyebrow: "Your Chosen Bond",
    headline: "Love with intentions",
    image: "/8.jpeg",
    imagePos: "center 20%",
    body: "Virgo guides your house of partnership, so love with you is never careless. The Moon touches it softly, filling it with feeling, while Mars casts its fire, making devotion unshakable. You don't choose loudly — you choose truly, and every day you remind me that being loved by you is the most certain promise I'll ever know.",
    foot: "Precise as Virgo",
    symbol: "virgo",
  },
  {
    numeral: "VIII",
    label: "Priority",
    eyebrow: "Where trust lives",
    headline: "Safety is Priority",
    image: "/9.jpeg",
    imagePos: "center 20%",
    body: "Libra softens the deepest house, turning vulnerability into balance and intimacy into safety. You meet halfway, with fairness and gentleness, even in the most exposed moments. With you, closeness feels like trust, and love feels like a promise I never want to let go of.",
    foot: "Balanced as Libra",
    symbol: "libra",
  },
  {
    numeral: "IX",
    label: "Blessing",
    eyebrow: "Your Fortune",
    headline: "Shaped by Wisdom",
    image: "/10.jpeg",
    imagePos: "center 20%",
    body: "Scorpio and Ketu shape your house of belief, giving you a depth that never settles for surface truths. Jupiter blessing turning that depth into wisdom and faith. Being with you feels like finding own guiding star.",
    foot: "Deep as Scorpio",
    symbol: "scorpio",
  },
  {
    numeral: "X",
    label: "Rights",
    eyebrow: "Your boundless path",
    headline: "Queen Success",
    image: "/11.jpeg",
    imagePos: "center 20%",
    body: "Sagittarius crowns your chart, making your ambition wide and unafraid of horizons. Saturn steadies that reach with patience, Venus softens it with grace, so your success is never just about achievement — it's about meaning, beauty, and love carried into the world. You were never built for small rooms.",
    foot: "Boundless as Sagittarius",
    symbol: "sagittarius",
  },
  {
    numeral: "XI",
    label: "Desires",
    eyebrow: "Dreams with light",
    headline: "Friendship that endures",
    image: "/12.jpeg",
    imagePos: "center 20%",
    body: "Capricorn steadies your house of hopes, making them patient and lasting. Sun, Jupiter and Mercury giving warmth, wisdom, and voice to the dreams you build. You don't collect people casually; you keep them, nurture them, and turn friendships into family. With you, every dream feels like it was built to last.",
    foot: "Steady as Capricorn",
    symbol: "capricorn",
  },
  {
    numeral: "XII",
    label: "US Together",
    eyebrow: "Your hidden fire",
    headline: "Quiet strength ",
    image: "/1.jpg",
    imagePos: "center 20%",
    body: "Aquarius keeps your private universe vast and thoughtful, but Mars guarding your soul. A fighter's spark, reserved only for the people and truths you've chosen. Letting me into that hidden fire is the greatest gift, and I count myself lucky to be trusted with it.",
    foot: "Vast as Aquarius",
    symbol: "aquarius",
  },
];

const TOTAL = 12;
const PASSCODE = "2013";

const notes = [
  "I hurt but will pray and bow forever. You deserve to be happy and respected always, and you succeeded. I wish you have the happiness and respect you deserve — with me, in future. Hoping to have you back in my arms with respect and safety, not only love and lust. This time I am making myself strong, to not allow myself to hurt you. I don't want to snatch your happiness.",
  "I am getting what I deserve. Don't ever blame, hurt or disrespect your image — it's very precious. Smile like you used to. I wish you could see and feel that I am just loving you, praying for your happiness, and praying that God blesses you to forgive and come back to me with all safety and respect. I am no one without you. I am empty without you. I am half dead without you. I just wish to have everything between us smooth and alright. I wish to have you feel safe, secure, happy around.",
];

function HouseSymbol({ symbol }) {
  const common = "absolute -top-2 -left-6 opacity-[0.06] rotate-[-8deg]";
  switch (symbol) {
    case "pisces":
      return (
        <svg className={common} width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M35 10c-15 6-20 22-20 40s5 34 20 40M65 10c15 6 20 22 20 40s-5 34-20 40" stroke="#33261c" strokeWidth="3" strokeLinecap="round" />
          <line x1="15" y1="50" x2="85" y2="50" stroke="#33261c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "aries":
      return (
        <svg className="absolute -top-2 -left-4 opacity-[0.06] rotate-[-6deg]" width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M50 90V45M50 45c-18 0-28-14-28-30 0-8 5-13 12-13s12 7 12 15M50 45c18 0 28-14 28-30 0-8-5-13-12-13s-12 7-12 15" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "taurus":
      return (
        <svg className="absolute -top-2 -left-5 opacity-[0.06] rotate-[-6deg]" width="120" height="120" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="60" r="20" stroke="#33261c" strokeWidth="3" fill="none" />
          <path d="M25 45c-10-8-12-22-4-30M75 45c10-8 12-22 4-30" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "gemini":
      return (
        <svg className="absolute -top-2 -left-5 opacity-[0.06] rotate-[-5deg]" width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M30 15v70M70 15v70M20 15h20M60 15h20M20 85h20M60 85h20" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "cancer":
      return (
        <svg className="absolute -top-2 -left-6 opacity-[0.06] rotate-[-4deg]" width="120" height="120" viewBox="0 0 100 100" fill="none">
          <circle cx="30" cy="35" r="9" stroke="#33261c" strokeWidth="3" fill="none" />
          <circle cx="70" cy="65" r="9" stroke="#33261c" strokeWidth="3" fill="none" />
          <path d="M30 44c0 20 16 26 30 12M70 56c0-20-16-26-30-12" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "leo":
      return (
        <svg className="absolute -top-2 -left-5 opacity-[0.06] rotate-[-6deg]" width="120" height="120" viewBox="0 0 100 100" fill="none">
          <circle cx="35" cy="55" r="16" stroke="#33261c" strokeWidth="3" fill="none" />
          <path d="M50 60c15 0 25-10 25-24 0-10-6-17-14-17-6 0-10 5-10 11" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "virgo":
      return (
        <svg className="absolute -top-2 -left-5 opacity-[0.06] rotate-[-5deg]" width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M20 20v40c0 10 8 15 15 15s15-5 15-15V20M50 20v40c0 10 8 15 15 15s12-4 14-10M79 20v45c8 0 15 7 15 15s-6 14-14 14" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "libra":
      return (
        <svg className="absolute -top-2 -left-5 opacity-[0.06] rotate-[-4deg]" width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M20 70h60M25 55c0-15 11-25 25-25s25 10 25 25" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
          <line x1="30" y1="82" x2="70" y2="82" stroke="#33261c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "scorpio":
      return (
        <svg className="absolute -top-2 -left-5 opacity-[0.06] rotate-[-5deg]" width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M20 20v40c0 10 8 15 15 15s15-5 15-15V20M50 20v40c0 10 8 15 15 15s12-4 14-10M79 20v50l12-6M91 64l-3 12" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "sagittarius":
      return (
        <svg className="absolute -top-2 -left-5 opacity-[0.06] rotate-[-4deg]" width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M20 80 L80 20M55 20h25v25M45 55l10 10" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "capricorn":
      return (
        <svg className="absolute -top-2 -left-5 opacity-[0.06] rotate-[-5deg]" width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M20 20c0 30 10 45 22 45s16-12 12-20-14-6-14 2M55 30v40c0 12 10 18 18 18 10 0 15-8 15-15s-6-13-13-11" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "aquarius":
      return (
        <svg className="absolute -top-2 -left-5 opacity-[0.06] rotate-[-4deg]" width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M15 40l14-8 14 8 14-8 14 8 14-8 14 8" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M15 65l14-8 14 8 14-8 14 8 14-8 14 8" stroke="#33261c" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

function CornerSymbol({ symbol }) {
  const common = "absolute -bottom-4 -right-4 opacity-[0.07] rotate-[10deg]";
  switch (symbol) {
    case "pisces":
      return (
        <svg className={common} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path d="M62 15C45 18 33 33 33 52c0 21 17 38 38 38 6 0 12-1 17-4-9 10-22 16-37 16-27 0-49-22-49-50S24 2 51 2c4 0 8 .4 11 1.2 0 4-.2 8-.2 11.8Z" fill="#33261c" />
        </svg>
      );
    case "aries":
      return (
        <svg className="absolute -bottom-4 -right-6 opacity-[0.07] rotate-[8deg]" width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path d="M20 20 L50 65 L80 20" stroke="#33261c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case "taurus":
      return (
        <svg className={common} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <circle cx="45" cy="55" r="18" stroke="#33261c" strokeWidth="4" fill="none" />
          <path d="M25 40c-8-6-10-18-3-24" stroke="#33261c" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "gemini":
      return (
        <svg className={common} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path d="M30 20v60M70 20v60" stroke="#33261c" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "cancer":
      return (
        <svg className={common} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <circle cx="35" cy="35" r="8" stroke="#33261c" strokeWidth="4" fill="none" />
          <circle cx="65" cy="65" r="8" stroke="#33261c" strokeWidth="4" fill="none" />
        </svg>
      );
    case "leo":
      return (
        <svg className={common} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path d="M20 70c20 10 40 10 55-8 8-9 8-22-2-28" stroke="#33261c" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "virgo":
      return (
        <svg className={common} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path d="M25 25v45M50 25v45M75 25v55" stroke="#33261c" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "libra":
      return (
        <svg className={common} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path d="M20 75h60" stroke="#33261c" strokeWidth="4" strokeLinecap="round" />
          <path d="M30 55c0-12 9-20 20-20s20 8 20 20" stroke="#33261c" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "scorpio":
      return (
        <svg className={common} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path d="M20 25v45c0 8 6 12 12 12M55 25v45l14-7" stroke="#33261c" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "sagittarius":
      return (
        <svg className={common} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path d="M20 80 L80 20M55 20h25v25" stroke="#33261c" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "capricorn":
      return (
        <svg className={common} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path d="M25 25c0 25 8 38 18 38s13-9 10-16-11-5-11 2" stroke="#33261c" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "aquarius":
      return (
        <svg className={common} width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path d="M15 45l14-8 14 8 14-8 14 8 14-8 14 8" stroke="#33261c" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  // stage: "lock" -> "code" -> "open" -> "final"
  const [stage, setStage] = useState("lock");
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [shake, setShake] = useState(false);
  const [index, setIndex] = useState(0);
  const [noteIndex, setNoteIndex] = useState(0);
  const notesRef = useRef(null);
  const house = houses[index];

  const handleNotesScroll = (e) => {
    const el = e.target;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setNoteIndex(idx);
  };

  const makeHearts = (seedOffset = 0) =>
    Array.from({ length: 9 }, (_, i) => {
      const n = i + seedOffset;
      return {
        id: n,
        left: 8 + ((n * 37) % 84), // spread 8%–92%, pseudo-random but stable
        delay: (n % 9) * 0.14,
        duration: 1.3 + ((n * 13) % 6) / 10, // 1.3s–1.8s
        size: 13 + ((n * 19) % 4) * 3, // 13–22px
        drift: (((n * 29) % 60) - 30), // -30px to +30px sideways
        rotFrom: ((n * 17) % 40) - 20,
        rotTo: ((n * 23) % 60) - 30,
        color: ["#f3c9d4", "#f7dfe6", "#eab8c8", "#e94057"][n % 4],
        opacity: 0.65 + ((n * 11) % 30) / 100,
      };
    });

  const goNext = () => {
    if (index < houses.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setStage("final");
    }
  };
  const goPrev = () => setIndex((i) => Math.max(i - 1, 0));

  const handleDigit = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...digits];
    next[i] = val;
    setDigits(next);

    if (val && i < 3) {
      document.getElementById(`code-${i + 1}`)?.focus();
    }

    if (next.every((d) => d !== "")) {
      const code = next.join("");
      if (code === PASSCODE) {
        setTimeout(() => setStage("open"), 150);
      } else {
        setShake(true);
        setTimeout(() => {
          setShake(false);
          setDigits(["", "", "", ""]);
          document.getElementById("code-0")?.focus();
        }, 500);
      }
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      document.getElementById(`code-${i - 1}`)?.focus();
    }
  };

  return (
    <main className="h-[100svh] bg-[#141220] flex items-center justify-center sm:p-6 overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&display=swap');
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes swipe-hint {
          0%, 100% { transform: translate(0, -50%); opacity: 0.5; }
          50% { transform: translate(-5px, -50%); opacity: 1; }
        }
        .animate-swipe-hint {
          animation: swipe-hint 1.3s ease-in-out infinite;
        }
      `}</style>
      {(stage === "lock" || stage === "code") && (
        <div
          onClick={() => {
            if (stage !== "lock") return;
            setStage("code");
            setTimeout(() => document.getElementById("code-0")?.focus(), 50);
          }}
          role={stage === "lock" ? "button" : undefined}
          tabIndex={stage === "lock" ? 0 : undefined}
          onKeyDown={(e) => {
            if (stage === "lock" && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              setStage("code");
              setTimeout(() => document.getElementById("code-0")?.focus(), 50);
            }
          }}
          className={`w-full h-[100svh] sm:w-[320px] sm:h-[420px] sm:rounded-3xl bg-[#f6f0e6] border border-[#33261c]/10 flex flex-col items-center justify-center gap-7 text-center px-8 shadow-2xl relative overflow-hidden ${
            stage === "lock" ? "cursor-pointer" : ""
          }`}
        >
          {/* soft warm glow, calm rather than moody */}
          <div className="absolute w-[240px] h-[240px] rounded-full bg-[#e8b4c8]/25 blur-3xl animate-breathe pointer-events-none" />

          {/* a few slow drifting hearts, sparse and gentle */}
          {stage === "lock" &&
            [0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="absolute bottom-10 pointer-events-none z-0"
                style={{
                  left: `${18 + i * 22}%`,
                  fontSize: `${13 + (i % 2) * 5}px`,
                  color: ["#eab8c8", "#f3c9d4", "#e8b4c8"][i % 3],
                  opacity: 0.6,
                  "--delay": `${i * 0.9}s`,
                  "--duration": "4.5s",
                  "--drift": `${(i % 2 === 0 ? 1 : -1) * 14}px`,
                  "--rot-from": "-8deg",
                  "--rot-to": "8deg",
                  "--start-scale": 0.6,
                  "--end-scale": 1,
                  "--peak-opacity": 0.6,
                  animationIterationCount: "infinite",
                }}
              >
                <span className="animate-heart inline-block">♥</span>
              </span>
            ))}

          {/* wheel, redrawn in warm ink instead of gold-on-navy */}
          <div className="relative w-[168px] h-[168px] shrink-0 z-10">
            <svg className="absolute inset-0" viewBox="0 0 176 176" fill="none">
              <circle cx="88" cy="88" r="86" stroke="#33261c" strokeOpacity="0.14" strokeWidth="1" />
              <circle cx="88" cy="88" r="62" stroke="#33261c" strokeOpacity="0.1" strokeWidth="1" />
            </svg>

            {houses.map((h, i) => {
              const angle = (i / houses.length) * 360 - 90;
              return (
                <div
                  key={h.symbol}
                  className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 flex items-center justify-center"
                  style={{ transform: `rotate(${angle}deg) translate(86px) rotate(${-angle}deg)` }}
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-[#c1274a]/60" />
                </div>
              );
            })}

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1
                className="text-[36px] text-[#33261c] leading-none"
                style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}
              >
                MiniMoon
              </h1>
              <span className="mt-2 text-[10px] text-[#b89a6a] tracking-wide">
                One Girl, 12 Ways
              </span>
            </div>
          </div>

          {stage === "lock" && (
            <div className="flex flex-col items-center gap-3 z-10">
              <p
                className="text-[16px] text-[#5b4c3f] leading-relaxed max-w-[24ch]"
                style={{ fontFamily: "'Caveat', cursive", fontWeight: 500 }}
              >
                a small universe containing you
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#8a7d6a] italic tracking-wide">
                <span className="w-6 h-px bg-[#b89a6a]/50" />
                <span>touch anywhere to begin</span>
                <span className="w-6 h-px bg-[#b89a6a]/50" />
              </div>
            </div>
          )}

          {stage === "code" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-4 z-10"
            >
              <p
                className="text-[15px] text-[#5b4c3f] tracking-wide"
                style={{ fontFamily: "'Caveat', cursive", fontWeight: 500 }}
              >
                only you know the way in
              </p>
              <div className={`flex gap-3 ${shake ? "animate-shake" : ""}`}>
                {digits.map((d, i) => (
                  <input
                    key={i}
                    id={`code-${i}`}
                    type="password"
                    inputMode="numeric"
                    maxLength={1}
                    value={d}
                    onChange={(e) => handleDigit(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    className="w-10 h-12 text-center text-lg rounded-xl bg-white/60 border border-[#33261c]/20 text-[#33261c] focus:outline-none focus:border-[#c1274a]/60 transition-colors"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {stage === "open" && (
        <div
          key={house.numeral}
          className="animate-card-in w-full h-[100svh] sm:w-[320px] sm:h-[420px] sm:rounded-3xl bg-[#f6f0e6] shadow-2xl relative overflow-hidden flex flex-col"
        >
          {makeHearts(index * 9).map((h) => (
            <span
              key={h.id}
              className="absolute bottom-10 pointer-events-none z-30"
              style={{
                left: `${h.left}%`,
                fontSize: `${h.size}px`,
                color: h.color,
                opacity: h.opacity,
                "--delay": `${h.delay}s`,
                "--duration": `${h.duration}s`,
                "--drift": `${h.drift}px`,
                "--rot-from": `${h.rotFrom}deg`,
                "--rot-to": `${h.rotTo}deg`,
                "--start-scale": 0.5,
                "--end-scale": 1.1,
                "--peak-opacity": h.opacity,
              }}
            >
              <span className="animate-heart inline-block">♥</span>
            </span>
          ))}

          {/* photo */}
          <div className="relative h-[46%] shrink-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: `url('${house.image}')`,
                backgroundPosition: house.imagePos,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#3a2f5a]/40 via-[#1f3b34]/10 to-[#f6f0e6] mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

            <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] text-white font-medium bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a875]" />
                {house.numeral} · {house.label}
              </span>
              <span className="text-[11px] tracking-widest text-white font-medium bg-black/35 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20 tabular-nums">
                {String(index + 1).padStart(2, "0")}/{String(TOTAL).padStart(2, "0")}
              </span>
            </div>

            <svg
              className="absolute -bottom-px left-0 w-full"
              viewBox="0 0 400 40"
              preserveAspectRatio="none"
              height="40"
            >
              <path d="M0,40 Q200,0 400,40 L400,40 L0,40 Z" fill="#f6f0e6" />
            </svg>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-px bg-[#c9a875]/60 z-10" />
          </div>

          {/* text panel */}
          <div className="flex-1 flex flex-col items-center px-2 pt-1 pb-1 relative overflow-hidden min-h-0">
            <HouseSymbol symbol={house.symbol} />
            <CornerSymbol symbol={house.symbol} />

            <span className="relative text-[9px] tracking-[0.2em] text-[#b89a6a] mb-2 uppercase shrink-0">
              {house.eyebrow}
            </span>

            <h2 className="relative text-[28px] italic font-serif leading-tight mb-5 max-w-[15ch] text-[#33261c] shrink-0">
              {house.headline}
            </h2>

            <p className="relative text-[13px] leading-relaxed text-[#5b4c3f] max-w-[33ch] shrink-0">
              {house.body}
            </p>

            <div className="relative flex items-center gap-2 mt-8 shrink-0 pt-1">
              <span className="w-4 h-px bg-[#b89a6a]/60" />
              <span className="text-[11px] italic tracking-wide text-[#8a7d6a]">
                {house.foot}
              </span>
              <span className="w-4 h-px bg-[#b89a6a]/60" />
            </div>
          </div>

          {/* nav arrows */}
          {index > 0 && (
            <button
              onClick={goPrev}
              className="absolute left-4 bottom-6 w-9 h-9 rounded-full bg-[#33261c]/10 border border-[#33261c]/20 text-[#33261c] text-lg flex items-center justify-center z-20"
              aria-label="Previous house"
            >
              ‹
            </button>
          )}
          <button
            onClick={goNext}
            className="absolute right-4 bottom-6 w-9 h-9 rounded-full bg-[#33261c]/10 border border-[#33261c]/20 text-[#33261c] text-lg flex items-center justify-center z-20"
            aria-label={index < houses.length - 1 ? "Next house" : "Finish"}
          >
            ›
          </button>
        </div>
      )}

      {stage === "final" && (
        <div className="animate-card-in w-full h-[100svh] sm:w-[320px] sm:h-[420px] sm:rounded-3xl bg-[#f6f0e6] shadow-2xl relative overflow-hidden flex flex-col px-8 pt-10 pb-8">
          {makeHearts(999).map((h) => (
            <span
              key={h.id}
              className="absolute bottom-10 pointer-events-none z-30"
              style={{
                left: `${h.left}%`,
                fontSize: `${h.size}px`,
                color: h.color,
                opacity: h.opacity,
                "--delay": `${h.delay}s`,
                "--duration": `${h.duration}s`,
                "--drift": `${h.drift}px`,
                "--rot-from": `${h.rotFrom}deg`,
                "--rot-to": `${h.rotTo}deg`,
                "--start-scale": 0.5,
                "--end-scale": 1.1,
                "--peak-opacity": h.opacity,
              }}
            >
              <span className="animate-heart inline-block">♥</span>
            </span>
          ))}
          {/* small numeral tag, matching the other cards' top-left marker */}
          <span className="text-[9px] tracking-[0.2em] text-[#b89a6a] uppercase mb-1">
            XIII · THE CONNECTION
          </span>

          <h2
            className="text-[20px] text-[#33261c] leading-none mb-4"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}
          >
            My Queen and Goddess
          </h2>

          {/* swipeable note, two cards, with a peek of the next one */}
          <div className="relative -mx-8">
            <div
              ref={notesRef}
              onScroll={handleNotesScroll}
              className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-8"
            >
              {notes.map((note, i) => (
                <div key={i} className="snap-center shrink-0 w-[86%] pr-6">
                  <p
                    className="text-[13px] text-[#33261c] leading-relaxed"
                    style={{ fontFamily: "'Caveat', cursive", fontWeight: 500 }}
                  >
                    {note}
                  </p>
                </div>
              ))}
            </div>

            {noteIndex === 0 && notes.length > 1 && (
              <div className="absolute top-1/2 right-2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-[#c9a875]/15 text-[#b89a6a] text-sm animate-swipe-hint pointer-events-none">
                ›
              </div>
            )}
          </div>

          {notes.length > 1 && noteIndex === 0 && (
            <span className="text-[10px] text-[#b89a6a]/70 text-center mt-1 shrink-0">
              swipe for the rest
            </span>
          )}

          <div className="flex items-center justify-center gap-1.5 mt-3 mb-5 shrink-0">
            {notes.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  noteIndex === i ? "w-4 bg-[#c1274a]" : "w-1.5 bg-[#c9a875]/40"
                }`}
              />
            ))}
          </div>

          {/* three lines, each with a heart at a different fill level */}
          <div className="flex-1 grid grid-rows-3 items-center">
            {[
              { text: "without you", fill: 5 },
              { text: "when I see you happy", fill: 50 },
              { text: "when I have you happy", fill: 100 },
            ].map((line, i) => (
              <div key={i} className="grid grid-cols-[1fr_48px] items-center">
                <span
                  className="text-[#5b4c3f] text-[20px]"
                  style={{ fontFamily: "'Caveat', cursive", fontWeight: 500 }}
                >
                  {line.text}
                </span>
                <svg
                  width="40"
                  height="36"
                  viewBox="0 0 32 29"
                  className="justify-self-end drop-shadow-sm"
                >
                  <defs>
                    <clipPath id={`heart-clip-${i}`}>
                      <rect
                        x="0"
                        y={29 - (29 * line.fill) / 100}
                        width="32"
                        height={(29 * line.fill) / 100}
                      />
                    </clipPath>
                  </defs>
                  {/* outline, always visible */}
                  <path
                    d="M16 28C16 28 1 18.5 1 9.5C1 4.8 4.6 1 9 1C12 1 14.6 2.7 16 5.2C17.4 2.7 20 1 23 1C27.4 1 31 4.8 31 9.5C31 18.5 16 28 16 28Z"
                    fill="#f6f0e6"
                    stroke="#e94057"
                    strokeWidth="1.4"
                  />
                  {/* fill, clipped to the percentage from the bottom */}
                  <path
                    d="M16 28C16 28 1 18.5 1 9.5C1 4.8 4.6 1 9 1C12 1 14.6 2.7 16 5.2C17.4 2.7 20 1 23 1C27.4 1 31 4.8 31 9.5C31 18.5 16 28 16 28Z"
                    fill="#e94057"
                    clipPath={`url(#heart-clip-${i})`}
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* the reveal */}
          <div className="flex flex-col items-center gap-3 pt-4 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-4 h-px bg-[#b89a6a]/60" />
              <span className="text-[11px] italic tracking-wide text-[#8a7d6a]">
                the answer, every time
              </span>
              <span className="w-4 h-px bg-[#b89a6a]/60" />
            </div>
            <h3
              className="text-[44px] text-[#c1274a] leading-none"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}
            >
              I love you
            </h3>
          </div>

          {/* back arrow, matching the other cards' nav */}
          <button
            onClick={() => {
              setIndex(houses.length - 1);
              setStage("open");
            }}
            className="absolute left-4 bottom-6 w-9 h-9 rounded-full bg-[#33261c]/10 border border-[#33261c]/20 text-[#33261c] text-lg flex items-center justify-center z-20"
            aria-label="Back to last house"
          >
            ‹
          </button>
        </div>
      )}
    </main>
  );
}