import { Header, Footer } from '../components/Layout'
import styles from '../components/module_css/contact.module.css'

const contact = () => (

        <>
                <Header />

                <div className={styles.root}>

                        <h2 className={styles.h2}>CONTACT ME.</h2>
                
                </div>

                <div className={styles.main}>

                        <section className={styles.contact}>
                                <div className={styles.contact_box}>
                                        <div className={styles.contact_links}>
                                                <div className={styles.links}>
                                                <div className={styles.link}>
                                                        <a><img className={styles.image} src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
                                                </div>
                                                <div className={styles.link}>
                                                        <a><img className={styles.image} src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
                                                </div>
                                                <div className={styles.link}>
                                                        <a><img className={styles.image} src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
                                                </div>
                                                <div className={styles.link}>
                                                        <a><img className={styles.image} src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
                                                </div>
                                                </div>
                                        </div>
                                        <div className={styles.contact_form_wrapper}>
                                                <form>
                                                        <div className={styles.form_item}>
                                                                <input className={styles.input} type="text" name="sender" required />
                                                                <label className={styles.label}>Name:</label>
                                                        </div>
                                                        <div className={styles.form_item}>
                                                                <input className={styles.input} type="text" name="email" required />
                                                                <label className={styles.label}>Email:</label>
                                                        </div>
                                                        <div className={styles.form_item}>
                                                                <textarea className={styles.textarea} name="message" required ></textarea>
                                                                <label className={styles.label}>Message:</label>
                                                        </div>
                                                        <button className={styles.submit_btn}>Send</button>  
                                                </form>
                                        </div>
                                </div>
                        </section>

                </div>

                <Footer />
        </>
        
)

export default contact