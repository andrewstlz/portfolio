import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LinkItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-lg transition ${
        isActive ? "bg-white/10" : "hover:bg-white/5"
      }`
    }
  >
    {label}
  </NavLink>
);

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-white/10 sticky top-0 backdrop-blur">
        <div className="container flex items-center justify-between py-3">
          <NavLink to="/" className="text-lg font-semibold">
            Andrew Wong
          </NavLink>
          <nav className="flex gap-1 text-sm">
            <LinkItem to="/" label="Home" />
            <LinkItem to="/about" label="About" />
            <LinkItem to="/memory" label="Memory" />
            <LinkItem to="/vision" label="Vision" />
            <LinkItem to="/blog" label="Blog" />
          </nav>
        </div>
      </header>
      <main className="container flex-1 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-white/10">
        <div className="border-t border-white/10">
          (C) {new Date().getFullYear()} Andrew's Portfolio
        </div>
      </footer>
    </div>
  );
}
