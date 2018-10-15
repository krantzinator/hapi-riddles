'use strict';

const Data = require('../data');

module.exports = {
  method: 'GET',
  path: '/riddle-random',
  options: {
    tags: ['api'],

    handler: (request) => {

      const randomIndex = Math.floor(Math.random() * Data.riddles.length);
      const randomRiddle = Data.riddles[randomIndex];

      return `${randomRiddle.slug} — ${randomRiddle.question}`;
    }
  }
};
