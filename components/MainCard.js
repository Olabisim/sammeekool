
import styles from './module_css/index.module.css'

export const MainCard = () => {
        return (
                
                <div className={styles.card_div}>
                        <div className={styles.card}>
                                <div>
                                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="pic" />
                                </div>
                                <div className={styles.innerDiv2}>
                                        <h2>Asake - Organise (Song)</h2>
                                        <div className={styles.innerDiv2_innerDiv1}>
                                                <span className={styles.innerDiv2_innerDiv1_span}>BY <span>TOMMY</span></span>
                                                <span className={styles.innerDiv2_innerDiv1_span}>DEC 15, 2021 | 15:34</span>
                                                <span className={styles.innerDiv2_innerDiv1_span}> COMMENTS 0 </span>
                                        </div>
                                        <br />
                                        <div>
                                                <p>Asake Organise... Off Ololade Mi Asake's debut album #MMWTV, YBNL and EMPIRE present Track 3 title, "Organise".Asake’s debut album- “Mr...</p>
                                        </div>
                                        <div className={styles.innerDiv2_innerDiv3}>
                                                <button>READ MORE</button>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}