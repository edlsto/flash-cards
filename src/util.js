const inquirer = require('inquirer');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const secondSet = data.secondSet;

const genList = (round) => {
  let card = round.returnCurrentCard();

  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round, game) {
  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));
  if (!round.returnCurrentCard() && round.calculatePercentCorrect() < 90) {
    round.giveTime()
    round.endRound();
    console.log('Your score was too low! Try this round again!')
    game.currentRound.deck.name === 'original' ? game.start(prototypeQuestions, game, game.currentRound.deck.name) : game.start(secondSet, game, game.currentRound.deck.name)
  } else if(!round.returnCurrentCard() && game.currentRound.deck.name === 'original') {
    round.giveTime()
    round.endRound();
    game.start(secondSet, game, 'second-set');
  } else if (!round.returnCurrentCard())  {
    round.giveTime()
    round.endRound();
  } else {
    main(round, game);
  }
}

module.exports.main = main;
