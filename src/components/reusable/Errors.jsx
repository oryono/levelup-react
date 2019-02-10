import React from 'react'

const Errors = ({errors}) => {
    return (
        <ul>
            {errors.map(err => <li style={{color: 'red'}} className="m-1">{err}</li>)}
        </ul>
    )

}

export default Errors
