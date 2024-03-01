import { FormattedMessage } from 'react-intl';
import { Section, UnderLabel } from '../../components/';
import { colaboration } from '../../assets';

export const Colaborate = () => {
  return (
    <div className="bg-white w-screen py-16 lg:py-[120px] px-6">
      <div className="base-container">
        <Section
          description="colaborate_description"
          size="xl"
          title={
            <>
              <FormattedMessage id="colaborate_title" />
              <UnderLabel id="colaborate_underline_subtitle" />
            </>
          }
          photo={colaboration}
          alt="Colaborate section"
          ctaLabel="hero_cta"
          theme="white"
          reverse
        />
      </div>
    </div>
  );
};
