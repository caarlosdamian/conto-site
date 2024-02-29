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
  const buttontype = theme === 'white' ? 'secondary' : 'primary';
  return (
    <div
      className={`flex justify-between items-center flex-col lg:flex-row gap-16 ${
        reverse ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="flex flex-col gap-16 flex-1">
        <div className={`flex flex-col ${size === 'xl' ? 'gap-16' : 'gap-6'}`}>
          <h1
            className={`${textStyling} ${
              size === 'xl'
                ? 'text-4xl lg:text-7xl'
                : 'text-4xl lg:text-[64px] leading-normal'
            }`}
          >
            {typeof title === 'string' ? formatMessage({ id: title }) : title}
          </h1>
          <p className={`text-base lg:text-lg ${textStyling}`}>
            {formatMessage({ id: description })}
          </p>
        </div>
        <Button
          type={buttontype}
          label={ctaLabel}
          className="self-start"
          size="lg"
        />
      </div>
      <div className="w-full h-full flex-1">
        <img
          src={photo}
          alt={alt}
          className="relative w-full h-full object-cover z-10"
        />
      </div>
    </div>
  );
};
