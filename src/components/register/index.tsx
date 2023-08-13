import { FC } from 'react'
import { inputClassName, labelClassName } from '../Profile/ProfileInfo'

const Register: FC = () => {
    return (
        <div className='lg:w-[35%] md:w-[50%] w-full'>
            <h3>Logo</h3>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <form method="POST" action="http://buyersscoop.net/register">
                    <input type="hidden" name="_token" value="QpW6SEdeINLdlSOpaEvbK8XZB3jFg9xMFUvWVdLh" />

                    <div>

                        <label className={labelClassName} htmlFor="name">Name
                        </label>
                        <input className={inputClassName} id="name" type="text" name="name" required autoFocus autoComplete="name" />
                    </div>

                    <div className="mt-4">
                        <label className={labelClassName} htmlFor="email">Email
                        </label>
                        <input className={inputClassName} id="email" type="email" name="email" required autoComplete="username" />
                    </div>

                    <div className="mt-4">
                        <label className={labelClassName} htmlFor="password">Password
                        </label>
                        <input className={inputClassName} id="password" type="password" name="password" required />
                    </div>

                    <div className="mt-4">
                        <label className={labelClassName} htmlFor="password_confirmation">Confirm Password
                        </label>
                        <input className={inputClassName} id="password_confirmation" type="password" name="password_confirmation" required autoComplete='' />
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <a className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="http://buyersscoop.net/login">Already registered?
                        </a>
                        <button type="submit" className="inline-flex items-center px-4 py-2 bg-loginbuttooncolor border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-4">Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register