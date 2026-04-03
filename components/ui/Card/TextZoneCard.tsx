import React from "react";
import Tag from "@component/ui/Tag/Tag";
import Button from "@component/ui/Button/Button";
import { SizeButton, VariantButton } from "@component/ui/Button/Button.style";

type TextZoneCardProps = {
  tagList?: string[];
  text?: { minText?: string; title?: string; explain?: string };
  button?: { textButton: string; variant?: VariantButton; size?: SizeButton };
  onClick?: () => void;
  style?: React.CSSProperties;
  centerVerticalyText?: Boolean;
};

export function TextZoneCard({
  tagList,
  text,
  button,
  onClick,
  style,
  centerVerticalyText = false,
}: TextZoneCardProps) {
  return (
    <div
      style={{
        flex: "1 1 40%",

        minWidth: "260px",

        height: "auto",

        display: "flex",

        padding: centerVerticalyText ? "0 80px 32px 32px" : "0 32px 32px 32px",

        flexDirection: "column",

        gap: "4px",

        justifyContent: "space-between",
        ...style,
      }}
    >
      {tagList && (
        <div
          style={{
            display: "flex",

            justifyContent: "flex-start",

            gap: "8px",

            flexWrap: "wrap",
          }}
        >
          {tagList.map((tag, index) => (
            <Tag key={index} text={tag} variant="project" />
          ))}
        </div>
      )}

      <div
        style={{
          display: "flex",

          flexDirection: "column",

          gap: 8,
        }}
      >
        {text?.minText && (
          <span
            className="subtext"
            style={{
              color: "rgba(4, 13, 74, 0.5)",

              lineHeight: "normal",
            }}
          >
            {text.minText}
          </span>
        )}
        {text?.title && <h2>{text.title}</h2>}
        {text?.explain && <span className="subtext">{text?.explain}</span>}

        {button && (
          <Button
            size="lg"
            text={button?.textButton}
            accessibilityLabel="Voir plus d'informations"
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
}
