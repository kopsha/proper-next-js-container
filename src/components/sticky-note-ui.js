import { StickyNote } from "models"
import styles from "styles/home.module.css"

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"
import IconButton from "@mui/material/IconButton"

export default function StickyNoteUI({data = null}) {
    if (data)
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
                <p className={styles.noteContent}>{data?.message}</p>
                <h4>Rank {data?.rank}</h4>
            </div>
        )
    return <div className={styles.note}>No data</div>
}
