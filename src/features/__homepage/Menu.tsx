import React from "react";
import { Link } from "react-router-dom";

// Define interface for props
interface MenuItem {
    name: string;
    link: string;
}

interface HomepageProps {
    menuList: MenuItem[];
}

// Homepage Component
const Menu: React.FC<HomepageProps> = ({ menuList }) => {
    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Map through the menuList to create cards dynamically */}
                {menuList.map((item, index) => (
                    <Link key={index} to={item.link}>
                        <div className="bg-white p-4 rounded-lg shadow-md hover:bg-yellow-600">
                            <h3 className="text-lg font-bold">{item.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
    );
};

export default Menu;
