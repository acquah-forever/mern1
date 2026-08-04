import { useState } from 'react';
import { Trash, Pen } from 'lucide-react';


const Search = () => {

    const [inputValue, setInputValue] = useState<string>("");
    const [thoughts, setThoughts] = useState<string[]>([]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value)
    }

    function handleClick(event: React.MouseEvent<HTMLButtonElement>){
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
  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <form className="flex  items-center justify-center gap-2 border border-white rounded-lg px-4 py-2 max-w-4xl w-full">
            <input  className="py-2 px-4 w-full outline-none border-none focus-visible:ring-2 focus-visible:ring-sky-300" type="text" value={inputValue} placeholder="Whats on your mind?(begin thought with #)" onChange={handleChange} />
            <button type='submit' className="bg-teal-400 rounded text-md px-7 py-3"onClick={handleClick}>Send</button>
        </form>

        <div className='mt-5 flex flex-col justify-center w-full max-w-4xl'>
            {thoughts.map((thought, index) => (
                <div key={index} className='bg-white/50 p-3 rounded-lg mb-2 flex items-center justify-between'>
                    <p>{thought}</p>
                    <div className='flex gap-2'>
                        <Pen />
                        <Trash />
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Search
