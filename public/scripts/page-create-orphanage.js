const map = L.map('mapid').setView([-23.8043604,-46.6718378], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create Icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [145, 2]

})

let marker;


//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name = lat]').value = lat
    document.querySelector('[name = lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker =  L.marker([lat, lng], { icon }).addTo(map)
    
})

//add photo field

function addPhotoField () {
    // get photos container #images
    const container = document.querySelector('#images')

    //get duplicate  .new-image

    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da ultima imagem adicionada  
    
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se vazio
    if(newFieldContainer.children[0].value == ''){
        return
    }

    //limpar campo
    newFieldContainer.children[0].value = ''

    //adicionar o clono no container de #images
    container.appendChild(newFieldContainer)
     
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        //limpar campo
        span.parentNode.children[0]. value = ""
        return
    }

    //deletar campo
    console.log('chegay aqui')
    span.parentNode.remove()
}

//troca sim e não

function selectButton(event){
   
    //limpar classes
    const buttons = document.querySelectorAll('.button-select button')
    buttons.forEach(button => button.classList.remove('active'))
    
    //pegar botão e adicionar classe .active
    const button = event.currentTarget
    button.classList.add('active')

    //mudar o valor dom input hidden
    const inputValue = document.querySelector('[name = "open_on_weekends"]')
    inputValue.value = button.dataset.value
}

function verificar(event) {
    //pegar lat e lng
    const lat = document.querySelector('[name = lat]').value
    const lng = document.querySelector('[name = lng]').value

    //verificar se estão vazios
    if(lat == '' || lng == ''){
        console.log(lat, lng)
        event.preventDefault()
        alert('Adicione um ponto no mapa')
    }
}