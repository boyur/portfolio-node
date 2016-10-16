send.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();

  xhr.open('POST', '/addBlogPost');

  var data = {
    date: document.getElementById('date').value,
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(data));
  xhr.onload = function() {
    location.href = '/admin';
    console.log('send data');
  }
});

var deleteItems = document.querySelectorAll('[data-flag="del"]');
console.log(deleteItems);

for (var i = 0; i < deleteItems.length; i++) {
  deleteItems[i].addEventListener('click', function () {
    data = this.dataset;
    console.log(data.id);

    if (data.id == null) return;

    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/delPost');

    var idDel = {
      id: data.id
    };
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(idDel));

    location.href = '/admin';

  });
}