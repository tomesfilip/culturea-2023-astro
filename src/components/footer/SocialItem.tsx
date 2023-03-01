import type { TSocialItem } from '../../lib/types/TSocialItem';

const SocialItem = ({ socLink, imgSrc, imgAlt }: TSocialItem) => {
  return (
    <a href={socLink} key={socLink} target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt={imgAlt} width={43} height={43}></img>
    </a>
  );
};

export default SocialItem;
