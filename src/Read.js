import React, { useState, useEffect } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'

function Blog(props) {
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <h2>Author: {props.author}</h2>
            <h3>Date: {props.date}</h3>
        </div>);
}

function Read() {
    return (
        <div>
            <button>Read</button>
        </div>
    )
}



export default Read;