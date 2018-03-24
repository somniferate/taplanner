import React from "react"

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: props.section.isChecked
        }
    }

    handleOnChange = () => {
        this.props.handleChangeSection(this.props.section.name)
        this.setState((prevState) => ({
            isChecked: !prevState.isChecked
        }))
    }

    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    defaultChecked={this.state.isChecked}
                    onChange={this.handleOnChange}
                />
                {this.props.section.name}
                <br />
            </div>)
    }
}

export default Checkbox