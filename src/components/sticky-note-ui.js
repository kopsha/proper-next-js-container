// Local imports
import styles from "styles/home.module.css"

// MUI Imports
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import IconButton from '@mui/material/IconButton'

function Note({content, rank}) {
    return (
        <div className={styles.note}>
            <IconButton aria-label="Up Vote">
                <KeyboardArrowUpIcon sx={{
                    backgroundColor:"#1976d2",
                    color:"white",
                    borderRadius:100,
                }}/>
            </IconButton>
            <IconButton aria-label="Down Vote">
                <KeyboardArrowDownIcon sx={{
                    backgroundColor:"#1976d2",
                    color:"white",
                    borderRadius:100,
                }}/>
            </IconButton>
            <p className={styles.noteContent}>{content}</p>
            <h4>Rank {rank}</h4>
        </div>
    )
}

export default Note
