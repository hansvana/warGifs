var story = {
    wakeup: { // blank screen
      screenFile: null,
      paperFile: null,
      autoForward: "help",
        autoForwardDelay: 5000
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
    page8: { // unknown device detected
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
        paperFile: "gallery2.html",
        autoForward: "page9",
        autoForwardDelay: 5000
    },
    page9: { // unknown device detected
        screenFile: "screen9.html",
        paperFile: null,
        autoForward: "page10",
        autoForwardDelay: 1000
    },
    page10: { // unknown device detected 2
        screenFile: "screen10.html",
        paperFile: null,
        autoForward: "page11",
        autoForwardDelay: 500
    },
    page11: { // unknown device detected 2
        screenFile: "screen11.html",
        paperFile: null,
        choiceActions: [
            {action: "mp3", text: "Loading media file...", delay: 1000},
            {action: "chat", text: "Printing chat history", delay: 1000},
            {action: "webcam", text: "Webcam", delay: 1000}

        ]
    },
    mp3: { // mp3 player
        screenFile: "device_mp3.html",
        paperFile: null,
        choiceActions: [
            {action: "mp3", text: "Loading media file...", delay: 1000},
            {action: "chat", text: "Printing chat history", delay: 1000},
            {action: "webcam", text: "Printing webcam history", delay: 1000}

        ]
    },
    chat: { // iphone chat
        screenFile: "device_chat.html",
        paperFile: "chat.html",
        choiceActions: [
            {action: "mp3", text: "Loading media file...", delay: 1000},
            {action: "chat", text: "Printing chat history", delay: 1000},
            {action: "webcam", text: "Printing webcam history", delay: 1000}

        ]
    },
    webcam: { // webcam
        screenFile: "screen12.html",
        paperFile: "webcam1.html",
        autoForward: "webcam2",
        autoForwardDelay: 3000
    },
    webcam2: {
        screenFile: "screen13.html",
        paperFile: "webcam2.html",
        autoForward: "webcam3",
        autoForwardDelay: 3000
    },
    webcam3: {
        screenFile: "screen14.html",
        paperFile: "webcam3.html",
        autoForward: "webcam4",
        autoForwardDelay: 3000
    },
    webcam4: { // webcam eindmenu
        screenFile: "device-webcam.html",
        paperFile: null,
        choiceActions: [
            {action: "mp3", text: "Loading media file...", delay: 1000},
            {action: "chat", text: "Printing chat history", delay: 1000},
            {action: "webcam", text: "Printing webcam history", delay: 1000}

        ]
    },
    setup: {
        screenFile: "setup.html",
        paperFile: null,
        choiceActions: [
            {action: "map", text: "Accessing location history...", delay: 1000},
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0}

        ]
    },
    map: {
        screenFile: "screen15.html",
        paperFile: "map.html",
        choiceActions: [
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0}
        ]
    },
    incoming1: { // help
        screenFile: "screen16.html",
        paperFile: null,
        autoForward: "incoming2",
        autoForwardDelay: 2000
    },
    incoming2: {
        screenFile: "screen17.html",
        paperFile: null,
        choiceActions: [
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0},
            {action: "payoff1", text: "Please wait...", delay: 1000}

        ]
    },
    payoff1: {
        screenFile: "readmail.html",
        paperFile: "payoff1.html",
        choiceActions: [
            {action: "payoff2", text: "", delay: 0},
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0}

        ]
    },
    payoff2: {
        screenFile: "readmail.html",
        paperFile: "payoff2.html",
        choiceActions: [
            {action: "payoff3", text: "", delay: 0},
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0}

        ]
    },
    payoff3: {
        screenFile: "readmail.html",
        paperFile: "payoff3.html",
        choiceActions: [
            {action: "payoff4", text: "", delay: 0},
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0}

        ]
    },
    payoff4: {
        screenFile: "readmail.html",
        paperFile: "payoff4.html",
        choiceActions: [
            {action: "payoff5", text: "", delay: 0},
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0}

        ]
    },
    payoff5: {
        screenFile: "readmail.html",
        paperFile: "payoff5.html",
        choiceActions: [
            {action: "names1", text: "", delay: 0},
            {action: "", text: "", delay: 0},
            {action: "", text: "", delay: 0}

        ]
    },
    names1: { // help
        screenFile: "duringnames.html",
        paperFile: "names1.html",
        autoForward: "names2",
        autoForwardDelay: 4000
    },
    names2: { // help
        screenFile: "duringnames.html",
        paperFile: "names2.html",
        autoForward: "names1",
        autoForwardDelay: 4000
    },

};
