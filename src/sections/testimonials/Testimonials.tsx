import { useIntl } from 'react-intl';
import { Slider, TestimonialCard } from '../../components';
import { Testimonial, testimonialInfo } from '../../constants';
import { underline } from '../../assets';

export const Testimonials = () => {
  const { formatMessage } = useIntl();
  return (
    <section
      className="bg-white w-screen py-16 h-full lg:py-[120px] px-12"
      id="testimonials"
    >
      <div className="base-container">
        <h1 className=" text-4xl lg:text-6xl font-bold text-center mb-16  relative">
          {formatMessage({ id: 'testimonials_title' })}
          <img
            src={underline}
            alt="underline"
            className="absolute bottom-[-30px]  right-0"
          />
        </h1>
        <div className="hidden lg:flex gap-9">
          {testimonialInfo.map((testiomonial) => (
            <TestimonialCard
              testimonial={testiomonial}
              key={testiomonial.author}
            />
          ))}
        </div>
        <div className="block lg:hidden">
          <Slider slides={testimonialInfo}>
            {(item) => <TestimonialCard testimonial={item as Testimonial} />}
          </Slider>
        </div>
      </div>
    </section>
  );
};
