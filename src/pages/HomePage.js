import React from 'react';
import RotateCube from '../components/RotateCube'
import { Accordion, AccordionTab } from 'primereact/accordion';

function Home() {
    return (
        <React.Fragment>
            <Accordion multiple={true}>
                <AccordionTab header="Godfather I">
                    <div style={{ height: "10rem", width: "10rem", backgroundColor: "lightgray" }}>
                        <RotateCube img="React" />
                    </div>
                </AccordionTab>
                <AccordionTab header="Godfather II">
                    <div style={{ height: "10rem", width: "10rem", backgroundColor: "lightgray" }}>
                        <RotateCube img="Vue" />
                    </div>
                </AccordionTab>
                <AccordionTab header="Godfather III">
                    <div style={{ height: "10rem", width: "10rem", backgroundColor: "lightgray" }}>
                        <RotateCube img="Angular" />
                    </div>
                </AccordionTab>
            </Accordion>
        </React.Fragment>
    )
}

export default Home