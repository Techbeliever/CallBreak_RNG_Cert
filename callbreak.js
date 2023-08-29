// Code for random shuffling of cards
const shuffledArray = (unshuffled) => {
    return unshuffled
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
};


// Code for distribution of first 5 random cards for trump selection by user
const trumpPlayer = () => {
    const gameCards = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, // spades (♠)
        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, // hearts (♥) 
        26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, // clubs (♣)
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51 // diamonds (♦)
    ];

    const trumpArray = [];
    while (trumpArray.length < 5) {
        let randomIndex = Math.floor(Math.random() * 52);
        const cardNumber = gameCards[randomIndex];
        if (!trumpArray.includes(cardNumber)) {
            trumpArray.push(cardNumber);
        }
    }
    return trumpArray;
}


// Code for card distribution to users
const distributeCards = async (data, key) => {
    try {
        let gameCards = data.gameCards;
        const cardsDetails = [];

        if (data.gameProgress == 1) {
            for (let i = 0; i < 3; i++) {
                let shuffledCards = shuffledArray(gameCards);
                if (i == 0) {
                    const player2Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);
                    const player3Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);
                    const player4Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);

                    data.players[1].rounds[0].cards.push(...player2Cards);
                    data.players[2].rounds[0].cards.push(...player3Cards);
                    data.players[3].rounds[0].cards.push(...player4Cards);
                    gameCards = shuffledCards;
                } else {

                    const player1Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    const player2Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);

                    const player3Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    const player4Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);

                    data.players[0].rounds[0].cards.push(...player1Cards);
                    data.players[1].rounds[0].cards.push(...player2Cards);
                    data.players[2].rounds[0].cards.push(...player3Cards);
                    data.players[3].rounds[0].cards.push(...player4Cards);
                    gameCards = shuffledCards;
                }
            }
            data.players[0].rounds[0].cards = data.players[0].rounds[0].cards.sort(function (a, b) { return a - b; });
            data.players[1].rounds[0].cards = data.players[1].rounds[0].cards.sort(function (a, b) { return a - b; });
            data.players[2].rounds[0].cards = data.players[2].rounds[0].cards.sort(function (a, b) { return a - b; });
            data.players[3].rounds[0].cards = data.players[3].rounds[0].cards.sort(function (a, b) { return a - b; });
            await redis_service.setValue(key, data);
            const player1 = {
                "userId": data.players[0].userId,
                "cards": data.players[0].rounds[0].cards
            };
            const player2 = {
                "userId": data.players[1].userId,
                "cards": data.players[1].rounds[0].cards
            };
            const player3 = {
                "userId": data.players[2].userId,
                "cards": data.players[2].rounds[0].cards
            };
            const player4 = {
                "userId": data.players[3].userId,
                "cards": data.players[3].rounds[0].cards
            };
            cardsDetails.push(player1);
            cardsDetails.push(player2);
            cardsDetails.push(player3);
            cardsDetails.push(player4);
            return cardsDetails;
        } else if (data.gameProgress == 2) {
            for (let i = 0; i < 3; i++) {
                let shuffledCards = shuffledArray(gameCards);
                if (i == 0) {
                    const player1Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);
                    const player3Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);
                    const player4Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);
                    data.players[0].rounds[1].cards.push(...player1Cards);
                    data.players[2].rounds[1].cards.push(...player3Cards);
                    data.players[3].rounds[1].cards.push(...player4Cards);
                    gameCards = shuffledCards;
                } else {
                    const player1Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    const player2Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    const player3Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    const player4Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    data.players[0].rounds[1].cards.push(...player1Cards);
                    data.players[1].rounds[1].cards.push(...player2Cards);
                    data.players[2].rounds[1].cards.push(...player3Cards);
                    data.players[3].rounds[1].cards.push(...player4Cards);
                    gameCards = shuffledCards;
                }
            }
            data.players[0].rounds[1].cards = data.players[0].rounds[1].cards.sort(function (a, b) { return a - b; });
            data.players[1].rounds[1].cards = data.players[1].rounds[1].cards.sort(function (a, b) { return a - b; });
            data.players[2].rounds[1].cards = data.players[2].rounds[1].cards.sort(function (a, b) { return a - b; });
            data.players[3].rounds[1].cards = data.players[3].rounds[1].cards.sort(function (a, b) { return a - b; });
            await redis_service.setValue(key, data);
            const player1 = {
                "userId": data.players[0].userId,
                "cards": data.players[0].rounds[1].cards
            };
            const player2 = {
                "userId": data.players[1].userId,
                "cards": data.players[1].rounds[1].cards
            };
            const player3 = {
                "userId": data.players[2].userId,
                "cards": data.players[2].rounds[1].cards
            };
            const player4 = {
                "userId": data.players[3].userId,
                "cards": data.players[3].rounds[1].cards
            };
            cardsDetails.push(player1);
            cardsDetails.push(player2);
            cardsDetails.push(player3);
            cardsDetails.push(player4);
            return cardsDetails;
        } else if (data.gameProgress == 3) {
            for (let i = 0; i < 3; i++) {
                let shuffledCards = shuffledArray(gameCards);
                if (i == 0) {
                    const player2Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);
                    const player1Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);
                    const player4Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);
                    data.players[0].rounds[2].cards.push(...player1Cards);
                    data.players[1].rounds[2].cards.push(...player2Cards);
                    data.players[3].rounds[2].cards.push(...player4Cards);
                    gameCards = shuffledCards;
                } else {
                    const player1Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    const player2Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    const player3Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    const player4Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    data.players[0].rounds[2].cards.push(...player1Cards);
                    data.players[1].rounds[2].cards.push(...player2Cards);
                    data.players[2].rounds[2].cards.push(...player3Cards);
                    data.players[3].rounds[2].cards.push(...player4Cards);
                    gameCards = shuffledCards;
                }
            }
            data.players[0].rounds[2].cards = data.players[0].rounds[2].cards.sort(function (a, b) { return a - b; });
            data.players[1].rounds[2].cards = data.players[1].rounds[2].cards.sort(function (a, b) { return a - b; });
            data.players[2].rounds[2].cards = data.players[2].rounds[2].cards.sort(function (a, b) { return a - b; });
            data.players[3].rounds[2].cards = data.players[3].rounds[2].cards.sort(function (a, b) { return a - b; });
            await redis_service.setValue(key, data);
            const player1 = {
                "userId": data.players[0].userId,
                "cards": data.players[0].rounds[2].cards
            };
            const player2 = {
                "userId": data.players[1].userId,
                "cards": data.players[1].rounds[2].cards
            };
            const player3 = {
                "userId": data.players[2].userId,
                "cards": data.players[2].rounds[2].cards
            };
            const player4 = {
                "userId": data.players[3].userId,
                "cards": data.players[3].rounds[2].cards
            };
            cardsDetails.push(player1);
            cardsDetails.push(player2);
            cardsDetails.push(player3);
            cardsDetails.push(player4);
            return cardsDetails;
        } else {
            for (let i = 0; i < 3; i++) {
                let shuffledCards = shuffledArray(gameCards);
                if (i == 0) {
                    const player1Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);
                    const player2Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);
                    const player3Cards = shuffledCards.slice(0, 5);
                    shuffledCards.splice(0, 5);
                    data.players[0].rounds[3].cards.push(...player1Cards);
                    data.players[1].rounds[3].cards.push(...player2Cards);
                    data.players[2].rounds[3].cards.push(...player3Cards);
                    gameCards = shuffledCards;
                } else {
                    const player1Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    const player2Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    const player3Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    const player4Cards = shuffledCards.slice(0, 4);
                    shuffledCards.splice(0, 4);
                    data.players[0].rounds[3].cards.push(...player1Cards);
                    data.players[1].rounds[3].cards.push(...player2Cards);
                    data.players[2].rounds[3].cards.push(...player3Cards);
                    data.players[3].rounds[3].cards.push(...player4Cards);
                    gameCards = shuffledCards;
                }
            }
            data.players[0].rounds[3].cards = data.players[0].rounds[3].cards.sort(function (a, b) { return a - b; });
            data.players[1].rounds[3].cards = data.players[1].rounds[3].cards.sort(function (a, b) { return a - b; });
            data.players[2].rounds[3].cards = data.players[2].rounds[3].cards.sort(function (a, b) { return a - b; });
            data.players[3].rounds[3].cards = data.players[3].rounds[3].cards.sort(function (a, b) { return a - b; });
            await redis_service.setValue(key, data);
            const player1 = {
                "userId": data.players[0].userId,
                "cards": data.players[0].rounds[3].cards
            };
            const player2 = {
                "userId": data.players[1].userId,
                "cards": data.players[1].rounds[3].cards
            };
            const player3 = {
                "userId": data.players[2].userId,
                "cards": data.players[2].rounds[3].cards
            };
            const player4 = {
                "userId": data.players[3].userId,
                "cards": data.players[3].rounds[3].cards
            };
            cardsDetails.push(player1);
            cardsDetails.push(player2);
            cardsDetails.push(player3);
            cardsDetails.push(player4);
            return cardsDetails;
        }
    } catch (error) {
        console.log("error in card distribution:::", error)
    }
};