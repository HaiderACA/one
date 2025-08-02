import { connectDB } from "@/utils/database";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: any) {
  await connectDB();
  const { text, completed } = await request.json();
  const updatedTodo = await Todo.findByIdAndUpdate(
    params.id,
    { text, completed },
    { new: true }
  );
  return NextResponse.json(updatedTodo);
}

export async function DELETE(request: Request, { params }: any) {
  await connectDB();
  const deletedTodo = await Todo.findByIdAndDelete(params.id);
  return NextResponse.json(deletedTodo);
}
