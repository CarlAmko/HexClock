if (Meteor.isClient) {
  Meteor.startup(function() {
    setInterval(function() {
      Meteor.call("getServerHours", function(error, result) {
        Session.set("hours", result);
      });
      Meteor.call("getServerMinutes", function(error, result) {
        Session.set("minutes", result);
      });
      Meteor.call("getServerSeconds", function(error, result) {
        Session.set("seconds", result);
      });
    }, 1000);
  });

  Template.main.helpers({
    hours: function() {
      return Session.get("hours") < 10 ? "0" + Session.get("hours") : Session.get("hours");
    },
    minutes: function() {
      return Session.get("minutes") < 10 ? "0" + Session.get("minutes") : Session.get("minutes");
    },
    seconds: function() {
      return Session.get("seconds") < 10 ? "0" + Session.get("seconds") : Session.get("seconds");
    },
    colorHour: function() {
      return parseInt(Session.get("hours") < 10 ? "0" + Session.get("hours") : "" + Session.get("hours"), 16);
    },
    colorMinute: function() {
      return parseInt(Session.get("minutes") < 10 ? "0" + Session.get("minutes") : "" + Session.get("minutes"), 16);
    },
    colorSecond: function() {
      return parseInt(Session.get("seconds") < 10 ? "0" + Session.get("seconds") : "" + Session.get("seconds"), 16);
    }
  });

}

Meteor.methods({
  getServerHours: function() {
    var hours = (new Date).getHours();
    return hours;
  },
  getServerMinutes: function() {
    var minutes = (new Date).getMinutes();
    return minutes;
  },
  getServerSeconds: function() {
    var seconds = (new Date).getSeconds();
    return seconds;
  }
});

if (Meteor.isServer) {
}
