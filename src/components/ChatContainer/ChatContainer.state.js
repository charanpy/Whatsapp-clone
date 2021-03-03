import { useState, useEffect, useRef } from 'react';
import { searchUser } from '../../firebase/firebase';

const ChatContainerState = () => {
  const [searchField, setSearchField] = useState('');
  const [chatList, setChatList] = useState({});
  // const [isSearching, setIsSearching] = useState(false);
  const intervalRef = useRef(null);
  // const searchRef = useRef(null);
  const input = useRef(null);
  const onHandleChange = (e) => {
    setSearchField(e.target.value);
  };

  const compareChatList = (res) => {
    if (!res) return false;
    console.log(chatList, res, 49);
    const chatListKey = Object.keys(chatList).sort();
    const responseKey = Object.keys(res).sort();
    console.log(chatListKey, responseKey);
    return JSON.stringify(chatListKey) === JSON.stringify(responseKey);
  };
  // eslint-disable-line

  useEffect(() => {
    if (searchField) {
      // setIsSearching(true);

      intervalRef.current = setTimeout(() => {
        searchUser(searchField)
          .then((res) => {
            // setIsSearching(false);

            console.log(res);
            if (!compareChatList(res)) {
              console.log('state changed');

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
