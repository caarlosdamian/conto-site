import { FormattedMessage } from 'react-intl';
import { hero, homePattern } from '../../assets';
import { Section } from '../../components/shared/section/Section';

export const Hero = () => {
  return (
    <div className="base-container py-8 lg:py-[120px] px-6">
      <img src={homePattern} alt="homePattern" className='absolute left-0'/>
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
