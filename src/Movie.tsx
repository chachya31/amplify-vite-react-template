import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from 'aws-amplify/data';
import { Card, View } from "@aws-amplify/ui-react";

const client = generateClient<Schema>()

export default function MovieList() {
  const [movies, setMovies] = useState<Schema["Movie"]["type"][]>([])
  
  useEffect(() => {
    const sub = client.models.Movie.observeQuery().subscribe({
      next: ({ items }) => {
        setMovies([...items])
      }
    })
    return () => sub.unsubscribe();
  }, []);

  const createMovie = async () => {
    await client.models.Movie.create({
      title: window.prompt("Input Movie title"),
      releaseYear: 2025,
      rating: 5.0
    });
  }

  const deleteMovie = async (id: string) => {
    client.models.Movie.delete({ id })
  }

  return (
    <div>
      <button onClick={createMovie}>Add new movie</button>
      <ul>
        {movies.map((movie) => (
          <li
            key={movie.id}
            onClick={() => deleteMovie(movie.id)}
          >{movie.title} : {movie.releaseYear} : {movie.rating}</li>
        ))}
      </ul>
      <View
        as="div"ariaLabel="View example"
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        border="1px solid var(--amplify-colors-black)"
        color="var(--amplify-colors-blue-60)"
        height="4rem"
        maxWidth="100%"
        padding="1rem"
        width="25rem"
        // onClick={() => alert('')}
      >
        {"I'm a <div>! 🤩"}
      </View>
    </div>
  )
}