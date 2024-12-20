function Button({ onClick, label }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="px-5 py-2 bg-green-500 text-white font-medium rounded-3xl text-sm active:translate-y-0.5 transition-all"
        >
            {label}
        </button>
    );
}

export default Button;
