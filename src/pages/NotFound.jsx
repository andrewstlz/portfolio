import { NavLink } from "react-router-dom";

export default function Memory() {
  return (
    <div className="container py-16">
      <h1 className="text-2x1 font-bold mb-2">Page Not Found</h1>
      <NavLink to="/" className="underline">
        Back to Home
      </NavLink>
    </div>
  );
}
