import React from 'react'
import RotateCube from '../components/RotateCube'
import FileReader from '../components/FileReader'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { TabView, TabPanel } from 'primereact/tabview'
import cv from '../assets/common/files/CV.pdf'
import { Panel } from 'primereact/panel'

function Home() {
    return (
        <React.Fragment>
            <TabView>
                <TabPanel header="Specialities">
                    Content I
                </TabPanel>
                <TabPanel header="Portfolio">
                    <Accordion multiple={true}>
                        <AccordionTab header="Fragmentos (React)">
                            <div className="accordion-tab-container">
                                <div className="rotating-cube">
                                    <RotateCube img="React" />
                                </div>
                                <div className="accordion-info-container">
                                    <Panel>
                                        <a href="https://diosile-r1.herokuapp.com/">
                                            <span> Fragmentos:</span>
                                        </a>
                                        &nbsp; A personal code repository. Written with React, NodeJS,
                                        Apollo GraphQL and Mongo DB.
                                    </Panel>
                                </div>
                            </div>
                        </AccordionTab>
                        <AccordionTab header="Cajan19 (Vue)">
                            <div className="accordion-tab-container">
                                <div className="rotating-cube">
                                    <RotateCube img="Vue" />
                                </div>
                                <div className="accordion-info-container">
                                    <Panel>
                                        <a href="https://diosile-sprint4.herokuapp.com/">
                                            <span> Cajan19:</span>
                                        </a>
                                        &nbsp; Image sharing social site application a la
                                        Instagram. Written with Vue, NodeJS and MongoDB.
                                    </Panel>
                                </div>
                            </div>
                        </AccordionTab>
                        <AccordionTab header="World Map (Angular)">
                            <div className="accordion-tab-container">
                                <div className="rotating-cube">
                                    <RotateCube img="Angular" />
                                </div>
                                <div className="accordion-info-container">
                                    <Panel>
                                        <a href="https://diosile-a1.herokuapp.com/">
                                            <span> World Map:</span>
                                        </a>
                                        &nbsp; Interactive World Map with an option to query
                                        MediaWiki for every country region. Written with Angular 7.
                                        <br />
                                        Warning: can take a LONG time to load! (Well, this is Angular
                                        after all ...)
                                    </Panel>
                                </div>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </TabPanel>
                <TabPanel header="CV">
                    <span style={{ fontWeight: "bold" }}>
                        <a
                            href={cv}
                            type="application/pdf"
                            download='DanielYosilevich_CV.pdf'
                        >
                            Download
                        </a>
                    </span>
                    <FileReader />
                </TabPanel>
            </TabView>
        </React.Fragment>
    )
}

export default Home