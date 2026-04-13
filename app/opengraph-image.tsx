import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Payfake - Test Payments Without Limits";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginBottom: 40,
        }}
      >
        <img
          src="https://payfake.co/logo.JPG"
          alt="Payfake"
          width={80}
          height={80}
          style={{ filter: "invert(1)" }}
        />
        <span
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 24,
            fontWeight: 500,
          }}
        >
          Payfake
        </span>
      </div>
      <h1
        style={{
          color: "white",
          fontSize: 80,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
          letterSpacing: "-0.02em",
        }}
      >
        Test payments
      </h1>
      <h2
        style={{
          background: "linear-gradient(to right, white, rgba(255,255,255,0.7))",
          backgroundClip: "text",
          color: "transparent",
          fontSize: 80,
          fontWeight: "bold",
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}
      >
        without limits
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: 32,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        Self-hostable Paystack-compatible payment simulator
      </p>
    </div>,
    { ...size },
  );
}
