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
            {action: "webcam", text: "Webcam", delay: 1000}

        ]
    },
    chat: { // iphone chat
        screenFile: "device_chat.html",
        paperFile: "chat.html",
        choiceActions: [
            {action: "mp3", text: "Loading media file...", delay: 1000},
            {action: "chat", text: "Printing chat history", delay: 1000},
            {action: "webcam", text: "Webcam", delay: 1000}

        ]
    },
    webcam: { // webcam
        screenFile: "screen12.html",
        paperFile: "webcam1.html",
        autoForward: "webcam2",
        autoForwardDelay: 500
    },
    webcam2: {
        screenFile: "screen13.html",
        paperFile: "webcam2.html",
        autoForward: "webcam3",
        autoForwardDelay: 500
    },
    webcam3: {
        screenFile: "screen14.html",
        paperFile: "webcam3.html",
        autoForward: "webcam",
        autoForwardDelay: 500
    },

};
