import { useState } from 'react'

const Search = () => {

    const [inputValue, setInputValue] = useState<string>("");
    const [thoughts, setThoughts] = useState<string[]>([]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        if(inputValue.trim() === "") return
        setInputValue(event.target.value)
    }

    function handleClick(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault()
        setThoughts([...thoughts, inputValue]);
        setInputValue("");  
    }
  return (
    <div className='flex flex-col items-center justify-center'>
        <form className="border border-gray-300 rounded-lg flex items-center p-2 max-w-4xl w-full">
            <input  className="py-2 px-4 w-full outline-none border-none" type="text" value={inputValue} placeholder="Whats on your mind?" onChange={handleChange} />
            <button type='submit' className="bg-teal-400 rounded text-md px-7 py-3"onClick={handleClick}>Send</button>
        </form>

        <div className='mt-5'>
            {thoughts.map((thought, index) => (
                <div key={index} className='bg-white/50 p-3 rounded-lg mb-2'>
                    {thought}
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Search
