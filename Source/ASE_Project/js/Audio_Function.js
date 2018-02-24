$(function () {
    var text = document.getElementById('dest_lang').value
   $('a.say').on('click',function(e){
       e.preventDefault();
       var text= $('input[name="text"]').val();
       text = encodeURIComponent(text);
       var url = "https://translate.google.com/translate_tts?ie=UTF-8&q=" + text + "&tl=en";
   });

});