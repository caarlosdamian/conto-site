import { useIntl } from 'react-intl';
import { workPattern } from '../../assets';
import { UnderLabel } from '../../components/shared/underLabel/UnderLabel';

export const Work = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="w-full relative overflow-hidden">
      <section className="base-container py-16 lg:py-[120px] px-6" id="work">
        <img
          src={workPattern}
          alt="work-pattern"
          className="absolute left-[-150px] lg:left-0 object-contain top-[-100px]"
        />
        <div className="flex justify-center flex-col gap-6 lg:gap-8 items-center mb-8 lg:mb-12 text-white">
          <h1 className="flex-col text-4xl lg:text-7xl flex items-center gap-1 lg:gap-3 text-center">
            {formatMessage({ id: 'work_title' })}
            <UnderLabel id="work_underline_title" />
          </h1>
          <p className="text-base lg:text-lg text-center">
            {formatMessage({ id: 'work_description' })}
          </p>
        </div>
      </section>
    </div>
  );
};
