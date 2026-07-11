"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          fontFamily: "sans-serif",
          backgroundColor: "#0a0a0a",
          color: "#e2e8f0",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600 }}>
          Something went wrong
        </h1>
        <p style={{ color: "#94a3b8" }}>
          {error.digest
            ? `Error ID: ${error.digest}`
            : "An unexpected error occurred."}
        </p>
        <button
          onClick={() => reset()}
          style={{
            marginTop: 8,
            padding: "10px 24px",
            borderRadius: 8,
            backgroundColor: "#7dc243",
            color: "#fff",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
