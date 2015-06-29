
angular.module("chateor", 
	[
		"angular-meteor",
		"ui.router",
		"ngMaterial"
	])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme("default")
			.primaryPalette("red")
			.accentPalette("grey");
	}
);
