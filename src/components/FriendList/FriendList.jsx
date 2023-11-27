import './FriendList.css'
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline }) => {
                return (
                    <FriendListItem
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                    />);
            })}
        </ul>
    )
}