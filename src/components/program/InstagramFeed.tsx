const res = await fetch(
  `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=
  }`,
  { cache: 'no-store' }
);
const { data } = await res.json();

const instagramPhotoFeed = data.filter(
  (item: any) =>
    item.media_type === 'CAROUSEL_ALBUM' || item.media_type === 'IMAGE'
);

const InstagramFeed = () => {
  return (
    <>
      <h4 className="my-6 text-lg text-center uppercase">
        Pro nejnovější informace nás sledujte na instagramu
      </h4>
      <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-3">
        {instagramPhotoFeed &&
          instagramPhotoFeed.slice(0, 3)?.map((feedItem: any) => (
            <a
              key={feedItem.id}
              href={feedItem.permalink}
              target="_blank"
              rel="preload"
            >
              <img
                width={250}
                height={250}
                src={feedItem.media_url}
                alt={feedItem.caption}
              />
            </a>
          ))}
      </div>
    </>
  );
};

export default InstagramFeed;
