import Section from '../components/shared/Section';

const SectionLandingTexts = () => {
  return (
    <Section sectionId="landing-texty">
      <div className="mx-auto w-full lg:w-3/5 xl:w-2/5 text-center">
        <h4 className="text-xl font-bold mb-4">
          Témata, na která se můžeš těšit:
        </h4>
        <article className="mb-6">
          <h3 className="mb-4">DÁNSKO A BHÚTÁN</h3>
          <p className="text-xl">
            Protože tam žijí jedni z nejšťastnějších lidí na světě.
          </p>
        </article>
        <article className="mb-6">
          <h3 className="mb-4">STOPOVÁNÍ</h3>
          <p className="text-xl mb-4">
            Protože levnější a dobrodružnější způsob cestování nenajdeš.
          </p>
        </article>
        <p className="text-xl">
          Jsme studentský cestovatelský festival, na který patříš, pokud máš rád
          cestování, poznávání nových kultur, míst a lidí. Těšit se můžeš na
          cestovatelské přednášky, workshopy, ochutnávku místní kuchyně, na
          možnost potkat zajímavé lidi a zažít přátelskou atmosféru. Tento den
          zakončí skvělá afterparty.
        </p>
      </div>
    </Section>
  );
};

export default SectionLandingTexts;
