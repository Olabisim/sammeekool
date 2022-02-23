import { Header, Footer } from '../components/Layout'
import styles from '../components/module_css/contact.module.css'

const contact = () => (

        <>
                <Header />

                <div className={styles.root}>

                        <h2 className={styles.h2}>CONTACT ME.</h2>
                
                </div>

                <section className={styles.contact}>
                        <div className={styles.contact_header}>
                        {/* <h3 id="co-title">Contact Me</h3> */}
                        <p className={styles.co_text}>Reach out for a new concert.</p>
                        </div>
                        
                        <div className={styles.contact_content}>
                        <div className={styles.contact_form}>
                        <h3 className={styles.form_title}>Send me a message</h3>
                        <form action="mailto:npeel3497@gmail.com" method="post" enctype="text/plain">
                        <fieldset className={styles.fieldset}>
                                <div className={styles.form_field}>
                                <input name="name" type="text" className={styles.name} placeholder="Your Name"></input>
                                </div>
                        <div className={styles.form_field}>
                                <input name="email" type="email" className={styles.email} placeholder="Your Email"></input>
                                </div>
                        <div className={styles.form_field}>
                                <input name="Subject" type="text" className={styles.subject} placeholder="Subject"></input>
                                </div>
                        <div className={styles.form_field}>
                                <textarea className={styles.textarea} name="message" type="text" className={styles.message} placeholder="Your Message"></textarea>
                                </div>
                        </fieldset>
                        <input className={styles.form_btn} type="submit" value="send" />
                        </form>
                        </div>
                        
                        <div className={styles.contact_info}>
                                <h3>Email Me At </h3>
                                <a href="mailto:npeel3497@gmail.com"><p>npeel3497@gmail.com</p></a>
                                <h3>Find Me On </h3>
                                <div className={styles.contact_links}>
                                        <a><i className="fab fa-linkedin"></i></a>
                                        <a><i className="fab fa-github"></i></a>
                                        <a><i className="fab fa-codepen"></i></a>
                                </div>
                        </div>
                        </div>
                </section>


                <Footer />
        </>
        
)

export default contact


// <div className={styles.main}>

//         <section className={styles.contact}>
//                 <div className={styles.contact_box}>
//                         <div className={styles.contact_links}>
//                                 <div className={styles.links}>
//                                 <div className={styles.link}>
//                                         <a><img className={styles.image} src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
//                                 </div>
//                                 <div className={styles.link}>
//                                         <a><img className={styles.image} src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
//                                 </div>
//                                 <div className={styles.link}>
//                                         <a><img className={styles.image} src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
//                                 </div>
//                                 <div className={styles.link}>
//                                         <a><img className={styles.image} src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
//                                 </div>
//                                 </div>
//                         </div>
//                         <div className={styles.contact_form_wrapper}>
//                                 <form>
//                                         <div className={styles.form_item}>
//                                                 <input className={styles.input} type="text" name="sender" required />
//                                                 <label className={styles.label}>Name:</label>
//                                         </div>
//                                         <div className={styles.form_item}>
//                                                 <input className={styles.input} type="text" name="email" required />
//                                                 <label className={styles.label}>Email:</label>
//                                         </div>
//                                         <div className={styles.form_item}>
//                                                 <textarea className={styles.textarea} name="message" required ></textarea>
//                                                 <label className={styles.label}>Message:</label>
//                                         </div>
//                                         <button className={styles.submit_btn}>Send</button>  
//                                 </form>
//                         </div>
//                 </div>
//         </section>

// </div>