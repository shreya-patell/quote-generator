const generateButton = document.getElementById("generate-btn");
const quoteText = document.getElementById("quote-text");

async function fetchRandomQuote() {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
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

async function updateQuote() {
  const quote = await fetchRandomQuote();
  quoteText.textContent = quote;
}

generateButton.addEventListener("click", updateQuote);

window.onload = updateQuote;
