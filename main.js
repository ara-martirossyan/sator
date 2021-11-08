(function () {
  var audio = document.querySelector("audio");
  var square = document.querySelector('.square');
  var cells = document.querySelectorAll('.square .cell');
  var lyrics = document.querySelector('.lyrics');
  var volume = document.querySelector('.input-range');
  var speaker = document.querySelector('.speaker');
  const lyricsData = [
    {"interval": {"begin": 0, "end": 2}, "text": "SATOR"},
    {"interval": {"begin": 2, "end": 4}, "text": "SATOR AREPO"},
    {"interval": {"begin": 4, "end": 5.6}, "text": "SATOR AREPO TENET"},
    {"interval": {"begin": 5.6, "end": 8}, "text": "SATOR AREPO TENET OPERA"},
    {"interval": {"begin": 8, "end": 10.5}, "text": "SATOR AREPO TENET OPERA ROTAS"},
    {"interval": {"begin": 10.5, "end": 12.5 }, "text": "SATOR"},
    {"interval": {"begin": 12.5, "end": 14.5}, "text": "SATOR AREPO"},
    {"interval": {"begin": 14.5, "end": 16}, "text": "SATOR AREPO TENET"},
    {"interval": {"begin": 16, "end": 18.5}, "text": "SATOR AREPO TENET OPERA"},
    {"interval": {"begin": 18.5, "end": 21}, "text": "SATOR AREPO TENET OPERA ROTAS"},
    {"interval": {"begin": 21, "end": 42.6}, "text": ""},
    {"interval": {"begin": 42.6, "end": 45}, "text": "IGNE"},
    {"interval": {"begin": 45, "end": 47.5}, "text": "IGNE NATURA"},
    {"interval": {"begin": 47.5, "end": 52.8}, "text": "IGNE NATURA RENOVATUR"},
    {"interval": {"begin": 52.8, "end": 58.5}, "text": "IGNE NATURA RENOVATUR INTEGRA"},
    {"interval": {"begin": 58.5, "end": 61}, "text": "IGNE"},
    {"interval": {"begin": 61, "end": 63.5}, "text": "IGNE NATURA"},
    {"interval": {"begin": 63.5, "end": 69}, "text": "IGNE NATURA RENOVATUR"},
    {"interval": {"begin": 69, "end": 74}, "text": "IGNE NATURA RENOVATUR INTEGRA"},
    {"interval": {"begin": 74, "end": 74.7}, "text": "INRI"},
    {"interval": {"begin": 74.7, "end": 75.5}, "text": "INRI INRI"},
    {"interval": {"begin": 75.5, "end": 76}, "text": "INRI INRI ABRA"},
    {"interval": {"begin": 76, "end": 77}, "text": "INRI INRI ABRACADABRA"},
    {"interval": {"begin": 77, "end": 78}, "text": "INRI INRI ABRACADABRA INRI"},
    {"interval": {"begin": 78, "end": 79}, "text": "INRI INRI ABRACADABRA INRI INRI"},
    {"interval": {"begin": 79, "end": 79.8}, "text": ""},
    {"interval": {"begin": 79.8, "end": 80.3}, "text": "INRI"},
    {"interval": {"begin": 80.3, "end": 81}, "text": "INRI INRI"},
    {"interval": {"begin": 81, "end": 81.5}, "text": "INRI INRI INRI"},
    {"interval": {"begin": 81.5, "end": 82}, "text": "INRI INRI INRI INRI"},
    {"interval": {"begin": 82, "end": 82.5}, "text": "INRI INRI INRI INRI ABRA"},
    {"interval": {"begin": 82.5, "end": 84}, "text": "INRI INRI INRI INRI ABRACADABRA"},
    {"interval": {"begin": 84, "end": 85}, "text": ""},
    {"interval": {"begin": 85, "end": 85.7}, "text": "INRI"},
    {"interval": {"begin": 85.7, "end": 86.3}, "text": "INRI INRI"},
    {"interval": {"begin": 86.3, "end": 86.8}, "text": "INRI INRI ABRA"},
    {"interval": {"begin": 86.8, "end": 88}, "text": "INRI INRI ABRACADABRA"},
    {"interval": {"begin": 88, "end": 88.8}, "text": "INRI INRI ABRACADABRA INRI"},
    {"interval": {"begin": 88.8, "end": 89.5}, "text": "INRI INRI ABRACADABRA INRI INRI"},
    {"interval": {"begin": 89.5, "end": 90.5}, "text": ""},
    {"interval": {"begin": 90.5, "end": 91}, "text": "INRI"},
    {"interval": {"begin": 91, "end": 91.5 }, "text": "INRI INRI"},
    {"interval": {"begin": 91.5, "end": 92}, "text": "INRI INRI INRI"},
    {"interval": {"begin": 92, "end": 93}, "text": "INRI INRI INRI INRI"},
    {"interval": {"begin": 93, "end": 93.5}, "text": "INRI INRI INRI INRI ABRA"},
    {"interval": {"begin": 93.5, "end": 95.5}, "text": "INRI INRI INRI INRI ABRACADABRA"},
    {"interval": {"begin": 95.5, "end": 97}, "text": "SATOR"},
    {"interval": {"begin": 97, "end": 98}, "text": "SATOR AREPO"},
    {"interval": {"begin": 98, "end": 100}, "text": "SATOR AREPO TENET"},
    {"interval": {"begin": 100, "end": 101}, "text": "SATOR AREPO TENET OPERA"},
    {"interval": {"begin": 101, "end": 102.5}, "text": "SATOR AREPO TENET OPERA ROTAS"},
    {"interval": {"begin": 102.5, "end": 103.1}, "text": "INRI"},
    {"interval": {"begin": 103.1, "end": 105.5}, "text": "INRI INRI"},
    {"interval": {"begin": 105.5, "end": 107}, "text": "SATOR"},
    {"interval": {"begin": 107, "end": 108}, "text": "SATOR AREPO"},
    {"interval": {"begin": 108, "end": 109.5}, "text": "SATOR AREPO TENET"},
    {"interval": {"begin": 109.5, "end": 110.5}, "text": "SATOR AREPO TENET OPERA"},
    {"interval": {"begin": 110.5, "end": 112}, "text": "SATOR AREPO TENET OPERA ROTAS"},
    {"interval": {"begin": 112, "end": 113.5}, "text": ""},
    {"interval": {"begin": 113.5, "end": 114.5 }, "text": "IGNE"},
    {"interval": {"begin": 114.5, "end": 114.7 }, "text": "IGNE NA"},
    {"interval": {"begin": 114.7, "end": 115.5 }, "text": "IGNE NATURA"},
    {"interval": {"begin": 115.5, "end": 116 }, "text": "IGNE NATURA RE"},
    {"interval": {"begin": 116, "end": 117 }, "text": "IGNE NATURA RENOVATUR"},
    {"interval": {"begin": 117, "end": 118 }, "text": "IGNE NATURA RENOVATUR INTEGRA"},
    {"interval": {"begin": 118, "end": 122.8 }, "text": ""},
    {"interval": {"begin": 122.8, "end": 123.8 }, "text": "IGNE"},
    {"interval": {"begin": 123.8, "end": 124 }, "text": "IGNE NA"},
    {"interval": {"begin": 124, "end": 124.8 }, "text": "IGNE NATURA"},
    {"interval": {"begin": 124.8, "end": 125.3 }, "text": "IGNE NATURA RE"},
    {"interval": {"begin": 125.3, "end": 126.3 }, "text": "IGNE NATURA RENOVATUR"},
    {"interval": {"begin": 126.3, "end": 127.3 }, "text": "IGNE NATURA RENOVATUR INTEGRA"},
    {"interval": {"begin": 127.3, "end": 132 }, "text": ""},
    {"interval": {"begin": 132, "end": 132.5 }, "text": "INRI"},
    {"interval": {"begin": 132.5, "end": 133 }, "text": "INRI INRI"},
    {"interval": {"begin": 133, "end": 133.5 }, "text": "INRI INRI ABRA"},
    {"interval": {"begin": 133.5, "end": 134.5 }, "text": "INRI INRI ABRACADABRA"},
    {"interval": {"begin": 134.5, "end": 135 }, "text": "INRI INRI ABRACADABRA INRI"},
    {"interval": {"begin": 135, "end": 135.5 }, "text": "INRI INRI ABRACADABRA INRI INRI"},
    {"interval": {"begin": 135.5, "end": 137.3 }, "text": ""},
    {"interval": {"begin": 137.3, "end": 137.8 }, "text": "INRI"},
    {"interval": {"begin": 137.8, "end": 138.5 }, "text": "INRI INRI"},
    {"interval": {"begin": 138.5, "end": 139 }, "text": "INRI INRI INRI"},
    {"interval": {"begin": 139, "end": 139.7 }, "text": "INRI INRI INRI INRI"},
    {"interval": {"begin": 139.7, "end": 140.3 }, "text": "INRI INRI INRI INRI ABRA"},
    {"interval": {"begin": 140.3, "end": 141.5 }, "text": "INRI INRI INRI INRI ABRACADABRA"},
    {"interval": {"begin": 141.5, "end": 142.5 }, "text": ""},
    {"interval": {"begin": 142.5, "end": 143 }, "text": "INRI"},
    {"interval": {"begin": 143, "end": 143.7 }, "text": "INRI INRI"},
    {"interval": {"begin": 143.7, "end": 144.2 }, "text": "INRI INRI ABRA"},
    {"interval": {"begin": 144.2, "end": 145 }, "text": "INRI INRI ABRACADABRA"},
    {"interval": {"begin": 145, "end": 145.5 }, "text": "INRI INRI ABRACADABRA INRI"},
    {"interval": {"begin": 145.5, "end": 146 }, "text": "INRI INRI ABRACADABRA INRI INRI"},
    {"interval": {"begin": 146, "end": 147.7 }, "text": ""},
    {"interval": {"begin": 147.7, "end": 148.2 }, "text": "INRI"},
    {"interval": {"begin": 148.2, "end": 149 }, "text": "INRI INRI"},
    {"interval": {"begin": 149, "end": 149.7 }, "text": "INRI INRI INRI"},
    {"interval": {"begin": 149.7, "end": 150.2 }, "text": "INRI INRI INRI INRI"},
    {"interval": {"begin": 150.2, "end": 151 }, "text": "INRI INRI INRI INRI ABRA"},
    {"interval": {"begin": 151, "end": 152 }, "text": "INRI INRI INRI INRI ABRACADABRA"},
    {"interval": {"begin": 152, "end": 153 }, "text": ""},
    {"interval": {"begin": 153, "end": 153.7 }, "text": "INRI"},
    {"interval": {"begin": 153.7, "end": 154.5 }, "text": "INRI INRI"},
    {"interval": {"begin": 154.5, "end": 155 }, "text": "INRI INRI ABRA"},
    {"interval": {"begin": 155, "end": 156 }, "text": "INRI INRI ABRACADABRA"},
    {"interval": {"begin": 156, "end": 156.5 }, "text": "INRI INRI ABRACADABRA INRI"},
    {"interval": {"begin": 156.5, "end": 157 }, "text": "INRI INRI ABRACADABRA INRI INRI"},
    {"interval": {"begin": 157, "end": 158.5 }, "text": ""},
    {"interval": {"begin": 158.5, "end": 159 }, "text": "INRI"},
    {"interval": {"begin": 159, "end": 159.7 }, "text": "INRI INRI"},
    {"interval": {"begin": 159.7, "end": 160.2 }, "text": "INRI INRI INRI"},
    {"interval": {"begin": 160.2, "end": 161 }, "text": "INRI INRI INRI INRI"},
    {"interval": {"begin": 161, "end": 161.5 }, "text": "INRI INRI INRI INRI ABRA"},
    {"interval": {"begin": 161.5, "end": 162.5 }, "text": "INRI INRI INRI INRI ABRACADABRA"},
    {"interval": {"begin": 162.5, "end": 163.7 }, "text": ""},
    {"interval": {"begin": 163.7, "end": 164.2 }, "text": "INRI"},
    {"interval": {"begin": 164.2, "end": 165 }, "text": "INRI INRI"},
    {"interval": {"begin": 165, "end": 165.5 }, "text": "INRI INRI ABRA"},
    {"interval": {"begin": 165.5, "end": 166.5 }, "text": "INRI INRI ABRACADABRA"},
    {"interval": {"begin": 166.5, "end": 167 }, "text": "INRI INRI ABRACADABRA INRI"},
    {"interval": {"begin": 167, "end": 167.5 }, "text": "INRI INRI ABRACADABRA INRI INRI"},
    {"interval": {"begin": 167.5, "end": 169 }, "text": ""},
    {"interval": {"begin": 169, "end": 169.5 }, "text": "INRI"},
    {"interval": {"begin": 169.5, "end": 170.3 }, "text": "INRI INRI"},
    {"interval": {"begin": 170.3, "end": 171 }, "text": "INRI INRI INRI"},
    {"interval": {"begin": 171, "end": 171.5 }, "text": "INRI INRI INRI INRI"},
    {"interval": {"begin": 171.5, "end": 172 }, "text": "INRI INRI INRI INRI ABRA"},
    {"interval": {"begin": 172, "end": 173 }, "text": "INRI INRI INRI INRI ABRACADABRA"},
    {"interval": {"begin": 173, "end": 174.3 }, "text": ""},
    {"interval": {"begin": 174.3, "end": 175 }, "text": "INRI"},
    {"interval": {"begin": 175, "end": 175.7 }, "text": "INRI INRI"},
    {"interval": {"begin": 175.7, "end": 176.2 }, "text": "INRI INRI ABRA"},
    {"interval": {"begin": 176.2, "end": 177.5 }, "text": "INRI INRI ABRACADABRA"},
    {"interval": {"begin": 177.5, "end": 1000000000000 }, "text": ""}
  ];

  document.querySelectorAll('.square .cell-border.red').forEach(function (element) {
    setInterval(() => {
      let state = element.classList;
      state.add("blinking");
      setTimeout(() => state.remove("blinking"), 1000);
    }, 8000);
  });

  audio.ontimeupdate = function () {
    lyrics.textContent = displayLyrics(audio.currentTime);
    var tRatio = audio.currentTime / audio.duration;
    document.querySelector('.timeline .time').style.width = tRatio * document.querySelector('.timeline').offsetWidth;

  };

  audio.onpause = function() {
    square.style.animationPlayState = "paused";
    cells.forEach(function (cell) {
      cell.style.animationPlayState = "paused";
    })
  };

  audio.onplay = function () {
    square.style.animationPlayState = "running";
    cells.forEach(function (cell) {
      cell.style.animationPlayState = "running";
    })
    // Blink on play.
    document.querySelectorAll('.square .cell-border.red').forEach(function (cell) {
      let state = cell.classList;
      state.add("blinking");
      setTimeout(() => state.remove("blinking"), 1000);
    })
  }

  function displayLyrics(time) {
    return lyricsData.filter(function (line) {
      return time >= line.interval.begin && time < line.interval.end;
    })[0].text;
  }

  document.querySelector(".timeline").onclick = function(event) {
    audio.currentTime = (event.layerX / this.offsetWidth) * audio.duration
    this.querySelector('.time').style.width = event.layerX;
  }

  document.getElementById("playpause").onclick = function() {
    this.parentNode.title = audio.paused ? "Pause" : "Play";
    return audio.paused ? audio.play() : audio.pause();
  }

  document.querySelector(".speaker").onclick = function() {
    this.classList.toggle("mute");
    volume.value = !this.classList.contains('mute') * volume.getAttribute('max')/2;
    audio.volume = volume.value/volume.getAttribute('max');
  }
  function volumeChange(trigger) {
    if (trigger.target.value == 0) {
      speaker.classList.add('mute')
    }
    else if (speaker.classList.contains('mute')) {
      speaker.classList.remove('mute');
    }
    audio.volume = trigger.target.value/volume.getAttribute('max');
  }
  volume.addEventListener('input', volumeChange);
  volume.addEventListener('change', volumeChange);

})()
