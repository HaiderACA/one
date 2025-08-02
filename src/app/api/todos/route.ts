import { connectDB } from "@/utils/database";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const todos = await Todo.find();
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  await connectDB();
  const { text } = await request.json();
  const newTodo = new Todo({ text });
  const savedTodo = await newTodo.save();
  return NextResponse.json(savedTodo);
}
