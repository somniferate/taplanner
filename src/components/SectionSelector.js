import React from "react"
import Checkbox from "./SectionCheckbox"

export default (props) => (
    <div>
        {props.sectionList.map(section => 
            <Checkbox 
                section={section} 
                key={section.name}
                handleChangeSection={props.handleChangeSection}
            />)}
    </div>
)