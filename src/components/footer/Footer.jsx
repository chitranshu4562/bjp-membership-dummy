import classes from "./Footer.module.css";
import '../../global.css';
import NavLinkContainer from "../nav-link-container/NavLinkContainer.jsx";
import Card from "../card/Card.jsx";
import MediaQuery from "react-responsive";
import ExpandableBox from "../expandable-box/ExpandableBox.jsx";

export default function Footer() {
    const aboutParty = [
        "Our Philosophy",
        "Integral Humanism",
        "History of the Party",
        "History and Development of BJP",
        "Antyodaya",
        "Constitution"
    ]

    const documents = [
        "National Executive Resolution",
        "Union Budget 2024-2025",
        "Manifesto 2024",
        "Election Format C7"
    ]

    const founderDetails = [
        "Dr. Shyama Prasad Mookerjee",
        "Pandit Deendayal Upadyaya"
    ]

    const leadersHistory = [
        "Shri Atal Vihari bajpai",
        "Shri L. K. Advani",
        "Shri Narendra Modi",
        "Shri Amit Shah",
        "Shri Jagat Prakash Nadda",
        "BJP Presidents"
    ]

    const stateLeadership = [
        "State CMs and Deputy CMs"
    ]

    const morchas = [
        "Kisan Morcha",
        "Mahila Morcha",
        "S. C. Morcha",
        "Yuva Morcha",
        "S. T. Morcha",
        "OBC Morcha",
        "Minority Morcha"
    ]

    const mediaResources = [
        "Press Release",
        "Interviews and Articles",
        "Speeches",
        "Photo Gallery",
        "Video Gallery"
    ]

    const literature = [
        "Kamal Sandesh",
        "Books and Monographs",
        "e-Library"
    ]

    const organisation = [
        "Margadarshak Mandal",
        "Parliamentary Board",
        "Central Election Committee",
        "National Office Bearers",
        "National General Secretary(ORG.)",
        "National Executive Members",
        "National Spokespersons",
        "Permanent Invitees",
        "Special Invitees",
        "Morchas Prabharis",
        "Morchas Presidents",
        "Committees",
        "State Prabhari",
        "State President",
        "State General Secretary(ORG.)",
        "Sanghatak",
        "Departments"
    ]

    const bjpInParliament = [
        "Lok Sabha Members",
        "Rajya Sabha Members",
        "Union Council of Ministers"
    ]

    return (
        <>
            <div className={classes.footerContainer}>
                <div className={classes.footerContentBox}>
                    <h1 className={classes.siteNavigator}>SITE NAVIGATOR</h1>
                    <MediaQuery minWidth={1050}>
                        <div className={classes.linkContainer}>
                            <div>
                                <div>
                                    <h3>The Party</h3>
                                    <NavLinkContainer
                                        title="ABOUT THE PARTY"
                                        links={aboutParty}
                                    />
                                    <hr/>
                                </div>

                                <div className="mt-5">
                                    <NavLinkContainer
                                        title="DOCUMENTS"
                                        links={documents}
                                    />
                                    <hr/>
                                </div>

                                <p className={classes.generalLink}>PRESIDENT'S OFFICE</p>
                                <hr/>

                                <p className={classes.generalLink}>SOCIAL STREAM</p>
                                <hr/>

                                <div>
                                    <NavLinkContainer
                                        title="BJP IN PARLIAMENT"
                                        links={bjpInParliament}
                                    />
                                </div>

                                <div>
                                    <Card
                                        content="Archives"
                                        classNames={classes.archivesCard}
                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h3>Leadership</h3>
                                    <NavLinkContainer
                                        title="DETAILS ABOUT FOUNDERS"
                                        links={founderDetails}
                                    />
                                </div>

                                <div className="mt-3">
                                    <NavLinkContainer
                                        title="LIFE AND HISTORY OF OUR LEADERS"
                                        links={leadersHistory}
                                    />
                                </div>

                                <div className="mt-3">
                                    <NavLinkContainer
                                        title="STATE LEADERSHIP"
                                        links={stateLeadership}
                                    />
                                </div>
                                <hr/>

                                <div>
                                    <h3>Morcha</h3>
                                    <NavLinkContainer
                                        links={morchas}
                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h3>Media Resources</h3>
                                    <NavLinkContainer
                                        links={mediaResources}
                                    />
                                    <hr/>
                                </div>

                                <div className="mt-5">
                                    <h3>Literature</h3>
                                    <NavLinkContainer
                                        links={literature}
                                    />
                                    <hr/>
                                </div>

                                <div className="mt-5 d-flex flex-column">
                                    <Card
                                        content="Infographics"
                                        classNames={classes.infographicsCard}
                                    />
                                    <Card
                                        content="My BJP"
                                        classNames={classes.myBjpCard}
                                    />
                                    <Card
                                        content="State Website"
                                        classNames={classes.stateWebsiteCard}
                                    />
                                    <Card
                                        content="Make a Donation"
                                        classNames={classes.donationCard}
                                    />
                                    <Card
                                        content="Active Membership"
                                        classNames={classes.activeMembershipCard}
                                    />
                                    <Card
                                        content="Andriod App"
                                        classNames={classes.andriodAppCard}
                                    />
                                    <Card
                                        content="IOS App"
                                        classNames={classes.iosAppCard}
                                    />

                                </div>
                            </div>

                            <div>
                                <div>
                                    <h3>Organisation</h3>
                                    <NavLinkContainer
                                        links={organisation}
                                    />
                                    <hr/>
                                </div>

                                <div className="mt-5">
                                    <p className={classes.generalLink}>CONTACT US</p>
                                    <hr/>
                                </div>

                                <div className="mt-5 d-flex flex-column">
                                    <Card
                                        content="BJP Live"
                                        classNames={classes.bjpLiveCard}
                                    />
                                    <Card
                                        content="Vikas Yatra"
                                        classNames={classes.vikasYatraCard}
                                    />
                                    <Card
                                        content="Election Corner"
                                        classNames={classes.electionCornerCard}
                                    />
                                </div>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={1050}>
                        <div>
                            <ExpandableBox title="The Party">
                                <div>
                                    <NavLinkContainer
                                        title="ABOUT THE PARTY"
                                        links={aboutParty}
                                    />
                                    <hr/>
                                </div>

                                <div className="mt-5">
                                    <NavLinkContainer
                                        title="DOCUMENTS"
                                        links={documents}
                                    />
                                    <hr/>
                                </div>

                                <p className={classes.generalLink}>PRESIDENT'S OFFICE</p>
                                <hr/>

                                <p className={classes.generalLink}>SOCIAL STREAM</p>
                                <hr/>

                                <div>
                                    <NavLinkContainer
                                        title="BJP IN PARLIAMENT"
                                        links={bjpInParliament}
                                    />
                                </div>
                            </ExpandableBox>
                            <ExpandableBox title="Leadership">
                                <div>
                                    <NavLinkContainer
                                        title="DETAILS ABOUT FOUNDERS"
                                        links={founderDetails}
                                    />
                                </div>

                                <div className="mt-3">
                                    <NavLinkContainer
                                        title="LIFE AND HISTORY OF OUR LEADERS"
                                        links={leadersHistory}
                                    />
                                </div>

                                <div className="mt-3">
                                    <NavLinkContainer
                                        title="STATE LEADERSHIP"
                                        links={stateLeadership}
                                    />
                                </div>
                                <hr/>
                            </ExpandableBox>
                            <ExpandableBox title="Morcha">
                                <div>
                                    <NavLinkContainer
                                        links={morchas}
                                    />
                                </div>
                            </ExpandableBox>
                            <ExpandableBox title="Media Resources">
                                <div>
                                    <NavLinkContainer
                                        links={mediaResources}
                                    />
                                    <hr/>
                                </div>
                            </ExpandableBox>
                            <ExpandableBox title="Literature">
                                <div>
                                    <NavLinkContainer
                                        links={literature}
                                    />
                                    <hr/>
                                </div>
                            </ExpandableBox>
                            <ExpandableBox title="Organisation">
                                <div>
                                    <NavLinkContainer
                                        links={organisation}
                                    />
                                    <hr/>
                                </div>
                            </ExpandableBox>
                        </div>
                        <div className={classes.smallScreenCardContainer}>
                            <Card
                                content="Archives"
                                classNames={classes.archivesCard}
                            />
                            <Card
                                content="Infographics"
                                classNames={classes.infographicsCard}
                            />
                            <Card
                                content="My BJP"
                                classNames={classes.myBjpCard}
                            />
                            <Card
                                content="State Website"
                                classNames={classes.stateWebsiteCard}
                            />
                            <Card
                                content="Make a Donation"
                                classNames={classes.donationCard}
                            />
                            <Card
                                content="Active Membership"
                                classNames={classes.activeMembershipCard}
                            />
                            <Card
                                content="Andriod App"
                                classNames={classes.andriodAppCard}
                            />
                            <Card
                                content="IOS App"
                                classNames={classes.iosAppCard}
                            />
                            <Card
                                content="BJP Live"
                                classNames={classes.bjpLiveCard}
                            />
                            <Card
                                content="Vikas Yatra"
                                classNames={classes.vikasYatraCard}
                            />
                            <Card
                                content="Election Corner"
                                classNames={classes.electionCornerCard}
                            />
                        </div>
                    </MediaQuery>
                </div>
            </div>
        </>
    )
}
