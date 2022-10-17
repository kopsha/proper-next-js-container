import Head from 'next/head'
import StickyNoteUI from 'components/sticky-note-ui'
import styles from 'styles/home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Whiteboard</title>
      </Head>
      <div className={styles.header}>
        <h1>Whiteboard</h1>
        <div className={styles.whiteboardContainer}>
          <StickyNoteUI />
          <StickyNoteUI />
          <StickyNoteUI />
          <StickyNoteUI />
          <StickyNoteUI />
          <StickyNoteUI />
          <StickyNoteUI />
          <StickyNoteUI />
        </div>
      </div>
    </>
  )
}
