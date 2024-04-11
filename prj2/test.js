// Get the container where you want to add the cards
var container = document.querySelector('.video-container');

// Loop 20 times
for (var i = 0; i < 20; i++) {
  // Create the card
  var card = document.createElement('div');
  card.className = 'video';

  // Add thumbnail
  var thumbnail = document.createElement('img');
  thumbnail.src = 'img/profile-pic.png';
  thumbnail.className = 'thumbnail';
  thumbnail.alt = '';
  card.appendChild(thumbnail);

  // Add content
  var content = document.createElement('div');
  content.className = 'content';

  // Add channel icon
  var channelIcon = document.createElement('img');
  channelIcon.src = 'img/profile-pic.png';
  channelIcon.className = 'channel-icon';
  channelIcon.alt = '';
  content.appendChild(channelIcon);

  // Add info
  var info = document.createElement('div');
  info.className = 'info';

  // Add title
  var title = document.createElement('h4');
  title.className = 'title';
  title.textContent = 'youtube clone 2021 | create working youtube clone';
  info.appendChild(title);

  // Add channel name
  var channelName = document.createElement('p');
  channelName.className = 'channel-name';
  channelName.textContent = 'modern web';
  info.appendChild(channelName);

  // Add info to content
  content.appendChild(info);

  // Add content to card
  card.appendChild(content);

  // Add card to container
  container.appendChild(card);
}
