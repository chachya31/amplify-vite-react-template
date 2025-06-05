import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>()

export default function TodoList() {
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([])

  // const fetchTodos = async () => {
  //   const { data: items, errors } = await client.models.Todo.list();
  //   setTodos(items);
  // };

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: ({ items }) => {
        setTodos([...items])
      }
    })

    return () => sub.unsubscribe();
  }, []);

  const createTodo = async () => {
    await client.models.Todo.create({
      content: window.prompt("Todo content?"),
      isDone: false
    });

    // fetchTodos();
  }

  const deleteTodo = async (id: string) => {
    client.models.Todo.delete({ id })
  }

  return (
    <div>
      <button onClick={createTodo}>Add new todo</button>
      <ul>
        {todos.map(({id, content}) => (
          <li
            key={id}
            onClick={() => deleteTodo(id)}
          >{content}</li>
        ))}
      </ul>
    </div>
  )
}