function TSInput({ type = "text", label }) {
  return (
    <div className="w-full">
      <div className="mb-2">{label}</div>
      <input
        className="outline-none py-1 px-2 rounded border border-gray-300 focus:border-fuchsia-800 w-full"
        type={type}
      />
    </div>
  );
}

export default TSInput;
