import { Hero }        from "@/components/sections/Hero";
import { ScrollStory } from "@/components/sections/ScrollStory";
import { Features }    from "@/components/sections/Features";
import { Memberships } from "@/components/sections/Memberships";
import { HowItWorks }  from "@/components/sections/HowItWorks";
import { Trust }       from "@/components/sections/Trust";
import { ChatOnboarding } from "@/components/ui/ChatOnboarding";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollStory />
      <Features />
      <Memberships />
      <HowItWorks />
      <Trust />
      <ChatOnboarding />
    </>
  );
}
