import type { TMediaItem } from '../../lib/types/TMediaItem';

interface Props {
  mediaList: TMediaItem[];
}

const MediaList = ({ mediaList }: Props) => {
  return (
    <div className="flex flex-col flex-wrap justify-center xl:flex-row gap-y-8">
      {mediaList.map(({ imgSrc, imgAlt, text, link }) => (
        <a
          key={text}
          href={link}
          className="flex flex-col items-center justify-center media-item xl:flex-row gap-x-4 xl:gap-x-8 gap-y-4 xl:gap-y-0 xl:w-1/2"
          target="_blank"
        >
          <img src={imgSrc} alt={imgAlt} width={100} height={100} />
          <h4 className="text-xl font-bold text-flushOrange">{text}</h4>
        </a>
      ))}
    </div>
  );
};

export default MediaList;
