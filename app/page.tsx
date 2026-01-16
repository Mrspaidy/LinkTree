"use client";
import { BackgroundBeams } from "./components/ui/background-beams";
import ProfileCard from "./components/ProfileCard";
import LinkCard from "./components/LinkCard";
import dynamic from 'next/dynamic';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram,
  FaHashnode,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaDiscord,
  FaGlobe
} from "react-icons/fa6";
import { BsFillPersonVcardFill } from "react-icons/bs";

const ClientWrapper = dynamic(() => import('./components/ui/client-wrapper'), {
  ssr: false
});

const links = [
  {
    href: "https://www.youtube.com/@_mr.spaidy_",
    label: "YouTube",
    icon: <FaYoutube className="mt-0.5" style={{ color: '#FF0000' }} />
  },
  {
    href: "https://www.instagram.com/_mr.spaidy_",
    label: "Instagram",
    icon: <FaInstagram className="mt-0.5" style={{ color: '#E4405F' }} />
  },
   {
     href: "https://t.me/AdvanceEthicalHacking" ,
     label: "Telegram",
     icon: <FaTelegram className="mt-0.5" style={{ color: '#0088cc' }} />
   },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black p-4">
      <BackgroundBeams />
      <ClientWrapper />
      <div className="w-full max-w-xl mx-auto space-y-4 relative z-10">
        <div className="max-w-md mx-auto">
          <ProfileCard />
        </div>
        <div className="space-y-3 max-w-md mx-auto">
          {links.map((link, i) => (
            <div key={link.href}>
              <LinkCard
                {...link}
                className="animate-in py-3"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
