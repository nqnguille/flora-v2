import { ScrollStory }      from "@/components/sections/ScrollStory";
import { Hero }             from "@/components/sections/Hero";
import { Features }         from "@/components/sections/Features";
import { Memberships }      from "@/components/sections/Memberships";
import { HowItWorks }       from "@/components/sections/HowItWorks";
import { Trust }            from "@/components/sections/Trust";
import { ChatOnboarding }   from "@/components/ui/ChatOnboarding";
import { BotanicalDivider } from "@/components/ui/BotanicalDivider";

export default function HomePage() {
  return (
    <>
      <ScrollStory />
      <Hero />
      <BotanicalDivider />
      <Features />
      <Memberships />
      <BotanicalDivider flip />
      <HowItWorks />
      <Trust />
      <ChatOnboarding />
    </>
  );
}
