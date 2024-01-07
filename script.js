/* DOKUWIKI:include_once js/calendar.min.js */

console.log("Testing this out");

var calendarInstance1 = new calendarJs( "calendar", {
    manualEditingEnabled: true,
    viewToOpenOnFirstLoad: 'full-week',
    onEventAdded: function( args ) {
        console.log( 'onEventAdded', args );
        //! connect to plugins php litesql API
    },
    onEventUpdated: function( args ) {
        console.log( 'onEventUpdated', args );
        //! connect to plugins php litesql API
    },
    onEventRemoved: function( args ) {
        console.log( 'onEventRemoved', args );
        //! connect to plugins php litesql API
    },
    //!every time you open calender you should take events from 
    //!memory and put them in the calendar
    events:[{
        "from": "2023-12-03T23:00:00.000Z",
        "to": "2023-12-03T23:30:00.000Z",
        "title": "new Event2",
        "description": "",
        "location": "",
        "group": "",
        "isAllDay": false,
        "showAlerts": true,
        "showAsBusy": true,
        "repeatEnds": null,
        "url": "",
        "repeatEveryCustomValue": 1,
        "type": 0,
        "alertOffset": 0,
        "repeatEvery": 2,
        "repeatEveryCustomType": 0,
        "organizerName": "",
        "organizerEmailAddress": "",
        "id": "96b8f433-a407-fc64-998a-04ed48f30c80",
        "created": "2023-12-08T13:54:29.538Z",
        "lastUpdated": "2023-12-08T13:54:29.538Z"
    }]
  } );
