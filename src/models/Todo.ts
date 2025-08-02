import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = models.Todo || model("Todo", TodoSchema);

export default Todo;
