import type { TProgramItem } from '../../lib/types/TProgramItem';

type Props = TProgramItem & {
  rightColumned?: boolean;
};

const ProgramItem = ({
  time,
  headline,
  presenter,
  imgSrc,
  place,
  rightColumned,
}: Props) => {
  return (
    <div
      className={`flex flex-col items-center gap-1 md:gap-3 text-center md:basis-1/2 md:text-left ${
        rightColumned ? 'md:pt-8 md:items-start' : 'md:pt-0 md:items-end'
      }`}
    >
      <p className="font-bold text-xl md:text-2xl">{time}</p>
      <div className="flex flex-wrap flex-col lg:flex-row justify-center lg:justify-start gap-2 gap-x-4 items-center">
        <div
          className={`${
            rightColumned
              ? 'md:order-2 md:text-left'
              : 'md:order-1 md:text-right'
          }`}
        >
          <p className="font-bold text-lg md:text-xl">{headline}</p>
          {presenter && (
            <p className="text-flushOrange font-medium">{presenter}</p>
          )}
          {place && <p className="text-flushOrange font-medium">{place}</p>}
        </div>
        {imgSrc && (
          <img
            src={imgSrc}
            alt={presenter}
            className={`rounded-full w-[90px] h-[90px] ${
              rightColumned ? 'md:order-1' : 'md:order-2'
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default ProgramItem;
