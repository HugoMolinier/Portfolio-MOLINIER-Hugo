import React, { useState } from "react";

import { SizeButton, VariantButton } from "@component/ui/Button/Button.style";
import { TextZoneCard } from "./TextZoneCard";

type CardProps = {
  tagList?: string[];

  text?: {
    minText?: string;

    title?: string;

    explain?: string;
  };

  variant?: "home" | "full" | "side";

  button?: {
    textButton: string;

    variant?: VariantButton;

    size?: SizeButton;
  };
  children?: string;
  leftImage?: string;
  background?: string;
  onClick?: () => void;
};

export default function Card({
  tagList,

  text,

  variant = "home",

  button,

  children,

  leftImage,

  background,

  onClick,
}: CardProps) {
  const [hovered, setHovered] = useState(false);
  const cardHeight =
    variant === "home" ? "420px" : variant === "side" ? "268px" : "auto";
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        borderRadius: "8px",

        position: "relative",

        cursor:
          variant === "home" || variant === "side" ? "pointer" : "default",

        background: variant !== "side" ? (background ?? "#fff") : undefined,
        height: cardHeight,

        display: "flex",
        paddingTop: variant === "home" ? "32px" : "12px",

        flexDirection: variant === "side" ? "row-reverse" : "row",
        gap: variant === "side" ? "32px" : 0,

        flexWrap: variant === "full" ? "nowrap" : "wrap",
        overflow: "hidden",
      }}
    >
      {/* Colonne de gauche - tags */}
      {(variant === "home" || variant == "side") && (
        <TextZoneCard
          text={text}
          button={button}
          tagList={tagList}
          centerVerticalyText={variant == "side"}
        />
      )}
      {/* Colonne de droite - l'image */}
      {variant === "full" && (
        <div
          style={{
            flex: "1 1 50%",
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <img
            src={leftImage}
            alt=""
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      )}
      <div
        style={{
          flex:
            variant === "side"
              ? "1 1 40%"
              : variant === "full"
                ? "1 1 50%"
                : "1 1 60%",
          maxWidth:
            variant === "side" ? "40%" : variant === "full" ? "50%" : "60%",
          height: "auto",
          padding: "0 12px 0 0",
          maxHeight: cardHeight,

          display: "flex",
          position: "relative",
          background: variant === "side" ? background : undefined,

          borderRadius: "8px",
          alignItems: "flex-end",
        }}
      >
        <img
          src={children}
          alt=""
          style={{
            objectFit: "contain",
            width: variant === "full" ? "100%" : "100%",
            height: "auto",

            transition: "transform 0.3s ease",
            transformOrigin:
              variant === "side" ? "bottom left" : "bottom right",
            transform:
              hovered && (variant === "home" || variant === "side")
                ? "scale(1.03)"
                : "scale(1)",
          }}
        />
      </div>
    </div>
  );
}
