import React from 'react';
import { Button } from '../..';
import { useIntl } from 'react-intl';

interface Props {
  title: React.ReactNode | string;
  description: string;
  photo: string;
  alt: string;
  ctaLabel: string;
  size?: 'xl' | 'normal';
  theme?: 'white' | 'black';
  reverse?: boolean;
}

export const Section = ({
  alt,
  description,
  photo,
  title,
  ctaLabel,
  size,
  reverse,
  theme,
}: Props) => {
  const { formatMessage } = useIntl();
  const textStyling = theme === 'white' ? 'text-conto-black' : 'text-white';
  return (
    <div
      className={`flex justify-between items-center ${
        reverse ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <h1
            className={`${textStyling} ${
              size === 'xl' ? 'text-7xl' : 'text-[64px]'
            }`}
          >
            {typeof title === 'string' ? formatMessage({ id: title }) : title}
          </h1>
          <p className={`text-lg ${textStyling}`}>
            {formatMessage({ id: description })}
          </p>
        </div>
        <Button
          type={'primary'}
          label={ctaLabel}
          className="self-start"
          size="lg"
        />
      </div>
      <div className="w-full h-full">
        <img
          src={photo}
          alt={alt}
          className="block w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
