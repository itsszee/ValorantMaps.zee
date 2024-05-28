

const url = "https://valorant-api.com/v1/maps";

const hitAPI = async (url) => {
    const api = await fetch(url);
    const data = await api.json();
    
    return data;
}

document.addEventListener('DOMContentLoaded', async () => {
    let data = await hitAPI(url);
    data = data.data;
    console.log(data);
    let teks = '<ul class="map-list">';
    
    data.forEach(element => {
        teks += `<li class="map-item">`;
        teks += `<img class="map-icon" src="${element.splash}" alt="${element.displayName} icon">`;
        teks += `<div class="map-details">`;
        teks += `<h2 class="map-name"> ⋆ ★ ${element.displayName}</h2>`;
        teks += `<p class="map-description">${element.tacticalDescription}</p>`;
        teks += `<p class="map-coordinates">${element.coordinates}</p>`;
        teks += `</div></li>`;
    });

    teks += '</ul>';
    document.getElementById('content').innerHTML = teks;
});
