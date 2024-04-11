const videoCardContainer = document.querySelector('.video-container');

// let api_key = "AIzaSyB06Guj1_ImQCi-AOd5MKLah6y_oSk11KE";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 20,
    regionCode: 'IN', type: 'short',
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}

// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

// Function to display YouTube shorts in flex card format
function displayShorts(shorts) {
    const shortsContainer = document.getElementById('shorts-container');
    shortsContainer.innerHTML = '';
  
    shorts.forEach(short => {
      const videoId = short.id.videoId;
      const videoTitle = short.snippet.title;
      const videoThumbnail = short.snippet.thumbnails.medium.url;
  
      const cardElement = document.createElement('div');
      cardElement.classList.add('short-card');
  
      const thumbnailElement = document.createElement('img');
      thumbnailElement.src = videoThumbnail;
      thumbnailElement.alt = videoTitle;
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = videoTitle;
  
      cardElement.appendChild(thumbnailElement);
      cardElement.appendChild(titleElement);
  
      cardElement.addEventListener('click', function() {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
      });
  
      shortsContainer.appendChild(cardElement);
    });
  }
  