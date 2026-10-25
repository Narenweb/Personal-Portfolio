import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Production } from "@/components/sections/Production";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Articles } from "@/components/sections/Articles";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/sections/Marquee";
import { getMediumArticles } from "@/lib/medium";

export const revalidate = 86400;

export default async function Page() {
  const articles = await getMediumArticles();

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Production />
      <Projects />
      <Articles articles={articles} />
      <Contact />
    </>
  );
}
