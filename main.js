
const API_URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=2&api_key=67f4aec6-1e09-4a9c-b45f-1228ac4de068'

const API_URL_FAVORITES = 'https://api.thedogapi.com/v1/favourites?limit=2&api_key=67f4aec6-1e09-4a9c-b45f-1228ac4de068'



async function loadRandomDog() {
    const res = await fetch(API_URL_RANDOM)
    const data = await res.json()
    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')
    
    img1.src = data[0].url
    img2.src = data[1].url
}

async function loadFavoritesDog() {
    const res = await fetch(API_URL_FAVORITES)
    const data = await res.json()
    
    
}

loadRandomDog()
loadFavoritesDog()