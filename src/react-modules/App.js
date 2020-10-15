import React from 'react';
import Header from "./header/Header";
import PostAddForm from "./post-add-form/post-add-form";
import PostList from "./post-list/post-list";
import SearchPanel from "./search-panel/search-panel";
import PostStatusFilter from "./post-status-filter/post-status-filter";
import './app.css';

function App() {

    const createRandomNum = () => {
        return `glo${(Math.random() * 1e8).toString(16)}`
    }

    const data = [
        {label: 'Изучение реакт', id: createRandomNum()},
        {label: 'Практика', id: createRandomNum()},
        {label: 'Теория', id: createRandomNum()},
    ]

  return (
    <div className="app">
      <Header/>
      <div className="search-panel d-flex">
          <SearchPanel/>
          <PostStatusFilter/>
      </div>
      <PostList posts = {data}/>
      <PostAddForm/>
    </div>
  )
}

export default App;
