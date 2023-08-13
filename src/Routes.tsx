import { FC, useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
import FileUpload from './pages/file_upload'
import Layout from './components/Layout'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ForgotPasswordPage from './pages/forgot_password'
import ProtectedRoutes from './utlis/ProtectedRoutes'
import MyContext from './utlis/context/Mycontext'


const AppRoutes: FC = () => {
   
    const [appState, setAppState] = useState<object>({
        isLoggedIn: false
    })

 
    const setContext = (obj: object) => {
        console.log("obj", obj);
        setAppState(prevState => ({
            ...prevState,
            ...obj
        }))

    }
    useEffect(() => {

        if (localStorage.getItem("login")) {
            setContext({ isLoggedIn: localStorage.getItem("login") })

        }
    }, [])
    return (
        <MyContext.Provider value={{
            state: appState,
            setContext: setContext
        }}>
            <Routes>
                <Route path='/' element={
                    <ProtectedRoutes>
                        <Layout>
                            <Home />
                        </Layout>
                    </ProtectedRoutes>
                } />
                <Route path='/login' element={<LoginPage  />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/forgot_password' element={<ForgotPasswordPage />} />
                <Route path='/profile' element={<Layout> <Profile /></Layout>} />
                <Route path='/file_upload' element={<Layout><FileUpload /> </Layout>} />
            </Routes>
        </MyContext.Provider >



    )
}
export default AppRoutes