/**
 * Created by hans on 09/04/16.
 */

var Engine = {
    state: "START",
    init: function() {
        var self = this;

        //setTimeout(function(){
            document.getElementById("powerbutton").style.display = "block";
        //},1000);

        document.getElementById("powerbutton").onclick = function() {
            if (self.state === "START"){
                self.lightsOn();
            }
        }

        document.getElementById("button1").onclick = function() {
            var $paper = $("#paper");

            var $newPaper = $paper.clone(true).appendTo($('body'));

            $newPaper.animate({top:-250}, 200);
            $newPaper.delay(300).animate({top:0}, 200);
            $newPaper.delay(300).animate({top:100}, 200);
            $newPaper.delay(300).animate({top:216}, 200);
        }
    },
    lightsOn: function() {
        document.getElementById("powerbutton").style.backgroundImage = "url('img/pwr-butt-on.png')";
        document.getElementById("panel").style.backgroundImage = "url('img/plastic.jpg')";
        document.getElementById("display").style.boxShadow = '-2px -2px 5px rgba(0,0,0,0.3), 2px 2px 5px rgba(255,255,255,0.6)';
        document.getElementById("side-button-container").style.visibility = 'visible';
    }

};
Engine.init();