import Section from '../components/shared/Section';

const SectionAbout = () => {
  return (
    <Section sectionId="o-festivalu" sectionName="O festivalu">
      <div className="mx-auto w-full xl:w-2/5 text-center">
        <p className="mb-4 xl:mb-8 text-lg xl:text-2xl">
          Culturea je cestovatelský projekt, který každoročně pořádají studenti
          Fakulty multimediálních komunikací Univerzity Tomáše Bati ve Zlíně.
        </p>
        <p className="text-lg xl:text-2xl">
          Culturea je festival o dvou zemích, kde se představí to nejlepší z
          nich. Místní delikatesy, národní tradice, zvyky - zkrátka vše, čím je
          země výjimečná.
        </p>
      </div>
    </Section>
  );
};

export default SectionAbout;
