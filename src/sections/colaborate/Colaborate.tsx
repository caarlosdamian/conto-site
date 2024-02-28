import { FormattedMessage } from 'react-intl';
import { Section } from '../../components/shared/section/Section';
import { colaboration } from '../../assets';
import { UnderLabel } from '../../components/shared/underLabel/UnderLabel';
export const Colaborate = () => {
  return (
    <div className="bg-white w-screen py-[120px]">
    <div className="base-container">
      <Section
        description="colaborate_description"
        size='xl'
        title={
          <>
            <FormattedMessage id="colaborate_title" />
            <UnderLabel id='colaborate_underline_subtitle' />
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
  )
}
