import JokeList from "../components/JokeList";
import useSWR from "swr";

export default function HomePage() {
  const { mutate } = useSWR("/api/jokes");

  async function handleCreate(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);

    console.log(jokeData);

    const response = await fetch("api/jokes", {
      method: "POST",
      body: JSON.stringify(jokeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      mutate();
    }

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleCreate}>
        <label htmlFor="joke">Create a new joke</label>
        <input type="text" id="joke" name="joke" />
        <button type="submit">Submit</button>
      </form>
      <JokeList />
    </>
  );
}
