import styles from "styles/home.module.css"

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"
import IconButton from "@mui/material/IconButton"
import Button from '@mui/material/Button'

export default function StickyNoteUI({ note = null }) {
    if (note)
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
                <p className={styles.noteContent}>{note?.message}</p>
                <h4>Rank {note?.rank}</h4>
            </div>
        )
    return (
        <div className={styles.note}>
            <h3>Create a new one</h3>
            <form method="post">
                <textarea
                    name="message"
                    rows="3"
                    cols="20"
                    placeholder="type your message"
                ></textarea>
                <Button variant="contained">Publish</Button>
            </form>
        </div>
    )
}
