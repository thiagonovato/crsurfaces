import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #241f1a 0%, #4d443b 60%, #a8571f 100%)",
        }}
      >
        <div style={{ fontSize: 28, color: "#d68a3d", fontWeight: 600, letterSpacing: 2 }}>
          SARASOTA &amp; TAMPA, FL
        </div>
        <div style={{ fontSize: 76, color: "white", fontWeight: 700, marginTop: 20 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 34, color: "rgba(255,255,255,0.85)", marginTop: 16 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
