angular.module('EmailApp')
	.controller('InboxCtrl', 
		function InboxFactory( $scope, InboxFactory ){
			'use strict';
			$scope.meta = { title: 'My Inbox' };

			InboxFactory.getMessage()
				.success(function(jsonData, statusCode){

					console.log('statusCode :: ', statusCode);
					console.dir(jsonData);

					$scope.data = { emails: jsonData };

				});	
		});