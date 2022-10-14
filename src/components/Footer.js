// Local Imports
import styles from "styles/home.module.css"
import Link from "next/link"

// MUI Imports
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <GitHubIcon fontSize="large" />
            <Link href="https://github.com/kopsha/proper-next-js-container">
                <h2>Visit the github repo of this web application</h2>
            </Link>
        </div>
    )
}

export default Footer
