# ffmpeg


## Link

- [github openvr](https://github.com/ValveSoftware/openvr).


```
find /usr /usr/local /opt/intel/oneapi -name "libavcodec.h"
find /usr /usr/local /opt/intel/oneapi -name "libavcodec.so"
find /usr /usr/local /opt/intel/oneapi -name "libavformat.so"
find /usr /usr/local /opt/intel/oneapi -name "libavutil.so"
find /usr /usr/local /opt/intel/oneapi -name "libswscale.so"
```

```
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "libavcodec.h"
eric@fantasy:~$ find /usr /usr/local /opt/intel/oneapi -name "libavcodec.so"
```

```
eric@fantasy:~$ dpkg -l | grep ffmpeg
eric@fantasy:~$ dpkg -l | grep libavcodec
```

```
sudo apt update
sudo apt install libavcodec-dev libavformat-dev libavutil-dev libswscale-dev
```

```
find /usr -name "libavcodec.h"
find /usr -name "libavcodec.so"
find /usr -name "libavformat.so"
find /usr -name "libavutil.so"
find /usr -name "libswscale.so"
```

```
eric@fantasy:~$ find /usr -name "libavcodec.h"
eric@fantasy:~$ find /usr -name "libavcodec.so"
/usr/lib/x86_64-linux-gnu/libavcodec.so
eric@fantasy:~$ find /usr -name "libavformat.so"
/usr/lib/x86_64-linux-gnu/libavformat.so
eric@fantasy:~$ find /usr -name "libavutil.so"
/usr/lib/x86_64-linux-gnu/libavutil.so
eric@fantasy:~$ find /usr -name "libswscale.so"
/usr/lib/x86_64-linux-gnu/libswscale.so
```

```
pkg-config --modversion libavcodec
pkg-config --modversion libavformat
pkg-config --modversion libavutil
pkg-config --modversion libswscale
```

```
eric@fantasy:~$ pkg-config --modversion libavcodec
60.31.102
eric@fantasy:~$ pkg-config --modversion libavformat
60.16.100
eric@fantasy:~$ pkg-config --modversion libavutil
58.29.100
eric@fantasy:~$ pkg-config --modversion libswscale
7.5.100
```

```
sudo apt update
sudo apt install libavcodec-dev libavformat-dev libavutil-dev libswscale-dev
```

```
eric@fantasy:~$ sudo apt install libavcodec-dev libavformat-dev libavutil-dev libswscale-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
libavcodec-dev is already the newest version (7:6.1.1-3ubuntu5).
libavformat-dev is already the newest version (7:6.1.1-3ubuntu5).
libavutil-dev is already the newest version (7:6.1.1-3ubuntu5).
libswscale-dev is already the newest version (7:6.1.1-3ubuntu5).
0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.
```

```
find /usr -name "*avcodec*.h"
```

### find /usr -name "*avcodec*.h"
```
eric@fantasy:~$ find /usr -name "*avcodec*.h"
/usr/include/x86_64-linux-gnu/libavcodec/avcodec.h
```

### msys64

```
cmd.exe "/K" '"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 && powershell'
```


```
lib /def:avcodec-62.def /out:avcodec.lib /machine:x64; `
lib /def:avdevice-62.def /out:avdevice.lib /machine:x64; `
lib /def:avfilter-11.def /out:avfilter.lib /machine:x64; `
lib /def:avformat-62.def /out:avformat.lib /machine:x64; `
lib /def:avutil-60.def /out:avutil.lib /machine:x64; `
lib /def:swresample-6.def /out:swresample.lib /machine:x64; `
lib /def:swscale-9.def /out:swscale.lib /machine:x64;
```

```
lib /def:avcodec*.def /out:avcodec.lib /machine:x64; `
lib /def:avdevice*.def /out:avdevice.lib /machine:x64; `
lib /def:avfilter*.def /out:avfilter.lib /machine:x64; `
lib /def:avformat*.def /out:avformat.lib /machine:x64; `
lib /def:avutil*.def /out:avutil.lib /machine:x64; `
lib /def:swresample*.def /out:swresample.lib /machine:x64; `
lib /def:swscale*.def /out:swscale.lib /machine:x64;
```

### vcpkg
```
ffmpeg provides CMake integration:

  find_package(FFMPEG REQUIRED)
  target_include_directories(main PRIVATE ${FFMPEG_INCLUDE_DIRS})
  target_link_directories(main PRIVATE ${FFMPEG_LIBRARY_DIRS})
  target_link_libraries(main PRIVATE ${FFMPEG_LIBRARIES})
```

path converter
```
d:\work\ffmpeg_work\ModernFFMPEG\codes\examples\encode_audio\PkgConfig\01\build\
->
/d/work/ffmpeg_work/ModernFFMPEG/codes/examples/encode_audio/PkgConfig/01/build/
```


```
$ cmake --build .
[2/2] Linking C executable decode_video.exe
FAILED: [code=1] decode_video.exe
C:\WINDOWS\system32\cmd.exe /C "cd . && C:\msys64\mingw64\bin\cc.exe   CMakeFiles/decode_video.dir/decode_video.c.obj -o decode_video.exe -Wl,--out-implib,libdecode_video.dll.a -Wl,--major-image-version,0,--minor-image-version,0  -lavcodec  -lavformat  -lavutil  -lswscale  -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 && cd ."
C:/msys64/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: cannot find -lavcodec: No such file or directory
C:/msys64/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: cannot find -lavformat: No such file or directory
C:/msys64/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: cannot find -lavutil: No such file or directory
C:/msys64/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: cannot find -lswscale: No such file or directory
collect2.exe: error: ld returned 1 exit status
ninja: build stopped: subcommand failed.
```

## msys64

```cmake
cmake_minimum_required(VERSION 3.10)
project(DecodeVideo)

find_package(PkgConfig REQUIRED)
pkg_check_modules(AVCODEC REQUIRED libavcodec)
pkg_check_modules(AVFORMAT REQUIRED libavformat)
pkg_check_modules(AVUTIL REQUIRED libavutil)
pkg_check_modules(SWSCALE REQUIRED libswscale)

message(STATUS "AVCODEC_INCLUDE_DIRS=${AVCODEC_INCLUDE_DIRS}")
message(STATUS "AVFORMAT_INCLUDE_DIRS=${AVFORMAT_INCLUDE_DIRS}")
message(STATUS "AVUTIL_INCLUDE_DIRS=${AVUTIL_INCLUDE_DIRS}")
message(STATUS "SWSCALE_INCLUDE_DIRS=${SWSCALE_INCLUDE_DIRS}")

message(STATUS "AVCODEC_LIBRARY_DIRS=${AVCODEC_LIBRARY_DIRS}")
message(STATUS "AVFORMAT_LIBRARY_DIRS=${AVFORMAT_LIBRARY_DIRS}")
message(STATUS "AVUTIL_LIBRARY_DIRS=${AVUTIL_LIBRARY_DIRS}")
message(STATUS "SWSCALE_LIBRARY_DIRS=${SWSCALE_LIBRARY_DIRS}")

message(STATUS "AVCODEC_LIBRARIES=${AVCODEC_LIBRARIES}")
message(STATUS "AVFORMAT_LIBRARIES=${AVFORMAT_LIBRARIES}")
message(STATUS "AVUTIL_LIBRARIES=${AVUTIL_LIBRARIES}")
message(STATUS "SWSCALE_LIBRARIES=${SWSCALE_LIBRARIES}")

add_executable(decode_video decode_video.c)
target_include_directories(decode_video PRIVATE ${AVCODEC_INCLUDE_DIRS} ${AVFORMAT_INCLUDE_DIRS} ${AVUTIL_INCLUDE_DIRS} ${SWSCALE_INCLUDE_DIRS})

# 新增：添加库路径（用变量，确保兼容）
target_link_directories(decode_video PRIVATE ${AVCODEC_LIBRARY_DIRS} ${AVFORMAT_LIBRARY_DIRS} ${AVUTIL_LIBRARY_DIRS} ${SWSCALE_LIBRARY_DIRS})

# 链接库（保持原样；如果需要私有依赖，手动添加见步骤 3）
target_link_libraries(decode_video PRIVATE ${AVCODEC_LIBRARIES} ${AVFORMAT_LIBRARIES} ${AVUTIL_LIBRARIES} ${SWSCALE_LIBRARIES})
```

decode_video.c
```cpp
#include <stdio.h>
#include <math.h>
#include <libavcodec/avcodec.h>
#include <libavutil/opt.h>
#include <libavutil/channel_layout.h>  // Added for channel layout handling

#define SAMPLE_RATE 44100
#define CHANNELS 2
#define DURATION 5  // seconds

static int64_t pts = 0;

int main(int argc, char **argv) {
    if (argc < 2) {
        printf("Usage: %s <output.mp2>\n", argv[0]);
        return -1;
    }

    const AVCodec *codec = avcodec_find_encoder(AV_CODEC_ID_MP2);  // Added const to fix warning
    if (!codec) {
        printf("Codec not found\n");
        return -1;
    }

    AVCodecContext *c = avcodec_alloc_context3(codec);
    c->bit_rate = 64000;
    c->sample_rate = SAMPLE_RATE;
    c->sample_fmt = AV_SAMPLE_FMT_S16;

    // Set channel layout (replaces deprecated channels and channel_layout)
    av_channel_layout_default(&c->ch_layout, CHANNELS);  // Sets to stereo for 2 channels

    if (avcodec_open2(c, codec, NULL) < 0) {
        printf("Could not open codec\n");
        return -1;
    }

    AVFrame *frame = av_frame_alloc();
    frame->nb_samples = c->frame_size;
    frame->format = c->sample_fmt;
    av_channel_layout_copy(&frame->ch_layout, &c->ch_layout);  // Copy layout to frame

    av_frame_get_buffer(frame, 0);

    AVPacket *pkt = av_packet_alloc();

    FILE *f = fopen(argv[1], "wb");

    int num_frames = (SAMPLE_RATE * DURATION) / c->frame_size;

    for (int i = 0; i < num_frames; i++) {
        // Generate sine wave
        int16_t *samples = (int16_t *)frame->data[0];
        for (int j = 0; j < c->frame_size; j++) {
            samples[c->ch_layout.nb_channels * j] = (int16_t)(sin(2 * M_PI * 440 * (pts + j) / SAMPLE_RATE) * 0x7FFF);
            for (int ch = 1; ch < c->ch_layout.nb_channels; ch++) {
                samples[c->ch_layout.nb_channels * j + ch] = samples[c->ch_layout.nb_channels * j];  // Copy to other channels
            }
        }
        pts += c->frame_size;

        frame->pts = pts;

        if (avcodec_send_frame(c, frame) < 0) break;

        while (avcodec_receive_packet(c, pkt) >= 0) {
            fwrite(pkt->data, 1, pkt->size, f);
            av_packet_unref(pkt);
        }
    }

    // Flush encoder
    avcodec_send_frame(c, NULL);
    while (avcodec_receive_packet(c, pkt) >= 0) {
        fwrite(pkt->data, 1, pkt->size, f);
        av_packet_unref(pkt);
    }

    fclose(f);
    av_packet_free(&pkt);
    av_frame_free(&frame);
    avcodec_free_context(&c);
    return 0;
}
```

cmake
```bath
eric@DELL MINGW64 /d/work/ffmpeg_work/ModernFFMPEG/codes/examples/encode_audio/PkgConfig/01/build
$ cmake ..
-- Building for: Ninja
-- The C compiler identification is GNU 15.2.0
-- The CXX compiler identification is GNU 15.2.0
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working C compiler: C:/msys64/mingw64/bin/cc.exe - skipped
-- Detecting C compile features
-- Detecting C compile features - done
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: C:/msys64/mingw64/bin/c++.exe - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Found PkgConfig: C:/msys64/mingw64/bin/pkg-config.exe (found version "2.5.1")
-- Checking for module 'libavcodec'
--   Found libavcodec, version 62.11.100
-- Checking for module 'libavformat'
--   Found libavformat, version 62.3.100
-- Checking for module 'libavutil'
--   Found libavutil, version 60.8.100
-- Checking for module 'libswscale'
--   Found libswscale, version 9.1.100
-- AVCODEC_INCLUDE_DIRS=C:/msys64/usr/local/ffmpeg/include
-- AVFORMAT_INCLUDE_DIRS=C:/msys64/usr/local/ffmpeg/include
-- AVUTIL_INCLUDE_DIRS=C:/msys64/usr/local/ffmpeg/include
-- SWSCALE_INCLUDE_DIRS=C:/msys64/usr/local/ffmpeg/include
-- AVCODEC_LIBRARY_DIRS=C:/msys64/usr/local/ffmpeg/lib
-- AVFORMAT_LIBRARY_DIRS=C:/msys64/usr/local/ffmpeg/lib
-- AVUTIL_LIBRARY_DIRS=C:/msys64/usr/local/ffmpeg/lib
-- SWSCALE_LIBRARY_DIRS=C:/msys64/usr/local/ffmpeg/lib
-- AVCODEC_LIBRARIES=avcodec
-- AVFORMAT_LIBRARIES=avformat
-- AVUTIL_LIBRARIES=avutil
-- SWSCALE_LIBRARIES=swscale
-- Configuring done (1.9s)
-- Generating done (0.1s)
-- Build files have been written to: D:/work/ffmpeg_work/ModernFFMPEG/codes/examples/encode_audio/PkgConfig/01/build

eric@DELL MINGW64 /d/work/ffmpeg_work/ModernFFMPEG/codes/examples/encode_audio/PkgConfig/01/build
$ cmake --build .
[2/2] Linking C executable decode_video.exe
```

c:\msys64\home\eric\.bashrc
```
export PATH=$PATH:/usr/local/ffmpeg/bin
export PKG_CONFIG_PATH=/usr/local/ffmpeg/lib/pkgconfig:$PKG_CONFIG_PATH
```

```
c:\msys64\usr\local\ffmpeg\bin\ffmpeg --version
由于找不到libvpx-1.dll,无法继续执行代码。重新安装程序可能会解决此问题。
```

```
c:/msys64/usr/local/ffmpeg/bin
$env:PATH = "c:/msys64/usr/local/ffmpeg/bin/;" + $env:PATH
$env:PATH = "c:/msys64/mingw64/bin/;" + $env:PATH
```

```powershell
PS C:\Users\eric> Get-Command ffmpeg.exe | Select-Object -ExpandProperty Source
D:\software\Tecplot\Tecplot 360 EX 2025 R1\bin\ffmpeg.exe
```

where.exe ffmpeg.exe
```powershell
PS C:\Users\eric> where.exe ffmpeg.exe
D:\software\Tecplot\Tecplot 360 EX 2025 R1\bin\ffmpeg.exe
c:\dev\ffmpeg\bin\ffmpeg.exe
```

where ffmpeg.exe
```cmd
C:\Users\eric>where ffmpeg.exe
D:\software\Tecplot\Tecplot 360 EX 2025 R1\bin\ffmpeg.exe
c:\dev\ffmpeg\bin\ffmpeg.exe
```