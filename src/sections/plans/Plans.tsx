import { Tier, plansInfo } from '../../constants';
import { Slider, UnderLabel, PlanCard } from '../../components/';
import { useIntl } from 'react-intl';

export const Plans = () => {
  const { formatMessage } = useIntl();
  return (
    <section className="bg-white w-screen py-16  lg:py-[120px] px-6" id="plans">
      <div className="flex justify-center flex-col gap-6 items-center mb-8 lg:mb-12">
        <h1 className="text-4xl lg:text-7xl flex items-center gap-1 lg:gap-3">
          {formatMessage({ id: 'plans_title' })}
          <UnderLabel id="plans_underline_title" />
        </h1>
        <p className="text-base lg:text-lg text-center">
          {formatMessage({ id: 'plans_description' })}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="hidden lg:flex justify-center items-center gap-14">
          {plansInfo.map((plan) => (
            <PlanCard item={plan} key={plan.tier} />
          ))}
        </div>
        <div className="block lg:hidden">
          <Slider slides={plansInfo} notMoveOnSelection>
            {(item) => <PlanCard item={item as Tier} />}
          </Slider>
        </div>
      </div>
    </section>
  );
};
