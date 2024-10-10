import React from "react";
import Menu from "../features/__homepage/Menu";

const App: React.FC = () => {

    const homeMenuList = [
        { name: "Use State", link: "/useState" },
        { name: "Use Effect", link: "/useEffect" },
        { name: "Use Context", link: "/useContext" },
        { name: "Use Callback", link: "/useCallback" },
    ];

    return (
        <>
        <Menu menuList={homeMenuList}/>
        <div className="my-5"></div>
        </>
    );
};

export default App;
