const messages = ["Hell yeah!!!!!!!!", "No, loser.", "Try again l8r.", "Why would you ask that????????", "Don't 8e an idiot."]

function shake(){
    let index = Math.floor(Math.random() * messages.length)
    return messages[index]
}

document.querySelector('button').addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector('#results').innerHTML = ''
    let result = document.createElement('p')
    result.innerText = shake()
    document.querySelector('#results').append(result)
})