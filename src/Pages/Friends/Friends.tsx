import React, { useEffect, useState } from 'react';
import './Friends.css';

function Friends() {
  const [friends, setFriends] = useState<Array<any>>([]);

  const users: Array<object> = [{ 1: 2 }, { 1: 2 }, { 1: 2 }, { 1: 2 }, { 1: 2 }];
  const setUsers = users.fill({
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
    name: 'User Name',
  }, 0, 5);

  useEffect(() => {
    setFriends(setUsers);
  }, []);

  return (
    <div className="friends-page">
      <div className="friends-page_list">
        {friends && friends.map((el) => (
          <div className="person">
            <img className="avatar" src={el.avatar} alt="avatar" />
            <h4>{el.name}</h4>
          </div>
        ))}
      </div>
      <div className="friends-page_chat">
        chat
      </div>
    </div>
  );
}

export default Friends;
