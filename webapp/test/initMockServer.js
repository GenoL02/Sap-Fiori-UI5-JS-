sap.ui.define(["../localService/mockserver"], function (mockserver) {
  "use strict";

  // Initialize the mock server for testing
  mockserver.init();

  // initialize the embedded component
  sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
