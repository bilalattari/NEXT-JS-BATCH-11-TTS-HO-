"use client";

import { addCourse } from "@/app/actions/courses";

export default function AddCourseForm() {
  const handleOnAddTodo = async (formData) => {
   
    let obj = {
      title: formData.get("title"),
      duration: formData.get("duration"),
    };
    await addCourse(obj)
  };
  return (
    <form action={handleOnAddTodo} className="container flex gap-3 mx-auto">
      <input
        required
        name="title"
        placeholder="Title"
        className="border p-2 text-xl"
      />
      <input
        required
        name="duration"
        placeholder="Duration"
        className="border p-2 text-xl"
      />
      <input
        type="submit"
        value={"Submit"}
        className="bg-blue-300 rounded p-2 px-4 text-gray-900 cursor-pointer"
      />
    </form>
  );
}
