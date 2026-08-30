import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="index">
        <header className="index-head" id="index">
          <h1 className="index-lede">No such room.</h1>
          <p className="index-note">
            <Link href="/">Back to the list</Link>
          </p>
        </header>
      </main>
    </>
  );
}
