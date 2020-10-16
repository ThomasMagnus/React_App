import React, {Component} from 'react';
import './post-list-item.sass'

export default class PostListItem extends Component{
    constructor(props) {
        super(props)
        this.state = {
            important: false,
            like: false,
        }
        this.changeImportant = this.changeImportant.bind(this)
        this.changeLke = this.changeLke.bind(this)
    }

    changeImportant() {
        this.setState(({important}) => ({important: !important}))
    }

    changeLke() {
        this.setState(({like}) => ({like: !like}))
    }

    render() {
        let classList = 'app-list-item d-flex justify-content-between';
        const {label, onDelete} = this.props;
        const {important, like} = this.state;

        if (important) {
            classList += ' important'
        }

        if (like) {
            classList += ' like'
        }

        return (
            <div className={classList} onClick={this.changeLke}>
                <span className="app-list-item-label">{label}</span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm" onClick={this.changeImportant}>
                        <i className="fa fa-star"/>
                    </button>
                    <button className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <i className="fa fa-heart"/>
                </div>
            </div>
        )
    }
}
