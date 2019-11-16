import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Panel } from 'primereact/panel'
import RotateCube from './RotateCube'

function SoftwarePortfolio() {
    return (
        <Accordion multiple={true} style = {{marginTop:"1rem"}}>
            <AccordionTab header="&nbsp; Fragmentos (React)">
                <div className="accordion-tab-container">
                    <div className="rotating-cube">
                        <RotateCube img="React" />
                    </div>
                    <div className="accordion-info-container">
                        <Panel>
                            <a href="https://diosile-r1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <span> Fragmentos:</span>
                            </a>
                            &nbsp; A personal code repository. Written with React, NodeJS,
                            Apollo GraphQL and MongoDB.
                        </Panel>
                    </div>
                </div>
            </AccordionTab>
            <AccordionTab header="&nbsp; Cajan19 (Vue)">
                <div className="accordion-tab-container">
                    <div className="rotating-cube">
                        <RotateCube img="Vue" />
                    </div>
                    <div className="accordion-info-container">
                        <Panel>
                            <a href="https://diosile-sprint4.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <span> Cajan19:</span>
                            </a>
                            &nbsp; Image sharing social site application a la
                            Instagram. Written with Vue, NodeJS and MongoDB.
                        </Panel>
                    </div>
                </div>
            </AccordionTab>
            <AccordionTab header="&nbsp; World Map (Angular)">
                <div className="accordion-tab-container">
                    <div className="rotating-cube">
                        <RotateCube img="Angular" />
                    </div>
                    <div className="accordion-info-container">
                        <Panel>
                            <a href="https://diosile-a1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
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
            <AccordionTab header="&nbsp; Linguarum (React)">
                <div className="accordion-tab-container">
                    <div className="rotating-cube">
                        <RotateCube img="React" />
                    </div>
                    <div className="accordion-info-container">
                        <Panel>
                            <a href="https://linguarum.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
                                <span> Linguarum:</span>
                            </a>
                            &nbsp; Application for studying eastern languages. Written with React, NodeJS,
                            Apollo GraphQL and PostgreSQL.
                        </Panel>
                    </div>
                </div>
            </AccordionTab>
            <AccordionTab header="&nbsp; Simple Database (Google App Engine)">
                <div className="accordion-tab-container">
                    <div className="rotating-cube">
                        <RotateCube img="GAE" />
                    </div>
                    <div className="accordion-info-container">
                        <Panel>
                            <a href="https://fastsimon-challenge2.appspot.com/" target="_blank" rel="noopener noreferrer">
                                <span> Simple Database:</span>
                            </a>
                            &nbsp; Simple database implementation with Google App Engine.
                            Made with Python and Cloud Datastore.
                        </Panel>
                    </div>
                </div>
            </AccordionTab>
            <AccordionTab header="&nbsp; Simple Social Site (Laravel)">
                <div className="accordion-tab-container">
                    <div className="rotating-cube">
                        <RotateCube img="Laravel" />
                    </div>
                    <div className="accordion-info-container">
                        <Panel>
                            <a href="https://diosile-l1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <span> Simple Social Network imitation:</span>
                            </a>
                            &nbsp; Basic implementation of social network.
                            Made with Laravel and mySQL.
                        </Panel>
                    </div>
                </div>
            </AccordionTab>
        </Accordion>
    )
}

export default SoftwarePortfolio