import PartnerList from '../components/partners/PartnerList';
import Section from '../components/shared/Section';

import { partnerList } from '../data/partners';

const SectionPartners = () => {
  return (
    <Section sectionId="partneri" sectionName="Partneři">
      <PartnerList partners={partnerList} />
    </Section>
  );
};

export default SectionPartners;
