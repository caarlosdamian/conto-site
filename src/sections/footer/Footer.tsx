import { useIntl } from 'react-intl';
import { contoLogo } from '../../assets';

export const Footer = () => {
  const { formatMessage } = useIntl();
  return (
    <footer
      className="base-container py-16 lg:py-[120px] px-6 text-white grid grid-cols-1 gap-14 lg:grid-cols-3 lg:justify-center"
      id="expand"
    >
      <div className="flex flex-col gap-4 items-center">
        <img
          src={contoLogo}
          alt="conto logo footer"
          className="w-[191px] object-contain"
        />
        <p className="font-thin text-sm text-center max-w-[250px] lg:text-start">
          {formatMessage({ id: 'footer_title' })}
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="font-bold text-base">
          {formatMessage({ id: 'footer_rights' })}
        </h2>
        <p className="font-thin text-sm">
          ©{new Date().getFullYear()}, Conto App.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="font-bold text-base">
          {formatMessage({ id: 'footer_contact' })}
        </h2>
        <p className="font-thin text-sm">Guadalajara, Jalisco</p>
        <p className="font-thin text-sm">(+52) 3121345461 </p>
        <p className="font-thin text-sm">hello@conto.com</p>
      </div>
    </footer>
  );
};
