export default function JokeForm({ onSubmit, defaultValue }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="joke">Create a new joke</label>
      <input type="text" id="joke" name="joke" defaultValue={defaultValue} />
      <button type="submit">Submit</button>
    </form>
  );
}
