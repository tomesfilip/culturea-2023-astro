import InstagramFeed from '../components/program/InstagramFeed';
import Section from '../components/shared/Section';

const SectionProgram = () => {
  return (
    <Section sectionId="program" sectionName="Program">
      <p className="text-center uppercase text-lightOrange">
        Program pro vás intenzivně připravujeme
      </p>
      <InstagramFeed />
    </Section>
  );
};

export default SectionProgram;
