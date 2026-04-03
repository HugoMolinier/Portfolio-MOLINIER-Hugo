import Hero from "@/(home)/sections/HeroSection";
import Project from "@/(home)/sections/ProjectSection";
import SideProkect from "@/(home)/sections/SideProjectSection";
import Competence from "@/(home)/sections/CompetenceSection";
import Parcours from "@/(home)/sections/ParcoursSection";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Project />
      <SideProkect />
      <Competence />
      <Parcours />
    </div>
  );
}
