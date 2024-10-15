import CourseCard from "@/components/courseCard";
import AddCourseForm from "@/components/courseForm";

const Courses = async () => {
  // let courses = await fetch(`${process.env.API_URL}api/courses`, {
  //   cache: "no-cache",
  // });
  // courses = await courses.json();
  return (
    <div className="p-20">
      <AddCourseForm />
      {/* {courses?.courses?.map((course) => (
        <CourseCard key={course.id} item={course} />
      ))} */}
    </div>
  );
};

export default Courses;
