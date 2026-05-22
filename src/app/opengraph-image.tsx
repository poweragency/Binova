import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Binova — Cucine d'autore dal 1958";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(180deg, #14110f 0%, #0a0a0a 60%, #0a0a0a 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Gold radial glow at top */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,179,120,0.18), transparent 60%)",
          }}
        />

        {/* Top — logo */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              border: "2px solid #f5f3ef",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                background: "#f5f3ef",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "36px",
              color: "#f5f3ef",
              letterSpacing: "-0.01em",
            }}
          >
            Binova
          </div>
        </div>

        {/* Middle — tagline */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "92px",
              color: "#f5f3ef",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              fontWeight: 300,
            }}
          >
            Cucine d&apos;autore
          </div>
          <div
            style={{
              fontSize: "92px",
              color: "#d9c79a",
              fontStyle: "italic",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              fontWeight: 300,
            }}
          >
            dal 1958.
          </div>
        </div>

        {/* Bottom — meta */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            color: "rgba(245,243,239,0.55)",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>Showroom Milano · Via Durini 17</span>
          <span style={{ color: "#c9b378" }}>·</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
