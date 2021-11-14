import React, {useState} from 'react';
import ct from 'classnames'

const ClassNamesComp = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [isCurrentPage, setIsCurrentPage] = useState(false)


    return(
        <>
            <h2>Classnames</h2>
            <h1>Title</h1>
            <button className="btn dark active">Darkmode</button>
            <button className="btn">Activemode</button>
        </>
    )
}
export default ClassNamesComp