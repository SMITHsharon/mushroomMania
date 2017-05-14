app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(FIREBASE_CONFIG);
});


app.controller("ItemCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {

	$scope.showMushroomList = true;
	$scope.items = [];


	let getMushroomList = () => {

		let itemz = [];

		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/mushrooms.json`)
			.then((fbItems) => {
				let itemCollection = fbItems.data;
console.log("fbItems.data :: ", fbItems.data);
				Object.keys(itemCollection).forEach((key) => {
					itemCollection[key].id = key;
					itemz.push(itemCollection[key]);
				});
					resolve(itemz);
console.log("itemz :: ", itemz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let getMushrooms = () => {

		getMushroomList().then((itemz) => {
			$scope.mushrooms = itemz;
		}).catch((error) => {
			console.log("get Error", error);
		});
	};

	getMushrooms();


});