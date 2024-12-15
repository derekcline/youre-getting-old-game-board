# 🎲 You're Getting Old - Game Board

This project is a simple interactive web app for playing the *"You're Getting Old"* board game virtually over a Zoom call. It allows players to pick a character, move it up or down the game board, and includes funny quips when a player reaches the "losing" position.

---

## 🛠️ Features

- **Character Selection**: Players can choose one of six character tiles to play.
- **Interactive Game Board**: Move your character up or down using buttons.
- **Winning/Losing Modal**: If a player reaches the top (90% position), a funny quip modal appears to remind them they’ve "lost" the game.
- **Randomized Quips**: 20 different funny quips appear randomly when the modal is triggered.

---

## 📁 Project Structure

```
project-root/
├── public/
│   ├── images/
│   │   ├── char/          # Character images (char01.jpg - char06.jpg)
│   │   ├── game/          # Game board and title images
│   │   └── ...
│   ├── css/
│   │   └── styles.css     # CSS for styling the app
│   ├── js/
│   │   └── app.js         # Main JavaScript logic
│   └── index.html         # HTML for the game UI
├── app.js                 # Node.js server to serve the app
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

1. Clone the Repository

```
git clone <repository-url>
cd <repository-folder>
```

2. Install Dependencies

Ensure Node.js is installed on your system, then install the required dependencies:

```
npm install
```

3. Run the Application

Start the Node.js server:

```
node app.js
```

4. Open in Browser

Navigate to the following address in your browser:

http://localhost:3002

---

🕹️ How to Play
1.	Character Selection:
- Players start by selecting their character tile.
2.	Move Up/Down:
- Use the “Move Up” and “Move Down” buttons to move your character along the game board.
3.	Funny Quips:
- If you reach the top position (90% of the board), a modal will appear with a funny quip about getting old.
4.	Dismiss Modal:
- Click the “Acknowledge” button to dismiss the modal and continue.

---

## 📷 Assets
 - Character images, game board, and title graphics are stored in the /public/images/ folder.
 - Game assets:
 - images/char/: Character tiles (char01.jpg, char02.jpg, etc.)
 - images/game/: Game board (game-board.jpg) and title graphic (game-title.jpg).

---

## 🎉 Credits

This app was built for playing the “You’re Getting Old” game virtually with friends. It includes custom logic, randomized funny quips, and a dynamic game board interface. To purchase a physical copy of the the game, visit: https://www.vangotoys.com/youre-getting-old

---

## 📝 License

This project is licensed under the MIT License.

---
