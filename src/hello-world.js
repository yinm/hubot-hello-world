// Description
//   A Hubot script that responds 'World!'
//
// Configuration:
//   None
//
// Commands:
//   hubot hello - responds 'World!'
//
// Author:
//   bouzuya <m@bouzuya.net>

module.exports = function(robot) {
  robot.respond(/hello/i, function(msg) {
    msg.send('だおーん');
  });
};

