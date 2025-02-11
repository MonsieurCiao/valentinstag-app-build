"use server";

import { prisma } from "../lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const num = formData.get("number") as string;
  await prisma.post.create({
    data: {
      number: +num,
    }
  })
  revalidatePath('/eingabe');
}

export async function deletePost(formData: FormData) {
  try{
    const id = formData.get("id") as string;
    await prisma.post.delete({
      where: { id },
    });

    revalidatePath('/');  
  }catch(error){
    console.error("DELETE ERROR: ", error);
  }
}