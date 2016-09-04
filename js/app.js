var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com');
	this.nickNames = ko.observableArray (["Orange", "Catty", "Poopy"])


	//this assigns a string that activates when clickCount reaches a certain amount
	this.levels = ko.computed(function() {
		if (this.clickCount() < 10) {
			return "Infant";
		}
		 else if (this.clickCount() < 50) {
			return "Teenager";
		} else {
			return "Adult";
		}
	}, this);
};

var ViewModel = function() {
	var self = this;
	this.currentCat = ko.observable( new Cat() );
	//uses var self
	this.incrementCounter = function () {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	}
	// this.incrementCounter = function () {
	// 	this.clickCount(this.clickCount() + 1);
	// }
	
	//testing the computed observable concat
	//uses var self
	this.nameAndLevels = ko.computed(function() {
		return self.currentCat().clickCount() + " " + self.currentCat().levels();
	});
	// this.nameAndLevels = ko.computed(function() {
	// 	return this.clickCount() + " " + this.levels();
	// },this);
};

ko.applyBindings(new ViewModel());