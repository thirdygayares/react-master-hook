import React, {useState} from "react";


const Counter: React.FC = () =>{

    const [count, setCount] = useState(0);

    return(
        <>
            <p>Count: {count}</p>
            <button type="button"
                    onClick={() => setCount(count + 1)
            }/>
        </>
    );


}

export default Counter;