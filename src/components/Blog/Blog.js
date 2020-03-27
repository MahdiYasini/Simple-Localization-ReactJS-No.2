import React from 'react'
import { makeStyles } from '@material-ui/core'
import { FaPlane } from "react-icons/fa";

import showCaseImage from '../../assets/images/showCase.jpg'

const useStyles = makeStyles({
    textPrimary: {
        color: "#93cb52"
    },
    lHeading: {
        fontSize: "4rem",
        marginBottom: "0.75rem",
        lineHeight: "1.1"
    },
    lead: {
        fontSize: "1.3rem",
        marginBottom: "2rem"
    },
    btn: {
        display: "inline-block",
        color: "#fff",
        background: "#93cb52",
        border: "none",
        borderRadius: "5px",
        padding: "0.5rem 2rem",
        "&:hover": {
            background: "#7ab436"
        }
    },
    btnDark: {
        background: "#333",
        color: "#fff"
    },
    navbar: {
        position: "sticky",
        background: "#333",
        display: "flex",
        justifyContent: "space-between",
        color: "#fff",
        top: "0",
        zIndex: "1",
        padding: '1rem',
        "& ul": {
            listStyle: "none",
            display: "flex",
            alignItems: "center"
        },
        "& ul li a": {
            color: "#fff",
            padding: "0.75rem",
            margin: "0 0.25rem"
        },
        "& ul li a:hover": {
            background: "#93cb52",
            borderRadius: "5px"
        },
    },
    showCase: {
        background: `#ccc url(${showCaseImage}) no-repeat center center/cover`,
        height: "100vh",
        color: "#fff",

    },
    showCaseContent: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "0 2rem",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
});

const Blog = () => {
    const classes = useStyles();

    return (
        <>
            <nav className={classes.navbar}>
                <h1>
                    <span className={classes.textPrimary}>
                        <FaPlane />
                        &nbsp;Be a&nbsp;
                    </span>
                    PILOT
                </h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Why?</a></li>
                    <li><a href="/">Who</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </nav>
            <header className={classes.showCase}>
                <div className={classes.showCaseContent}>
                    <h1 className={classes.lHeading}>
                        Days come to pass, make your
                        <span className={classes.textPrimary}>
                            &nbsp;DREAM
                        </span>
                        &nbsp;to&nbsp;
                        <span className={classes.textPrimary}>
                            REAL
                        </span>
                    </h1>
                    <p className = {classes.lead}>
                    Learning to fly an airplane taught me a way of thinking, an approach to problem-solving that was applicable and effective. Pilots are very methodical and meticulous, and artists tend not to be.
                    </p>
                    <a href = "/" className = {classes.btn}>
                        Read More
                    </a>
                </div>

            </header>
        </>
    )
}

export default Blog;