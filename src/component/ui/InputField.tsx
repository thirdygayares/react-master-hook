import React from "react";

interface InputFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
                                                   value,
                                                   onChange,
                                                   placeholder = "Enter text...",
                                                   disabled = false,
                                               }) => {
    const baseStyles =
        "px-4 py-2 border rounded focus:outline-none transition-colors";
    const enabledStyles =
        "border-gray-300 focus:border-blue-500";
    const disabledStyles =
        "border-gray-300 bg-gray-200 cursor-not-allowed";
    const inputStyles = disabled ? disabledStyles : enabledStyles;

    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`${baseStyles} ${inputStyles}`}
        />
    );
};

export default InputField;
