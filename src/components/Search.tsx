import { useEffect, useState } from "react";
import { MessageCircle, Heart } from "lucide-react";
import { api, type Thought } from "../api/client";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [edit, setEdit] = useState<{ id: string; value: string } | null>(null);
  const [count, setCount] = useState<Record<string, number>>({});
  const [error, setError] = useState("");

  useEffect(() => {
    void api.getThoughts()
      .then(setThoughts)
      .catch((requestError: unknown) => {
        setError(requestError instanceof Error ? requestError.message : "Unable to load thoughts");
      });
  }, []);

  async function handleCreate(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const thought = inputValue.trim();

    if (!thought) return;
    if (!thought.startsWith("#")) {
      setError("Please start your thought with a #");
      return;
    }

    try {
      setError("");
      const newThought = await api.createThought(thought);
      setThoughts((currentThoughts) => [...currentThoughts, newThought]);
      setInputValue("");
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Unable to create thought");
    }
  }

  async function handleSave(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!edit) return;

    const value = edit.value.trim();
    if (!value.startsWith("#")) {
      setError("Please start your thought with a #");
      return;
    }

    try {
      setError("");
      const updatedThought = await api.updateThought(edit.id, value);
      setThoughts((currentThoughts) =>
        currentThoughts.map((thought) => thought._id === updatedThought._id ? updatedThought : thought),
      );
      setEdit(null);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Unable to update thought");
    }
  }

  async function handleDelete(id: string) {
    try {
      setError("");
      await api.deleteThought(id);
      setThoughts((currentThoughts) => currentThoughts.filter((thought) => thought._id !== id));
      setEdit((currentEdit) => currentEdit?.id === id ? null : currentEdit);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Unable to delete thought");
    }
  }

  return (
    <section className="flex flex-col items-center justify-center w-full px-5">
      <form className="flex items-center justify-center gap-2 border border-white rounded-lg px-3 sm:px-4 py-2 max-w-4xl w-full">
        <input className="py-2 px-4 w-full outline-none border-none focus-visible:ring-2 text-sm sm:text-lg focus-visible:ring-sky-300 placeholder:text-sm" type="text" value={inputValue} placeholder="Whats on your mind?(begin thought with #)" onChange={(event) => setInputValue(event.target.value)} />
        <button type="button" aria-label="Send" className="bg-teal-400 rounded text-sm sm:text-md px-4 sm:px-7 py-2 sm:py-3 cursor-pointer" onClick={handleCreate}>Send</button>
      </form>

      {error && <p className="mt-3 text-red-200">{error}</p>}

      <div className="mt-5 flex flex-col justify-center w-full max-w-4xl">
        {thoughts.map((thought) => (
          <div key={thought._id} className="bg-white/50 p-2 rounded-lg mb-3 flex flex-col justify-between hover:scale-110 duration-120">
            <p className="text-sm sm:text-lg">{thought.thought}</p>
            <div className="flex gap-2 mt-2 mb-5">
              <button type="button" aria-label="Edit thought" onClick={() => setEdit({ id: thought._id, value: thought.thought })}>
                <MessageCircle className="cursor-pointer hover:text-sky-500" size={19} />
              </button>
              <button type="button" className="text-sm text-red-700" onClick={() => void handleDelete(thought._id)}>Delete</button>
              <div className="flex items-center gap-1">
                <button type="button" aria-label="Like thought" onClick={() => setCount((currentCount) => ({ ...currentCount, [thought._id]: (currentCount[thought._id] ?? 0) + 1 }))}>
                  <Heart className="cursor-pointer hover:text-red-500" size={19} />
                </button>
                <p className="text-sm mt-2">{count[thought._id] ?? 0}</p>
              </div>
            </div>

            {edit?.id === thought._id && (
              <div className="border-2 border-gray-300 rounded-lg px-7 py-5 w-full">
                <h1 className="italic mb-4 text-sm sm:text-lg">Edit Thought Here</h1>
                <input className="w-full border-2 border-sky-600 outline-none mb-5 p-3 text-sm ms:text-lg" type="text" value={edit.value} onChange={(event) => setEdit({ ...edit, value: event.target.value })} />
                <div className="flex justify-end gap-2 mt-2">
                  <button className="cursor-pointer bg-teal-400 rounded text-sm sm:text-md px-4 py-2" onClick={handleSave}>Save</button>
                  <button className="cursor-pointer bg-red-500 rounded text-sm sm:text-md px-4 py-2" onClick={() => setEdit(null)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
