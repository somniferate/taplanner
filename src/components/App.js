import React from "react"
import OptionsMenu from "./OptionsMenu"
import SectionList from "./SectionList"
import data from "../data/test"
import SectionSelector from "./SectionSelector";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionList: undefined,
            selectedSections: undefined
        }
    }

    componentWillMount() {
        this.setState(() => ({
            sectionList: data.sort((a,b) => a.kilometer - b.kilometer),
            selectedSections: data.filter(a => a.isChecked === true).map(a => a.name)
        }))
    }

    render() {
        return (
            <div className="content-container">
                <div>
                    <SectionSelector 
                        sectionList={this.state.sectionList.map(section => 
                            ({
                                name: section.name, 
                                isChecked: section.isChecked
                            }))}
                        selectedSections={this.state.selectedSections}/>
                </div>
            </div>
        )
    }
}

export default App