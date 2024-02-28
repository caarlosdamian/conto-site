import { FormattedMessage } from 'react-intl';
import { hero } from '../../assets';
import { Section } from '../../components/shared/section/Section';

export const Hero = () => {
  return (
    <div className="base-container pt-[120px]">
      <Section
        description="hero_description"
        title={
          <FormattedMessage
            id="hero_title"
            description="Greeting to welcome the user to the app"
            values={{
              b: (chunks) => <b>{chunks}</b>,
            }}
          />
        }
        photo={hero}
        alt="Hero section"
        ctaLabel='hero_cta'
      />
    </div>
  );
};
