import { useEffect } from 'react';
import { getRef } from '../../firebase/firebase';

const MessageState = (
  channel,
  currentUserId,
  createChannel,
  getMessages,
  getRealtime
) => {
  const { groupId, uid } = channel;
  useEffect(() => {
    if (!groupId) {
      createChannel(currentUserId, uid);
    } else {
      getMessages(groupId);
    }
  }, [createChannel, groupId, uid, currentUserId, getMessages]);

  // useEffect(() => {
  //   if (groupId) {
  //     getMessages(groupId);
  //   }
  // }, [groupId, getMessages]);

  useEffect(() => {
    const groupRef = getRef('groups');
    console.log('err');
    let listen;
    if (groupId) {
      listen = groupRef
        .child(`${groupId}/messages`)
        .orderByChild('createdAt')
        .startAt(Date.now())
        .on('child_added', (snap) => {
          console.log(snap.val(), 'ooo');
          if (snap.val()) {
            console.log('saga');
            getRealtime(snap.val());
          }
        });
    }
    return () =>
      // eslint-disable-next-line
      groupId &&
      groupRef.child(`${groupId}/messages`).off('child_added', listen);
  }, [channel, groupId, getRealtime]);
};

export default MessageState;
