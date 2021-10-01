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
            <h1>Title: {props.title}</h1>
            <h2>Author: {props.author}</h2>
            <h3>Date: {props.date}</h3>
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
                <Row className="rows">
                    <Col className="columns">1 of 3</Col>
                    <Col className="columns">2 of 3</Col>
                    <Col className="columns">3 of 3</Col>
                </Row>
                <ul>
                  {this.state.items.map(item =>
                    <li>
                      {item.Document.author}
                    </li>
                    )}
                </ul>
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
