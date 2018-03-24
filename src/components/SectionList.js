import React from "react"
import SectionListItem from "./SectionListItem"

export default (props) => (
    <div>
        {props.sectionList.map((section, index, array) => {
            if (index !== array.length - 1) {
                return <SectionListItem 
                    key={section.kilometer}
                    firstSection={section}
                    secondSection={array[index+1]}
                />
            }
            
        })}
    </div>
)