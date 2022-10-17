import styles from "styles/home.module.css"

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useState } from "react"

export function DisplayStickNote({ note = null }) {
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
}

export function CreateStickyNote({ onCreate }) {
    const [message, setMessage] = useState("")
    const onSubmit = event => {
        event.preventDefault()
        if (!message) return
        event.target.reset()
        onCreate(message)
    }

    return (
        <div className={styles.note}>
            <form method="post" onSubmit={onSubmit}>
                <TextField
                    required
                    label="Write a new note"
                    id="message"
                    multiline
                    rows={3}
                    placeholder="type your message"
                    onChange={e => setMessage(e.target.value)}
                ></TextField>
                <Button type="submit" variant="contained">
                    Publish
                </Button>
            </form>
        </div>
    )
}
