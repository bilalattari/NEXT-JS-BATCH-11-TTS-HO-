"use server";

const { revalidatePath } = require("next/cache");

export async function addCourse(obj) {
  try {
    await fetch(`${process.env.API_URL}api/courses`, {
      method: "POST",
      body: JSON.stringify(obj),
    });
    revalidatePath("/courses");
  } catch (err) {
    console.log(err);
  }
}
