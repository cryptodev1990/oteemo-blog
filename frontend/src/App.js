import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap'

function Blog(props) {
  return (
    <div class="post">
      <hr></hr>  
      <div class="block">
        <h2>{props.title}</h2>
        <a class="btn btn-large btn-primary edit" href="#">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </a>
        <a class="btn btn-large btn-primary delete" href="#">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </a>
      </div>
      <div class="block">
        <p class="author">{props.author}</p>
        <p class="date">{props.date}</p>
      </div>
      <p class="body">
        {props.posts}
      </p>
    </div>);
}

class App extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    fetch('http://localhost:5001/mongodb', {
      'methods':
        'GET'
    })
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
    if (this.state.isLoading || this.state.items == null) {
      return null; //app is not ready (fake request is in process)
    }

    return (
      <div>
        <h1>Oteemo Blog</h1>
        <div class="center">
          <a class="btn btn-large btn-primary create center" href="#">
            <i class="fa fa-lg fa-plus" aria-hidden="true"></i>
          </a>
        </div>
        <Container>
          {this.state.items.map(item =>
            <Blog title={item.title}
              author={item.author}
              date={item.date}
              posts={item.posts}></Blog>
          )}
        </Container>
      </div>
    );
  }
}
export default App;
