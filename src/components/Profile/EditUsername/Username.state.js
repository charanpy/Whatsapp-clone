import { useRef } from 'react';
import { getRef } from '../../../firebase/firebase';

const UsernameState = (currentUserId, username) => {
  const inputRef = useRef(null);

  const updateUsername = () => {
    if (username === inputRef?.current?.value) {
      alert('Updated successfully');
      return false;
    }
    if (!inputRef?.current?.value) {
      alert('Name should not be empty');
      return false;
    }
    const userRef = getRef('users');
    userRef
      .child(currentUserId)
      .update({
        displayName: inputRef?.current?.value,
      })
      .then(() => alert('Successfully updated'))
      .catch(() => {
        alert('Something went wrong!Please try again');
      });
    return true;
  };
  return [inputRef, updateUsername];
};

export default UsernameState;
