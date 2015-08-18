AppVersionProxy = {
  getVersionNumber: function(successCallback, failCallback, args) {
    var version = Windows.ApplicationModel.Package.current.id.version;
    successCallback([version.major, version.minor, version.build].join('.'));
  },
  getVersionCode: function(successCallback, failCallback, args) {
    var version = Windows.ApplicationModel.Package.current.id.version;
    successCallback(version.revision);
  },
  getAppName: function(successCallback, failCallback, args) {
    var name = Windows.ApplicationModel.Package.current.displayName;
    successCallback(name);
  },
  getPackageName: function(successCallback, failCallback, args) {
    var id = Windows.ApplicationModel.Package.current.id.name;
    successCallback(id);
  }
};
cordova.commandProxy.add("AppVersion", AppVersionProxy);
