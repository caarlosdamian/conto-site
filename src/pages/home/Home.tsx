import { Hero, Manage } from '../../sections';
import { Colaborate } from '../../sections/colaborate/Colaborate';
import { Expand } from '../../sections/expand/Expand';
import { Plans } from '../../sections/plans/Plans';

export const Home = () => {
  return (
    <>
      <Hero />
      <Manage />
      <Colaborate/>
      <Expand/>
      <Plans/>
    </>
  );
};
