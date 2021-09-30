import React, { useState, useEffect } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import './button';
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
    return (
        <div>
            <h1>Oteemo Blog</h1>
            <Container>
                <Row className="rows">
                    <Col className="columns" lg={8}> <Blog title='MongoDB How to'
                                                           author="Connor"
                                                           date="Sept 29, 2021"></Blog></Col>
                    <button onClick={clickMe}/>
                    <Col className="columns" lg={4}> <Blog title='Flask rundown'
                                                           author="Connor"
                                                           date="Sept 29, 2021"></Blog></Col>
                    <button/>
                </Row>
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