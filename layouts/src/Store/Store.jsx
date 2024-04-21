import "./Store.css";
import {Component} from "react";
import IconSwitch from "../IconSwitch/IconSwitch.jsx";
import TableView from "../TableView/TableView.jsx";
import ListView from "../ListView/ListView.jsx";

export default class Store extends Component {
    constructor() {
        super();
        this.storeViewMode = {
            list: "view_list",
            table: "view_module"
        };
        this.state = {mode: this.storeViewMode.list};
    }

    renderItem() {
        if (this.state.mode === this.storeViewMode.table) {
            return <TableView products={this.props.products}/>;
        }
        else {
            return <ListView products={this.props.products}/>;
        }
    }

    onSwitch() {
        this.setState(this.state.mode === this.storeViewMode.list ? {mode: this.storeViewMode.table} : {mode: this.storeViewMode.list});
    }

    render() {
        return <div className="store"><IconSwitch icon={this.state.mode} onSwitch={() => this.onSwitch()}/>
            {this.renderItem()}
        </div>;
    }
}