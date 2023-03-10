document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const url = 'https://tarot-api.onrender.com/api/v1/cards/random?n=3'
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)

        document.getElementById('card0-name').innerText = data.cards[0].name
        document.getElementById('card0-up').innerText = data.cards[0].meaning_up
        document.getElementById('card0-rev').innerText = data.cards[0].meaning_rev

        document.getElementById('card1-name').innerText = data.cards[1].name
        document.getElementById('card1-up').innerText = data.cards[1].meaning_up
        document.getElementById('card1-rev').innerText = data.cards[1].meaning_rev

        document.getElementById('card2-name').innerText = data.cards[2].name
        document.getElementById('card2-up').innerText = data.cards[2].meaning_up
        document.getElementById('card2-rev').innerText = data.cards[2].meaning_rev
    

         
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }