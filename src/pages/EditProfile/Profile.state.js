import { useEffect } from 'react';
import { getRef } from '../../firebase/firebase';

const ProfileState = (changeProfile, userId) => {
  useEffect(() => {
    const userRef = getRef('users');
    const modifiedUser = userRef.child(userId);
    const listen = modifiedUser.on('child_changed', (snapshot) => {
      const modifiedValue = snapshot.val();
      if (modifiedValue) {
        const name = modifiedValue.includes('http')
          ? 'photoURL'
          : 'displayName';
        changeProfile({
          name,
          value: modifiedValue,
        });
      }
    });
    return () => {
      modifiedUser.off('child_changed', listen);
    };
  }, [userId, changeProfile]);
};

export default ProfileState;
