var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  if (deferrendinstall) {
    deferrendinstall.prompt();
    deferrendinstall.userChoice.then(function (choseResult) {
      console.log(choseResult.outcome);
      if (choseResult.outcome === 'dismissed') {
        console.log('User Cancelled installation ')
      } else {
        console.log('User has accepted the installation.')
      }
    })
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
