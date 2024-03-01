import { Hero, Manage } from '../../sections';
import { Colaborate } from '../../sections/colaborate/Colaborate';
import { Expand } from '../../sections/expand/Expand';
import { Plans } from '../../sections/plans/Plans';
import { Testimonials } from '../../sections/testimonials/Testimonials';
import { Work } from '../../sections/work/Work';

export const Home = () => {
  return (
    <>
      <Hero />
      <Manage />
      <Colaborate />
      <Expand />
      <Plans />
      <Work />
      <Testimonials />
    </>
  );
};
