function TSButton({ name = "Submit", onClick, ...props }) {
  return (
    <button
      className="text-black 
    hover:text-white border border-gray-300 hover:border-fuchsia-800 hover:bg-gray-500 w-fit py-1 px-2 rounded min-w-20"
      {...props}
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
}

export default TSButton;
