// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '512696028765649', // your App ID
		'clientSecret' 	: '7ab186f45163a9024b1af3c7b58d2427', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'F0kvYz7KCgiXvRgPy2DILA',
		'consumerSecret' 	: '2twPa7r3m65ILZatmYiS1EJksuznSdSAifqvBSo5KyE',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '662933338002-1th0iofgk7ba769bmns1bq6kc1vum6re.apps.googleusercontent.com',
		'clientSecret' 	: 'TokkQtGespI8zBJVdjJ9QL9y',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};