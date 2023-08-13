
import { labelClassName, inputClassName } from "../Profile/ProfileInfo"
const ForgotPassword = () => {
    return (
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <div className="mb-4 text-sm text-gray-600">Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
            </div>

            <form>
                <div>
                    <label className={labelClassName} htmlFor="email">Email
                    </label>
                    <input className={inputClassName} id="email" type="email" name="email" required autoFocus />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <button type="submit" className="inline-flex items-center px-4 py-2 bg-loginbuttooncolor border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">Email Password Reset Link
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword