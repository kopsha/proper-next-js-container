import styles from "styles/home.module.css"

// MUI Imports
import Button from '@mui/material/Button'

const NewNote = () => {
    return (
        <div className={styles.newNote}>
            <form method="post">
                <textarea name="content" rows="3" cols="20" placeholder="Note content / text"></textarea>
                <Button variant="contained">Create new note</Button>
            </form>
        </div>
    )
}

export default NewNote