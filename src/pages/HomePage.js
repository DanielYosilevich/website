import React from 'react'
import PersonalDetails from '../components/PersonalDetails'
import SoftwarePortfolio from '../components/SoftwarePortfolio'
import FileReader from '../components/FileReader'
import { TabView, TabPanel } from 'primereact/tabview'

function Home() {
    return (
        <React.Fragment>
                <TabView>
                    <TabPanel header="About me">
                        <PersonalDetails />
                    </TabPanel>
                    <TabPanel header="Portfolio">
                        <SoftwarePortfolio />
                    </TabPanel>
                    <TabPanel header="CV">
                        <FileReader />
                    </TabPanel>
                </TabView>
        </React.Fragment>
    )
}

export default Home