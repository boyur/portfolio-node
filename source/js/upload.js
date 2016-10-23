// // var form = document.getElementById('form-admin-work');
// //
// // if(!form) return;
// //
// // form.addEventListener('submit', function(e) {
// //   e.preventDefault();
// //   if( !validateForm($(form)) ) return;
// //
// //   var formData = new FormData( form );
// //   var xhr = new XMLHttpRequest();
// //   xhr.open('POST', '/admin/addWork');
// //   xhr.send( formData );
// // });
// //
// // })();
//
$(document).ready(function() {
  $('#uploadForm').submit(function() {

    $("#status").empty().text("File is uploading...");
    $(this).ajaxSubmit({
      error: function(xhr) {
        status('Error: ' + xhr.status);
      },
      success: function(response) {

        console.log(response);
        $("#status").empty().text(response);
      }
    });
    return false;
  });
});
//
// function addWork() {
//   var xhr = new XMLHttpRequest();
//
//   xhr.open('POST', '/addWork');
//
//   var data = {
//     title: document.getElementById('worksTitle').value,
//     technology: document.getElementById('worksTech').value,
//     link: document.getElementById('worksLink').value
//   };
//   xhr.setRequestHeader('Content-type', 'application/json');
//   xhr.send(JSON.stringify(data));
//   xhr.onload = function () {
//     console.log('send data');
//   }
// }