import NewQuote from "./NewQuote";
import Author from "./Author";
import Text from "./Text";
import TweetQuote from "./TweetQuote";
import { useState } from "react";
import quotes from "./quotes.json";

const QuoteBox = () => {
  const getQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const [quote, setquote] = useState("");
  const [author, setauthor] = useState("");
  //const [colors, setcolors] = useState("#0000ff");

  const handleClick = () => {
    const newQuote = getQuote();
    setquote(newQuote.quote);
    setauthor(newQuote.author);
  };

  return (
    <div id="quote-box">
      <Text quote={quote} />
      <Author author={author} />
      <NewQuote onClick={handleClick} />
      <TweetQuote />
    </div>
  );
};

export default QuoteBox;
