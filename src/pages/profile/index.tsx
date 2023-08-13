// About.tsx

import { FC } from 'react';
import { ProfileHeader } from '../../components/Profile/ProfileInfo';
import Profile from '../../components/Profile';

const ProfilePage: FC = () => {
    return <>
        <ProfileHeader />
        <Profile />

    </>
};

export default ProfilePage;
