import Head from 'next/head'
import Note from 'components/Note'
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
          <Note />
        </div>
      </div>
    </>
  )
}
