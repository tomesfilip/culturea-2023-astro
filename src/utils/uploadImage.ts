import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../config/firebase';

const uploadImage = async (imageUpload: File | null) => {
  if (!imageUpload) {
    return;
  }
  try {
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const res = await uploadBytes(imageRef, imageUpload);
    const uploadedImgUrl = await getDownloadURL(res.ref);
    return uploadedImgUrl;
  } catch (error) {
    console.log('File upload error: ' + error);
  }
};
