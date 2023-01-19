const CookieBanner = () => {
  return (
    <div className="fixed top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col bg-flushOrange p-6 max-w-[460px] rounded-lg z-20">
      <div className="cookie-header flex">
        <h4 className="text-white text-lg">Cookies</h4>
      </div>
      <div className="content text-white mt-4 mb-8">
        <p className="mb-2">
          Pro správnou funkci tohoto webu, měření návštěvnosti a personalizaci
          reklam používáme soubory cookies.
        </p>
        <a href="/cookies" className="underline">
          Více o cookies
        </a>
      </div>
      <div className="buttons flex gap-x-4">
        <button className="px-6 py-2 text-white bg-flushOrange border-white rounded-lg border-[1px]">
          Odmítnout
        </button>
        <button className="px-6 py-2 text-flushOrange bg-white rounded-lg">
          Přijmout cookies
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
