import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = (props) => {
    return (
        <div className='divLoading'>
            <div><FontAwesomeIcon icon={faSpinner} size='lg' spin/></div>
        </div>
    )
}

export default Loading