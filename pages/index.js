import {Header, Footer} from '../components/Layout'
import MusicList from '../components/MusicList'
import styles from '../components/module_css/index.module.css'
import Link from "next/link"


// content: 'sammeekool entertainment presents';

const Index = () =>  (

                <div>
                        <Header />
                        <section className={styles.section}>
                                
                                <div className={styles.full_screen}>
                                        <div className={styles.full_screen_set}>
                                                <h1 className={styles.h1}>BOOK US TODAY</h1>
                                                <br />
                                                {/*<a className="button-line" href="#!">NOW</a> */}
                                                <button class="btn fourth" style={{margin: "auto"}}>
                                                        <Link href="/contact">
                                                                <a className={styles.for_font}>
                                                                        NOW!
                                                                </a>
                                                        
                                                        </Link>
                                                </button>
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

export default Index;