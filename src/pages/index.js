import Head from 'next/head'
import Note from 'components/Note'
import NewNote from 'components/NewNote'
import styles from 'styles/home.module.css'

export default function Home() {
  var tempContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  return (
    <>
      <Head>
        <title>Whiteboard</title>
      </Head>
      <div className={styles.header}>
        <h1>Whiteboard</h1>
        <div className={styles.whiteboardContainer}>
          <Note content={tempContent} rank={3} />
          <Note content={tempContent} rank={3} />
          <Note content={tempContent} rank={3} />
          <Note content={tempContent} rank={3} />
          <Note content={tempContent} rank={3} />
          <Note content={tempContent} rank={3} />
          <Note content={tempContent} rank={3} />
          <NewNote />
        </div>
      </div>
    </>
  )
}
