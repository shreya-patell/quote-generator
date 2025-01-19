const generateButton = document.getElementById("generate-btn");
const quoteText = document.getElementById("quote-text");

// Function to fetch a random quote from ZenQuotes API using a CORS proxy
async function fetchRandomQuote() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://zenquotes.io/api/random';

  try {
    const response = await fetch(proxyUrl + apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }
    const data = await response.json();
    return `"${data[0].q}" - ${data[0].a}`;
  } catch (error) {
    console.error('Error fetching the quote:', error);
    return "The quote couldn't load. Please try again.";
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
