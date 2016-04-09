var Engine = {
    state: "START",
    init: function() {
        var self = this;

        setTimeout(function(){
            document.getElementById("powerbutton").style.display = "block";
        },1000);

        document.getElementById("powerbutton").onclick = function() {
            if (self.state === "START"){
                self.lightsOn();
            }
        };

        document.getElementById("button1").onclick = function() {
            self.newPaper("test.html");
        };
    },
    lightsOn: function() {
        document.getElementById("powerbutton").style.backgroundImage = "url('img/pwr-butt-on.png')";
        document.getElementById("panel").style.backgroundImage = "url('img/plastic.jpg')";
        document.getElementById("display").style.boxShadow = '-2px -2px 5px rgba(0,0,0,0.3), 2px 2px 5px rgba(255,255,255,0.6)';
        document.getElementById("side-button-container").style.visibility = 'visible';
    },
    newPaper: function(filename) {
        var $paper = $("#paper");

        $paper.clone().prop('id','newPaper').appendTo($('body'));

        $("#newPaper").css('top', '-500px')

        $("#newPaper").load("papers/" + filename,function(){
            $("#newPaper").animate({top:-250}, 200);
            $("#newPaper").delay(300).animate({top:0}, 200);
            $("#newPaper").delay(300).animate({top:120}, 200);
            $("#newPaper").delay(300).animate({top:240}, 200, function() {
                console.log("hi");
                $paper.remove();
                $("#newPaper").attr('id','paper');
            });
        });




    }

};
Engine.init();