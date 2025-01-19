const generateButton = document.getElementById("generate-btn");
const quoteText = document.getElementById("quote-text");

// Function to fetch a random quote from the API
async function fetchRandomQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return `"${data.content}" - ${data.author}`;
  } catch (error) {
    console.error('Error fetching the quote:', error);
    return "Something went wrong. Please try again.";
  }
}

// Function to update the quote on the page
async function updateQuote() {
  const quote = await fetchRandomQuote();
  quoteText.textContent = quote;
}

generateButton.addEventListener("click", updateQuote);

// Load a quote on page load
window.onload = updateQuote;
