# Vulkan

Vulkan is a cross-platform industry standard enabling developers to target a wide range of devices with the same graphics API.

## Vulkan Link

-  [www.vulkan.org](https://www.vulkan.org/).
-  [Vulkan-wiki](https://en.wikipedia.org/wiki/Vulkan).
-  [Vulkan 简介](https://zhuanlan.zhihu.com/p/165141740/).

## Vulkan SDK

-  [Vulkan SDK](https://vulkan.lunarg.com/sdk/home#windows/).
-  [SDK version query and download API](https://vulkan.lunarg.com/sdk/home).


## vulkan-tutorial

-  [Vulkan Tutorial](https://vulkan-tutorial.com/).
-  [Vulkan入门](https://www.bilibili.com/video/BV1R44y1M7e2/).
-  [Vulkan Game Engine Tutorial](https://www.bilibili.com/video/BV1za411C7tt/).
-  [AdiosyEngine，基于Vulkan的渲染框架](https://www.bilibili.com/video/BV15J4m1V7Wm/).
-  [手搓Vulkan渲染引擎](https://www.bilibili.com/video/BV15J4m1V7Wm/).

## Game engine

-  [How to Make a Game Engine: Introducing the VULKAN GAME ENGINE Series!](https://www.youtube.com/watch?v=dHPuU-DJoBM&list=PLv8Ddw9K0JPg1BEO-RS-0MYs423cvLVtj/).

```
```

- Validate Layer Manifests
    C:\Users\eric\VulkanSDK

- [VULKAN_SDK] C:\VulkanSDK\1.4.4.313.0\Bin
    - VK_LAYER_LUNARG_api_dump - 1.4.313
    - VK_LAYER_LUNARG_crash_diagnostic -1.4.313 (BETA)
    - VK_LAYER_LUNARG_gfrecconstruct -1.4.313
    - VK_LAYER_KHRONOS_profiles -1.4.313
    - VK_LAYER_KHRONOS_shader_object -1.4.313
    - VK_LAYER_KHRONOS_synchronization2 -1.4.313
    - VK_LAYERHRONOS_validation -1.4.313
    - VK_LAYER_LUNARG_monitor -1.4.313
    - VK_LAYER_LUNARG_screenshot -1.4.313

- [System Explicit Path] C:\VulkanSDK\1.4.313.0\Bin
    - VK_LAYER_LUNARG_api_dump -1.4.313
    - VK_LAYER_LUNARG_crash_diagnostic -1.4.313 (BETA)
    - VK_LAYER_LUNARG_grecconstruct -1.4.313
    - VK_LAYER_KHRONOS_profiles -1.4.313
    - VK_LAYER_KHRONOS_shader_object -1.4.313
    - VK_LAYERHRONOS_synchronization2 -1.4.313
    - VK_LAYERHRONOS_validation -1.4.313
    - VK_LAYER_LUNARG_monitor -1.4.313
    - VK_LAYER_LUNARG_screenshot -1.4.313

- [System Implicit Path] 
    C:\WINDOWS\System32\DriverStore\FileRepository\nvm_disps.inf_amd64_3efa186d0d770b7f7a1nv-vk64.json

- [System Implicit Path] C:\Program Files (x8686)\Epic Games\LauncherPortal\Extras\Overlay
    - VK_LAYEREOS_Overlay -1.2.136
  
## CMake 

### FindVulkan

-  [FindVulkan](https://cmake.org/cmake/help/latest/module/FindVulkan.html).

```
C:\dev\VulkanSDK\1.3.280.0\Bin\vkcube.exe
C:\dev\VulkanSDK\1.3.280.0\Bin
--suppress_popups
C:\Users\eric\VulkanSDK\vkcube.txt
```

Vulkan Development Status:
```
Vulkan Development Status:
- Layers override: "Validation" configuration
- VULKAN_SDK environment variable: C:\dev\VulkanSDK\1.3.280.0
- Vulkan Loader version: 1.3.255
- User-Defined Layers locations:
    - VK_LAYER_PATH variable: None
    - Per-configuration paths: None
    - VK_ADD_LAYER_PATH variable: None
- `vk_layer_settings.txt` uses the default platform path:
    C:\Users\eric\AppData\Local\LunarG\vkconfig\override
- Available Layers:
    - VK_LAYER_NV_optimus
    - VK_LAYER_LUNARG_api_dump
    - VK_LAYER_LUNARG_gfxreconstruct
    - VK_LAYER_KHRONOS_synchronization2
    - VK_LAYER_KHRONOS_validation
    - VK_LAYER_LUNARG_monitor
    - VK_LAYER_LUNARG_screenshot
    - VK_LAYER_KHRONOS_profiles
    - VK_LAYER_KHRONOS_shader_object
- Physical Devices:
    - NVIDIA GeForce RTX 2060 with Vulkan 1.3.260
        - deviceUUID: BCBF9F81E897EEC871F4FC9E15161A43
        - driverUUID: C2A04F03A27E5FB3A136DD945528780D
    - Intel(R) UHD Graphics 630 with Vulkan 1.3.208
        - deviceUUID: 8680C59B050000000000000000000000
        - driverUUID: 33302E302E3130312E31363932000000

```