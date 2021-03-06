"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createApiResourcesStep;

var _flowsync = require("flowsync");

var _flowsync2 = _interopRequireDefault(_flowsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createApiResourcesStep(conan, context, done) {
	var restApiId = context.results.restApiId;
	var parentId = context.results.apiResourceParentId;
	var leafResourceId = null;
	if (restApiId && parentId && Array.isArray(context.results.newApiResources)) {
		(function () {
			var api = new context.libraries.AWS.APIGateway({
				region: conan.config.region
			});
			_flowsync2.default.eachSeries(context.results.newApiResources, function (pathPart, nextResource) {
				var apiParameters = {
					restApiId: restApiId,
					parentId: parentId,
					pathPart: pathPart
				};
				api.createResource(apiParameters, function (error, response) {
					if (response) {
						leafResourceId = response.id;
						// override with the new parent id for the next resource
						parentId = response.id;
					}
					nextResource(error);
				});
			}, function (error) {
				var results = {};
				if (leafResourceId || error) {
					results.apiResourceId = leafResourceId;
				}
				done(error, results);
			});
		})();
	} else {
		done(null, { apiResourceId: null });
	}
}