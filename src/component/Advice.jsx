function Advice({ advice }) {
  const { advice: new_advice, id } = advice;
  return (
    <section className=" text-center ">
      <h1 className="text-primary">Advice #{id}</h1>
      <blockquote className="text-primary-light py-4 text-[1.5rem] md:text-[3rem]">
        {new_advice}
      </blockquote>
      {/* <Advice new_advice={new_advice} id={id} /> */}
    </section>
  );
}

export default Advice;
