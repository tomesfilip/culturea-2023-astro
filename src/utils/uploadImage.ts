import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import type { Dispatch, SetStateAction } from 'react';
import { v4 } from 'uuid';
import { storage } from '../config/firebase';
import { FIREBASE_IMG_FILE_LIMIT } from '../lib/constants';

type UploadImageProps = {
  image: File | null;
  setImgUrl: Dispatch<SetStateAction<string | null>>;
  setError: Dispatch<SetStateAction<string>>;
  setIsImageUploading: Dispatch<SetStateAction<boolean>>;
};

export const uploadImage = async ({
  image,
  setImgUrl,
  setError,
  setIsImageUploading,
}: UploadImageProps) => {
  if (!image) {
    return;
  }

  if (image.size > FIREBASE_IMG_FILE_LIMIT) {
    setError('Nahrávej obrázek menší než 3MB');
    return;
  } else {
    setError('');
  }
  try {
    setIsImageUploading(true);
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    const res = await uploadBytes(imageRef, image);
    const uploadedImgUrl = await getDownloadURL(res.ref);
    setImgUrl(uploadedImgUrl);
  } catch (error) {
    console.log('File upload error: ' + error);
  } finally {
    setIsImageUploading(false);
  }
};
