import { useEffect, useState } from 'react';

const useFetchRecipeList = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const res = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${
            import.meta.env.PUBLIC_INSTAGRAM_TOKEN
          }`,
          { cache: 'no-store' }
        );

        const { data } = await res.json();

        const ighotoFeed = data.filter(
          (item: any) =>
            item.media_type === 'CAROUSEL_ALBUM' || item.media_type === 'IMAGE'
        );

        setData(ighotoFeed);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unexpected error');
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    return () => abortController.abort();
  }, []);

  return { data, isLoading, error };
};

export default useFetchRecipeList;
