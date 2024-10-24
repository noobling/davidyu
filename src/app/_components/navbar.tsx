import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 w-full  mb-4 ">
      <Link href="/">Home</Link>
      <Link href="/notes">Notes</Link>
      <ThemeSwitcher />
    </div>
  );
}
