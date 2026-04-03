"use client";
import React from "react";
import Box from "@component/ui/Box/Box";
import { categoriesHardware } from "@lib/competence";

export default function CompetencesContentHardware() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      {categoriesHardware.map((category) => (
        <div
          key={category.label}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <p style={{ opacity: 0.6, padding: "0px 8px" }}>{category.label}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 15,
            }}
          >
            {category.skills.map((skill) => (
              <Box key={skill.name} text={skill.name} icon={skill.iconsrc} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
