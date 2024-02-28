import { HTMLAttributes } from 'react';
import { FormattedMessage } from 'react-intl';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  type: 'primary' | 'secondary';
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  label,
  type,
  size = 'sm',
  className,
  ...props
}: Props) => {
  const typeStyles =
    type === 'primary'
      ? 'bg-conto-secondary text-conto-primary'
      : 'text-white bg-conto-skyBlue';
  const sizeStyling = size === 'lg' ? 'py-5' : size === 'md' ? 'py-3' : 'py-2';
  return (
    <button
      {...props}
      className={`font-medium text-base px-5 rounded-lg cursor-pointer hover:bg-opacity-90 ${typeStyles} ${sizeStyling} ${className}`}
    >
      <FormattedMessage id={label} />
    </button>
  );
};
