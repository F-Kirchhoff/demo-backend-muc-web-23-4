import JokeForm from "@/components/JokeForm";
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
      <JokeForm onSubmit={handleCreate} defaultValue={""} />
      <JokeList />
    </>
  );
}
