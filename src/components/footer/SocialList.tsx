import { socialItems } from '../../data/footerItems';

import SocialItem from './SocialItem';

const SocialList = () => {
  return (
    <div className="socials-container">
      <div className="flex items-center justify-center socials gap-x-5 xl:justify-start">
        {socialItems.map(({ imgSrc, imgAlt, socLink }) => (
          <SocialItem
            key={socLink}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            socLink={socLink}
          />
        ))}
      </div>
      <h4 className="mt-4 text-2xl font-bold">#letenkunepotrebuješ</h4>
    </div>
  );
};

export default SocialList;
