import { useState } from 'react';
import { MessageCircle, Heart } from 'lucide-react';

const Search = () => {

    const [inputValue, setInputValue] = useState<string>("");
    const [thoughts, setThoughts] = useState<string[]>([]);
    const [edit, setEdit] = useState<{ index: number, value: string } | null>(null);
    const [count, setCount] = useState<Record<number, number>>({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
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

    function handleClick1(index: number) {
        setEdit({ index, value: thoughts[index] });
    }

    function handleChange1(e: React.ChangeEvent<HTMLInputElement>) {
        const newEdit = e.target.value
        setEdit({ ...edit, value: newEdit });
    }

    function handleCount(index: number){
        setCount(prev => ({...prev, [index]: (prev[index] ?? 0) + 1}))
    }

    function handleSave(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        const value = edit.value.trim();

        if (!value) {
            alert("Please enter a valid thought");
            return;
        }

        if (!value.startsWith("#")) {
            alert("Please start your thought with a #");
            return;
        }

        const updatedThoughts = [...thoughts];
        updatedThoughts[edit.index] = value;

        setThoughts(updatedThoughts);
        setEdit(null);
    }

    return (
        <section className='flex flex-col items-center justify-center w-full px-5'>
            <form className="flex items-center justify-center gap-2 border border-white rounded-lg px-3 sm:px-4 py-2 max-w-4xl w-full">
                <input className="py-2 px-4 w-full outline-none border-none focus-visible:ring-2 text-sm sm:text-lg focus-visible:ring-sky-300 placeholder:text-sm"  type="text" value={inputValue} placeholder="Whats on your mind?(begin thought with #)" onChange={handleChange} />
                <button type='button' aria-label='Send' className="bg-teal-400 rounded text-sm sm:text-md px-4 sm:px-7 py-2 sm:py-3 cursor-pointer" onClick={handleClick}>Send</button>
            </form>

            <div className='mt-5 flex flex-col justify-center w-full max-w-4xl'>
                {thoughts.map((thought, index) => (
                    <div key={index} className='bg-white/50 p-2 rounded-lg mb-3 flex flex-col justify-between hover:scale-110 duration-120'>
                        <p className='text-sm sm:text-lg'>{thought}</p>
                        <div className='flex gap-2 mt-2 mb-5'>
                            <button type='button' aria-label="Edit thought" onClick={() => handleClick1(index)}>
                                <MessageCircle className='cursor-pointer hover:text-sky-500' size={19}  />
                            </button>

                            <div className='flex items-center gap-1'>
                                <button type='button' aria-label="Like thought" onClick={() => handleCount(index)}>
                                    <Heart className='cursor-pointer hover:text-red-500'  size={19}/>
                                </button>
                                <p className='text-sm mt-2'>{count[index] ?? 0}</p>
                            </div>
                        </div>

                        {edit?.index === index && (
                            <div className='border-2 border-gray-300 rounded-lg px-7 py-5 w-full'>
                                <h1 className='italic mb-4 text-sm sm:text-lg'>Edit Thought Here</h1>
                                <input className='w-full border-2 border-sky-600 outline-none mb-5 p-3 text-sm ms:text-lg' type="text" value={edit.value} onChange={handleChange1} />
                                <div className='flex justify-end gap-2 mt-2'>
                                    <button className='cursor-pointer bg-teal-400 rounded text-sm sm:text-md px-4 py-2' onClick={handleSave}>Save</button>
                                    <button className='cursor-pointer bg-red-500 rounded text-sm sm:text-md px-4 py-2' onClick={() => setEdit(null)}>Cancel</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

            </div>

        </section>
    )
}

export default Search
