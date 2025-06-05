// import type { Schema } from "../amplify/data/resource";
import { useAuthenticator } from "@aws-amplify/ui-react";
// import { useEffect, useState } from "react";
// import { generateClient } from "aws-amplify/data";
import TodoList from "./TodoList";
import MovieList from "./Movie";

// const client = generateClient<Schema>({
//   headers: async (requestOptions) => {
//     console.log(requestOptions)
//     return {
//       'My-Custom-Header': 'my value',
//     }
//   }
// });

function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}'s todos</h1>
      <TodoList></TodoList>
      <MovieList></MovieList>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
