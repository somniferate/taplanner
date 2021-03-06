import React from "react"
import OptionsMenu from "./OptionsMenu"
import SectionList from "./SectionList"
import SectionSelector from "./SectionSelector";
import data from "../data/TAData"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionList: undefined,
        }
    }

    componentWillMount() {
        this.setState(() => ({
            sectionList: data.sort((a, b) => a.kilometer - b.kilometer),
        }))
    }

    handleChangeSection = (newSection) => {
        console.log(`Changing from ${newSection}`)
        this.setState((prevState) => ({
            sectionList: prevState.sectionList.map(section => {
                if (section.name === newSection) {
                    return {
                        name: section.name,
                        kilometer: section.kilometer,
                        note: section.note,
                        isChecked: !section.isChecked
                    }
                } else {
                    return section
                }
            })
        }))
    }

    render() {
        return (
            <div className="content-container">
                <div className="app__wrapper">
                    <div className="app__selector">
                        <SectionSelector
                            sectionList={this.state.sectionList.map(section =>
                                ({
                                    name: section.name,
                                    isChecked: section.isChecked
                                }))}
                            handleChangeSection={this.handleChangeSection} />
                    </div>
                    <div className="app__sections">
                        <SectionList
                            sectionList={this.state.sectionList.filter(section => section.isChecked)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App