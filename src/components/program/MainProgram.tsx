import { programItems } from '../../data/programItems';
import type { TProgramItem } from '../../lib/types/TProgramItem';
import ProgramItemLeft from './ProgramItemLeft';

const MainProgram = () => {
  return (
    <div className="my-8 lg:my-10 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6 w-full max-w-[1200px] mx-auto">
      {programItems.map(
        (
          { time, headline, imgSrc, presenter, place }: TProgramItem,
          index: number
        ) => (
          <ProgramItemLeft
            key={time}
            time={time}
            headline={headline}
            imgSrc={imgSrc}
            presenter={presenter}
            place={place}
            rightColumned={index % 2 === 0}
          />
        )
      )}
    </div>
  );
};

export default MainProgram;
