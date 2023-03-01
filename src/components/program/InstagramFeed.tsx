import useFetchInstagramFeed from '../../hooks/useFetchIgFeed';

const InstagramFeed = () => {
  const { data: igPhotoFeed, isLoading, error } = useFetchInstagramFeed();

  return (
    <>
      <h4 className="my-6 text-lg text-center uppercase">
        Pro nejnovější informace nás sledujte na instagramu
      </h4>
      <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-3">
        {igPhotoFeed &&
          igPhotoFeed.slice(0, 3)?.map((feedItem: any) => (
            <a
              key={feedItem.id}
              href={feedItem.permalink}
              target="_blank"
              rel="preload noopener noreferrer"
            >
              <img
                width={250}
                height={250}
                loading="lazy"
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
