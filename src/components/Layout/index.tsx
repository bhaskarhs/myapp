import React from 'react'
import Header from './Header'

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <React.Fragment>
            <Header />
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
            {children}
        </React.Fragment>
    )
}

export default Layout