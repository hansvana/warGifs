/**
 * Created by hans on 09/04/16.
 */

var Engine = {
    state: "START",
    init: function() {
        var self = this;

        setTimeout(function(){
            document.getElementById("powerbutton").style.display = "block";
        },1000);

        document.getElementById("powerbutton").onclick = function() {
            if (self.state === "START"){
                document.getElementById("powerbutton").style.backgroundImage = "url('img/pwr-butt-on.png')";
                document.getElementById("panel").style.backgroundImage = "url('img/plastic.jpg')";
            }
        }
    }
};
Engine.init();