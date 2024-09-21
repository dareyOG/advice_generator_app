function Button({ children, isLoading, getAdvice }) {
  const handleGenAdvice = () => {
    if (isLoading) return;
    getAdvice();
  };

  return (
    <button
      onClick={handleGenAdvice}
      className="bg-primary w-fit border-[1rem] rounded-[2rem] border-primary aspect-square hover:shadow-shadow relative top-[2rem]"
    >
      {children}
    </button>
  );
}

export default Button;
