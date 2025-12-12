export default function ToggleBotton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 mb-8 bg-violet-400 hover:bg-violet-200 rounded-lg
      shadow-lg text-lg font-semibold transition duration-300 ease-in-out" >
      {children}
    </button>
  );
}
