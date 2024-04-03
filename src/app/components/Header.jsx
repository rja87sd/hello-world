"use client";

import React from "react";

export default function Header() {
  return (
    <div className="d-flex">
      <h1>Header</h1>
      <ul className="d-flex links">
        <li>Home</li>
        <li>About</li>
        <li>Store</li>
      </ul>
    </div>
  );
}
