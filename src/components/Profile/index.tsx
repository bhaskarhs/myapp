import { FC } from 'react'
import ProfileInfo, { PasswordUpdate, ProfileDelete } from './ProfileInfo'

const Profile: FC = () => {
    return (
        <main>
            <div className="py-12">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8 space-y-6">
                    <ProfileInfo />
                    <PasswordUpdate />
                    <ProfileDelete />
                </div>
            </div>
        </main>
    )
}

export default Profile