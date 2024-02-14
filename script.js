
function toggleContent() {
  
  var initialContent = document.querySelector('.initial-content');
  var moreContent = document.querySelector('.more-content');
  var button = document.querySelector('.read-more-button');

  if (initialContent.style.display === 'none') {
    initialContent.style.display = 'table-row';
    moreContent.style.display = 'none';
    button.textContent = 'Read More';
  } else {
    initialContent.style.display = 'none';
    moreContent.style.display = 'table-row';
    button.textContent = 'Read Less';
  }
}
