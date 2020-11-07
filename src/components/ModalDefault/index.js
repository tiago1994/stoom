import React from 'react'

const ModalDefault = (props) => {
    return (
        <div className='bgModal'>
            <div className='divModal'>
                <h2 className='titleModal'>{props.title}</h2>
                <div className={'textDescription'}>
                    <p>{props.description}</p>
                </div>
                <button className="buttonNext" onClick={() => props.confirmModal()}>Ok</button>
            </div>
        </div>
    )
}

export default ModalDefault