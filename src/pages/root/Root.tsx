import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

export const Root = () => {
  return (
    <section className="w-screen h-full bg-conto-primary">
      <Header />
      <Outlet />
    </section>
  );
};
