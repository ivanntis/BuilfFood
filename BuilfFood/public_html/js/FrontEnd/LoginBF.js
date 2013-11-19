/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).on("ready",function(){


  startGoogle();
 
  startFB();

    $( "#loginFacebook" ).on("click",function() {
       
        FB.getLoginStatus(function(response) {
     
            if (response.status === 'connected') {

                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;
                alert("connected ", accessToken);
                getYourProfile(accessToken);
            } else if (response.status === 'not_authorized') {
                alert("not_authorized");
                loginFB();   
            } else {
                loginFB();
            }
        });
        
    });
        
     $( "#loginGoogle" ).on("click",function() {
       openGoogle();
       
        
      });
      
});      
 


function startFB(){
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_UK/all.js', function(){
    FB.init({
      appId: '455090011268407',
      channelUrl: 'http://localhost:8383/BuildFood/index.html',
      status     : true,                                 // Check Facebook Login status
      xfbml      : true 
    });     
  
  });
}

function loginFB(){
    FB.login(function(response) {
         if (response.authResponse) {
              console.log('Listo para traer informacion');
             var accessToken = response.authResponse.accessToken;
             getYourProfile(accessToken);    
             
                FB.api('/me', function(response) {
                 alert('Good to see you, ' + response.name + '.');
                });
          } else {
              alert("usuario no autorizado");
              console.log('usuario no autorizado');
            }
      },{scope: 'email,user_likes'});

}

function signinCallback(authResult) {
    console.log("entro signinCallback");
    if (authResult) {
        console.log("authResult:  ",authResult);
      if (authResult['error'] === undefined){
           console.log("authResult['error'] "+authResult['error']);
        gapi.auth.setToken(authResult); // Almacena el token recuperado.
       // toggleElement('signin-button'); // Oculta el inicio de sesión si se ha accedido correctamente.
       
       getEmail();                     // Activa la solicitud para obtener la dirección de correo electrónico.
      } else  if(authResult['error'] === "immediate_failed"){
        console.log("immediate_failed2:  ",authResult['error']);
       // openGoogle();
      }else{
         alert('An error occurred'); 
      }
      
    } else {
      alert('Empty authResult');  // Se ha producido algún error
    }
  }



function openGoogle(){
  gapi.signin.render('loginGoogle', {
      'callback': 'signinCallback',
      'clientid': '1026403084131.apps.googleusercontent.com',
      'cookiepolicy': 'single_host_origin',
      'requestvisibleactions': 'http://schemas.google.com/AddActivity',
      'scope': 'https://www.googleapis.com/auth/plus.login'
    });
     
    
}

function getEmail(){
    // Carga las bibliotecas oauth2 para habilitar los métodos userinfo.
    gapi.client.load('oauth2', 'v2', function() {
       
          var request = gapi.client.oauth2.userinfo.get();
          console.log(request);
          request.execute(getDataGoogleOauth2);
          
        });
        gapi.client.load('plus','v1', function(){
            var request = gapi.client.plus.people.get({
              'userId': 'me'
            });
//            request.execute(function(resp) {
//              console.log('Retrieved profile for:' + resp.displayName);
//              console.log('Retrieved profile for:' + resp.url);
//
//            });
            request.execute(getDataGooglePlus);
        });
  }
  
function getDataGooglePlus(resp){
    //https://developers.google.com/+/api/latest/people#resource
     console.log('Retrieved profile for:' + resp.displayName);
     console.log('Retrieved profile for:' + resp.url);
     console.log('Retrieved profile for:' + resp.currentLocation);
     console.log('Retrieved profile for:' + resp.birthday);
     console.log('Retrieved profile for:' + resp.id);
     console.log('Retrieved profile for:' + resp.kind);
     console.log('Retrieved profile for:' + resp.nickname);
     console.log('Retrieved profile for:' + resp.name);
     console.log('Retrieved profile for:' + resp.name.formatted);
     console.log('Retrieved profile for:' + resp.name.familyName);
     console.log('Retrieved profile for:' + resp.name.givenName);
     console.log('Retrieved profile for:' + resp.name.middleName);
     console.log('Retrieved profile for:' + resp.name.honorificPrefix);
     console.log('Retrieved profile for:' + resp.name.honorificSuffix);
     console.log('Retrieved profile for:' + resp.gender);
     console.log('Retrieved profile for:' + resp.image);
     console.log('Retrieved profile for:' + resp.image.url);
     console.log('Retrieved profile for:' + resp.aboutMe);
     console.log('Retrieved profile for:' + resp.relationshipStatus);
     console.log('Retrieved profile for:' + resp.tagline);
     console.log('Retrieved profile for:' + resp.objectType);
     console.log('Retrieved profile for:' + resp.etag);
}

function getDataGoogleOauth2(obj){
   console.log('getDataGoogleAPI:' + obj.email);
   console.log('getDataGoogleAPI:' + obj['email']);
  }
    
function startGoogle() {
   
    var po = document.createElement('script');
    po.type = 'text/javascript'; 
    po.async = true;
    //po.src = 'https://apis.google.com/js/client:plusone.js?onload=openGoogle';
    po.src = 'https://apis.google.com/js/client:plusone.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
  }