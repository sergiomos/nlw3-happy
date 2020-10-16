const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid', options).setView([lat, lng], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create Icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [145, 2]

})

//Create Marker

L.marker([lat, lng], {icon}).addTo(map)

//image galery

function selectImage(event){
    const button = event.currentTarget

    //remover todas as classe .active
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach((button) => {button.classList.remove('active')})

    //selecionar a imagem clicada
    const img = button.children[0]
    // atualizar o container de image

    const pageImg = document.querySelector('.orphanage-details > img')
    pageImg.src =  img.src

    // adicionar a clase .active para este botão
    button.classList.add('active')
}