import { Button } from '..';
import { FormattedMessage, useIntl } from 'react-intl';
import { headerLinks } from '../../constants';
import { useLanguageContext } from '../../context/languageContext';
import { mexico, usa } from '../../assets';

interface Props {
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = ({ handleClose }: Props) => {
  const { locale } = useIntl();
  const { changeLocale } = useLanguageContext();
  return (
    <div className="fixed w-[327px] min-h-[383px] bg-[#194AA9] z-[9999999] top-[80px] left-0 right-0 mx-auto rounded-xl text-white p-6">
      <div className="flex flex-col gap-7 items-center border-[#979797] border-b pb-7">
        <img
          src={locale === 'es' ? usa : mexico}
          alt={locale === 'es' ? 'usa-flag' : 'mexico-flag'}
          className="w-5 h-5 object-contain"
          onClick={() => changeLocale(locale === 'es' ? 'en-US' : 'es')}
        />
        {headerLinks.map((link) => (
          <a
            href={link.path}
            key={link.id}
            className="text-conto-gray"
            onClick={() => handleClose(false)}
          >
            <FormattedMessage id={link.id} />
          </a>
        ))}
      </div>
      <div className="pt-7 flex flex-col gap-7">
        <Button type="primary" label="header_button_login" />
      </div>
    </div>
  );
};
