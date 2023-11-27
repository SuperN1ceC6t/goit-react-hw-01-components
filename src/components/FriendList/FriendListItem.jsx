import './FriendList.css'

export const FriendListItem = ({ isOnline, avatar, name }) => {
    const statusClass = isOnline ? 'online' : 'offline';
    return (
        <li className="item">
            <span className={`status ${statusClass}`}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="friendName">{name}</p>
        </li>
)
}
