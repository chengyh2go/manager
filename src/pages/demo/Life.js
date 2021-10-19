import React from "react";
import {Button} from "antd";
import "antd/dist/antd.less"
import "./index.less"

export default class Life extends React.Component {
    state = {
        count:0
    }

    handleClick = () => {
        this.setState( {
            count: this.state.count + 1
        })
    }

    render() {
        return <div className="content">
            <Button type="primary" onClick={this.handleClick}>add</Button>
            <p>{this.state.count}</p>
        </div>
    }
}

