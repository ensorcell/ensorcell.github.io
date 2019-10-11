var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "ensorcraft - overworld"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1570758606",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Spawn Area",
            "zoomLevels": 7,
            "defaultZoom": 5,
            "maxZoom": 7,
            "path": "Spawn Area",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "ensorcraft - overworld",
            "last_rendertime": 1570670348,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                220,
                96,
                422
            ],
            "minZoom": 4,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Full Map",
            "zoomLevels": 9,
            "defaultZoom": 4,
            "maxZoom": 8,
            "path": "Full Map",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "ensorcraft - overworld",
            "last_rendertime": 1570670348,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                220,
                96,
                422
            ],
            "minZoom": 4,
            "spawn": [
                220,
                96,
                422
            ],
            "north_direction": 0
        }
    ]
};
