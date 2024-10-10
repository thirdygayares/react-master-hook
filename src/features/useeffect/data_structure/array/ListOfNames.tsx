import React, {useState} from "react";

const ListOfNames: React.FC = () =>{

    const [names, setNames] = useState(["Thirdy", "Novem", "Alex"]);

    return(
        <>
            <div className="grid grid-cols-1 gap-y-3">
                <table className="table border-2 w-6/12">
                    <thead>
                    <tr className="border-4">
                        <th className="w-3/12 border-4">#</th>
                        <th className="w-4/12 border-4">Name</th>
                        <th className="w-3/12 border-4">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {names.map((name, index) => (
                        <tr key={index} className="border-4">
                            <td className="w-3/12">{index + 1}</td>
                            <td className="w-4/12"> {name} </td>
                            <td className="w-3/12">
                                <button className="bg-blue-300 px-3">Edit</button>
                                <button className="bg-red-700 text-white px-3">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListOfNames;