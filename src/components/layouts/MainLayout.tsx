import React, { FC } from "react"

import Footer from "../footer/Footer"
import Header from "../header/Header"

type Props = {
    children: React.ReactElement,
    withNav?: boolean,
    withFooter?: boolean,
    pageTitle?: string
}

const MainLayout: FC<Props> = ({ children, withNav = true, withFooter = true, pageTitle }) => {

    document.title = pageTitle ? `App / ${pageTitle}` : "App / Page"

    return (
        <>
            { withNav ? <Header/> : null }
            <div>
                {children}
            </div>
            { withFooter ? <Footer/> : null }
        </>
    )
}

export default MainLayout
