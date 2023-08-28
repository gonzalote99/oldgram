import posts from './data';
const userPicElArr = Array.from(document.getElementsByClassName('profile-pic'));
const nameElArr = Array.from(document.getElementsByClassName('name'));
const locationEl = document.getElementById('location');
const postEl = document.getElementById('post');
const likesEl = document.getElementById('likes');
const likeBtn = document.getElementById('like');
const commentBtn = document.getElementById('comment');
const dmBtn = document.getElementById('dm');
let count = 0;
const user = posts[count];

function update(user) {
  userPicElArr.forEach(obj => {obj.src = user.avatar; });
  nameElArr.forEach(obj => {obj.textContent = user.name});
  locationEl.innerHTML = user.location;
  postEl.src = user.post;
  likesEl.textContent = `${user.likes}likes`;
  if(user.isLiked) {
    likeBtn.src = 'https://raw.githubusercontent.com/devngc/oldgram/master/images/icon-heart-red.png';
  } else {
    likeBtn.src = 'https://raw.githubusercontent.com/devngc/oldgram/master/images/icon-heart.png'
  }

}


function handleTouch(start, end) {
  const xDist = end - start;
  if(xDist > 100) {
    rightSwipe();

  }else if(xDist <(100*-1)) {
    leftSwipe();
  }
}

var leftSwipe = () => {
  count++;
  if(count > posts.length -1) {
    count = 2;
  }
  const user = posts[count];
  update(user);
} 

var rightSwipe = () => {
  count--;
  if(count < 0) {
    count = 0;
  }
  const user = posts[count];
  update(user);
}


window.onload = function() {
  if(window.innerWidth > 450) {
   alert('in mobile screen => inspeccionar => toggle deviece toolbar')
  }

  let startX = 0;
  let endX = 0;

  window.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX;
  });

  window.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].clientX;
    handleTouch(startX, endX)
  });


};

update(user);

likeBtn.addEventListener('click', () => {
  const user = posts[count];
  if(user.isLiked == false ) {
    user.isLiked = true;
    user.likes++;
    update(user);
  }
});

function showAlert() {
  alert('functionality not added yet')
}


commentBtn.addEventListener('click', showAlert);
dmBtn.addEventListener('click', showAlert);