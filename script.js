var Engine = {
    state: "START",
    toSetup: 0,
    toPayoff: 0,
    inkLevel: 1,
    audio: {
        printer: new Audio('audio/printer2.mp3'),
        device: new Audio('audio/device-connect.mp3'),
        anthem: new Audio('audio/anthem.mp3'),
        background: new Audio('audio/background.mp3'),
        click: new Audio('audio/click.mp3'),
        printerstart: new Audio('audio/printer_start.mp3'),
        explanation: new Audio('audio/explanation.mp3')
    },
    init: function() {
        var self = this;

        setTimeout(function(){
            document.getElementById("powerbutton").style.display = "block";
        },1000);

        document.getElementById("powerbutton").onclick = function() {
            console.log(self.state);
            switch(self.state){
                case "START":
                    self.audio.printerstart.play();
                    self.lightsOn();
                    self.newPaper("wakeup");
                    break;
                case "chat":
                case "mp3":
                case "webcam4":
                    self.audio.anthem.pause();
                    self.lightsOff();
                    setTimeout(function() {
                        self.lightsOn();
                        self.newPaper("setup")
                    },1000);
            }
        };

        this.audio.background.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);

        this.audio.background.play();

    },
    lightsOn: function() {
        document.getElementById("powerbutton").style.backgroundImage = "url('img/pwr-butt-on.png')";
        document.getElementById("panel").style.backgroundImage = "url('img/plastic.jpg')";
        document.getElementById("display").style.visibility = 'visible';
        document.getElementById("display").style.boxShadow = '-2px -2px 5px rgba(0,0,0,0.3), 2px 2px 5px rgba(255,255,255,0.6)';
        document.getElementById("side-button-container").style.visibility = 'visible';
        document.getElementById("paper").style.visibility = 'visible';

    },
    lightsOff: function() {
        document.getElementById("powerbutton").style.backgroundImage = "url('img/pwr-butt-off.png')";
        document.getElementById("panel").style.backgroundImage = "none";
        document.getElementById("display").style.visibility = 'hidden';
        document.getElementById("display").style.boxShadow = '-2px -2px 5px rgba(0,0,0,0.3), 2px 2px 5px rgba(255,255,255,0.6)';
        document.getElementById("side-button-container").style.visibility = 'hidden';
        document.getElementById("paper").style.visibility = 'hidden';
    },
    trigger: function(which){
        console.log("trigger");
        if (which === "toSetup") {
            this.toSetup++;
        }
        if (which === "toPayoff") {
            this.toPayoff++;
            if (this.toPayoff > 5) {
                this.newPaper("incoming1");
            }
        }

    },
    newPaper: function(page) {
        console.log(page);

        $("#display").load("screens/" + story[page].screenFile, function(){
            $("#display").append( $("<div>").attr("id","display-shade") );
        });

        var self = this;
        self.state = page;

        if (story[page].autoForward !== undefined){
            setTimeout(function() {
                self.newPaper(story[page].autoForward);
            }, story[page].autoForwardDelay);
        }

        if (story[page].choiceActions !== undefined) {
            if (story[page].choiceActions[0].action !== "") {
                document.getElementById("button1").onclick = function () {
                    self.audio.click.play();
                    $("#display").html(story[page].choiceActions[0].text)
                        .append($("<div>").attr("id", "display-shade"));
                    setTimeout(function () {
                        self.newPaper(story[page].choiceActions[0].action);
                    }, story[page].choiceActions[0].delay);
                };
            } else {
                document.getElementById("button1").onclick = function () {
                };
            }

            if (story[page].choiceActions[1].action !== "") {
                document.getElementById("button2").onclick = function () {
                    self.audio.click.play();
                    $("#display").html(story[page].choiceActions[1].text)
                        .append($("<div>").attr("id", "display-shade"));
                    setTimeout(function () {
                        self.newPaper(story[page].choiceActions[1].action);
                    }, story[page].choiceActions[1].delay);
                };
            } else {
                document.getElementById("button2").onclick = function () {
                };
            }

            if (story[page].choiceActions[2].action !== "") {
                document.getElementById("button3").onclick = function () {
                    self.audio.click.play();
                    $("#display").html(story[page].choiceActions[2].text)
                        .append($("<div>").attr("id", "display-shade"));
                    setTimeout(function () {
                        self.newPaper(story[page].choiceActions[2].action);
                    }, story[page].choiceActions[2].delay);
                };
            } else {
                document.getElementById("button3").onclick = function () {
                };
            }
        }

        if (story[page].paperFile === null)
            return;

        var $paper = $("#paper");

        $paper.clone().prop('id','newPaper').appendTo($('body'));

        $("#newPaper").css('top', '-500px');

        this.audio.printer.currentTime = 0;
        this.audio.printer.play();

        $("#newPaper").load("pages/" + story[page].paperFile,function(){
            $("#newPaper").animate({top:-250}, 200);
            $("#newPaper").delay(300).animate({top:0}, 200);
            $("#newPaper").delay(300).animate({top:120}, 200);
            $("#newPaper").delay(300).animate({top:240}, 200, function() {
                $paper.remove();
                $("#newPaper").attr('id','paper');
            });
        });




    }

};
Engine.init();