import Head from "next/head"
import StickyNoteUI from "components/sticky-note-ui"
import styles from "styles/home.module.css"

import { useEffect, useState } from "react"
import { ST } from "next/dist/shared/lib/utils"
import { StickyNote } from "models"

export default function Home() {
    const [notes, setNotes] = useState([])
    const [busy, setBusy] = useState(false)

    useEffect(() => {
        if (busy) return
        console.log("asking for /api/sticky-notes")
        setBusy(true)
        fetch("/api/sticky-notes")
            .then(response => response.json())
            .then(data => setNotes(data))
            .catch(exception => console.error(exception))
            .finally(() => setBusy(false))
    }, [...notes])

    const onCreate = () => {
        console.log("create")
    }

    return (
        <>
            <Head>
                <title>Whiteboard</title>
            </Head>
            <div className={styles.header}>
                <h1>Whiteboard</h1>

                <div className={styles.whiteboardContainer}>
                    {busy ? (
                        <p>Loading...</p>
                    ) : (
                        notes.map(note => <StickyNoteUI note={note} />),
                        <StickyNoteUI />
                    )}
                </div>
            </div>
        </>
    )
}
