angular.module('EmailApp')
	.factory('InboxFactory', function( $http ){
		'use strict';

		var exports = {};

		exports.getMessage = function() {

			return $http.get('json/emails.json')
				.error(function(data) {

					console.log('There was an Error!!', data);

				});

		};

		return exports;
	});