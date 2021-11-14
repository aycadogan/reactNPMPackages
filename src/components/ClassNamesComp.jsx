import React, {useState} from 'react';
import cx from 'classnames'

const ClassNamesComp = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [isCurrentPage, setIsCurrentPage] = useState(false)

    let headerClass = cx("Header", {
        dark: isDarkTheme,
        active:isCurrentPage
    })

    const darkBtnHandler = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    const activeBtnHandler = () => {
        setIsCurrentPage(!isCurrentPage)
    }

    return(
        <>
            <h2>Classnames</h2>
            <h1 className={headerClass}>Title</h1>
            {/* <button className="btn" onClick={darkBtnHandler}>Darkmode</button> */}
            {/* <button className="btn" onClick={activeBtnHandler}>Activemode</button> */}
            <button className="btn" onClick={() => setIsDarkTheme(!isDarkTheme)}>Darkmode</button>
            <button className="btn" onClick={() => setIsCurrentPage(!isCurrentPage)}>Activemode</button>
        </>
    )
}
export default ClassNamesComp