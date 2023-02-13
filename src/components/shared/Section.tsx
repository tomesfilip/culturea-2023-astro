import type { SectionProps } from '../../lib/interfaces/ISectionProps';

const Section = ({
  sectionId,
  sectionName,
  children,
  className,
}: SectionProps) => {
  return (
    <section
      id={sectionId}
      className={`flex flex-col items-center px-4 xl:px-12 my-12 ${className}`}
    >
      {sectionName && (
        <h2 className="text-center mb-8 xl:mb-12">{sectionName}</h2>
      )}
      {children}
    </section>
  );
};

export default Section;
