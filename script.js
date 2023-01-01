const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Arrête de me chauffer, Nagatoro  - épisode 12 VOSTFR",
      description: "Vous regardez",
      image: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/animes/animes%20wallpapers/ijiranaide-nagatorocarousel.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m202.syncusercontent.com/mfs-60:45f0253a749f382f8ddd3a3d1e30c6c6=============================/p/épisode%2012.mp4?allowdd=0&datakey=kGhYRODjSDjutL33KgQo22HRCfSMqK/OtUga9BkF+ntRwXbjiT+j+kyZQhcpisiLvj/hFGkg2FQ0jlcx/aHBtke3cqAmBpVVUmjUpRZUyqUfAON0mD4DVwb+qTqrNSNU1noIcINXmWWMpSIBKLh+UGLE1ZjeUAT2A4cJRNmkp2ijJwUniR2fsb5C2ZVbgYUWmyAtda2w62Tp5gUc5S4GmvqiYSu/bqj6+zDIi4nkweQI8K/W+ctZu4UqyfniIruI9/NlbIwwMMINXwGQQ7lkssKEzXPNI3S9LKT+oPP5d0ZfO7imOfbTtA5zIikLupmgRo2ULNMeQTjYUvxctBrKpg&engine=ln-2.3.7.3&errurl=gdPdTP2xkacN8w4pQL0QuPctBjYVj+o1WGBhAjIol+SbUpDmEOIzz33kDL9jhZslQYMFkmyuE7Vk3AIpPv5yL7gBkbr3W9bfje/mQRd6sK/bbrOiX3H4TEsXZiCTgid1MZfK+8xpeHrwbtMrY0EYwHbbPnURRWn5eU8H00s1+GSRuVyWc0CpKcLEZG+95QYVuPuC2/Ir/R6GbLjm9yY9bKIqRg401rVfjXg0WQ4oxxN3gxyLYxziT9sDUh1jzkftC8JsiLcy6ginAQYObnbB4V4oq7b1uQ3fE6IOByomeT8ve8MgsdvBEdVKO1RHvFOf6KIfhKp3FoLivFAjdsTx+Q==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iJUMzJUE5cGlzb2RlJTIwMTIubXA0IjtmaWxlbmFtZSo9VVRGLTgnJyVDMyVBOXBpc29kZSUyMDEyLm1wNDs&ipaddress=1458994159&linkcachekey=6df68ec40&linkoid=1982890011&mode=101&sharelink_id=9628531200011&timestamp=1672610926447&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=ec72e273d08e17d6e6abbac1aa71f94a94b1e1ba&cachekey=60:45f0253a749f382f8ddd3a3d1e30c6c6=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
