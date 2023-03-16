import ProgramItemLeft from './ProgramItemLeft';

import { extraProgramItems } from '../../data/programItems';
import type { TProgramItem } from '../../lib/types/TProgramItem';

const ExtraProgram = () => {
  return (
    <div className="my-8">
      <h4 className="text-flushOrange text-xl md:text-2xl font-bold mb-4">
        DOPROVODNÝ PROGRAM
      </h4>
      {extraProgramItems.map(
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

export default ExtraProgram;
