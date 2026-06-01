import { ScrollStory }      from "@/components/sections/ScrollStory";
import { Hero }             from "@/components/sections/Hero";
import { Perfiles }         from "@/components/sections/Perfiles";
import { Features }         from "@/components/sections/Features";
import { Productos }        from "@/components/sections/Productos";
import { HowItWorks }       from "@/components/sections/HowItWorks";
import { Testimonios }      from "@/components/sections/Testimonios";
import { Trust }            from "@/components/sections/Trust";
import { ChatOnboarding }   from "@/components/ui/ChatOnboarding";
import { BotanicalDivider } from "@/components/ui/BotanicalDivider";

export default function HomePage() {
  return (
    <>
      <ScrollStory />
      <Hero />
      <BotanicalDivider />
      <Perfiles />
      <Features />
      <Productos />
      <BotanicalDivider flip />
      <HowItWorks />
      <Testimonios />
      <Trust />
      <ChatOnboarding />
    </>
  );
}
