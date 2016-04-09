/**
 * Created by hans on 09/04/16.
 */

var Engine = {
    state: "START",
    init: function() {
        console.log(this);
        document.getElementById("powerbutton").onclick = function() {
            console.log(this);
        }
    }
};
Engine.init();