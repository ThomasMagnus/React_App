import React, {Component} from 'react';
import Header from "./header/Header";
import PostAddForm from "./post-add-form/post-add-form";
import PostList from "./post-list/post-list";
import SearchPanel from "./search-panel/search-panel";
import PostStatusFilter from "./post-status-filter/post-status-filter";
import './app.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Изучение реакт', id: this.createRandomNum()},
                {label: 'Практика', id: this.createRandomNum()},
                {label: 'Теория', id: this.createRandomNum()},
            ]
        }
    }

    createRandomNum()  {
        return `glo${(Math.random() * 1e8).toString(16)}`
    }

    render() {
        return (
            <div className="app">
                <Header/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts = {this.state.data}
                    onDelete/>
                <PostAddForm/>
            </div>
        )
    }
}
