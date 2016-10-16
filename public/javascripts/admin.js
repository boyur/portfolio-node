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

addEventDelBtn();

function addEventDelBtn() {
  var deleteItems = document.querySelectorAll('[data-flag="del"]');
  console.log(deleteItems);

  var content = document.getElementById('posts-list');

  for (var i = 0; i < deleteItems.length; i++) {
    deleteItems[i].addEventListener('click', function () {
      var data = this.dataset;
      console.log(data.id);

      if (data.id == null) return;

      var xhr = new XMLHttpRequest();

      xhr.open('POST', '/delPost');
      console.log('Открыли запрос на удаление');
      var idDel = {
        id: data.id
      };
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(JSON.stringify(idDel));
      xhr.onload = function() {
        ajaxLoad('/posts-list', content);
      };

    });
  }
}


function ajaxLoad(content, div) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', content, true); //
  xhr.onload = function() {
    div.innerHTML= this.responseText;
    addEventDelBtn();
  };
  xhr.send();
}

function ajaxDelById(id, inquiry) {
  var xhr = new XMLHttpRequest();

  xhr.open('POST', inquiry);
  console.log('Открыли запрос на удаление');
  var idDel = {
    id: id
  };
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(idDel));
  
}