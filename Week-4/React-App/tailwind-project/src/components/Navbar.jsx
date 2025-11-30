import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white relative">
      <h1 className="text-xl font-bold">My Tailwind Site</h1>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-6">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>

      {/* Mobile button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* Mobile dropdown */}
      {open && (
        <ul className="absolute top-14 left-0 w-full bg-gray-900 text-white flex flex-col gap-4 p-4 md:hidden">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
