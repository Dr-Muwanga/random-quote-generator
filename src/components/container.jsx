import React from "react";
import { useState, useEffect } from "react";
import {FaQuoteLeft} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import { Colors } from "./color";

const url = "https://api.quotable.io/random";

const Container = () => {
  const [quote, setQuote] = useState([]);
  const [color, setColor] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      if(typeof res === 'undefined') return
      const response = await res.json();
      setQuote(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const changeColor = () => {
    setColor(Colors[Math.floor(Math.random() * Colors.length)]);
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
    changeColor(color);
  }, [color])

  const shareTweet = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`;
    window.open(tweetUrl);
  }
  return (
      <div id="quote-box">
        <div className="quote-text">
          <span id="text" key={quote._id} style={{color:color}}> <FaQuoteLeft className="icon"/> {quote.content}</span>
        </div>
        <div className="quote-author">
          <span id="author" style={{color:color}}>-{quote.author}</span>
        </div>
        <div className="buttons" >
          <a style={{background:color}}
            className="button"
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            title="Tweet this quote"
            target="_top"
            onClick={shareTweet}
          >
            <FaXTwitter />
          </a>
          <button
            className="button"
            id="new-quote" style={{background:color}}
            onClick={() => {
              fetchData();
              changeColor();
            }}
          >
            New Quote
          </button>
        </div>
        <div className="footer"><a href="https://github.com/Dr-Muwanga/Dr-Muwanga">
        By Dr. Muwanga</a></div>
      </div>
  );
};

export default Container;
