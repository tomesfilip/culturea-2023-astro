import ExtraProgram from '../components/program/ExtraProgram';
import InstagramFeed from '../components/program/InstagramFeed';
import MainProgram from '../components/program/MainProgram';
import Section from '../components/shared/Section';

const SectionProgram = () => {
  return (
    <Section sectionId="program" sectionName="Program">
      <MainProgram />
      <ExtraProgram />
      <InstagramFeed />
    </Section>
  );
};

export default SectionProgram;
