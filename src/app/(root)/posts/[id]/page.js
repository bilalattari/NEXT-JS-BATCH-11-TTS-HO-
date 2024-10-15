export default async function ({ params }) {
  let res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  res = await res.json();
  return (
    <div className="flex min-h-screen justify-center">
      <div
        className={
          "border w-1/2 rounded flex flex-col gap-4  border-gray-100 p-3 mt-4"
        }
      >
        <h1 className={"font-bold text-3xl"}>{res.title}</h1>
        <h1 className={"font-normal text-xl"}>{res.body}</h1>
        <h1 className="font-normal flex flex- row gap-3 text-xl">
          {res.tags.map((tag) => (
            <div key={tag} className={"p-2 rounded inline-block  bg-blue-50 "}>
              {tag}
            </div>
          ))}
        </h1>
      </div>
    </div>
  );
}
