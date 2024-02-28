import { Hero, Manage } from '../../sections';
import { Colaborate } from '../../sections/colaborate/Colaborate';
import { Expand } from '../../sections/expand/Expand';

export const Home = () => {
  return (
    <>
      <Hero />
      <Manage />
      <Colaborate/>
      <Expand/>
    </>
  );
};
