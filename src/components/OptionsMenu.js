import React from "react"
import SectionSelector from "./SectionSelector"

export default (props) => (
    <div>
        <SectionSelector
            sectionList={props.sectionList}
            selectedSections={props.selectedSections}
        />
    </div>
)