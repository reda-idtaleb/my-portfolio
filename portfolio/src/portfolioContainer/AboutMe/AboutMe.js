import React, {useEffect} from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import ScrollService from "..//../utilities/ScrollService"
import Animations from "../../utilities/Animations"

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: "This is the description.",
        highlights: {
            bullets: [
                "First",
                "Second",
                "Third",
                "Fourth",
            ],
            heading: "Here are a Few Highlights:"
        }
    }
    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS
                .highlights
                .bullets.map((value, i) => (
                    <div className='highlight' key={i}>
                        <div className='highlight-blob'></div>
                        <span>{value}</span>
                    </div>
                ))
        )
    }

    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className='about-me-card'>
                    <div className='about-me-profile'>
                    </div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>
                            {SCREEN_CONSTANTS.description}
                        </span>
                        <div className='abot-me-highlights'>
                            <div className='highlight-heading'> 
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn'>
                                {""}
                                Hire Me {" "}
                            </button>
                            <a href="https://cvdesignr.com/p/5e836ecb43f4f?hl=fr_FR" download="cv_idtaleb_reda.pdf">
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}