import type { TPartnerItem } from '../../lib/types/TPartnerItem';

interface Props {
  partners: TPartnerItem[];
}

const PartnerList = ({ partners }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 xl:gap-x-12 gap-y-8 items-center justify-center">
      {partners.map(({ imgSrc, imgAlt }, index) => (
        <img key={index} src={imgSrc} alt={imgAlt} width={254} height={254} />
      ))}
    </div>
  );
};

export default PartnerList;
