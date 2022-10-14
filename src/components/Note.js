import styles from "styles/home.module.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Note = () => {
    return (
        <div className={styles.note}>
            <KeyboardArrowUpIcon />
            <KeyboardArrowDownIcon />
            <p className={styles.noteContent}>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s
            </p>
        </div>
    )
}

export default Note
