# CallBreak Cards Distribution Documentation

This documentation explains the card distribution logic implemented in the provided JavaScript code. The code is designed for shuffling and distributing cards in a card game. It also includes logic for trump card selection and distributing cards to players based on the game's progress.

# Functions Overview
# Shuffling Cards
The **shuffledArray** function is responsible for shuffling an array of cards to ensure randomness. It uses the Fisher-Yates shuffle algorithm to achieve this. The key steps include:

    - Mapping each card with a random sort value.
    - Sorting the cards based on the random sort values.
    - Returning the shuffled cards.

    const shuffledArray = (unshuffled) => {
        // Shuffling logic
    };

# Trump Card Selection
The **trumpPlayer** function selects five random cards from a standard deck of 52 cards. These cards are often used for trump selection in card games. Key steps include:

    - Defining a standard deck of 52 cards.
    - Selecting five unique cards randomly, ensuring no duplicates.

    const trumpPlayer = () => {
        // Trump card selection logic
    };

# Card Distribution to Players
The **distributeCards** function handles the distribution of cards to players based on the game's progress. It takes game state data and a key for storing the game state in Redis. The distribution logic is divided into different rounds of the game. Key steps include:

    - Checking the game progress to determine the round.
    - Shuffling the deck of cards.
    - Distributing cards to players based on the round and game rules.
    - Sorting the player's cards in ascending order.
    - Updating the game state in Redis.
    - Preparing player card details for response.

    const distributeCards = async (data, key) => {
        try {
            // Card distribution logic based on game progress
            // ...
            // Sorting player cards, updating game state, and preparing response
            // ...
        } catch (error) {
            console.log("error in card distribution:::", error);
        }
    };