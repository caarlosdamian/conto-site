import { Link } from 'react-router-dom';
import { contoLogo, hamburger } from '../../../assets';
import { headerLinks } from '../../../constants';
import { FormattedMessage } from 'react-intl';
import { Button } from '../..';

export const Header = () => {
  return (
    <nav className="bg-conto-primary w-screen h-20">
      <div className="base-container px-6 flex justify-between items-center h-full">
        <img src={contoLogo} alt="Conto logo" className="object-contain" />
        <img
          src={hamburger}
          alt="Hamburger Menu"
          className="object-contain lg:hidden"
        />
        <div className="hidden lg:flex gap-8 items-center">
          {headerLinks.map((link) => (
            <Link key={link.id} to={link.path} className='text-conto-gray'>
              <FormattedMessage id={link.id} />
            </Link>
          ))}
          <Button type='primary'  label='header_button_login'/>
        </div>
      </div>
    </nav>
  );
};
