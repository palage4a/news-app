import React from 'react'


export default ({props:{title,body,id},clickHandler}) => {
    console.log()
    return (
        <article id={id}>
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            <button onClick={() => clickHandler(id)}>Прочитано</button>
        </article>
    )
}