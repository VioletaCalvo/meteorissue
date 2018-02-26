// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'com.example.meteortest',
  name: 'Test',
  description: 'Meteor app test Android',
  author: 'Test Development Group',
  email: 'contact@example.com',
  website: 'http://example.com'
});

// Configure cordova plugins
App.configurePlugin('cordova-plugin-facebook4', {
  'APP_ID': '123456789123456',
  'APP_NAME': 'MeteorTest'
});
//


// Set PhoneGap/Cordova preferences.
// App.setPreference('BackgroundColor', '0xffffff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

// ALLOW LOCALHOST FOR TESTING
App.accessRule('http://localhost', { type: 'navigation' });
App.accessRule('*', { type: 'navigation' });
App.accessRule('http://localhost:12720/*', { type: 'navigation' });
App.accessRule('*');
