import { FormattedMessage } from 'react-intl';
import { Section } from '../../components/shared/section/Section';
import { circlePattern, manage } from '../../assets';
import { UnderLabel } from '../../components/shared/underLabel/UnderLabel';

export const Manage = () => {
  return (
    <div className="bg-white w-screen py-[120px] px-6">
      <img
        src={circlePattern}
        alt="circlePattern-manage"
        className="absolute left-0"
      />
      <div className="base-container">
        <Section
          description="manage_description"
          size="xl"
          title={
            <>
              <FormattedMessage id="manage_title" />
              <UnderLabel id='manage_underline_subtitle' />
            </>
          }
          photo={manage}
          alt="Manage section"
          ctaLabel="hero_cta"
          theme="white"
        />
      </div>
    </div>
  );
};
