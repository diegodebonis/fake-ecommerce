import Link from "next/link";

const Header = () => (
  <div className="container mx-auto px-10 mb-8">
    <div className="border-b w-full inline-block border-green-400 py-8">
      <div className="md:float-left block">
        <Link href="/">
          <span className="cursor-pointer font-bold text-4xl text-green-400 font-Inter">
            A Todo Trapo
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
