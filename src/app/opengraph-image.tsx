import { ImageResponse } from "next/og";

export const alt =
  "Storage Hunters — Self-Storage Acquisition Strategy";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a2240",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#b9cbe0",
            marginBottom: 24,
          }}
        >
          Self-Storage Acquisition Advisory
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          Storage Hunters
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#dce5f0",
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          Identify opportunities. Evaluate markets. Underwrite deals.
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 26,
            color: "#b9cbe0",
          }}
        >
          joinstoragehunters.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
