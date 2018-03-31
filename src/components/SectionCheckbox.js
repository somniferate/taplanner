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
                <span
                    className={this.state.isChecked ? "is-active" : undefined}>
                    {this.props.section.name}
                </span>
            </div>)
    }
}

export default Checkbox