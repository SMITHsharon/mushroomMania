app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(FIREBASE_CONFIG);
});


app.controller("ShroomCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {

	$scope.poisonFilter = undefined;
	$scope.shrooms = [];


	// click not firing?
	let showPoisonous = () => {
console.log("clicked Show Poisonous");
		$scope.poisonFilter = true;
	};


	// click not firing?
	let showNonPoisonous = () => {
console.log("clicked Show nonPoisonous");
		$scope.poisonFilter = false;
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

