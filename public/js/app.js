document.addEventListener('DOMContentLoaded', () => {
    const characterSelection = document.getElementById('character-selection');
    const charactersDiv = document.getElementById('characters');
    const gameBoard = document.getElementById('game-board');
    const characterImg = document.getElementById('character-img');
    const gameBoardImg = document.getElementById('game-board-img');
    const moveUpBtn = document.getElementById('move-up');
    const moveDownBtn = document.getElementById('move-down');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');

    let currentHeightPercentage = 0;

    // Dynamically load character tiles
    for (let i = 1; i <= 6; i++) {
        const img = document.createElement('img');
        img.src = `images/char/char${String(i).padStart(2, '0')}.png`;
        img.alt = `Character ${i}`;
        img.addEventListener('click', () => selectCharacter(img.src));
        charactersDiv.appendChild(img);
    }

    function selectCharacter(src) {
        characterSelection.style.display = 'none';
        gameBoard.style.display = 'block';
        characterImg.src = src;
        characterImg.style.bottom = '0';
        currentHeightPercentage = 0;
    }

    function moveCharacter(delta) {
        currentHeightPercentage = Math.min(90, Math.max(0, currentHeightPercentage + delta));
        characterImg.style.bottom = `${currentHeightPercentage}%`;
    }

    function moveCharacter(delta) {
        // Restrict movement between 0% and 90%
        currentHeightPercentage = Math.min(90, Math.max(0, currentHeightPercentage + delta));
        characterImg.style.bottom = `${currentHeightPercentage}%`;

        // Trigger modal when the player reaches 90%
        if (currentHeightPercentage === 90) {
            showModal();
        }
    }

    function showModal() {
        const message = "You're officially old! ";
        const quips = [
            "Time to put on your slippers and grab a cup of tea!",
            "Your back just cracked like a glow stick... you okay there?",
            "Congratulations, you’ve officially graduated to complaining about the weather!",
            "Time to schedule a nap between your nap and bedtime.",
            "Your knees called. They want a break... or retirement.",
            "You now grunt every time you sit down. Welcome to the club!",
            "Say goodbye to staying up past 9 p.m. voluntarily.",
            "You’ve unlocked the ability to fall asleep anywhere—except your bed.",
            "Time to start carrying tissues and peppermints in your pockets!",
            "Enjoy your new hobby: complaining about how expensive everything is.",
            "You’ve started saying ‘back in my day’ unironically. Oof!",
            "Your idea of fun now involves looking at home improvement catalogs.",
            "You thought TikTok was the sound a clock makes. Didn’t you?",
            "Stretching before standing up isn’t optional anymore.",
            "Your ringtone is ‘classic rock’ because it was cool when you were young.",
            "Your friends sent you a meme, and you needed glasses to read it.",
            "The highlight of your week? Finding a comfy chair.",
            "Every conversation now includes at least one complaint about your joints.",
            "You’ve got more pills than hobbies. Time to slow down!",
            "Who needs the gym? You get enough exercise looking for your glasses!",
            "Your favorite catchphrase: ‘They don’t make things like they used to!’"
        ];

        // Pick a random quip
        const randomQuip = quips[Math.floor(Math.random() * quips.length)];

        // Update modal content
        const modalText = document.getElementById('modal-text');
        modalText.textContent = message + randomQuip;

        // Show modal
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // Add event listeners
    moveUpBtn.addEventListener('click', () => moveCharacter(10));
    moveDownBtn.addEventListener('click', () => moveCharacter(-10));
    modalClose.addEventListener('click', closeModal);
});
