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