var testNode = document.getElementById('news-ab-test');


function calcText() {
  var previousValue = localStorage.getItem('newsTest')
  if (previousValue) {
    ga('send', 'event', 'News/Blog link naming test', 'loaded: ' + previousValue)
    return previousValue;
  }
  
  var newValue = Math.random() * 10 > 5 ? 'News' : 'Blog';
  ga('send', 'event', 'News/Blog link naming test', 'loaded: ' + newValue)
  localStorage.setItem('newsTest', newValue);
  return newValue;
}


function createGaEvent(text) {
  return function(event) {
  event.preventDefault();
  ga('send', 'event', 'News/Blog link naming test', 'clicked: ' + text)
  return window.location.href = event.target.href;
  }
}


var text = calcText();
testNode.innerText = text;
testNode.addEventListener('click', createGaEvent(text));