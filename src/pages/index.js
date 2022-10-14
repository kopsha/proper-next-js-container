import Head from 'next/head'
import Note from 'components/Note'
import NewNote from 'components/NewNote'
import styles from 'styles/home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {
  var tempContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  const [notes, setNotes] = useState([])
  useEffect(() => {
    fetch("http://localhost:9001/api/sticky-notes")
      .then((response) => response.json())
      .then((data) => setNotes(data))
   }, []);
  const stickyNotes = notes.map(
    note => <Note content={note.message} rank={note.rank} />
  )
  return (
    <>
      <Head>
        <title>Whiteboard</title>
      </Head>
      <div className={styles.header}>
        <h1>Whiteboard</h1>
        <div className={styles.whiteboardContainer}>
          {stickyNotes}
          <NewNote />
        </div>
      </div>
    </>
  )
}
