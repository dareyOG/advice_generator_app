function Button({ children }) {
  return (
    <button className="border-[1.3rem] border-primary rounded-[2rem] relative top-[2.5rem]">
      {children}
    </button>
  );
}

export default Button;
