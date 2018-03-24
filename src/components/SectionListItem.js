import React from "react"

export default ({ firstSection, secondSection }) => (
    <div >
        <h3>{firstSection.name} to {secondSection.name}</h3>
        <p>{parseInt(secondSection.kilometer - firstSection.kilometer)} kilometers</p>
        {firstSection.note && <p>{firstSection.name}:{firstSection.note}</p>}
    </div>
)