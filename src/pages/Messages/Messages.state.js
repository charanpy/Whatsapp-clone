import { useEffect } from 'react';
import { getRef } from '../../firebase/firebase';
import { setSeen as updateSeen } from '../../firebase/channels';

const MessageState = (
  channel,
  currentUserId,
  createChannel,
  getMessages,
  getRealtime,
  setSeen,
  deleteNotification
) => {
  const { groupId, uid } = channel;
  useEffect(() => {
    if (!groupId) {
      createChannel(currentUserId, uid);
    } else {
      getMessages(groupId);
      deleteNotification(groupId);
    }
  }, [
    createChannel,
    groupId,
    uid,
    currentUserId,
    getMessages,
    deleteNotification,
  ]);

  useEffect(() => {
    const groupRef = getRef('groups');
    let listen;
    if (groupId) {
      listen = groupRef
        .child(`${groupId}/messages`)
        .orderByChild('createdAt')
        .startAt(Date.now())
        .on('child_added', (snap) => {
          if (snap.val()) {
            getRealtime({
              [snap.key]: snap.val(),
            });
            updateSeen(channel, currentUserId);
          }
        });
    }
    return () =>
      groupId &&
      groupRef.child(`${groupId}/messages`).off('child_added', listen);
  }, [channel, groupId, getRealtime, currentUserId]);

  useEffect(() => {
    const groupRef = getRef(`groups/${groupId}/messages`);
    let listen;
    if (groupId) {
      listen = groupRef.orderByChild('seen').on('child_changed', (snap) => {
        if (snap.val()?.seen) {
          setSeen(snap.val().key);
        }
      });
    }
    return () =>
      groupId &&
      groupRef.child(`${groupId}/messages`).off('child_changed', listen);
  }, [channel, groupId, getRealtime, setSeen]);
};

export default MessageState;
