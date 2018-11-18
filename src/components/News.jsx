import React from 'react'

import Record from './Record.jsx'

// import style from './News.module.css'




// const compose = (...fns) =>
//     fns.reduceRight((prevFn, nextFn) =>
//         (...args) => nextFn(prevFn(...args)),
//         value => value
//     );




export default ({records,deletePost}) => {
    return (
        <div>
            {records.map( (record, i) => <Record props={record} key={i} clickHandler={deletePost}/>)}
        </div>
        )
    }