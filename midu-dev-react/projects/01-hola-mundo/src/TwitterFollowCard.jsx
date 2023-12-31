import { useState } from 'react';
import PropTypes from 'prop-types';

export const TwitterFollowCard = ({
    formatUsername,
    username,
    name,
    InitialIsFollowing,
}) => {
    //
    const [isFollowing, setIsFollowing] = useState(InitialIsFollowing);
    //
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';
    //
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${username}`}
                    alt='imagen de un hombre sonriendo'
                />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-text'>{name}</strong>
                    <span className='tw-followCard-infoUserName'>
                        {formatUsername(username)}
                    </span>
                </div>
            </header>
            <aside>
                <button
                    className={buttonClassName}
                    onClick={handleClick}
                >
                    {text}
                </button>
            </aside>
        </article>
    );
};

TwitterFollowCard.propTypes = {
    formatUsername: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    InitialIsFollowing: PropTypes.bool.isRequired,
};
