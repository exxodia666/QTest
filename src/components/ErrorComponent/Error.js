import React from "react";

export default function ErrorComponent({ message }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <p style={{ color: "red" }}>{message}</p>
    </div>
  );
}
