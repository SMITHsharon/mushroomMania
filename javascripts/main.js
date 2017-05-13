app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(config);
});


app.controller("ItemCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {

	$scope.showMushroomList = true;
	$scope.items = [];


	let getMushroomList = () => {

		let itemz = [];

		return $q((resolve, reject) => {
			$http.get(`$FIREBASE_CONFIG.databaseURL}/items.json`)
			.then((fbItems) => {
				var itemCollection = fbItems.data;
				Object.keys(itemCollection).forEach((key) => {
					itemCollection[key]id=key;
					itemz.push(itemCollection[key]);
				});
			});
			resolve(itemz);
		});
		.catch((error) => {
			reject(error);
		})
	};


});