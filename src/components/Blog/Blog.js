import React from 'react'
import { makeStyles } from '@material-ui/core'
import { FaPlane, FaMoneyBillAlt, FaCertificate, } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { Link } from 'react-scroll'


import showCaseImage from '../../assets/images/showCase.jpg'
import whoWeAreImage from '../../assets/images/who.jpg'
import iranAirLogo from '../../assets/images/IranAir.png';
import airForceLogo from '../../assets/images/AirForce.png';
import klmLogo from '../../assets/images/KLM.png';
import lufthansaLogo from '../../assets/images/Lufthansa.png';
import mahanAirLogo from '../../assets/images/MahanAir.png';
import contactUsImage from '../../assets/images/3.jpg'

const useStyles = makeStyles({
    textPrimary: {
        color: "#93cb52"
    },
    lHeading: {
        fontSize: "4rem",
        marginBottom: "0.75rem",
        lineHeight: "1.1"
    },
    mHeading: {
        fontSize: "2rem",
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
        color: "#fff",
        "&:hover": {
            background: "#fff",
            color: "#333"
        }
    },
    textCenter: {
        textAlign: "center"
    },
    py_1: {
        padding: "1.5rem 0"
    },
    py_2: {
        padding: "2rem 0"
    },
    p_1: {
        padding: "1.5rem"
    },
    p_2: {
        padding: "2rem"
    },
    p_3: {
        padding: "3rem"
    },
    bgLight: {
        background: "#f4f4f4",
        color: "#333"
    },
    bgDark: {
        background: "#333",
        color: "#fff"
    },
    bgPrimary: {
        background: "#7ab436",
        color: "#fff"
    },
    container: {
        maxWidth: "1100px",
        margin: "auto",
        padding: "0 2rem",
        overflow: "hidden"
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
    },
    items: {
        display: "flex",
        padding: "1rem"
    },
    item: {
        flex: "1",
        textAlign: "center",
        padding: "1rem"
    },
    icon: {
        background: "#93cb52",
        padding: "1rem",
        borderRadius: "50%",
        marginBottom: "1rem"
    },
    who: {
        display: "flex",
        "& div": {
            flex: "1"
        }
    },
    whoImg: {
        background: `url(${whoWeAreImage}) no-repeat center center/cover`
    },
    list: {
        margin: "0.5rem 0",
        listStyle: "none",
        "& li": {
            padding: "0.5rem 0",
            borderBottom: "#444 dotted 1px"
        }
    },
    partnerItems: {
        display: "flex",
        "& img": {
            display: "block",
            margin: "auto",
            width: "60%"
        }
    },
    contact: {
        display: "flex",
        "& div": {
            flex: "1"
        }
    },
    formGroup: {
        margin: "0.75rem",
        "& label": {
            display: "block"
        },
        "& input, textarea": {
            width: "100%",
            padding: "0.5rem"
        }
    },
    contactImage: {
        "& img": {
            display: "block",
            margin: "auto",
            width: "100%"
        }
    },
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
                    <li>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={30}
                            duration={1000}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="why"
                            spy={true}
                            smooth={true}
                            offset={30}
                            duration={1000}>
                            Why
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="who"
                            spy={true}
                            smooth={true}
                            offset={30}
                            duration={1000}>
                            Who
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={30}
                            duration={1000}>
                            Contact
                        </Link>
                    </li>

                </ul>
            </nav>
            <header
                name="home"
                className={classes.showCase}>
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
                    <p className={classes.lead}>
                        Learning to fly an airplane taught me a way of thinking, an approach to problem-solving that was applicable and effective. Pilots are very methodical and meticulous, and artists tend not to be.
                    </p>
                    <a href="/" className={classes.btn}>
                        Read More
                    </a>
                </div>
            </header>
            <section
                name="why"
                className={`${classes.bgLight} ${classes.py_1}`}>
                <div className={classes.container}>
                    <h2 className={`${classes.textCenter} ${classes.mHeading}`}>
                        <span className={classes.textPrimary}>
                            Why&nbsp;
                        </span>
                        choose us
                    </h2>
                    <div className={classes.items}>
                        <div className={classes.item}>
                            <FaMoneyBillAlt className={classes.mHeading} />
                            <div>
                                <h3>
                                    Money
                                </h3>
                                <p>Of course, money is very important to each of us, so we have the cheapest offer in the whole country.</p>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <FaCertificate className={classes.mHeading} />
                            <div>
                                <h3>
                                    Certificate
                                </h3>
                                <p>You can use your certificate while around the world, that's awesome isn't it?</p>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <GiTeacher className={classes.mHeading} />
                            <div>
                                <h3>
                                    Teacher
                                </h3>
                                <p>Our teachers are the best and most knowledgeable, you can trust us easily.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                name="who"
                className={classes.who}>
                <div className={classes.whoImg}></div>
                <div
                    className={`${classes.whoText} ${classes.bgDark} ${classes.p_2}`}>
                    <h2 className={classes.mHeading}>
                        <span className={classes.textPrimary}>
                            Who&nbsp;
                            </span>
                        We Are
                        </h2>
                    <p>
                        We are the first institute of fly in IRAN.
                        We have more than 200 pilot and best planes they're on for you.
                        we have in touch with Iran Air, Mahan Air, Lufthansa Airline and KLM.
                        </p>
                    <h3>
                        Our Team
                        </h3>
                    <ul className={classes.list}>
                        <li>Mahdi Yasini: CEO and CO Founder</li>
                        <li>Mahdi Nasiri: Senior Dev Ops</li>
                        <li>Karim Benzema: Technical manager</li>
                        <li>Maximilian Schwarzamuller: Team Leader</li>
                        <li>Naghi Mamoli: Accountant</li>
                    </ul>
                </div>
            </section>
            <section
                className={classes.py_1}>
                <div className={classes.container}>
                    <h2 className={`${classes.mHeading} ${classes.textCenter}`}>
                        <span className={classes.textPrimary}>
                            Our&nbsp;
                            </span>
                            Partners
                        </h2>
                    <div className={`${classes.partnerItems} ${classes.py_1}`}>
                        <div>
                            <img src={iranAirLogo} alt="partners" />
                        </div>
                        <div>
                            <img src={airForceLogo} alt="partners" />
                        </div>
                        <div>
                            <img src={klmLogo} alt="partners" />
                        </div>
                        <div>
                            <img src={lufthansaLogo} alt="partners" />
                        </div>
                        <div>
                            <img src={mahanAirLogo} alt="partners" />
                        </div>
                    </div>
                </div>
            </section>
            <section
                name="contact"
                className={classes.contact}>
                <div className={`${classes.contactForm} ${classes.bgPrimary} ${classes.p_2}`}>
                    <h2 className={classes.mHeading}>Contact Us</h2>
                    <form>
                        <div className={classes.formGroup}>
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Name" />
                        </div>
                        <div className={classes.formGroup}>
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="email" />
                        </div>
                        <div className={classes.formGroup}>
                            <label for="phone">Phone Number</label>
                            <input type="text" name="phone" id="phone" placeholder="Enter Phone Number" />
                        </div>
                        <div className={classes.formGroup}>
                            <label for="message">Message</label>
                            <textarea type="text" name="message" id="message" placeholder="message"></textarea>
                        </div>
                        <div className={classes.formGroup}>
                            <input type="submit" value="send" className={`${classes.btn} ${classes.btnDark} ${classes.formButton}`} />
                        </div>
                    </form>
                </div>
                <div className={classes.contactImage}>
                    <img src={contactUsImage} alt='contactUsImage' />
                </div>
            </section>
            <footer className={`${classes.bgDark} ${classes.textCenter} ${classes.py_1}`}>
                <div className={classes.container}>
                    <p>Copyright &copy; 2020, ABOuZAR, All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Blog;