import React from "react";
import Counter from "../features/useeffect/Counter";

const UseStatePage: React.FC = () => {
    return(
        <>
            <div className="flex flex-col gap-4">

            <div>
                <h1 className="font-bold text-3xl ">Use State</h1>
                <p>useState is a React hook that lets you add state to your functional components. It allows you to
                    manage variables or data that can change over time and trigger the component to re-render when the
                    state updates.</p>
            </div>

            {/*    COUNTER APP*/}
            <div>
                <h1 className="text-2xl">Counter App</h1>
                <Counter/>
            </div>

            </div>
        </>
    );
}

export default UseStatePage;