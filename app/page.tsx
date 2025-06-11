import { Hero1 } from "@/components/hero1";

export default function Home() {
  return (
    <Hero1 
      image={{ src: "https://i.ibb.co/kV1wxr4m/Mediamodifier-Design-2.png", alt: "Hero Image" }} 
      badge="Explore our marketplace"
      heading="Run, Share & Explore JavaScript, right from Your Browser"
      description="Write powerful JavaScript scripts. Run them instantly. No setup. No installs. Just code.\n\nPerfect for quick prototypes, demos, learning, or sharing code snippets with others — all without leaving your browser."
    />
  );
}
