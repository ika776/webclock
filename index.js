//const moment = require("moment");

const displayTime = () => {
  moment.locale("id");
  $(".time").text(moment().format("LTS"));
  $(".date").text(moment().format("LL"));
};

displayTime();
