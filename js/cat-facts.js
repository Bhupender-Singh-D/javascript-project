const CAT_FACT_URL = "https://catfact.ninja/fact";

export function initializeCatFacts() {
  const button = document.querySelector("#facts-button"); const output = document.querySelector("#fact-output");
  async function getFact() {
    button.disabled = true; output.textContent = "Loading a cat fact…";
    try {
      const response = await fetch(CAT_FACT_URL);
      if (!response.ok) throw new Error(`Cat Facts returned ${response.status}`);
      const data = await response.json();
      if (!data.fact) throw new Error("The Cat Facts API returned no fact.");
      output.textContent = data.fact;
    } catch (error) { output.textContent = "Sorry, a cat fact could not be loaded. Please check your connection and try again."; console.error(error); }
    finally { button.disabled = false; }
  }
  button.addEventListener("click", getFact);
}
