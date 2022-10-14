import styles from "styles/home.module.css"

// MUI Imports
import Button from '@mui/material/Button'
import { useState } from "react"

const NewNote = (props) => {
    const [message, setMessage] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("sending", JSON.stringify({message: message}))

        fetch("http://localhost:9001/api/sticky-notes", {
            method: "POST",
            body: JSON.stringify({message: message}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => { 
                console.log(response)
                setMessage("")
            })
    }
    return (
        <div className={styles.newNote}>
            <form method="POST" onSubmit={event => handleSubmit(event)}>
                {/* <textarea name="content" rows="3" cols="20" placeholder="Note content / text"></textarea> */}
                <input type="text" placeholder="New note text" name="message" onChange={event => setMessage(event.target.value)} />
                <Button variant="contained" type="submit">Create new note</Button>
            </form>
        </div>
    )
}

export default NewNote