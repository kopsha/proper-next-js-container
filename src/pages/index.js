import Head from "next/head"
import styles from "styles/home.module.css"
import { useEffect, useState } from "react"

import { DisplayStickNote, CreateStickyNote } from "components/sticky-note-ui"

export default function Home() {
    const [notes, setNotes] = useState([])
    const [busy, setBusy] = useState(false)

    useEffect(() => {
        setBusy(true)
        fetch("/api/sticky-notes")
            .then(response => response.json())
            .then(data => setNotes(data))
            .catch(exception => console.error(exception))
            .finally(() => setBusy(false))
    }, [])

    const onCreate = async message => {
        fetch("/api/sticky-notes", {
            method: "POST",
            body: JSON.stringify({ message: message }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then(response => response.json())
            .then(new_note => setNotes(previous => [...previous, new_note]))
            .catch(exception => console.error(exception))
            .finally(() => setBusy(false))
    }

    return (
        <>
            <Head>
                <title>Whiteboard</title>
            </Head>
            <div className={styles.header}>
                <h1>Whiteboard</h1>

                <div className={styles.whiteboardContainer}>
                    {/* TODO: move this in its own component */}
                    {busy ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            {notes.map((note, ndx) => (
                                <DisplayStickNote note={note} key={ndx} />
                            ))}
                            <CreateStickyNote onCreate={m => onCreate(m)} />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
