import { Stack, Typography } from "@mui/material";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onUpdate: (todo: Todo) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, onUpdate, onDelete }: Props) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h2">Todo list</Typography>
      <Stack spacing={2}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default TodoList;
