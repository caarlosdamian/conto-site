import { start } from '../../assets';
import { Testimonial } from '../../constants';
import { useIntl } from 'react-intl';

export const TestimonialCard = ({
  testimonial: { author, company, featured, img, position, stars, testimonial },
}: {
  testimonial: Testimonial;
}) => {
  const { formatMessage } = useIntl();
  const startsAmount = new Array(stars).fill(undefined);
  return (
    <div
      className={`rounded-xl py-16 px-10 shadow-xl flex flex-col items-start gap-8 ${
        featured ? 'bg-[#4F9CF9] text-white' : ''
      }`}
    >
      <img
        src={img}
        alt="avatar"
        className="w-[70px] h-[70px] object-cover rounded-full"
      />
      <p className="line-clamp-6">{formatMessage({ id: testimonial })}</p>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between items-center ">
          <p> {author}</p>
          <div className="flex items-center gap-2">
            {startsAmount.map((_, index) => (
              <img src={start} alt="start" key={`${author}-start-${index}`} />
            ))}
          </div>
        </div>
        <p>
          {formatMessage({ id: position })},{company}
        </p>
      </div>
    </div>
  );
};
