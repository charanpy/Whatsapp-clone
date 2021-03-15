import { useState, useEffect, useRef } from 'react';
import { searchUser } from '../../firebase/firebase';

const ChatContainerState = () => {
  const [searchField, setSearchField] = useState('');
  const [chatList, setChatList] = useState({});
  const intervalRef = useRef(null);
  const input = useRef(null);

  const onHandleChange = (e) => {
    setSearchField(e.target.value);
  };

  const compareChatList = (res) => {
    const chatListKey = Object.keys(chatList).sort();
    const responseKey = Object.keys(res).sort();
    return JSON.stringify(chatListKey) === JSON.stringify(responseKey);
  };

  useEffect(() => {
    if (searchField) {
      intervalRef.current = setTimeout(() => {
        searchUser(searchField)
          .then((res) => {
            if (!res) {
              alert('no users found');
            } else if (!compareChatList(res)) {
              setChatList(res);
            }
          })
          .catch((e) => console.log(e));
      }, 500);
    } else {
      setChatList({});

      clearTimeout(intervalRef.current);
    }

    return () => {
      clearTimeout(intervalRef.current);
    };
  }, [searchField]); // eslint-disable-line

  return [searchField, onHandleChange, chatList, input];
};

export default ChatContainerState;
