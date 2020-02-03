import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
    return(
        <div className ='test'>
            <div className = 'aboutMe'>
                <Fade right>
                <img src = 'https://zupimages.net/up/20/04/yo84.jpg' alt = ''/>
                </Fade>
                <Fade left>
                <p>Lorem lorem lorem lorem lorem lorem</p>
                </Fade>
            </div>
            <div className ='beforeAfter'>
                <Zoom left>
                <img src = 'https://zupimages.net/up/20/06/gv8t.jpeg' alt = ''/>
                <img src = 'https://zupimages.net/up/20/06/71pp.jpeg' alt = ''/>
                <hr className ='separation'/>
                <img src = 'https://zupimages.net/up/20/06/gv8t.jpeg' alt = ''/>
                <img src = 'https://zupimages.net/up/20/06/71pp.jpeg' alt = ''/>
                </Zoom>
            </div>
            <div className ='beforeAfter'>
                <Zoom left>
                <img src = 'https://zupimages.net/up/20/06/gv8t.jpeg' alt = ''/>
                <img src = 'https://zupimages.net/up/20/06/71pp.jpeg' alt = ''/>
                <hr className ='separation'/>
                <img src = 'https://zupimages.net/up/20/06/gv8t.jpeg' alt = ''/>
                <img src = 'https://zupimages.net/up/20/06/71pp.jpeg' alt = ''/>
                </Zoom>
            </div>
        </div>
    )
}

export default AboutMe;
