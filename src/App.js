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

function App() {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5001/mongodb', {
          methods: 'GET'
      })
        .then(response => response.json())
        .catch(err => {console.log("error:", err)})
        .then(data => setArticles(data));
    }, []);
    console.log(articles)
    console.log(typeof articles['articles']);
    console.log(articles['articles']);
  //   var a = articles['articles'].map(function(article) {
  //    return <li>{article}</li>; 
  // })
    // console.log(typeof a);
    // console.log(a);
    // var articleList = articles.map(function(article){
    //     return <Blog title={article.title} author={article.author}></Blog>
    // });
    return (
        <div>
            <h1>Oteemo Blog</h1>
            <Container>
                <Row className="rows">
                    <Col className="columns">1 of 3</Col>
                    <Col className="columns">2 of 3</Col>
                    <Col className="columns">3 of 3</Col>
                </Row>
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

export default App;
