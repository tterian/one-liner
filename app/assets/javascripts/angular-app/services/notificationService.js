function Notification($resource) {

  var notifications = $resource('/api/notifications')

  var Notification = {
    all: notifications.query(),
  };
  return Notification;

};