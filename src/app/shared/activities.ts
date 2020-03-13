import { IActivity } from './activity.model'

export const SAVED_ACTIVITIES: IActivity[] = [
    {
        "id" : 1,
        "name" : "Salthill Prom run",
        "date" : new Date('02/18/2020'),
        "distance" : 2.78,
        "comments" : "Cold evening, almost 5k run. Ran with Shed",
        "gpxData" : '../../assets/gpx/1.gpx',
    },
    {
        "id" : 2,
        "name" : "Hockey match",
        "date" : new Date('01/12/2020'),
        "distance" : 1.16,
        "comments" : "Recorded one quarter",
        "gpxData" : '../../assets/gpx/3.gpx',
    },
    {
        "id" : 3,
        "name" : "Lititz run",
        "date" : new Date('12/30/2019'),
        "distance" : 2.18,
        "comments" : "Run with Shed",
        "gpxData" : '../../assets/gpx/2.gpx',
    },
    {
        "id" : 4,
        "name" : "First run with new watch!",
        "date" : new Date('12/28/2019'),
        "distance" : 2.54,
        "comments" : "Run with Shed",
        "gpxData" : '../../assets/gpx/4.gpx',
    }
]