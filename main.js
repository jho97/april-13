const residentsBtn = document.querySelector("#residents-button")
const nameContainer = document.querySelector('section')

function btnClicked () {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')  //<- search query link
    .then ((res) => {
        for(let i = 0; i < res.data.results[0].residents.length; i++) {
          axios.get(`${res.data.results[0].residents[i]}`)
          .then ((res) => { console.log(res.data.name)
          let nameCard = document.createElement('div')
            nameCard.innerHTML = `<h2>${res.data.name}</h2>`
            document.body.appendChild(nameCard)})
          }
    })
    .catch(err => {
        console.log('err')
    })
    console.log("button clicked")
} 

residentsBtn.addEventListener('click', btnClicked)
