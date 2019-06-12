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
                            <a href="https://diosile-r1.herokuapp.com/">
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
                            <a href="https://diosile-sprint4.herokuapp.com/">
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
    )
}

export default SoftwarePortfolio