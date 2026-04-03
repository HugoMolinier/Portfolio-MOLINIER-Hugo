"use client";
import React from "react";
import { parcours } from "@lib/parcours";

export default function ParcoursComponent() {
  return (
    <section
      id="parcours"
      className="section"
      style={{
        scrollMarginTop: "60px",

        padding: "0 0 60px 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "64px 5px 24px 5px",
          display: "flex",
          gap: 12,
          alignItems: "flex-end",
        }}
      >
        <span
          className="subtext"
          style={{
            color: "rgba(4, 13, 74, 0.5)",
          }}
        >
          04
        </span>
        <h3>Parcours</h3>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {parcours.map((item, index) => {
          const isLast = index === parcours.length - 1;
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 0",
                borderBottom: isLast ? "none" : "1px solid rgba(0,0,0,0.25)",
              }}
            >
              <p>{item.nom}</p>
              <span
                className="subtext"
                style={{
                  color: "rgba(4, 13, 74, 0.5)",
                }}
              >
                {item.années}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
