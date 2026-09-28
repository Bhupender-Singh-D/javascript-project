import { currencyCountries } from "./currency-countries.js";
const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

export function initializeCurrencyConverter() {
  const form = document.querySelector("#currency-form"); const amount = document.querySelector("#amount");
  const from = document.querySelector("#from-currency"); const to = document.querySelector("#to-currency");
  const status = document.querySelector("#currency-status"); const button = document.querySelector("#currency-button");
  const populate = (select, selected) => Object.keys(currencyCountries).forEach((code) => select.add(new Option(code, code, false, code === selected)));
  const updateFlag = (select, image) => { const country = currencyCountries[select.value]; image.src = `https://flagsapi.com/${country}/flat/64.png`; image.alt = `${select.options[select.selectedIndex].text} flag`; };
  populate(from, "USD"); populate(to, "INR");
  from.addEventListener("change", () => updateFlag(from, document.querySelector("#from-flag")));
  to.addEventListener("change", () => updateFlag(to, document.querySelector("#to-flag")));
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); const amountValue = Number(amount.value);
    if (!Number.isFinite(amountValue) || amountValue <= 0) { status.textContent = "Enter an amount greater than zero."; amount.focus(); return; }
    button.disabled = true; status.textContent = "Loading the latest exchange rate…";
    try {
      const url = `${BASE_URL}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Currency API returned ${response.status}`);
      const data = await response.json(); const rate = data[to.value.toLowerCase()];
      if (!Number.isFinite(rate)) throw new Error("The selected exchange rate was unavailable.");
      status.textContent = `${amountValue.toLocaleString()} ${from.value} = ${(amountValue * rate).toLocaleString(undefined, { maximumFractionDigits: 2 })} ${to.value}`;
    } catch (error) { status.textContent = "Exchange rates could not be loaded. Please check your connection and try again."; console.error(error); }
    finally { button.disabled = false; }
  });
}
