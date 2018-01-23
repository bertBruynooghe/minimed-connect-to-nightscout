var _ = require('lodash');

var makeSG = module.exports.makeSG = function(sg, time) {
  time = time || "Oct 20, 2015 11:09:00";
  return {
    "sg" : sg,
    "datetime" : time,
    "version" : 1,
    "timeChange" : false,
    "kind" : "SG"
  };
};

var makeSGs = module.exports.makeSGs = function(count) {
  return _.range(70, 70 + count).map(_.ary(makeSG, 1));
};

var data = module.exports.data = function(overrides) {
  overrides = overrides || {};
  var sgs = makeSGs(288);
  return _.defaults(
    overrides,
    {
      "sgs" : sgs,
      "lastSG" : sgs[sgs.length - 1],
      "conduitSerialNumber" : "0",
      "conduitMedicalDeviceInRange" : true,
      "version" : 1,
      "calibStatus" : "LESS_THAN_TWELVE_HRS",
      "medicalDeviceFamily" : "PARADIGM",
      "kind" : "Main",
      "medicalDeviceTime" : 0,
      "lastAlarm" : {
         "type" : "ALARM",
         "version" : 1,
         "flash" : false,
         "datetime" : "2018-01-22T20:43:18+01:00",
         "kind" : "Alarm",
         "code" : 102
      },
      "currentServerTime" : 1445091119507,
      "sMedicalDeviceTime" : "2015-10-17T09:09:14+01:00",
      "conduitInRange" : true,
      "limits" : [
         {
            "index" : 0,
            "lowLimit" : 80,
            "kind" : "Limits",
            "highLimit" : 300,
            "version" : 1
         }
      ],
      "reservoirAmount" : 52,
      "timeFormat" : "HR_24",
      "sensorState" : "NORMAL",
      "lastConduitTime" : 0,
      "medicalDeviceBatteryLevelPercent" : 100,
      "reservoirLevelPercent" : 50,
      "lastSensorTSAsString" : "2018-01-22T20:43:18+01:00",
      "lastName" : "<redacted>",
      "activeInsulin" : {
         "datetime" : "2018-01-22T20:43:18+01:00",
         "version" : 1,
         "amount" : 1.275,
         "kind" : "Insulin"
      },
      "conduitBatteryLevel" : 100,
      "conduitBatteryStatus" : "FULL",
      "conduitSensorInRange" : true,
      "medicalDeviceSerialNumber" : "<redacted>",
      "timeToNextCalibHours" : 11,
      "sensorDurationHours" : 91,
      "firstName" : "<redacted>",
      "lastConduitUpdateServerTime" : 1445091101422,
      "lastMedicalDeviceDataUpdateServerTime" : 1445091101422,
      "medicalDeviceSuspended" : false,
      "bgunits" : "MGDL",
      "bgUnits" : "MGDL",
      "sLastSensorTime" : "Oct 17, 2015 09:08:00",
      "lastSensorTS" : 0,
      "medicalDeviceTimeAsString" : "2018-01-22T20:43:18+01:00",
      "lastSGTrend" : "UP_DOUBLE",
      "lastSensorTime" : 0
    }
  );
};
