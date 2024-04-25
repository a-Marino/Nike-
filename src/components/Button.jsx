export const Button = function ({ children }) {
  return (
    <button className="bg-black w-[150px] h-10 text-white rounded-full font-bold hover:opacity-70 transition ease-linear">
      {children}
    </button>
  );
};
