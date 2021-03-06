"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = putIntegrationResponseStep;

var _flowsync = require("flowsync");

var _flowsync2 = _interopRequireDefault(_flowsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var responseTemplates = { "application/json": "" };

function getResponseParameters(responseHeaders) {
	var result = {};
	Object.keys(responseHeaders).forEach(function (responseHeaderName) {
		result["method.response.header." + responseHeaderName] = "'" + responseHeaders[responseHeaderName] + "'";
	});
	return result;
}

function putIntegrationResponseStep(conan, context, done) {
	var restApiId = context.results.restApiId;
	var resourceId = context.results.apiResourceId;
	var statusCodes = context.parameters.statusCodes();
	if (restApiId && resourceId && statusCodes) {
		(function () {
			var api = new context.libraries.AWS.APIGateway({
				region: conan.config.region
			});

			var responseParameters = getResponseParameters(context.parameters.responseHeaders());

			_flowsync2.default.eachSeries(Object.keys(statusCodes), function (statusCode, next) {
				var apiParameters = {
					restApiId: restApiId,
					resourceId: resourceId,
					httpMethod: context.parameters.method(),
					selectionPattern: statusCodes[statusCode],
					responseTemplates: responseTemplates,
					responseParameters: responseParameters,
					statusCode: "" + statusCode
				};
				api.putIntegrationResponse(apiParameters, function (error, response) {
					if (response) {
						next();
					} else {
						next(error);
					}
				});
			}, function (error) {
				if (error) {
					done(error);
				} else {
					done(null, {});
				}
			});
		})();
	} else {
		done(null, {});
	}
}