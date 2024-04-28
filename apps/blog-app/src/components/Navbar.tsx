import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar border-b bg-neutral-100">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            by Nuya
          </Link>
        </div>
        <div className="flex-none">
          <Link href="/blog/create" className="btn btn-ghost">Create Post</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
