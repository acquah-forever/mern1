import { useState } from 'react';
import { MessageCircle, Heart, Repeat2 } from 'lucide-react';


const Search = () => {

    const [inputValue, setInputValue] = useState<string>("");
    const [thoughts, setThoughts] = useState<string[]>([]);
    const [edit, setEdit] = useState<{ index: number; value: string } | null>(null);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)
    }

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        const thought = inputValue.trim();
        if (thought === "") {
            return;
        }
        if (!thought.startsWith("#")) {
            alert("Please start your thought with a #");
            return;
        }
        setThoughts([...thoughts, thought]);
        setInputValue("");
    }

    function handleClick1(event: React.MouseEvent<SVGSVGElement>, index: number) {
        event.preventDefault();
        setEdit({ index, value: thoughts[index] });

    }

    function handleChange1(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit({ ...edit, value: event.target.value });
    }

    function handleSave() {
        if (!edit) return

        const updatedThoughts = [...thoughts.map(thought => thought.trim())];

        if (!updatedThoughts[edit.index]) {
            alert("Please enter a valid thought");
            return;
        }

        if (!updatedThoughts[edit.index].startsWith("#")) {
            alert("Please start your thought with a #");
            return;
        }
        updatedThoughts[edit.index] = edit.value;
        setThoughts(updatedThoughts);
        setEdit(null);
    }

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <form className="flex  items-center justify-center gap-2 border border-white rounded-lg px-4 py-2 max-w-4xl w-full">
                <input className="py-2 px-4 w-full outline-none border-none focus-visible:ring-2 focus-visible:ring-sky-300" type="text" value={inputValue} placeholder="Whats on your mind?(begin thought with #)" onChange={handleChange} />
                <button type='submit' className="bg-teal-400 rounded text-md px-7 py-3 cursor-pointer" onClick={handleClick}>Send</button>
            </form>

            <div className='mt-5 flex flex-col justify-center w-full max-w-4xl'>
                {thoughts.map((thought, index) => (
                    <div key={index} className='bg-white/50 p-3 rounded-lg mb-2 flex flex-col justify-between'>
                        <p>{thought}</p>
                        <div className='flex gap-4 mt-5 mb-5'>
                            <button type='button'>
                                <MessageCircle className='cursor-pointer hover:text-sky-500' size={20} onClick={(event) => handleClick1(event, index)} />
                            </button>
                            <button type='button'>
                                <Heart className='cursor-pointer hover:text-red-500' size={20} />
                            </button>
                            <button type='button'>
                                <Repeat2 className='cursor-pointer hover:text-purple-500' size={20} />
                            </button>
                        </div>

                        {edit?.index === index && (
                            <div className='border-2 border-gray-300 rounded-lg px-7 py-5 w-full'>
                                <h1 className='italic mb-4'>Edit Thought Here</h1>
                                <input className='w-full border-2 border-sky-600 outline-none mb-5 p-3' type="text" value={edit.value} onChange={handleChange1} />
                                <div className='flex justify-end gap-2 mt-2'>
                                    <button className='cursor-pointer bg-teal-400 rounded text-md px-4 py-2'onClick={handleSave}>Save</button>
                                    <button className='cursor-pointer bg-red-500 rounded text-md px-4 py-2' onClick={() => setEdit(null)}>Cancel</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Search
