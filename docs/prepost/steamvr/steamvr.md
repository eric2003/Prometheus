# SteamVR

## Article Link

-  [OpenVR](https://www.youtube.com/playlist?list=PLua0bJg-zOpOLC1wP-FrYoOCpmsJaRULq).

## 验证 SteamVR 路径
```
验证 SteamVR 路径： SteamVR 通常会在 C:\Users\<用户名>\AppData\Local\openvr\ 创建 openvrpaths.vrpath 文件。如果文件缺失或路径错误，可能导致错误 110。
```

## dll path
```
c:\dev\openvr\bin\win64\
$env:PATH = "c:/dev/openvr/bin/win64;" + $env:PATH
```

```
C:\Users\eric\AppData\Local\openvr\
```

```
https://store.steampowered.com/
```

```
在用户配置文件中添加 Null Driver
用户配置文件通常位于 C:\Users\eric\AppData\Local\openvr\steamvr.vrsettings（注意，不是 default.vrsettings）。按照以下步骤启用 Null Driver：

创建或编辑用户配置文件：
```

C:\Users\eric\AppData\Local\openvr\steamvr.vrsettings
```json
{
    "steamvr": {
        "requireHmd": false,
        "forcedDriver": "null",
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
    },
    "jsonid": "vrsettings"
}
```

```
说明：
"requireHmd": false：禁用 SteamVR 对头显的强制要求。
"forcedDriver": "null"：强制使用 Null Driver。
"driver_null"：定义虚拟头显的属性（如分辨率、窗口位置）。
```