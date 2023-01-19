import FooterLogo from '../footer/FooterLogo';
import SocialList from '../footer/SocialList';

const Footer = () => {
  return (
    <footer id="kontakt" className="w-full px-4 py-8 bg-lightOrange xl:px-24">
      <div className="container flex flex-col flex-wrap items-center mx-auto mt-20 mb-6 xl:flex-row xl:justify-around xl:mb-24 gap-y-16 xl:gap-y-0">
        <FooterLogo />
        <SocialList />
      </div>
      <div className="px-8 text-center xl:px-0">
        <p>
          Tento web není oficiální stránkou Univerzity Tomáše Bati ve Zlíně.
          Jedná se o web k projektu Culturea, který je spravován studenty v
          rámci předmětu
          <br />
          Komunikační agentura Fakulty multimediálních komunikací Univerzity
          Tomáše Bati ve Zlíně.
        </p>
        <p className="font-bold">
          Obsahový správce: Eva Gartnerová,&nbsp;
          <a href="mailto:gartnerova@utb.cz">gartnerova@utb.cz</a>
        </p>
        <p className="font-bold">
          Technický správce: Martin Kazík,&nbsp;
          <a href="mailto:kazik@utb.cz">kazik@utb.cz</a>
        </p>
      </div>
      <p className="mt-12 mb-2 text-center xl:mt-6">
        © 2023, Všechna práva vyhrazena
      </p>
    </footer>
  );
};

export default Footer;
