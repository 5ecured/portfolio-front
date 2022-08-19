import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href='https://github.com/5ecured/' target='_blank' rel='noreferrer'>
                <div>
                    <BsGithub />
                </div>
            </a>
            <a href='https://www.linkedin.com/in/edward-ottorino' target='_blank' rel='noreferrer'>
                <div>
                    <BsLinkedin />
                </div>
            </a>
            <a href='mailto:edward.ottorino@gmail.com'>
                <div>
                    <AiOutlineMail />
                </div>
            </a>
        </div>
    )
}

export default SocialMedia