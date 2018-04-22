function translateText(text){

  alert(text);
  var src_lang_text = text.toString();
  var srcLang1 = document.getElementById('translate_from');
  var srcLang = srcLang1.options[srcLang1.selectedIndex].value;
  alert(srcLang);
  var destLang1 = document.getElementById('translate_to');
  var destLang = destLang1.options[destLang1.selectedIndex].value;
  alert(destLang);
  var watson_url = "https://translate.yandex.net/api/v1.5/tr.json/translate?" +
    "key=trnsl.1.1.20180208T205648Z.17d80a6e05edd06f." +
    "eb4ad974e0a14a39bea0483e2fe05ef25000f4eb&text=" + src_lang_text +"&" +
    "lang="+srcLang+"-"+destLang+"&[format=plain]&[options=1]&[callback=set]";

  $.get(watson_url,function(response){
    console.log(response);
    document.getElementById('dest_lang').innerHTML = response.text;
  });

}

