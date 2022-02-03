import styles from './title.module.css'


const MusicList = (props) => {

        return (
                
                <div className={styles.eleven}>
                        <h1 className={styles.header}>{props.name}</h1>
                </div>

        )

}


export default MusicList;