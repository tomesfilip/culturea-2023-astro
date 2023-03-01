import MapSvg from '../components/map/MapSvg';
import Section from '../components/shared/Section';

const SectionMap = () => {
  return (
    <Section sectionId="mapa" sectionName="">
      <h2 className="text-center hidden md:flex">
        země, které jsme s Cultureou navštívili
      </h2>
      <MapSvg />
    </Section>
  );
};

export default SectionMap;
