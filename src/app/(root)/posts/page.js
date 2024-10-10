import Link from "next/link";

export default async function Posts() {
  let res = await fetch("https://dummyjson.com/posts", { cache: "no-cache" });
  res = await res.json();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center my-5">All Posts</h1>
      <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}>
        {res?.posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className={"flex flex-col p-2 border font-mono rounded"}>
              <h1 className="font-bold text-2xl">{post.title}</h1>
              <h1 className="font-light">{post.tags.join("-")}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
