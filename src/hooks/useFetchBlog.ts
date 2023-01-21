import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '../config/firebase';
import type { TBlogItem } from '../lib/types/TBlogItem';

const useFetchBlog = (documentId: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const docRef = doc(db, 'blog-articles', documentId);
        const docData = await getDoc(docRef);
        if (!docData.exists()) {
          setError(`No such a document with id: ${documentId}`);
        }
        setData(docData.data());
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

export default useFetchBlog;
