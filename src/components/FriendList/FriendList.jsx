import './FriendList.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => {
                const statusClass = isOnline ? 'online' : 'offline';
                console.log(statusClass);
                return (
                    <li className="item" key={id}>
                        <span className={`status ${statusClass}`}></span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="friendName">{name}</p>
                    </li>
                )
            })}
        </ul>
    )
}