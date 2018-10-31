"use strict";

module.exports = {
  method: "GET",
  path: "/{name}",
  options: {
    handler: request => {

      return `Hello ${encodeURIComponent(request.params.name)}!`;
    }
  }
};
