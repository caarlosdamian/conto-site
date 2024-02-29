import { contoLogo, hamburger, mexico, usa } from '../../../assets';
import { headerLinks } from '../../../constants';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button } from '../..';
import { useLanguageContext } from '../../../context/languageContext';

export const Header = () => {
  const { locale } = useIntl();
  const { changeLocale } = useLanguageContext();

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
          <img
            src={locale === 'es' ? usa : mexico}
            alt={locale === 'es' ? 'usa-flag' : 'mexico-flag'}
            className="w-5 h-5 object-contain"
            onClick={() => changeLocale(locale === 'es' ? 'en-US' : 'es')}
          />
          {headerLinks.map((link) => (
            <a href={link.path} key={link.id} className="text-conto-gray">
              <FormattedMessage id={link.id} />
            </a>
          ))}
          <Button type="primary" label="header_button_login" />
        </div>
      </div>
    </nav>
  );
};
