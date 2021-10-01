import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchQuotes, generateRandomQuote } from '../store/actions/quoteAction';
import '../styles.css';
import { Button, Spinner } from 'react-bootstrap';
import { AiOutlineSync, AiOutlineTwitter } from 'react-icons/ai';


class RandomQuotes extends Component {
  constructor() {
    super();
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuotes();
    this.getRandomQuote();
  }

  getRandomQuote() {
    const randomQuoteIndex = Math.floor(Math.random() * 102);
    this.props.generateRandomQuote(randomQuoteIndex);
  }

  render() {
    if (this.props.loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>);
    }
    const { quote, author } = this.props.quotes[this.props.randomNumber];
    const randomColor = this.props.randomColor[Math.floor(Math.random() * 11)];
    return (
      <div className="wrapper" style={{ backgroundColor: randomColor }}>
        <div id="quote-box">
          <div className="quote-text">
            <i className="fa fa-quote-left"> </i>
            <q id="text" style={{ color: randomColor }}>
              {quote}
            </q>
          </div>
          <div className="quote-author" style={{ color: randomColor }}>
            -<span id="author"> {author}</span>
          </div>
          <div className="buttons">
            <a
              href={`https://twitter.com/intent/tweet?hashtags=randomquotemachine,freecodecamp&related=freecodecamp&text="${quote}" %0D%0A- ${author}%0D%0A`}
              className="button"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: randomColor }}
            >
              <AiOutlineTwitter />
            </a>
            <Button variant="outline-success">Success</Button>
            <Button
              className="button"
              id="new-quote"
              onClick={this.getRandomQuote}
              style={{ backgroundColor: randomColor }}
            > 
              <AiOutlineSync />
            </Button>
            <>
  <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
  <Button as="input" type="button" value="Input" />{' '}
  <Button as="input" type="submit" value="Submit" />{' '}
  <Button as="input" type="reset" value="Reset" />
</>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.data,
  randomNumber: state.quotes.randomNumber,
  loading: state.quotes.loading,
  randomColor: state.quotes.colors,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchQuotes,
      generateRandomQuote,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuotes);