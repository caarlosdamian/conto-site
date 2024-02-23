import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <section className="w-screen h-screen">
      <Outlet />
    </section>
  );
};
