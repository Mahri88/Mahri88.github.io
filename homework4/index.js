const url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies'

const calculatetBtn = document.querySelector('#calculate')
const clearBtn = document.querySelector('#clear')
const result = document.querySelector('#result')

let endpoint = 'usd'
let currencyElement = {}
const getData = () => {
  fetch(url + '/' + endpoint + '.json' )
  .then((resp) => resp.json())
  .then((data) => {
    currencyElement = data.usd 
  })
  .catch((error) => console.log(error))
}

function convert(){
  const amount = document.querySelector('#amount').value
const selectFrom = document.querySelector('#from').value
const  selectTo= document.querySelector('#to').value
  const  inUSD = amount/ currencyElement[selectFrom]
  const converted = inUSD * currencyElement[selectTo]
  console.log(inUSD, converted);
  screen.textContent = `${converted} ${selectTo}`;
    console.log('Conversion:', inUSD, converted);
  }
  calculatetBtn.addEventListener('click', convert)


  clearBtn.addEventListener('click', () => {
    document.querySelector('#amount').value = '';
    document.querySelector('#from').value = '';
    document.querySelector('#to').value = '';
    result.textContent = '';
  });

getData()
  
