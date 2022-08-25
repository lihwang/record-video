const service = require("../service/index");

const screenshot = (ctx, next) => {
  return service.api.screenshot(ctx);
};


exports.api = {
  screenshot,
};
