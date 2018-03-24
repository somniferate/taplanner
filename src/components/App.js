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
                <div>
                    <SectionSelector
                        sectionList={this.state.sectionList.map(section =>
                            ({
                                name: section.name,
                                isChecked: section.isChecked
                            }))}
                        handleChangeSection={this.handleChangeSection} />
                </div>
                <div>
                    <SectionList
                        sectionList={this.state.sectionList.filter(section => section.isChecked)}
                    />
                </div>
            </div>
        )
    }
}

export default App