import React, {useState} from "react";


const Counter: React.FC = () =>{

    const [count, setCount] = useState(0);

    return(
        <>
            <div className="flex flex-col">

                <div className="flex flex-row content-baseline  gap-2 my-5">
                    <p className="content-center text-violet-950 font-extrabold mr-10">Part 1 - Default</p>
                    <p className="content-center">Count: {count}</p>
                    <button className="bg-blue-500 px-4 py-1 text-white hover:bg-blue-950 hover:text-amber-50"
                            onClick={() => setCount(count + 1)}>
                        Add
                    </button>
                </div>

            </div>

        </>
    );


}

export default Counter;