import {Header, Footer} from '../components/Layout'
import MusicList from '../components/MusicList'


// content: 'sammeekool entertainment presents';

const Index = () => {
        return (

                <div>
                        <Header />
                        <section className='section'>
                                
                                <div className="full-screen">
                                        <div>
                                                <h1>BOOK US TODAY</h1>
                                                <br />
                                                {/*<a className="button-line" href="#!">NOW</a> */}
                                                <button class="btn fourth" style={{margin: "auto"}}>NOW!</button>
                                                <style>
                                                {`
                                                
                                                        .btn {
                                                                box-sizing: border-box;
                                                                appearance: none;
                                                                background-color: transparent;undev
                                                                border: 1px solid WHITE;
                                                                border-radius: 0.6em;
                                                                color: #e74c3c;
                                                                cursor: pointer;
                                                                display: flex;
                                                                align-self: center;
                                                                justify-content: center
                                                                font-size: 1rem;
                                                                font-weight: 400;
                                                                line-height: 1;
                                                                margin: 20px;
                                                                padding: 1.2em 2.8em;
                                                                text-decoration: none;
                                                                text-align: center;
                                                                text-transform: uppercase;
                                                                font-family: 'Montserrat', sans-serif;
                                                                font-weight: 700;
                                                        }
                                                        .btn:hover, .btn:focus {
                                                                color: #fff;
                                                                outline: 0;
                                                        }
                                                        .fourth {
                                                                border-color: #fff;
                                                                color: #fff;
                                                                background-image: linear-gradient(45deg, #fff 50%, transparent 50%);
                                                                background-position: 100%;
                                                                background-size: 400%;
                                                                transition: background 300ms ease-in-out;
                                                        }
                                                        .fourth:hover {
                                                                background-position: 0;
                                                        }

                                                `}
                                                </style>
                                        </div>
                                </div>

                        </section>
                        <section className='section2'>
				<MusicList name="Musics" />
                        </section>
                        <section className='section2'>
				<MusicList name="Videos" />
                        </section>

                        <style jsx> 
                        {`
                        section.section {
                                background: linear-gradient(253deg, #0cc898, #1797d2, #864fe1);
                                background-size: 300% 300%;
                                -webkit-animation: Background 25s ease infinite;
                                -moz-animation: Background 25s ease infinite;
                                animation: Background 25s ease infinite;
                                height: 500px;
                              }
                              
                              @-webkit-keyframes Background {
                                0% {
                                  background-position: 0% 50%
                                }
                                50% {
                                  background-position: 100% 50%
                                }
                                100% {
                                  background-position: 0% 50%
                                }
                              }
                              
                              @-moz-keyframes Background {
                                0% {
                                  background-position: 0% 50%
                                }
                                50% {
                                  background-position: 100% 50%
                                }
                                100% {
                                  background-position: 0% 50%
                                }
                              }
                              
                              @keyframes Background {
                                0% {
                                  background-position: 0% 50%
                                }
                                50% {
                                  background-position: 100% 50%
                                }
                                100% {
                                  background-position: 0% 50%
                                }
                              }
                              
                              .full-screen {
                                position: fixed;
                                top: 0;
                                right: 0;
                                bottom: 0;
                                left: 0;
                                background: url(https://i.imgur.com/wCG2csZ.png);
                                background-size: cover;
                                background-position: center;
                                width: 100%;
                                height: 100%;
                                display: -webkit-flex;
                                display: flex;
                                -webkit-flex-direction: column
                                /* works with row or column */
                                
                                flex-direction: column;
                                -webkit-align-items: center;
                                align-items: center;
                                -webkit-justify-content: center;
                                justify-content: center;
                                text-align: center;

                              }
                              
                              h1 {
                                color: #fff;
                                font-family: 'Open Sans', sans-serif;
                                font-weight: 800;
                                font-size: 3em;
                                letter-spacing: -2px;
                                text-align: center;
                                text-shadow: 1px 2px 1px rgba(0, 0, 0, .6);
                              }
                              
                              h1:after {
                                display: block;
                                color: #fff;
                                letter-spacing: 1px;
                                font-family: 'Poiret One', sans-serif;
                                content: 'sammeekool entertainment presents';
                                font-size: .4em;
                                text-align: center;
                              }
                              
                              .button-line {
                                font-family: 'Open Sans', sans-serif;
                                text-transform: uppercase;
                                letter-spacing: 2px;
                                background: transparent;
                                border: 1px solid #fff;
                                color: #fff;
                                text-align: center;
                                font-size: 1.4em;
                                opacity: .8;
                                padding: 20px 40px;
                                text-decoration: none;
                                transition: all .5s ease;
                                margin: 0 auto;
                                display: block;
                                width: 100px;
                              }
                              
                              .button-line:hover {
                                opacity: 1;
                              }
                                
                        `}
                        </style>
                        <style jsx>
                        {`
                              section.section2 {
                                      background:white;
                                      height: 700px;
                                      width: 100%;
                                      position: relative;
                                      
                                        z-index: 2000;
                              }
                        `}
                        </style>




                        <Footer />
                </div>
        )
}

export default Index;