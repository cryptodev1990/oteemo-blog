import React, { useState, useEffect } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import './button';
import axios from 'axios';
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";

function Blog(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>Author: {props.author}</h3>
            <h4>{props.date}</h4>
            <p>
                {props.posts}
            </p>
        </div>);
}

function clickMe(){
    alert('Needs to be filled');
}

class App extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    fetch('http://localhost:5001/mongodb',{'methods':
  'GET'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: false,
            items: result.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoading: true,
            error
          });
        }
      )
  }

  render() {
    console.log(this.state.items)
    if (this.state.isLoading || this.state.items == null ) {
      return null; //app is not ready (fake request is in process)
    }

    return (
        <div>
            <h1>Oteemo Blog</h1>
            <Container>
                  {this.state.items.map(item =>
                      <Blog title={item.title}
                            author={item.author}
                            date={item.date}
                            posts={item.posts}></Blog>
                    )}
                <Create
                    title="Create Blog Post"
                    type="outline"/>
                <Read
                    title="Read"
                    type="outline"/>
                <Update
                    title="Update"
                    type="outline"/>
                <Delete
                    title="Delete"
                    type="outline"/>
            </Container>
        </div>
    );
  }
}
export default App;
