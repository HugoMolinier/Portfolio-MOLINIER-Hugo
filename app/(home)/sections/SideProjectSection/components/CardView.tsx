"use client";

import { useRouter } from "next/navigation";
import Card from "@component/ui/Card/Card";
import { projects } from "@lib/projects";
import { useMemo } from "react";

export default function ProjectsSection() {
  const router = useRouter();
  const proProjects = useMemo(() => {
    return Object.entries(projects).filter(
      ([_, project]) => project.type === "perso",
    );
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {proProjects.map(([key, project]) => (
        <div key={key} style={{ paddingBottom: " 80px" }}>
          <Card
            background={project.background}
            tagList={project.tagList}
            variant="side"
            text={project.text}
            button={{ textButton: "Voir en détails" }}
            onClick={() => router.push(`/${key}`)}
            children={project.image}
          />
        </div>
      ))}
    </div>
  );
}
