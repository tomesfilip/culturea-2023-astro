import Section from '../components/shared/Section';

const SectionOrganizer = () => {
  return (
    <Section sectionId="poradatel" sectionName="Pořadatel">
      <a href="https://fmk.utb.cz/en/" target="_blank">
        <img
          src="/fmk-logo.svg"
          alt="UTB - Fakulta multimediálních komunikací"
          width={674}
          height={185}
          className="mx-auto"
        />
      </a>
    </Section>
  );
};

export default SectionOrganizer;
