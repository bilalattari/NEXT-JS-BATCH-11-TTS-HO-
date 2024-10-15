const courses = [
  {
    id: 1,
    title: "Web and App",
    duration: "3 months",
  },
  {
    id: 2,
    title: "Mobile App Development",
    duration: "3 months",
  },
  {
    id: 3,
    title: "Python",
    duration: "3 months",
  },
];

export async function GET(request) {
  return Response.json({
    courses: courses,
    msg: "Courses Fetched Successfully",
  });
}

export async function POST(request) {
  let obj = await request.json();
  obj.id = courses.length + 1;
  courses.unshift(obj);
  return Response.json({
    courses: courses,
    msg: "Course Added Successfully",
  });
}
