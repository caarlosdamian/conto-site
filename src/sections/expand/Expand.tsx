import { Section, UnderLabel } from '../../components/';
import { FormattedMessage } from 'react-intl';
import { expand } from '../../assets';

export const Expand = () => {
  return (
    <section className="base-container py-16 lg:py-[120px] px-6" id="expand">
      <Section
        description="expand_description"
        title={
          <b>
            <FormattedMessage id="expand_title" />
            <UnderLabel id="expand_underline_subtitle" />
          </b>
        }
        photo={expand}
        alt="expand section"
        ctaLabel="hero_cta"
      />
    </section>
  );
};
