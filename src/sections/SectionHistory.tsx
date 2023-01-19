import { useState } from 'react';

import Section from '../components/shared/Section';

import { historyItems } from '../data/historyItems';

import '../styles/dashedBorder.css';

const SectionHistory = () => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const [showMaxCount, setShowMaxCount] = useState<number>(3);

  const toggleShowAllItems = () => {
    setIsShowMore(!isShowMore);
    setShowMaxCount(isShowMore ? 3 : historyItems.length - 1);
  };

  return (
    <Section
      sectionId="historie"
      sectionName="Minulé ročníky"
      className="mx-auto max-w-7xl"
    >
      <div className="mb-4 dashed-border xl:mb-8"></div>

      <div className="w-full transition-all duration-500 history-items">
        {historyItems.slice(0, showMaxCount).map(({ name, year }) => (
          <div key={name} className="w-full history-item">
            <p className="text-xl xl:text-[45px uppercase xl:leading-[60px] font-headline">
              {name}
            </p>
            <p className="text-xl xl:text-[45px] font-bold xl:leading-[60px] font-headline">
              {year}
            </p>
            <div className="my-4 dashed-border xl:my-8"></div>
          </div>
        ))}
      </div>
      <button
        className="flex items-center text-xl font-bold uppercase text-flushOrange xl:text-3xl gap-x-3"
        aria-label={`Ukaž ${isShowMore ? 'Méně' : 'Další'}`}
        onClick={() => toggleShowAllItems()}
      >
        <span>{isShowMore ? 'Méně' : 'Další'}</span>
        <svg
          width="34"
          height="30"
          viewBox="0 0 34 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.4142 16.4142C34.1953 15.6332 34.1953 14.3668 33.4142 13.5858L20.6863 0.857866C19.9052 0.0768173 18.6389 0.0768172 17.8579 0.857866C17.0768 1.63891 17.0768 2.90524 17.8579 3.68629L29.1716 15L17.8579 26.3137C17.0768 27.0948 17.0768 28.3611 17.8579 29.1421C18.6389 29.9232 19.9052 29.9232 20.6863 29.1421L33.4142 16.4142ZM-1.74846e-07 17L32 17L32 13L1.74846e-07 13L-1.74846e-07 17Z"
            fill="#FF8400"
          />
        </svg>
      </button>
    </Section>
  );
};

export default SectionHistory;
