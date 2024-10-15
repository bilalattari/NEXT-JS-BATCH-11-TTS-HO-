export default function CourseCard({ item }) {
  return (
    <div className="border rounded my-1 p-2 container mx-auto">
      <h1 className="font-bold text-4xl my-1">{item?.title}</h1>
      <h1>{item?.duration}</h1>
    </div>
  );
}
