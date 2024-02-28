import { useIntl } from 'react-intl';
import { underline } from '../../../assets';

interface Props {
  id: string;
}
export const UnderLabel = ({ id }: Props) => {
  const { formatMessage } = useIntl();
  return (
    <p className="relative">
      {formatMessage({ id })}
      <img src={underline} alt="underline" className="absolute top-14" />
    </p>
  );
};
