import styles from "styles/home.module.css"

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"
import IconButton from "@mui/material/IconButton"

export default function StickyNoteUI() {
    return (
        <div className={styles.note}>
            <IconButton aria-label="Up Vote">
                <ArrowCircleUpIcon
                    sx={{
                        backgroundColor: "#1976d2",
                        color: "white",
                        borderRadius: 100,
                    }}
                />
            </IconButton>
            <IconButton aria-label="Down Vote">
                <ArrowCircleDownIcon
                    sx={{
                        backgroundColor: "#1976d2",
                        color: "white",
                        borderRadius: 100,
                    }}
                />
            </IconButton>
            <p className={styles.noteContent}>Nothing yet...</p>
            <h4>Rank 0</h4>
        </div>
    )
}
