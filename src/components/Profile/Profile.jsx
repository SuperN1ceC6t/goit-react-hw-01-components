import './Profile.css'

export const Profile = (user) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                src={user.avatar}
                alt="User avatar"
                className="userAvatar"
                />
                <p className="avatarName">{user.username}</p>
                <p className="tag">{'@'+user.tag}</p>
                <p className="location">{user.location}</p>
            </div>
            <ul className="stats">
            <li className='stat'>
                <span className="statLabel">Followers</span>
                <span className="statQuantity">{user.stats.followers}</span>
            </li>
            <li className='stat'>
                <span className="statLabel">Views</span>
                    <span className="statQuantity">{user.stats.views}</span>
            </li>
            <li className='stat'>
                <span className="statLabel">Likes</span>
                <span className="statQuantity">{user.stats.likes}</span>
            </li>
            </ul>
        </div>
    );

}