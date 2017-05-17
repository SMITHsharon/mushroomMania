app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(FIREBASE_CONFIG);
});


app.controller("ShroomCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {

	$scope.mushrooms = [];


	$scope.showPoisonous = () => {
		$scope.poisonFilter = false;
		$scope.shroomHeader = "These Shrooms Are Poisonous | NOT Edible!";
	};


	$scope.showNonPoisonous = () => {
		$scope.poisonFilter = true;
		$scope.shroomHeader = "These Shrooms Are NOT Poisonous | They Are Edible!";
	};


	$scope.showAll = () => {
		$scope.poisonFilter = "";
		$scope.shroomHeader = "All Shrooms | Both Poisonous and Non-Poisonous";
	};


	let getFBMushroomList = () => {

		let shroomz = [];

		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/mushrooms.json`)
			.then((fbShrooms) => {
				let fbMushrooms = fbShrooms.data;
				Object.keys(fbMushrooms).forEach((key) => {
					fbMushrooms[key].id = key;
					shroomz.push(fbMushrooms[key]);
				});
					resolve(shroomz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let getMushrooms = () => {

		getFBMushroomList().then((fbMushrooms) => {
			$scope.mushrooms = fbMushrooms;
		}).catch((error) => {
			console.log("error in getMushrooms", error);
		});
	};

	getMushrooms();


});

