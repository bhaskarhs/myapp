import React, { FC } from 'react'
import InputLable from '../../uikit/InputLable'

export const inputClassName = 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full py-2 px-4'
export const labelClassName = 'block font-medium text-sm text-gray-700'

const ProfileInfo: FC = () => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);

    }

    return (
        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <div className="max-w-xl">
                <section>
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Profile Information
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Update your account's profile information and email address.
                        </p>
                    </header>

                    <form className="mt-6 space-y-6">
                        <div>
                            <InputLable
                                value='Arun'
                                labelName='Name'
                                onchange={handleInputChange}
                                type='text'
                                inputClassName={inputClassName}
                                inputRequired={true}
                                labelClassName={labelClassName}
                            />

                        </div>
                        <div>
                            <InputLable
                                value='arun@gmail.com'
                                labelName='Email'
                                onchange={handleInputChange}
                                type='email'
                                inputClassName={inputClassName}
                                inputRequired
                                labelClassName={labelClassName}
                            />

                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 bg-loginbuttooncolor border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 cursor-pointer"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export const ProfileHeader = () => {
    return (
        <header className="bg-white shadow">
            <div className="max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            </div>
        </header>
    )
}
export const PasswordUpdate = () => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }
    return (
        <div className="p-8 sm:p-12 bg-white shadow sm:rounded-lg">
            <div className="max-w-xl">
                <section>
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Update Password
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Ensure your account is using a long, random password to stay secure.
                        </p>
                    </header>
                    <form className="mt-6 space-y-6">
                        <div>
                            <InputLable
                                labelName='Current Password'
                                onchange={handleInputChange}
                                type='password'
                                value=''
                                inputClassName={inputClassName}
                                inputRequired
                                labelClassName={labelClassName}

                            />
                        </div>
                        <div>
                            <InputLable
                                labelName='New Password'
                                onchange={handleInputChange}
                                type='password'
                                value=''
                                inputClassName={inputClassName}
                                inputRequired
                                labelClassName={labelClassName}

                            />
                        </div>
                        <div>
                            <InputLable
                                labelName='Confirm Password'
                                onchange={handleInputChange}
                                type='password'
                                value=''
                                inputClassName={inputClassName}
                                inputRequired
                                labelClassName={labelClassName}

                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 bg-loginbuttooncolor border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
export const ProfileDelete = () => {
    return (
        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <div className="max-w-xl">
                <section className="space-y-6">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Delete Account
                        </h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
                        </p>
                    </header>

                    <button type="submit" className="inline-flex items-center px-4 py-2 bg-secondary_button_color border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150">
                        Delete Account
                    </button>


                </section>
            </div>
        </div>
    )
}


export default ProfileInfo