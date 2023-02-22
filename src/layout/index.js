import Header from './header';
import React , {useState} from 'react';

export default function AuthLayout({ children }) {
    const [openSidebar, SetOpenSidebar] = useState(false);
    const [openSidebarClassName, SetOpenSidebarClassName] = useState(false);
    return (
        <div className="layout position-relative" >
            <Header />
                <div>
                    {children}
                </div>
        </div>
    )
}