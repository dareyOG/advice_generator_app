import { useEffect, useState } from 'react';
import Loader from './Loader';
import Advice from './Advice';
import Button from './Button';

function Generator() {
  const [advice, setAdvice] = useState({} || '');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    getAdvice();
  }, []);

  async function getAdvice() {
    try {
      setIsLoading(true);
      const adviceRes = await fetch(`https://api.adviceslip.com/advice`);
      const adviceData = await adviceRes.json();
      setAdvice(adviceData.slip);
    } catch (error) {
      throw new Error("Can't load advice");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="h-[100vh] bg-neutral-darker flex justify-center items-center p-[2.5rem]">
      <main className="bg-neutral-dark flex flex-col justify-center items-center aspect-auto w-[30rem] md:w-[60rem] gap-4 border-neutral-dark rounded-2xl p-8 pb-0">
        {isLoading ? <Loader /> : <Advice advice={advice} />}
        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/pattern-divider-desktop.svg" />
          <img src="/images/pattern-divider-mobile.svg" />
        </picture>
        <Button getAdvice={getAdvice}>
          <img src="/images/icon-dice.svg" />
        </Button>
      </main>
    </section>
  );
}

export default Generator;
