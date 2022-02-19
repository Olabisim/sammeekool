import {Header, Footer} from '../components/Layout'
import MusicList from '../components/MusicList'
import styles from '../components/module_css/index.module.css'
import Link from "next/link"
import PostLoading from '../components/PostLoading'


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
                                                
                                                <Link href="/contact">
                                                <button className={styles.btn} style={{margin: "auto"}}>
                                                                <a className={styles.for_font}>
                                                                        NOW!
                                                                </a>
                                                </button>
                                                </Link>
                                                <style>
                                                {`
                                                

                                                `}
                                                </style>
                                        </div>
                                </div>

                        </section>
                        <section className='section2'>
				<MusicList name="Musics" />
                                <PostLoading />

                        </section>
                        <section className='section2'>
				<MusicList name="Videos" />
                                <PostLoading />
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