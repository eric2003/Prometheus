# OpenVR

## Article Link

-  [OpenVR](https://www.youtube.com/playlist?list=PLua0bJg-zOpOLC1wP-FrYoOCpmsJaRULq).
-  [C++/OpenGL/SDL2/VR Games Episode 1: Introduction](https://www.youtube.com/watch?v=qmZ89Ah0AhQ&list=PLua0bJg-zOpOLC1wP-FrYoOCpmsJaRULq&index=1/).
-  [Open VR Driver Tutorial](https://www.youtube.com/watch?v=LzEIOBnbC8k/).
-  [Open VR Driver Example](https://github.com/finallyfunctional/openvr-driver-example/).

## Download
```
git clone git@github.com:ValveSoftware/openvr.git
```

## dll path
```
c:\dev\openvr\bin\win64\
$env:PATH = "c:/dev/openvr/bin/win64;" + $env:PATH
```

openvrpaths.vrpath(c:\Users\eric\AppData\Local\openvr\openvrpaths.vrpath)
```json
{
	"config" : 
	[
		"C:\\Program Files (x86)\\Steam\\config"
	],
	"external_drivers" : 
	[
		"C:\\Program Files (x86)\\Steam\\steamapps\\common\\MixedRealityVRDriver"
	],
	"jsonid" : "vrpathreg",
	"log" : 
	[
		"C:\\Program Files (x86)\\Steam\\logs"
	],
	"runtime" : 
	[
		"C:\\Program Files (x86)\\Steam\\steamapps\\common\\SteamVR"
	],
	"version" : 1
}
```

```
Unable to read VR Path Registry from C:\Users\eric\AppData\Local\openvr\openvrpaths.vrpath
OpenVR initialization failed: Installation path could not be located (110)
```

```
OpenVR initialization failed: Hmd Not Found (108)
```

C:\Program Files (x86)\Steam\steamapps\common\SteamVR\resources\settings\default.vrsettings
```
{
    "driver_null": {
        "enabled": true,
        "id": "Null Driver",
        "serialNumber": "Null 1234",
        "modelNumber": "Null Model",
        "windowX": 0,
        "windowY": 0,
        "windowWidth": 1920,
        "windowHeight": 1080,
        "renderWidth": 1920,
        "renderHeight": 1080
    }
}
```