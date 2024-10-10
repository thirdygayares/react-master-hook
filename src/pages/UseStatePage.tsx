import React from "react";
import Counter from "../features/useeffect/Counter";
import ListOfNames from "../features/useeffect/data_structure/array/ListOfNames";

const UseStatePage: React.FC = () => {
    return(
        <>
            <div className="flex flex-col gap-4">

                <div>
                    <h1 className="font-bold text-3xl ">Use State</h1>
                    <p>useState is a React hook that lets you add state to your functional components. It allows you to
                        manage variables or data that can change over time and trigger the component to re-render when
                        the
                        state updates.</p>
                </div>

                {/*    COUNTER APP*/}
                <div>
                    <h1 className="text-5xl font-extrabold">Counter App</h1>
                    <Counter/>
                </div>

                <h1 className="my-10 font-extrabold text-5xl">DATA STRUCTURE</h1>

                {/*    COUNTER APP*/}
                <div className="flex flex-col flex-wrap gap-2">
                    <h1 className="text-2xl">Array</h1>

                    <p>Array of names</p>
                    <ListOfNames/>

                </div>

            </div>
        </>
    );
}

export default UseStatePage;