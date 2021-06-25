import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration} from 'meteor/service-configuration';


Meteor.startup(() => {
  // code to run on server at startup


  


  ServiceConfiguration.configurations.remove({
    service: "google"
  });
  ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: "185819739867-sttp787moo3n1dcogbt2dmso61jaopi1.apps.googleusercontent.com",
    loginStyle: "popup",
    secret: "-XOlkRAYo-CTR9Q9BkMICagO"
  
  });




});
