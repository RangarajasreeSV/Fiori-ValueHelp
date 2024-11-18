/*global QUnit*/

sap.ui.define([
	"practice_fiori/controller/PracticeView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PracticeView Controller");

	QUnit.test("I should test the PracticeView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
