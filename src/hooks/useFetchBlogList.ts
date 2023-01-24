import { getDocs, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { blogCollectionRef } from '../config/firebase';

const useFetchBlogList = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const blogQueryOrderedLimit = query(
          blogCollectionRef,
          orderBy('createdAt', 'desc')
        );

        const snapshot = await getDocs(blogQueryOrderedLimit);

        setData(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );

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

export default useFetchBlogList;
