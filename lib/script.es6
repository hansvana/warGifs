const $ = require('jquery');
const story = require('./story.js');

class Engine {
    constructor() {
        this._state = "START";
        this._inkLevel = 1;
        this._toSetup = 0;
        this._toPayoff = 0;
        this._timeOut = null;
        this._audio = {
            printer:      new Audio('audio/printer2.mp3'),
            device:       new Audio('audio/device-connect.mp3'),
            anthem:       new Audio('audio/anthem.mp3'),
            background:   new Audio('audio/background.mp3'),
            click:        new Audio('audio/click.mp3'),
            printerstart: new Audio('audio/printer_start.mp3'),
            explanation:  new Audio('audio/explanation.mp3')
        };

        setTimeout(() => {
            $("#powerbutton").css("display", "block");
        }, 1000);

        this._audio.background.addEventListener('ended', evt => {
            evt.path[0].currentTime = 0;
            evt.path[0].play();
        }, false);
        this._audio.background.play();

        $("#powerbutton").click(() => {
            this.powerButton();
        });
    };

    powerButton() {
        switch(this._state){
            case "START":
                this.lights(true);
                this.newPaper("wakeup");
                break;
            case "chat":
            case "mp3":
            case "webcam4":
                this._audio.anthem.pause();
                this.lights(false);
                setTimeout(() => {
                    this.lights(true);
                    this.newPaper("setup")
                },1000);
        }
    };

    lights(on) {
        if (on) {
            this._audio.printerstart.play();
        }

        let changes = [
            // LIGHTS ON
            ["#powerbutton", "background-image",   (on ? "url('img/pwr-butt-on.png')" : "url('img/pwr-butt-off.png')")],
            ["#panel", "background-image",         (on ? "url('img/plastic.jpg')" : "none")],
            ["#display", "visibility",              (on ? "visible" : "hidden")],
            ["#side-button-container","visibility", (on ? "visible" : "hidden")],
            ["#paper", "visibility",                (on ? "visible" : "hidden")]
        ];
        changes.forEach( change => {
            $(change[0]).css(change[1],change[2]);
        })
    };
    
    newPaper(page) {
        this._state = page;

        if (story[page].screenFile !== null){
            $("#display").load("screens/" + story[page].screenFile, function(){
                $("#display").append( $("<div>").attr("id","display-shade") );
            });
        }

        if (story[page].autoForward !== undefined){
            this._timeOut = setTimeout(() => {
                this.newPaper(story[page].autoForward);
            }, story[page].autoForwardDelay);
        }

        if (story[page].choiceActions !== undefined) {
            story[page].choiceActions.forEach( (choice, key) => {
                if(choice.action !== "") {
                    $("#button" + (key+1)).off().click( () => {
                        this._audio.click.play();
                        $("#display").html(choice.text)
                            .append($("<div>").attr("id", "display-shade"));
                        this._timeOut = setTimeout( () => {
                            this.newPaper(choice.action);
                        }, choice.delay);
                    });
                } else {
                    $("#button" + (key+1)).off();
                }
            });
        }

        if (story[page].paperFile !== null) {
            var $paper = $("#paper");

            var $newPaper = $paper.clone()
                .prop('id','newPaper')
                .css('top', '-500px')
                .appendTo($('body'));

            this._audio.printer.currentTime = 0;
            this._audio.printer.play();

            $newPaper.load("pages/" + story[page].paperFile,function(){
                $newPaper.animate({top:-250}, 200)
                    .delay(300).animate({top:0}, 200)
                    .delay(300).animate({top:120}, 200)
                    .delay(300).animate({top:240}, 200, function() {
                    $paper.remove();
                    $newPaper.attr('id','paper');
                });
            });
        }


    };

    play(clip) {
        if (this._audio[clip] == undefined) 
            return;
        
        this._audio[clip].currentTime = 0;
        this._audio[clip].play();
    }
    
    appendText(text) {
        $("#display").append(text);
    }

    set ink(value) {
        if (value) {
            this._inkLevel = value;
            if (this._inkLevel < -0.2){
                this.newPaper("outofink");
            }
        }
    };

    get ink() {
        return this._inkLevel;
    };

    set toSetup(value) {
        if (value){
            this._toSetup = value;
            if (this._toSetup > 1){
                this.appendText("<br><br><p><strong>Hold power button <br>to enter setup</strong></p>")
            }
        }
    };
    
    get toSetup() {
        return this._toSetup;    
    };

    set toPayoff(value) {
        if (value){
            this._toPayoff = value;
            if (this._toPayoff > 5) {
                this.newPaper("incoming1");
            }
        }
    };

    get toPayoff() {
        return this._toPayoff;
    };
}

window.e = new Engine();