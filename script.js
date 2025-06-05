function playMood(mood) {
  const moodData = {
    happy: {
      color: "linear-gradient(-45deg, #f9d423, #ff4e50, #fbc2eb, #a1c4fd)",
      quote: "Keep smiling! You're glowing today 🌞",
      video: "https://www.youtube.com/embed/sNKD014uRj0"
    },
    sad: {
      color: "linear-gradient(-45deg, #89f7fe, #66a6ff, #a1c4fd, #c2e9fb)",
      quote: "It's okay to feel low. You're not alone 💙",
      video: "https://www.youtube.com/embed/TIOZUdc0aL8"
    },
    angry: {
      color: "linear-gradient(-45deg, #ff0844, #ffb199, #ff416c, #ff4b2b)",
      quote: "Anger fades. You’re in control 🔥",
      video: "https://www.youtube.com/embed/GF8HgqemgHk"
    },
    romantic: {
      color: "linear-gradient(-45deg, #f093fb, #f5576c, #ff9a9e, #fad0c4)",
      quote: "Feel the love in the air 💖",
      video: "https://www.youtube.com/embed/ekAYewieHKA"
    },
    focus: {
      color: "linear-gradient(-45deg, #00c9ff, #92fe9d, #a1c4fd, #c2e9fb)",
      quote: "Let’s tune in and focus 🔍",
      video: "https://www.youtube.com/embed/wF720OMuKQ4"
    }
  };

  document.body.style.background = moodData[mood].color;
  document.getElementById("quote").innerText = moodData[mood].quote;
  document.getElementById("ytplayer").src = moodData[mood].video + "?autoplay=1";
}