"use strict";

const Boom = require("boom");
const Data = require("../data");

module.exports = {
  method: "GET",
  path: "/riddle-answer/{slug}",
  options: {
    handler: request => {

      const { slug } = request.params;
      const riddle = Data.getRiddle(slug);

      if (!riddle) {
        throw Boom.notFound('Sorry, that riddle doesn\'t exist (yet).');
      }

      return riddle.answer;
    }
  }
};
