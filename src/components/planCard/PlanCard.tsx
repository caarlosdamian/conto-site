import { useIntl } from 'react-intl';
import { Tier } from '../../constants';
import { check } from '../../assets';
import { Button } from '..';

export const PlanCard = ({
  item: {
    backgroundColor,
    description,
    features,
    imageAlt,
    imageUrl,
    price,
    tier,
    tier_subtitle,
  },
}: {
  item: Tier;
}) => {
  const { formatMessage } = useIntl();
  return (
    <div
      className={`w-[310px] h-[520px] shadow-xl rounded-md ${
        tier === 'plans_tier_title_team' ? 'lg:h-[594px]' : ''
      }`}
    >
      <div
        className="rounded-t-md text-white py-5 px-4 flex items-center justify-between h-[110px]"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="">
          <h2 className="text-2xl">{formatMessage({ id: tier })}</h2>
          <p className="text-lg">{formatMessage({ id: tier_subtitle })}</p>
        </div>
        <div className="">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="object-contain max-w-28"
          />
        </div>
      </div>
      <div className="flex items-center justify-center py-6 gap-9 flex-col">
        <div className="flex items-center flex-col px-12 gap-4">
          <p className="text-sm font-normal ">
            $ <strong className="text-4xl font-bold">{price}</strong> /{' '}
            {formatMessage({ id: 'plans_periodicity' })}
          </p>
          <p className="text-sm font-normal text-center">
            {formatMessage({ id: description })}
          </p>
        </div>
        <div className="px-6">
          <p className="text-base font-bold text-center">
            {formatMessage({ id: 'plans_features' })}
          </p>
          <div className="mt-4 flex flex-col gap-4">
            {features.map((feature) => (
              <div className="flex items- gap-2" key={feature}>
                <img src={check} alt="check image" className="object-contain" />
                <p className="text-base  font-normal">
                  {formatMessage({ id: feature })}
                </p>
              </div>
            ))}
            <Button label="plans_cta" type="third" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
