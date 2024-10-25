$(document).ready(function(){
  console.log('It works');
  $.ajax(
    {
      url: 'https://randomuser.me/api',
      method: 'get',
      dataType: 'json',
      success: function(data){
        console.log(data.results.length);
        console.log(data.results);
        for(var i = 0; i < data.results.length; i++){
          var user = data.results[i];
          console.log("Received user as: ");
          console.log(user);
          $('.firstName').text(user.name.first);
          $('.lastName').text(user.name.last);
          $('#userImg').attr('src', user.picture.thumbnail);
          $('#userImg').css('border-radius', '50px');
        }
      },
      error: function(err){
        console.log(err);
      }
    }
  );
});