import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="https://www.linkedin.com/in/r%C3%A9daid-taleb/" rel="noopener noreferrer" target="_blank">
                                <i className='fa fa-linkedin-square'></i>
                            </a>

                            <a href="https://github.com/reda-idtaleb" rel="noopener noreferrer" target="_blank">
                                <i className='fa fa-github-square'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Réda</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                
                            </h1>
                            <span className='profile-role-tagline'>
                                Full stack developer hwo writes clean, elegant and efficient code.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me {" "}
                        </button>
                        <a href="https://cvdesignr.com/p/5e836ecb43f4f?hl=fr_FR" download="cv_idtaleb_reda.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}