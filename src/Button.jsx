import React from "react";

const Button = ({ label, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="px-5 py-2 bg-rose-400 text-white font-medium rounded-3xl text-sm active:translate-y-0.5 transition-all"
        >
            {label}
        </button>
    );
};

export default Button;
