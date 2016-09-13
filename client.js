function connexion() {
  $("body").children().css("display", "none");
  $(".log").css("display", "block");
    $(".login").click(function() {
  $.ajax({
    url : 'http://163.5.245.219:3000/api/1/players/login',
    type : 'POST',
    xhrFields: { withCredentials: true },
    username: "bertoc_t@etna-alternance.net",
    password: "xAWSQKgH",
    data : {"username":$('.compte').val() ,"password":$('.mdp').val()},
    error: function() {
      $("body").children().css("display", "block");
      $(".log").css("display", "none");
      },
    success: function() {
          alert("Mauvais compte");
        },
    });
  });
}
connexion();

function deconnexion() {
  $(".logout").click(function() {
  $.ajax({
    url : 'http://163.5.245.219:3000/api/1/players/logout',
    type : 'POST',
    xhrFields: { withCredentials: true },
    username: "bertoc_t@etna-alternance.net",
    password: "xAWSQKgH",
    data : {},
    success : function() {
        $("body").children().css("display", "none");
        $(".log").css("display", "block");
      },
    });
  });
}
deconnexion();

function usine() {
    $.ajax({
      url : 'http://163.5.245.219:3000/api/1/factorys',
      type : 'GET',
      xhrFields: { withCredentials: true },
      username: "bertoc_t@etna-alternance.net",
      password: "xAWSQKgH",
      data : {},
      success : function(data) {
        var infusine = data;
        $(".unvu").text('nvU : ');
        $(".unvu").append(infusine.level);
        var ucost = data.costNext;
        $(".ucost").text('Prix prochain level : ');
        $.each(ucost, function(index, value) {$(".ucost").append('</br>' + index + " : " + value);})
        var queue = data.queue;
        $(".uatt").text('Queue : ');
        $.each(queue, function(index, value) {$(".uatt").append('</br>' + index + " -> Fini le : " + value.finish);})
      },
  });
}

function metal() {
    $.ajax({
      url : 'http://163.5.245.219:3000/api/1/metalmines',
      type : 'GET',
      xhrFields: { withCredentials: true },
      username: "bertoc_t@etna-alternance.net",
      password: "xAWSQKgH",
      data : {},
      success : function(data) {
        var infmetal = data;
        $(".mnvm").text('nvM : ');
        $(".mnvm").append(infmetal.level);
        $(".mpro").text('Production : ');
        $(".mpro").append(infmetal.production);
        $(".mpro").append(' / min');
        $(".mnb").text('Nombre : ');
        $(".mnb").append(infmetal.amount);
        var mcost = data.costNext;
        $(".mcost").text('Prix prochain level : ');
        $.each(mcost, function(index, value) {$(".mcost").append('</br>' + index + " : " + value);})
      },
  });
}

function crystal() {
    $.ajax({
      url : 'http://163.5.245.219:3000/api/1/crystalmines',
      type : 'GET',
      xhrFields: { withCredentials: true },
      username: "bertoc_t@etna-alternance.net",
      password: "xAWSQKgH",
      data : {},
      success : function(data) {
        var infcristal = data;
        $(".cnvm").text('nvM : ');
        $(".cnvm").append(infcristal.level);
        $(".cpro").text('Production : ');
        $(".cpro").append(infcristal.production);
        $(".cpro").append(' / min');
        $(".cnb").text('Nombre : ');
        $(".cnb").append(infcristal.amount);
        var ccost = data.costNext;
        $(".ccost").text('Prix prochain level : ');
        $.each(ccost, function(index, value) {$(".ccost").append('</br>' + index + " : " + value);})
      },
  });
}

function upusine() {
  $(".lusine").click(function() {
    $.ajax({
      url : 'http://163.5.245.219:3000/api/1/factorys/levelUp',
      type : 'PUT',
      xhrFields: { withCredentials: true },
      username: "bertoc_t@etna-alternance.net",
      password: "xAWSQKgH",
      data : {},
      success : function() {
        alert("Usine up")
      },
      error: function(){alert("vous n'avez pas assez de ressources")}
    });
  });
}
upusine();

function upmetal() {
  $(".lmetal").click(function() {
    $.ajax({
      url : 'http://163.5.245.219:3000/api/1/metalmines/levelUp',
      type : 'PUT',
      xhrFields: { withCredentials: true },
      username: "bertoc_t@etna-alternance.net",
      password: "xAWSQKgH",
      data : {},
      success : function() {
      alert("Mine de metal up")
      },
      error: function(){alert("vous n'avez pas assez de ressources")}
    });
  });
}
upmetal();

function upcristal() {
  $(".lcristal").click(function() {
    $.ajax({
      url : 'http://163.5.245.219:3000/api/1/crystalmines/levelUp',
      type : 'PUT',
      xhrFields: { withCredentials: true },
      username: "bertoc_t@etna-alternance.net",
      password: "xAWSQKgH",
      data : {},
      success : function() {
        alert("Mine de cristal up")
      },
      error: function(){alert("vous n'avez pas assez de ressources")}
    });
  });
}
upcristal();

function createdroid() {
  $(".adroid").click(function() {
    $.ajax({
      url : 'http://163.5.245.219:3000/api/1/factorys/add_droid',
      type : 'PUT',
      xhrFields: { withCredentials: true },
      username: "bertoc_t@etna-alternance.net",
      password: "xAWSQKgH",
      data: {"level": 1},
      success : function() {
        alert("Droid en cours de construction")
      },
      error: function(){alert("vous n'avez pas assez de ressources")}
    });
  });
}
createdroid();

function droids() {
    $.ajax({
      url : 'http://163.5.245.219:3000/api/1/droids',
      type : 'GET',
      xhrFields: { withCredentials: true },
      username: "bertoc_t@etna-alternance.net",
      password: "xAWSQKgH",
      success : function(data) {
        var droids = data.troops;
        var sum = 0;
        $(".nbd").text("Droids");
        $.each(droids, function(index, value) {$(".nbd").append('</br>Niveau ' + index + ' : ' + value);})
        $.each( droids, function( index, value ){
          sum = sum + value;
        })
        $(".nbd").append("</br></br>Total : " + sum);
      },
  });
}

function attaque() {
  $.ajax({
    url : 'http://163.5.245.219:3000/api/1/droids/attack/' + $(".idj").val(),
    type : 'PUT',
    xhrFields: { withCredentials: true },
    username: "bertoc_t@etna-alternance.net",
    password: "xAWSQKgH",
    data: arrd,
    success: function(){alert("Attaque lancée!");},
    error: function(){alert("Il y a eu un probleme, veillez a ne pas envoyer plus de drone que vous n'en possédez et a attaque une joueur existant");}
  });
}

function update() {
  setInterval(function(){
    usine();
    metal();
    crystal();
    droids();
    notif();
    lista();
  }, 1000);
}
update();

function notif() {
  $.ajax({
    url : 'http://163.5.245.219:3000/api/1/notifications',
    type : 'GET',
    xhrFields: { withCredentials: true },
    username: "bertoc_t@etna-alternance.net",
    password: "xAWSQKgH",
    success : function(data) {
      $(".notif").text('');
      $.each(data, function(key, value){if(value.playerId == 9){$(".notif").append(key + ' : ' + value.message + '</br>')}})
    },
  });
}
notif();

function delnotif() {
  $('.delnotif').click(function(){
  $.ajax({
    url : 'http://163.5.245.219:3000/api/1/notifications/' + $(".deln").val(),
    type : 'DELETE',
    xhrFields: { withCredentials: true },
    username: "bertoc_t@etna-alternance.net",
    password: "xAWSQKgH",
    data: {},
    success : function() {
      alert("Notification supprimé")},
      error : function(){alert("Cette notification n'existe pas")
    },
  });
})
}
delnotif();

$(".login").click(function() {
  usine();
  metal();
  crystal();
  droids();
  lista();
  notif();
});

function lista() {
  $.ajax({
    url : 'http://163.5.245.219:3000/api/1/attacks',
    type : 'GET',
    xhrFields: { withCredentials: true },
    username: "bertoc_t@etna-alternance.net",
    password: "xAWSQKgH",
    success : function(data) {
      $(".actions").text('');
      $.each(data, function(index, value){$(".actions").append('ID aggresseur : ' + value.attackerId + ' -> ' + 'ID defenseur : ' + value.defenderId + ' Nombre de troupes : ')
      $.each(value.troops, function(index, value){$(".actions").append('lvl : ' + index + ' Nombre : ' + value + '</br>')})})
    },
  });
}


var arrd = {};
$(".ajdroid").click(function() {
arrd[$(".ndroid").val()] = $(".nbred").val();
});

$(".go").click(function() {attaque(arrd); var arrd = {};});
