import Link from "next/link";

export default function Logo() {
  return (
    <div className="font-semibold text-lg tracking-tighter ">
      <Link href="/">
        <span className="text-primary">Raymond</span>
        <span>Dev</span>
      </Link>
    </div>
  );
}
