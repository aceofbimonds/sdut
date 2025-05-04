const videosPhase1 = [
    {
        initial: "videos/intro1.mp4",
        helpNoSticker: "videos/helpNoSticker1.mp4",
        ignore: "videos/ignore1.mp4",
        helpSticker: "videos/helpSticker1.mp4",
        helpText: 'Help the robot back on the sidewalk',
        stickerImage: "images/sticker1.png",
        triggerTime: 5, //Example: 3 seconds into the video
    },
    {
        initial: "videos/intro2.mp4",
        helpNoSticker: "videos/helpNoSticker2.mp4",
        ignore: "videos/ignore2.mp4",
        helpSticker: "videos/helpSticker2.mp4",
        helpText: "Move the trash can out of the way",
        stickerImage: "images/sticker2.png",
        triggerTime: 9,
    },
    {
        initial: "videos/intro3.mp4",
        helpNoSticker: "videos/helpNoSticker3.mp4",
        ignore: "videos/ignore3.mp4",
        helpSticker: "videos/helpSticker3.mp4",
        helpText: "Push the robot to free it",
        stickerImage: "images/sticker3.png",
        triggerTime: 6,
    }
];

function goToNextStep(nextStep) {
    location.href = nextStep;
}

function goToNextStepAndLog(nextstep, msg) {
    goToNextStep(nextstep);
    writeLog(msg);
}

function enableButton(button) {
    document.getElementById(button).removeAttribute("disabled");
}

function showButton(button) {
    document.getElementById(button).classList.remove("hidden");
}

function animateSticker(stickerNumber) {
    // Create overlay sticker
    const overlay = document.createElement('img');
    overlay.src = `images/sticker${stickerNumber}.png`;
    overlay.className = 'sticker-overlay';
    document.body.appendChild(overlay);

    // Fade in and wiggle
    overlay.style.animation = 'none';
    overlay.style.opacity = '1';
    overlay.style.animation = 'wiggle 1s ease-in-out';

    // After wiggle, move to corner
    setTimeout(() => {
        overlay.style.animation = 'moveToCorner 1s ease-in-out forwards';

        // Remove overlay after animation completes
        setTimeout(() => {
            overlay.remove();
            // Show the actual sticker in the container
            document.getElementById(`sticker${stickerNumber}`).style.display = 'block';
        }, 1000);
    }, 1000);
}
