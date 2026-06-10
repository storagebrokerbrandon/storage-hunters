import { ImageResponse } from "next/og";

export const alt = "Storage Hunters — Self-Storage Acquisition Strategy";
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
          backgroundColor: "#1e2a1e",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#c3b08b",
            marginBottom: 28,
          }}
        >
          Self-Storage Acquisition Advisory
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            fontSize: 92,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            marginBottom: 28,
          }}
        >
          <span style={{ color: "#c3b08b" }}>Storage</span>
          <span style={{ color: "#ff6a00" }}>Hunters</span>
        </div>
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c3b08b"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="7" />
          <path d="M12 1v5 M12 18v5 M1 12h5 M18 12h5" />
          <circle cx="12" cy="12" r="1.5" fill="#ff6a00" stroke="none" />
        </svg>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#e6e9dc",
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          Identify opportunities. Evaluate markets. Underwrite deals.
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 26,
            color: "#c3b08b",
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
