import React from 'react';
import RotateCube from '../components/RotateCube'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { TabView, TabPanel } from 'primereact/tabview';

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
                            <div style={{ height: "10rem", width: "10rem", backgroundColor: "lightgray" }}>
                                <RotateCube img="React" />
                            </div>
                        </AccordionTab>
                        <AccordionTab header="Cajan19 (Vue)">
                            <div style={{ height: "10rem", width: "10rem", backgroundColor: "lightgray" }}>
                                <RotateCube img="Vue" />
                            </div>
                        </AccordionTab>
                        <AccordionTab header="World Map (Angular)">
                            <div style={{ height: "10rem", width: "10rem", backgroundColor: "lightgray" }}>
                                <RotateCube img="Angular" />
                            </div>
                        </AccordionTab>
                    </Accordion>
                </TabPanel>
            </TabView>
        </React.Fragment>
    )
}

export default Home