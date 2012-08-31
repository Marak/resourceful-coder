var resourceful = require('resourceful');
var Creature = resourceful.define('creature');

Creature.property('awesome', Boolean, { default: false });
Creature.property('type', String, { default: "dragon", enum: ["Dragon", "Unicorn", "Pony"] });
Creature.property('email', String, { format: "email" });
Creature.property('life', Number, { default: 10, min: 0, max: 20 });

Creature.feed = function (_id, options, callback) {
  var self = this;
  self.get(_id, function(err, creature){ 
    if(err) {
      return callback(err);
    }
    var life = creature.life + 1;
    self.update(_id, { life: life }, function(err, result){
      callback(null, creature.id + ' has been fed. life is: ' + result.life);
    });
  });
}
Creature.feed.remote = true;

Creature.hit = function (_id, options, callback) {
  var self = this;
  self.get(_id, function(err, creature){
    if(err) {
      return callback(err);
    }
    var life = creature.life - 1;
    self.update(_id, { life: life }, function(err, result){
      callback(null, creature.id + ' has been hit. life is: ' + result.life);
    });
  });
}
Creature.hit.remote = true;
exports.Creature = Creature;