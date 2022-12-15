import {Header, Footer} from '../components/Layout'
import MusicList from '../components/MusicList'
import styles from '../components/module_css/index.module.css'
import Link from "next/link"
import PostLoading from '../components/PostLoading'
import { MainCard } from '../components/MainCard'


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
                        <section className={styles.section2}>

                                <div className={styles.tabSection}>
                                        <div><button className={styles.active}>songs</button></div>
                                        <div><button>videos</button></div>
                                        <div><button>news</button></div>
                                        <div><button>lyrics</button></div>
                                
                                </div>
                                <br />

                                <MainCard />
                                <MainCard />
                                <MainCard />
                                <MainCard />
                                <MainCard />
                                <MainCard />

                                <br />
                                <br />
                                <br />
                                <br />
                        
                        </section>

                        <Footer />
                </div>
        )

export default Index;



// <section className='section2'>
// <MusicList name="Musics" />
// <PostLoading />

// </section>
// <section className='section2'>
// <MusicList name="Videos" />
// <PostLoading />
// </section>