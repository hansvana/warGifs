var story = {
    wakeup: { // blank screen
      screenFile: null,
      paperFile: null,
      autoForward: "help",
        autoForwardDelay: 1000
    },
    help: { // help
        screenFile: "help.html",
        paperFile: null,
        autoForward: "help2",
        autoForwardDelay: 5000
    },
    help2: { // unknown location
        screenFile: "help2.html",
        paperFile: null,
        autoForward: "intro",
        autoForwardDelay: 1000
    },
    intro: { // print test page
      screenFile: "screen1.html",
      paperFile: null,
      choiceActions: [
          {action: "page5", text: "Enabling GPS", delay: 1000},
          {action: "", text: "", delay: 0},
          {action: "", text: "", delay: 0}
      ]
    },
    page5: { // unknown location
        screenFile: "screen5.html",
        paperFile: "paper2.html",
        autoForward: "page6",
        autoForwardDelay: 10000
    },
    page6: { // cannot connect to home wifi
        screenFile: "screen6.html",
        paperFile: null,
        autoForward: "page7",
        autoForwardDelay: 3000
    },
    page7: { // no friendly connections found
        screenFile: "screen7.html",
        paperFile: null,
        autoForward: "page8",
        autoForwardDelay: 4000
    },
    page8: { // unknown camera detected
        screenFile: "screen8.html",
        paperFile: null,
        choiceActions: [
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0}
        ]
    },
};
