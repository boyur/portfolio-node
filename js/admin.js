var send = document.getElementById('send');
var skillsBtn = document.getElementById('skillsBtn');

if (send) {
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
      console.log('send data2');
    }
  });
}


skillsBtn.addEventListener('click', function () {
  console.log("Click");

  var xhr = new XMLHttpRequest();

  xhr.open('POST', '/setSkills');

  var allSkills = document.getElementsByTagName('input');
  var data = [];

  for (var i=0; i < allSkills.length; i++) {
    data[i] = {
      name: allSkills[i].id,
      type: allSkills[i].dataset.type,
      value: allSkills[i].value
    };
  }

  data = JSON.stringify(data);

  console.log(data);

  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(data);
  xhr.onload = function() {
    //location.href = '/admin/skills';
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