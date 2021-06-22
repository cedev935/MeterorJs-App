import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.blog.onCreated(function blogOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.blog.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.blog.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
