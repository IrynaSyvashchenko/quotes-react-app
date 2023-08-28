const generateNewQuote = (func) => {
    fetch(`https://pricey-heartbreaking-lime.glitch.me/quotes/random`)
      .then(res => res.json())
      .then(data => {
        func(data);
      })
      .catch(error => {
        console.error("Error fetching new quote:", error);
      });
  };

  export {generateNewQuote};