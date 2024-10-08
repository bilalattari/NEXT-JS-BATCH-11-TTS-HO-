import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-20">
      <h1 className="text-4xl text-center font-medium my-2">Hello World</h1>

      <Link
        className="bg-red-200 border rounded-md mx-3 p-2 px-4"
        href={"/courses"}
      >
        Go to Courses
      </Link>
      <Link
        className="bg-red-200 border rounded-md mx-3 p-2 px-4"
        href={"/about"}
      >
        Go to About
      </Link>
    </div>
  );
}
