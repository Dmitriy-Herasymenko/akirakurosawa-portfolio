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
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#0d0c0b",
          color: "#f2f0ec",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, opacity: 0.7 }}>
          PHOTOGRAPHER
        </div>
        <div
          style={{
            fontSize: 96,
            marginTop: 24,
            display: "flex",
          }}
        >
          {siteConfig.name}
        </div>
      </div>
    ),
    { ...size },
  );
}
