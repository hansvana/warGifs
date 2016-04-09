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
        autoForwardDelay: 3000
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
        choiceActions: [
            {action: "page6", text: "", delay: 0},
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0}
        ]
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
            {action: "gallery1", text: "Printing...", delay: 1000}
        ]
    },
    gallery1: { // gallery 1
        screenFile: "galleryscreen1.html",
        paperFile: "gallery1.html",
        autoForward: "gallery2",
        autoForwardDelay: 4000
    },
    gallery2: { // gallery 1
        screenFile: "galleryscreen2.html",
        paperFile: "gallery1.html",
        autoForward: "gallery2",
        autoForwardDelay: 4000
    },
};
