import { useState, useEffect } from 'react';
import { getRef } from '../../firebase/firebase';

const ActiveUserState = (id) => {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const statusRef = getRef(`status/${id}`);
    const listen = statusRef.on('value', (snapshot) => {
      if (snapshot.val()) {
        setStatus(snapshot.val());
        return;
      }
      setStatus(null);
    });
    return () => statusRef.off('value', listen);
  }, [id]);
  return status;
};

export default ActiveUserState;
