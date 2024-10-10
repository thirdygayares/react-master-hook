// src/components/Button.tsx

import React from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           onClick,
                                           variant = "primary",
                                           disabled = false,}) => {

    const baseStyles =
        "px-4 py-2 font-semibold rounded focus:outline-none transition-colors";
    const primaryStyles =
        "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300";
    const secondaryStyles =
        "bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300";
    const buttonStyles =
        variant === "primary" ? primaryStyles : secondaryStyles;

    return (
        <button
            className={`${baseStyles} ${buttonStyles}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
