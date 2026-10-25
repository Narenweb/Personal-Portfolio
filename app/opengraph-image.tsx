import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview card shown when the portfolio link is shared (LinkedIn, WhatsApp, X…)
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(circle at 15% 10%, #2b3310 0%, #0a0a0b 55%)",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#d4ff4f",
              color: "#0a0a0b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            n
          </div>
          <div style={{ fontSize: 24, letterSpacing: 6, color: "#a1a1aa", textTransform: "uppercase" }}>
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 48, color: "#d4ff4f", marginTop: 20 }}>{site.role}</div>
          <div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 28, maxWidth: 950 }}>
            React · Next.js · TypeScript · Node.js · Payload CMS
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#8a8a94" }}>
          <div>{site.location}</div>
          <div>Open to senior roles</div>
        </div>
      </div>
    ),
    size
  );
}
