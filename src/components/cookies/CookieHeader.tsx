import cookieIcon from '../../assets/img/icons/cookie-icon.png';

const CookieHeader = () => {
  return (
    <div className="cookie-header flex flex-wrap items-center gap-x-4">
      <img src={cookieIcon} alt="cookie ikona" width={50} height={50} />
      <h4 className="text-white md:text-2xl text-xl font-bold">Cookies</h4>
    </div>
  );
};

export default CookieHeader;
