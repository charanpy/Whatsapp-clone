import { v4 as uuidv4 } from 'uuid';

export const uploadFileType = ['jpeg', 'jpg', 'png'];

export const metaData = {
  contentType: 'image/png',
};
export const generateUniqueUid = () => uuidv4();
