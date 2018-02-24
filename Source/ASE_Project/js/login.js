function preventBack() { window.history.forward(1); }
setTimeout("preventBack()", 0);
window.onunload = function () { null };


function onSignIn(googleUser) {

    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    localStorage.setItem("fname",profile.getName());
    localStorage.logouturl = "";
    window.location.href = "main.html";

}
function onLoad() {
    gapi.load('auth2', function() {
        gapi.auth2.init();
    });
}
function signOut() {

    gapi.auth2.init({client_id: '1088887293043-2btnu5h68vcqiupkd57fjf3vo01qsvlk.apps.googleusercontent.com'});
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {

        window.location.href="index.html";
        document.getElementById("log").href = "index.html";

    });
}


function validateLoginDetails(){
    var name = document.getElementById("name").value;
    var pwd = document.getElementById("pwd").value;
    var storeduname = localStorage.getItem("username");
    var storedpwd = localStorage.getItem("password");

    if(storeduname == name && storedpwd == pwd )
    {

        localStorage.logouturl = "index.html";
        window.location = "main.html";

    }
    else{
        alert("Invalid username or password");
    }
}

function getName(){
    document.getElementById("showname").innerHTML = "Hi, "+ localStorage.getItem("fname");
    document.getElementById("showimage").style.visibility ="hidden";
    document.getElementById("head1").style.visibility ="hidden";
    document.getElementById("head2").style.visibility ="hidden";
}

function Logout() {
    if(localStorage.getItem("logouturl")== ""){signOut();}
    else {document.getElementById("log").href = localStorage.getItem("logouturl");}

}
function getDetails() {
    var item = document.getElementById("search").value;
    var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
    var flurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e6a94c874098f33fa97030ad20133718&text="+item+"&per_page=1&format=json";
    var params = {
        'query': item,
        'limit': 5,
        'indent': true,
        'key' : 'AIzaSyCuyrdAtMvA-t4YK-FL7BQTQLA4tSJIfaI',
    };
    document.getElementById("notes").innerHTML = "";
    $.getJSON(service_url + '?callback=?', params, function(response) {
        console.log(response);
        $.each(response.itemListElement, function(i, element) {
            $('<p>', {text:element['result']['name']}).appendTo(document.getElementById("notes"));

        });
        document.getElementById("head2").style.visibility ="visible";
        });
    $.getJSON(flurl,'nojsoncallback=1',function(response) {
        console.log(response);
        var farmid =response.photos.photo[0].farm;
        var serverid = response.photos.photo[0].server;
        var id = response.photos.photo[0].id;
        var secretid =response.photos.photo[0].secret;
        var des =response.photos.photo[0].title;
        var srcimg = "https://farm"+farmid+".staticflickr.com/"+serverid+"/"+id+"_"+secretid+".jpg";
        document.getElementById("showimage").style.visibility ="visible";
        document.getElementById("head1").style.visibility ="visible";
        document.getElementById("showimage").src = srcimg;
        });


}
