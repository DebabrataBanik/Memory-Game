# Memory Game

A memory matching game built with React, where users can select a category and a number of cards to play with. The goal is to match pairs of cards based on memory and improve cognitive skills.

## Table of Contents

- [Features](#features)
- [Live Site](#live-site)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Continued Development](#continued-development)

### Features

- **Categories**: Choose from 5 different categories fetched from an emoji API.
- **Card Count**: Select from 4 different card counts (10, 20, 30, 40, 50).
- **Memory Game**: The game involves selecting two cards at a time to find matching pairs. Once a pair is matched, it remains visible.
- **Error Handling**: If there’s an error while fetching data, users will be notified with a separate error message component.
- **Accessibility**: The game is designed with accessibility in mind, ensuring users with disabilities can play.
- **Game Completion**: Upon winning, users will be presented with a win message and a “Play Again” button.

### Live Site

[Memory Game]()

### Installation

1. Clone the repository

```bash
git clone https://github.com/DebabrataBanik/Memory-Game.git
```

2. Navigate to the project directory

```bash
cd Memory-Game
```

3. Install the dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the app in your browser by navigating to the address shown in your terminal (usually http://localhost:5173 or a similar address).

### Usage

1. Upon loading, users select a category (e.g., Animals, Food, etc.) and the number of cards to play with.
2. The game will display the chosen number of cards from the selected category.
3. Players can click on two cards at a time to try and match them. If they match, they remain visible; if not, they turn back over.
4. Once all pairs are matched, the player wins and sees a congratulatory message with an option to play again.

### Technologies Used

- React
- CSS
- JavaScript
- Emoji API

### Contributing

While this project is based on a tutorial, feel free to fork and improve it. If you find any issues or have suggestions for improvement, please feel free to submit an issue or open a pull request!
Here are some areas that could be enhanced:

- Timer and High Score functionality
- Mobile layout improvements
- Additional game features and settings

### Continued Development

- Timer: Track the time taken to complete the game.
- Difficulty Levels: Add difficulty options such as limited moves or more complex categories.
- Scoreboard
