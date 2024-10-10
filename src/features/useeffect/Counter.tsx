import React, {useState} from "react";


const Counter: React.FC = () =>{

    const [count, setCount] = useState(0);
    const [value] = useState(0)

    return(
        <>
            <div className="flex flex-col gap-y-5 mt-10">
                <h1 className="content-center text-xl font-extrabold">Count: {count}</h1>
                {/*PART 1*/}
                <div className="flex flex-row content-baseline  gap-2">
                    <p className="content-center text-violet-950 font-extrabold mr-10">Part 1 - Increment</p>
                    <button className="bg-blue-500 px-4 py-1 text-white hover:bg-blue-950 hover:text-amber-50"
                            onClick={() => setCount(count + 1)}>
                        Increment
                    </button>
                </div>
                {/* PART 2*/}
                <div className="flex flex-row content-baseline  gap-2">
                    <p className="content-center text-violet-950 font-extrabold mr-10">Part 2 - Decrement</p>
                    <button className="bg-blue-500 px-4 py-1 text-white hover:bg-blue-950 hover:text-amber-50"
                            onClick={() => setCount(count - 1)}>
                        Decrement
                    </button>
                </div>
            </div>
        </>
    );
}

export default Counter;