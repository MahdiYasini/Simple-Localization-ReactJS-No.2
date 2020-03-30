import React from 'react'
import { makeStyles } from '@material-ui/core'
import { FaPlane, FaMoneyBillAlt, FaCertificate, } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { Link } from 'react-scroll'

import { useTranslation } from 'react-i18next'

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

    const { t, i18n } = useTranslation();
    console.log('t', t())
    const changeLanguageHandler = () => {
        console.log('object')
        i18n.changeLanguage('en');
    }
    // {t('menubar.home')}

    return (
        <>
            <nav className={classes.navbar}>
                <h1>
                    <span className={classes.textPrimary}>
                        <FaPlane />
                        &nbsp;{t('navbar.logo.be')}&nbsp;
                    </span>
                    {t('navbar.logo.pilot')}
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
                            {t('navbar.menu.home')}
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
                            {t('navbar.menu.why')}
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
                            {t('navbar.menu.who')}
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
                            {t('navbar.menu.contact')}
                        </Link>
                    </li>

                </ul>
            </nav>
            <header
                name="home"
                className={classes.showCase}>
                <div className={classes.showCaseContent}>
                    <h1 className={classes.lHeading}>
                        {t('header.title')}
                        <span className={classes.textPrimary}>
                            &nbsp;{t('header.titleH1')}
                        </span>
                        &nbsp;{t('header.titleTo')}&nbsp;
                        <span className={classes.textPrimary}>
                            {t('header.titleH2')}
                        </span>
                    </h1>
                    <p className={classes.lead}>
                        {t('header.paragraph')}
                    </p>
                    <a href="/" className={classes.btn}>
                        {t('header.btn')}
                    </a>
                </div>
            </header>
            <section
                name="why"
                className={`${classes.bgLight} ${classes.py_1}`}>
                <div className={classes.container}>
                    <h2 className={`${classes.textCenter} ${classes.mHeading}`}>
                        <span className={classes.textPrimary}>
                            {t('section_1.why')}&nbsp;
                        </span>
                        {t('section_1.choose')}
                    </h2>
                    <div className={classes.items}>
                        <div className={classes.item}>
                            <FaMoneyBillAlt className={classes.mHeading} />
                            <div>
                                <h3>
                                    {t('section_1.h3_1')}
                                </h3>
                                <p>{t('section_1.h3_1_p')}</p>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <FaCertificate className={classes.mHeading} />
                            <div>
                                <h3>
                                    {t('section_1.h3_2')}
                                </h3>
                                <p>{t('section_1.h3_2_p')}</p>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <GiTeacher className={classes.mHeading} />
                            <div>
                                <h3>
                                    {t('section_1.h3_3')}
                                </h3>
                                <p>{t('section_1.h3_3_p')}</p>
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
                            {t('section_2.who')}&nbsp;
                            </span>
                        {t('section_2.we')}
                    </h2>
                    <p>
                        {t('section_2.paragraph')}
                    </p>
                    <h3>
                        {t('section_2.h3')}
                    </h3>
                    <ul className={classes.list}>
                        <li>{t('section_2.li_1')}</li>
                        <li>{t('section_2.li_2')}</li>
                        <li>{t('section_2.li_3')}</li>
                        <li>{t('section_2.li_4')}</li>
                        <li>{t('section_2.li_5')}</li>
                    </ul>
                </div>
            </section>
            <section
                className={classes.py_1}>
                <div className={classes.container}>
                    <h2 className={`${classes.mHeading} ${classes.textCenter}`}>
                        <span className={classes.textPrimary}>
                            {t('section_3.our')}&nbsp;
                            </span>
                        {t('section_3.partners')}
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
                    <h2 className={classes.mHeading}>
                    {t('section_3.partners')}
                    </h2>
                    <form>
                        <div className={classes.formGroup}>
                            <label htmlFor="name">{t('section_4.label_name')}</label>
                            <input type="text" name="name" id="name" placeholder="Enter Name" />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="email">{t('section_4.label_email')}</label>
                            <input type="email" name="email" id="email" placeholder="email" />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="phone">{t('section_4.label_phone')}</label>
                            <input type="text" name="phone" id="phone" placeholder="Enter Phone Number" />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="message">{t('section_4.label_message')}</label>
                            <textarea type="text" name="message" id="message" placeholder="message"></textarea>
                        </div>
                        <div className={classes.formGroup}>
                            <input type="submit" value= {t('section_4.btn_value')} className={`${classes.btn} ${classes.btnDark} ${classes.formButton}`} />
                        </div>
                    </form>
                </div>
                <div className={classes.contactImage}>
                    <img src={contactUsImage} alt='contactUsImage' />
                </div>
            </section>
            <footer className={`${classes.bgDark} ${classes.textCenter} ${classes.py_1}`}>
                <div className={classes.container}>
                    <p>{t('footer.copyright')} &copy; {t('footer.paragraph')}</p>
                </div>
            </footer>
        </>
    )
}

export default Blog;