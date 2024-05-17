/**
 * @return {Promise<Object>} Quote information
 */
const fetchQuote = async() => {
    const res =await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const data =await res.json()
    //console.log(data[0])
    return data[0]
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp =async (element) =>{
    document.querySelector('#app-title').innerHTML='Breakingbad App'
    element.innerHTML='Loading...'

    const quoteLabel = document.createElement('blockquote')
    const authoLabel =document.createElement('h3')
    const nextQuoteButton = document.createElement('button')
    nextQuoteButton.innerText ='Next Quote'

    const renderQuote = (data) =>{
        //console.log({data})
        quoteLabel.innerHTML= data.quote
        authoLabel.innerHTML= data.author
        element.replaceChildren(quoteLabel,authoLabel,nextQuoteButton)
    }

    //añadir addlistener
    const next = () => {
        element.innerHTML='Loading...'
        fetchQuote()
        .then(renderQuote)
    }

    nextQuoteButton.addEventListener('click', () =>{next()})

    fetchQuote()
        .then(renderQuote)


    // const quote = await fetchQuote()
    // //console.log(quote)
    // element.innerHTML='Tenemos data'
}