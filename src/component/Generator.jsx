import Advice from './Advice';
import Button from './Button';

function Generator() {
  return (
    <section className="h-[100vh] bg-neutral-darker flex justify-center items-center p-[2.5rem]">
      <main className="bg-neutral-dark flex flex-col justify-center items-center w-[40rem] md:w-[80rem] gap-4 border-neutral-dark rounded-2xl p-8 pb-0">
        <Advice />
        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/pattern-divider-desktop.svg" />
          <img src="/images/pattern-divider-mobile.svg" />
        </picture>
        <Button>
          <img src="/images/icon-dice.svg" />
        </Button>
      </main>
    </section>
  );
}

export default Generator;
