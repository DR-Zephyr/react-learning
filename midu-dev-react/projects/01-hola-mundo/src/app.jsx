//
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
//

export const App = () => {
    const formatUsername = (username) => `@${username}`;
    return (
        <section className='App'>
            <TwitterFollowCard
                username='DR-Zephyr'
                name='Emmanuel Cruz'
                InitialIsFollowing={true}
                formatUsername={formatUsername}
            />
            <TwitterFollowCard
                username='OnePiece'
                name='One Piece Oficial'
                InitialIsFollowing={false}
                formatUsername={formatUsername}
            />
            <TwitterFollowCard
                username='Crunchyroll'
                name='Crunchyroll Latam'
                InitialIsFollowing={true}
                formatUsername={formatUsername}
            />
            <TwitterFollowCard
                username='RaymondCoplin'
                name=''
                InitialIsFollowing={true}
                formatUsername={formatUsername}
            />
        </section>
    );
};
