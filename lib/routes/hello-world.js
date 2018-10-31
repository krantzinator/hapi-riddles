"use strict";

module.exports = {
  method: "GET",
  path: "/",
  options: {
    handler: (request) => {

      return "Hello World";
    }
  }
};
