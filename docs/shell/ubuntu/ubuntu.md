# Ubuntu

## Link

-  [How to Upgrade and Install Powershell 7 on Windows 11](https://www.youtube.com/watch?v=z4w0OYi5L4M).

## Intall pinyin

fcitx
```powershell
sudo apt install fcitx
```

## ifconfig

```
ifconfig -a
```

## Install wechat

```
sudo dpkg -i WeChatLinux_x86_64.deb
```


## Install Flameshot

```
sudo apt-get install flameshot
```

```
which flameshot
sudo nano /etc/gdm3/custom.conf
找到# WaylandEnable=false，去掉前面的#，保存并退出
```

## Scientific Internet Access

-  [Xray 快速入门](https://xtls.github.io/document/).


## Install CMake

-  [Installing cmake on Linux门](https://microsoft.github.io/AirSim/cmake_linux/).
-  [Install latest CMake on ubuntu](https://gist.github.com/LegalizeAdulthood/6fc0fcfc98b0c03bdb014d2cf43bc221).
-  [CMake Installation](https://cgold.readthedocs.io/en/latest/first-step/installation.html).

```
wget https://github.com/Kitware/CMake/releases/download/v4.0.1/cmake-4.0.1-linux-x86_64.sh
```

```
chmod +x cmake-4.0.1-linux-x86_64.sh
sudo sh cmake-4.0.1-linux-x86_64.sh --skip-license --prefix=/home/eric/software/cmake --include-subdir
```

```
eric@fantasy:~/work/install_work$ sudo sh cmake-4.0.1-linux-x86_64.sh --skip-license --prefix=/home/eric/software/cmake --include-subdir
CMake Installer Version: 4.0.1, Copyright (c) Kitware
This is a self-extracting archive.
The archive will be extracted to: /home/eric/software/cmake

Using target directory: /home/eric/software/cmake/cmake-4.0.1-linux-x86_64
Extracting, please wait...

Unpacking finished successfully
```

## Install MPI

### Install OpenMPI

-  [MPI安装与配置](https://www.hiascend.com/doc_center/source/zh/canncommercial/80RC3/devaids/devtools/hccltool/HCCLpertest_16_0002.html).
-  [设置适用于 HPC 的消息传递接口](https://learn.microsoft.com/zh-cn/azure/virtual-machines/setup-mpi).
-  [编译安装 UCX 1.15.0 与 OpenMPI 5.0.0：详尽指南](https://learn.microsoft.com/zh-cn/azure/virtual-machines/setup-mpi).
-  [Open MPI 4.0 编译安装](https://www.cnblogs.com/zhcpku/p/13437027.html).
-  [OpenMPI-4.1.1在CentOS7系统的编译安装](https://zhuanlan.zhihu.com/p/614338649).
-  [OpenMPI编译安装](https://www.hikunpeng.com/document/detail/zh/kunpenghpcs/hpcindapp/instg-osc/kunpengopenmpi_03_0007.html).
-  [OpenMPI](https://docs.hpc.sjtu.edu.cn/app/compilers_and_languages/open_mpi.html).


## Install Qt

```
```

## Install Cuda

-  [Ubuntu20.04下CUDA、cuDNN的详细安装与配置过程（图文）](https://blog.csdn.net/weixin_37926734/article/details/123033286).
-  [Ubuntu 20.04安装CUDA 11.4, cuDNN 8.24](https://zhuanlan.zhihu.com/p/424817205).
-  [Ubuntu安装Nvidia英伟达显卡驱动，安装Cuda和Cudnn配置机器学习环境](https://qii404.me/2021/07/03/ubuntu-install-nvidia-driver.html).


```
```

## Check Video card

1. lspci 命令
lspci 命令可以列出系统中所有的PCI设备，包括显卡。在终端中输入以下命令：

```bash
lspci | grep VGA
```

lspci | grep VGA
```
eric@fantasy:~$ lspci | grep VGA
04:00.0 VGA compatible controller: NVIDIA Corporation GM107 [GeForce GTX 750 Ti] (rev a2)
```

sudo ubuntu-drivers list
```
eric@fantasy:~$ sudo ubuntu-drivers list
udevadm hwdb is deprecated. Use systemd-hwdb instead.
udevadm hwdb is deprecated. Use systemd-hwdb instead.
udevadm hwdb is deprecated. Use systemd-hwdb instead.
udevadm hwdb is deprecated. Use systemd-hwdb instead.
udevadm hwdb is deprecated. Use systemd-hwdb instead.
udevadm hwdb is deprecated. Use systemd-hwdb instead.
nvidia-driver-570-server, (kernel modules provided by linux-modules-nvidia-570-server-generic-hwe-24.04)
nvidia-driver-470, (kernel modules provided by linux-modules-nvidia-470-generic-hwe-24.04)
nvidia-driver-535, (kernel modules provided by linux-modules-nvidia-535-generic-hwe-24.04)
nvidia-driver-470-server, (kernel modules provided by linux-modules-nvidia-470-server-generic-hwe-24.04)
nvidia-driver-550, (kernel modules provided by linux-modules-nvidia-550-generic-hwe-24.04)
nvidia-driver-535-server, (kernel modules provided by linux-modules-nvidia-535-server-generic-hwe-24.04)
```

```
chmod +x NVIDIA-Linux-x86_64-570.144.run
```

```
 The initramfs will likely need to be rebuilt due to the following            
  condition(s):
  * nvidia-installer attempted to disable Nouveau.

  Would you like to rebuild the initramfs?
```


```
NVIDIA Accelerated Graphics Driver for Linux-x86_64 (570.144)

WARNING: Unable to determine the path to install the libglvnd EGL vendor     
           library config files. Check that you have pkg-config and the        
           libglvnd development libraries installed, or specify a path with    
           --glvnd-egl-config-path.

```

```
eric@fantasy:~$ sudo apt install -y pkg-config libglvnd-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libegl-dev libgl-dev libgles-dev libgles1 libglvnd-core-dev libglx-dev
  libopengl-dev libpkgconf3 libx11-dev pkgconf pkgconf-bin xtrans-dev
Suggested packages:
  libx11-doc
The following NEW packages will be installed:
  libegl-dev libgl-dev libgles-dev libgles1 libglvnd-core-dev libglvnd-dev
  libglx-dev libopengl-dev libpkgconf3 libx11-dev pkg-config pkgconf
  pkgconf-bin xtrans-dev
0 upgraded, 14 newly installed, 0 to remove and 8 not upgraded.
Need to get 1,094 kB of archives.
After this operation, 5,635 kB of additional disk space will be used.
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 xtrans-dev all 1.4.0-1 [68.9 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libx11-dev amd64 2:1.8.7-1build1 [732 kB]
Get:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libglx-dev amd64 1.7.0-1build1 [14.2 kB]
Get:4 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libgl-dev amd64 1.7.0-1build1 [102 kB]
Get:5 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libegl-dev amd64 1.7.0-1build1 [18.2 kB]
Get:6 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libgles1 amd64 1.7.0-1build1 [11.6 kB]
Get:7 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libgles-dev amd64 1.7.0-1build1 [50.5 kB]
Get:8 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libopengl-dev amd64 1.7.0-1build1 [3,454 B]
Get:9 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libpkgconf3 amd64 1.8.1-2build1 [30.7 kB]
Get:10 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 pkgconf-bin amd64 1.8.1-2build1 [20.7 kB]
Get:11 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 pkgconf amd64 1.8.1-2build1 [16.8 kB]
Get:12 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 pkg-config amd64 1.8.1-2build1 [7,264 B]
Get:13 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libglvnd-core-dev amd64 1.7.0-1build1 [13.6 kB]
Get:14 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libglvnd-dev amd64 1.7.0-1build1 [3,198 B]
Fetched 1,094 kB in 2s (697 kB/s)         
Selecting previously unselected package xtrans-dev.
(Reading database ... 159848 files and directories currently installed.)
Preparing to unpack .../00-xtrans-dev_1.4.0-1_all.deb ...
Unpacking xtrans-dev (1.4.0-1) ...
Selecting previously unselected package libx11-dev:amd64.
Preparing to unpack .../01-libx11-dev_2%3a1.8.7-1build1_amd64.deb ...
Unpacking libx11-dev:amd64 (2:1.8.7-1build1) ...
Selecting previously unselected package libglx-dev:amd64.
Preparing to unpack .../02-libglx-dev_1.7.0-1build1_amd64.deb ...
Unpacking libglx-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libgl-dev:amd64.
Preparing to unpack .../03-libgl-dev_1.7.0-1build1_amd64.deb ...
Unpacking libgl-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libegl-dev:amd64.
Preparing to unpack .../04-libegl-dev_1.7.0-1build1_amd64.deb ...
Unpacking libegl-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libgles1:amd64.
Preparing to unpack .../05-libgles1_1.7.0-1build1_amd64.deb ...
Unpacking libgles1:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libgles-dev:amd64.
Preparing to unpack .../06-libgles-dev_1.7.0-1build1_amd64.deb ...
Unpacking libgles-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libopengl-dev:amd64.
Preparing to unpack .../07-libopengl-dev_1.7.0-1build1_amd64.deb ...
Unpacking libopengl-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libpkgconf3:amd64.
Preparing to unpack .../08-libpkgconf3_1.8.1-2build1_amd64.deb ...
Unpacking libpkgconf3:amd64 (1.8.1-2build1) ...
Selecting previously unselected package pkgconf-bin.
Preparing to unpack .../09-pkgconf-bin_1.8.1-2build1_amd64.deb ...
Unpacking pkgconf-bin (1.8.1-2build1) ...
Selecting previously unselected package pkgconf:amd64.
Preparing to unpack .../10-pkgconf_1.8.1-2build1_amd64.deb ...
Unpacking pkgconf:amd64 (1.8.1-2build1) ...
Selecting previously unselected package pkg-config:amd64.
Preparing to unpack .../11-pkg-config_1.8.1-2build1_amd64.deb ...
Unpacking pkg-config:amd64 (1.8.1-2build1) ...
Selecting previously unselected package libglvnd-core-dev:amd64.
Preparing to unpack .../12-libglvnd-core-dev_1.7.0-1build1_amd64.deb ...
Unpacking libglvnd-core-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libglvnd-dev:amd64.
Preparing to unpack .../13-libglvnd-dev_1.7.0-1build1_amd64.deb ...
Unpacking libglvnd-dev:amd64 (1.7.0-1build1) ...
Setting up libglvnd-core-dev:amd64 (1.7.0-1build1) ...
Setting up xtrans-dev (1.4.0-1) ...
Setting up libpkgconf3:amd64 (1.8.1-2build1) ...
Setting up libgles1:amd64 (1.7.0-1build1) ...
Setting up pkgconf-bin (1.8.1-2build1) ...
Setting up libopengl-dev:amd64 (1.7.0-1build1) ...
Setting up libx11-dev:amd64 (2:1.8.7-1build1) ...
Setting up pkgconf:amd64 (1.8.1-2build1) ...
Setting up pkg-config:amd64 (1.8.1-2build1) ...
Setting up libglx-dev:amd64 (1.7.0-1build1) ...
Setting up libgl-dev:amd64 (1.7.0-1build1) ...
Setting up libegl-dev:amd64 (1.7.0-1build1) ...
Setting up libgles-dev:amd64 (1.7.0-1build1) ...
Setting up libglvnd-dev:amd64 (1.7.0-1build1) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
Processing triggers for man-db (2.12.0-4build2) ...
```


```
pkg-config --version
pkg-config --modversion libglvnd
```

```
eric@fantasy:~$ pkg-config --version
1.8.1
eric@fantasy:~$ pkg-config --modversion libglvnd
1.7.0
```

```
Your X configuration file has been successfully updated.  Installation of    
  the NVIDIA Accelerated Graphics Driver for Linux-x86_64 (version: 570.144)   
  is now complete.
```

```
nvidia-smi
lsmod | grep nouveau
```

```
eric@fantasy:~$ nvidia-smi
Tue Apr 29 08:42:03 2025       
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 570.144                Driver Version: 570.144        CUDA Version: 12.8     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA GeForce GTX 750 Ti      Off |   00000000:04:00.0  On |                  N/A |
| 38%   28C    P8              1W /   38W |     177MiB /   2048MiB |      0%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+
                                                                                         
+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI              PID   Type   Process name                        GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|    0   N/A  N/A            2092      G   /usr/lib/xorg/Xorg                       71MiB |
|    0   N/A  N/A            2329      G   /usr/bin/gnome-shell                     74MiB |
|    0   N/A  N/A            3165      G   /usr/bin/nautilus                        14MiB |
|    0   N/A  N/A            3202      G   /usr/bin/gnome-text-editor                8MiB |
+-----------------------------------------------------------------------------------------+
eric@fantasy:~$ 

eric@fantasy:~$ lsmod | grep nouveau
eric@fantasy:~$ 
```

## Install Cuda 12.8


wget https://developer.download.nvidia.com/compute/cuda/12.8.1/local_installers/cuda_12.8.1_570.124.06_linux.runsudo sh cuda_12.8.1_570.124.06_linux.run
```
eric@fantasy:~/Downloads$ wget https://developer.download.nvidia.com/compute/cuda/12.8.1/local_installers/cuda_12.8.1_570.124.06_linux.run
--2025-04-29 08:48:35--  https://developer.download.nvidia.com/compute/cuda/12.8.1/local_installers/cuda_12.8.1_570.124.06_linux.run
Resolving developer.download.nvidia.com (developer.download.nvidia.com)... 2.23.227.213, 2.23.227.222
Connecting to developer.download.nvidia.com (developer.download.nvidia.com)|2.23.227.213|:443... connected.
HTTP request sent, awaiting response... 301 Moved Permanently
Location: https://developer.download.nvidia.cn/compute/cuda/12.8.1/local_installers/cuda_12.8.1_570.124.06_linux.run [following]
--2025-04-29 08:48:36--  https://developer.download.nvidia.cn/compute/cuda/12.8.1/local_installers/cuda_12.8.1_570.124.06_linux.run
Resolving developer.download.nvidia.cn (developer.download.nvidia.cn)... 59.36.216.26, 59.36.216.27, 59.36.216.28, ...
Connecting to developer.download.nvidia.cn (developer.download.nvidia.cn)|59.36.216.26|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 5382238770 (5.0G) [application/octet-stream]
Saving to: ‘cuda_12.8.1_570.124.06_linux.run’

cuda_12.8.1_570.124 100%[===================>]   5.01G   101MB/s    in 50s     

2025-04-29 08:49:26 (102 MB/s) - ‘cuda_12.8.1_570.124.06_linux.run’ saved [5382238770/5382238770]

eric@fantasy:~/Downloads$ 
```

```
eric@fantasy:~/Downloads$ wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/cuda-ubuntu2404.pin
--2025-04-29 09:53:30--  https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/cuda-ubuntu2404.pin
Resolving developer.download.nvidia.com (developer.download.nvidia.com)... 23.59.252.106, 23.59.252.163
Connecting to developer.download.nvidia.com (developer.download.nvidia.com)|23.59.252.106|:443... connected.
HTTP request sent, awaiting response... 301 Moved Permanently
Location: https://developer.download.nvidia.cn/compute/cuda/repos/ubuntu2404/x86_64/cuda-ubuntu2404.pin [following]
--2025-04-29 09:53:31--  https://developer.download.nvidia.cn/compute/cuda/repos/ubuntu2404/x86_64/cuda-ubuntu2404.pin
Resolving developer.download.nvidia.cn (developer.download.nvidia.cn)... 59.36.216.28, 125.64.2.194, 125.64.2.195, ...
Connecting to developer.download.nvidia.cn (developer.download.nvidia.cn)|59.36.216.28|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 190 [application/octet-stream]
Saving to: ‘cuda-ubuntu2404.pin’

cuda-ubuntu2404.pin      100%[===============================>]     190  --.-KB/s    in 0s      

2025-04-29 09:53:31 (31.3 MB/s) - ‘cuda-ubuntu2404.pin’ saved [190/190]

eric@fantasy:~/Downloads$ sudo mv cuda-ubuntu2404.pin /etc/apt/preferences.d/cuda-repository-pin-600
[sudo] password for eric: 
eric@fantasy:~/Downloads$ wget https://developer.download.nvidia.com/compute/cuda/12.8.1/local_installers/cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb
--2025-04-29 09:55:13--  https://developer.download.nvidia.com/compute/cuda/12.8.1/local_installers/cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb
Resolving developer.download.nvidia.com (developer.download.nvidia.com)... 96.7.39.16, 96.7.39.24
Connecting to developer.download.nvidia.com (developer.download.nvidia.com)|96.7.39.16|:443... connected.
HTTP request sent, awaiting response... 301 Moved Permanently
Location: https://developer.download.nvidia.cn/compute/cuda/12.8.1/local_installers/cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb [following]
--2025-04-29 09:55:13--  https://developer.download.nvidia.cn/compute/cuda/12.8.1/local_installers/cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb
Resolving developer.download.nvidia.cn (developer.download.nvidia.cn)... 125.64.2.196, 59.36.216.26, 59.36.216.27, ...
Connecting to developer.download.nvidia.cn (developer.download.nvidia.cn)|125.64.2.196|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 4138345734 (3.9G) [application/x-deb]
Saving to: ‘cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb’

cuda-repo-ubuntu2404-12- 100%[===============================>]   3.85G   112MB/s    in 36s     

2025-04-29 09:55:49 (110 MB/s) - ‘cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb’ saved [4138345734/4138345734]
```

```
eric@fantasy:~/Downloads$ sudo dpkg -i cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb
Selecting previously unselected package cuda-repo-ubuntu2404-12-8-local.
(Reading database ... 160003 files and directories currently installed.)
Preparing to unpack cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb ...
Unpacking cuda-repo-ubuntu2404-12-8-local (12.8.1-570.124.06-1) ...
Setting up cuda-repo-ubuntu2404-12-8-local (12.8.1-570.124.06-1) ...

The public cuda-repo-ubuntu2404-12-8-local GPG key does not appear to be installed.
To install the key, run this command:
sudo cp /var/cuda-repo-ubuntu2404-12-8-local/cuda-B2775641-keyring.gpg /usr/share/keyrings/
```

```
eric@fantasy:~/Downloads$ sudo dpkg -i cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb
(Reading database ... 160137 files and directories currently installed.)
Preparing to unpack cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb ...
Unpacking cuda-repo-ubuntu2404-12-8-local (12.8.1-570.124.06-1) over (12.8.1-570.124.06-1) ...
Setting up cuda-repo-ubuntu2404-12-8-local (12.8.1-570.124.06-1) ...
eric@fantasy:~/Downloads$ sudo apt-get update
Get:1 file:/var/cuda-repo-ubuntu2404-12-8-local  InRelease [1,572 B]
Get:1 file:/var/cuda-repo-ubuntu2404-12-8-local  InRelease [1,572 B]
Get:2 file:/var/cuda-repo-ubuntu2404-12-8-local  Packages [35.1 kB]                             
Hit:3 http://security.ubuntu.com/ubuntu noble-security InRelease                                
Hit:4 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble InRelease                                
Hit:5 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates InRelease
Hit:6 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-backports InRelease
Reading package lists... Done
eric@fantasy:~/Downloads$ sudo apt-get -y install cuda-toolkit-12-8
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  ca-certificates-java cuda-cccl-12-8 cuda-command-line-tools-12-8 cuda-compiler-12-8
  cuda-crt-12-8 cuda-cudart-12-8 cuda-cudart-dev-12-8 cuda-cuobjdump-12-8 cuda-cupti-12-8
  cuda-cupti-dev-12-8 cuda-cuxxfilt-12-8 cuda-documentation-12-8 cuda-driver-dev-12-8
  cuda-gdb-12-8 cuda-libraries-12-8 cuda-libraries-dev-12-8 cuda-nsight-12-8
  cuda-nsight-compute-12-8 cuda-nsight-systems-12-8 cuda-nvcc-12-8 cuda-nvdisasm-12-8
  cuda-nvml-dev-12-8 cuda-nvprof-12-8 cuda-nvprune-12-8 cuda-nvrtc-12-8 cuda-nvrtc-dev-12-8
  cuda-nvtx-12-8 cuda-nvvm-12-8 cuda-nvvp-12-8 cuda-opencl-12-8 cuda-opencl-dev-12-8
  cuda-profiler-api-12-8 cuda-sanitizer-12-8 cuda-toolkit-12-8-config-common
  cuda-toolkit-12-config-common cuda-toolkit-config-common cuda-tools-12-8
  cuda-visual-tools-12-8 default-jre default-jre-headless fonts-dejavu-extra gds-tools-12-8
  java-common libatk-wrapper-java libatk-wrapper-java-jni libcublas-12-8 libcublas-dev-12-8
  libcufft-12-8 libcufft-dev-12-8 libcufile-12-8 libcufile-dev-12-8 libcurand-12-8
  libcurand-dev-12-8 libcusolver-12-8 libcusolver-dev-12-8 libcusparse-12-8
  libcusparse-dev-12-8 libnpp-12-8 libnpp-dev-12-8 libnvfatbin-12-8 libnvfatbin-dev-12-8
  libnvjitlink-12-8 libnvjitlink-dev-12-8 libnvjpeg-12-8 libnvjpeg-dev-12-8
  nsight-compute-2025.1.1 nsight-systems-2024.6.2 openjdk-21-jre openjdk-21-jre-headless
Suggested packages:
  fonts-ipafont-gothic fonts-ipafont-mincho fonts-wqy-microhei | fonts-wqy-zenhei fonts-indic
The following NEW packages will be installed:
  ca-certificates-java cuda-cccl-12-8 cuda-command-line-tools-12-8 cuda-compiler-12-8
  cuda-crt-12-8 cuda-cudart-12-8 cuda-cudart-dev-12-8 cuda-cuobjdump-12-8 cuda-cupti-12-8
  cuda-cupti-dev-12-8 cuda-cuxxfilt-12-8 cuda-documentation-12-8 cuda-driver-dev-12-8
  cuda-gdb-12-8 cuda-libraries-12-8 cuda-libraries-dev-12-8 cuda-nsight-12-8
  cuda-nsight-compute-12-8 cuda-nsight-systems-12-8 cuda-nvcc-12-8 cuda-nvdisasm-12-8
  cuda-nvml-dev-12-8 cuda-nvprof-12-8 cuda-nvprune-12-8 cuda-nvrtc-12-8 cuda-nvrtc-dev-12-8
  cuda-nvtx-12-8 cuda-nvvm-12-8 cuda-nvvp-12-8 cuda-opencl-12-8 cuda-opencl-dev-12-8
  cuda-profiler-api-12-8 cuda-sanitizer-12-8 cuda-toolkit-12-8 cuda-toolkit-12-8-config-common
  cuda-toolkit-12-config-common cuda-toolkit-config-common cuda-tools-12-8
  cuda-visual-tools-12-8 default-jre default-jre-headless fonts-dejavu-extra gds-tools-12-8
  java-common libatk-wrapper-java libatk-wrapper-java-jni libcublas-12-8 libcublas-dev-12-8
  libcufft-12-8 libcufft-dev-12-8 libcufile-12-8 libcufile-dev-12-8 libcurand-12-8
  libcurand-dev-12-8 libcusolver-12-8 libcusolver-dev-12-8 libcusparse-12-8
  libcusparse-dev-12-8 libnpp-12-8 libnpp-dev-12-8 libnvfatbin-12-8 libnvfatbin-dev-12-8
  libnvjitlink-12-8 libnvjitlink-dev-12-8 libnvjpeg-12-8 libnvjpeg-dev-12-8
  nsight-compute-2025.1.1 nsight-systems-2024.6.2 openjdk-21-jre openjdk-21-jre-headless
0 upgraded, 70 newly installed, 0 to remove and 8 not upgraded.
Need to get 48.7 MB/3,659 MB of archives.
After this operation, 8,539 MB of additional disk space will be used.
Get:1 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-cccl-12-8 12.8.90-1 [966 kB]
Get:2 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-cupti-12-8 12.8.90-1 [11.4 MB]
Get:3 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-cupti-dev-12-8 12.8.90-1 [4,075 kB]
Get:4 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nvdisasm-12-8 12.8.90-1 [5,088 kB]
Get:5 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-cuobjdump-12-8 12.8.90-1 [208 kB]
Get:6 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-gdb-12-8 12.8.90-1 [25.1 MB]
Get:7 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nvprof-12-8 12.8.90-1 [2,398 kB]
Get:8 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nvtx-12-8 12.8.90-1 [52.0 kB]
Get:9 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-sanitizer-12-8 12.8.93-1 [10.3 MB]
Get:10 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-command-line-tools-12-8 12.8.1-1 [2,542 B]
Get:11 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-cuxxfilt-12-8 12.8.90-1 [191 kB]         
Get:12 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-toolkit-config-common 12.8.90-1 [16.5 kB]
Get:13 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-toolkit-12-config-common 12.8.90-1 [16.5 kB]
Get:14 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-toolkit-12-8-config-common 12.8.90-1 [16.5 kB]
Get:15 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-cudart-12-8 12.8.90-1 [170 kB]
Get:16 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-driver-dev-12-8 12.8.90-1 [29.1 kB]
Get:17 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-cudart-dev-12-8 12.8.90-1 [1,257 kB]
Get:18 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nvvm-12-8 12.8.93-1 [43.8 MB]
Get:19 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-crt-12-8 12.8.93-1 [81.1 kB]
Get:21 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nvcc-12-8 12.8.93-1 [36.0 MB]
Get:22 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nvprune-12-8 12.8.90-1 [60.6 kB]
Get:23 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-compiler-12-8 12.8.1-1 [2,510 B]
Get:24 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-documentation-12-8 12.8.90-1 [49.9 kB]   
Get:20 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 ca-certificates-java all 20240118 [11.6 kB]
Get:25 http://cn.archive.ubuntu.com/ubuntu noble/main amd64 java-common all 0.75+exp1 [6,798 B]
Get:26 http://cn.archive.ubuntu.com/ubuntu noble-updates/main amd64 openjdk-21-jre-headless amd64 21.0.6+7-1~24.04.1 [46.4 MB]
Get:29 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nvrtc-12-8 12.8.93-1 [62.3 MB]
Get:30 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-opencl-12-8 12.8.90-1 [24.0 kB]
Get:27 http://cn.archive.ubuntu.com/ubuntu noble/main amd64 default-jre-headless amd64 2:1.21-75+exp1 [3,094 B]
Get:28 http://cn.archive.ubuntu.com/ubuntu noble-updates/main amd64 openjdk-21-jre amd64 21.0.6+7-1~24.04.1 [227 kB]
Get:31 http://cn.archive.ubuntu.com/ubuntu noble/main amd64 default-jre amd64 2:1.21-75+exp1 [922 B]
Get:32 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 fonts-dejavu-extra all 2.37-8 [1,947 kB]
Get:33 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libatk-wrapper-java all 0.40.0-3build2 [54.3 kB]
Get:34 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libatk-wrapper-java-jni amd64 0.40.0-3build2 [46.4 kB]
Get:35 file:/var/cuda-repo-ubuntu2404-12-8-local  libcublas-12-8 12.8.4.1-1 [464 MB]            
Get:36 file:/var/cuda-repo-ubuntu2404-12-8-local  libcufft-12-8 11.3.3.83-1 [151 MB]            
Get:37 file:/var/cuda-repo-ubuntu2404-12-8-local  libcufile-12-8 1.13.1.3-1 [886 kB]            
Get:38 file:/var/cuda-repo-ubuntu2404-12-8-local  libcurand-12-8 10.3.9.90-1 [44.8 MB]          
Get:39 file:/var/cuda-repo-ubuntu2404-12-8-local  libcusolver-12-8 11.7.3.90-1 [159 MB]         
Get:40 file:/var/cuda-repo-ubuntu2404-12-8-local  libcusparse-12-8 12.5.8.93-1 [164 MB]         
Get:41 file:/var/cuda-repo-ubuntu2404-12-8-local  libnpp-12-8 12.3.3.100-1 [131 MB]             
Get:42 file:/var/cuda-repo-ubuntu2404-12-8-local  libnvjitlink-12-8 12.8.93-1 [28.3 MB]         
Get:43 file:/var/cuda-repo-ubuntu2404-12-8-local  libnvfatbin-12-8 12.8.90-1 [743 kB]           
Get:44 file:/var/cuda-repo-ubuntu2404-12-8-local  libnvjpeg-12-8 12.3.5.92-1 [2,910 kB]         
Get:45 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-libraries-12-8 12.8.1-1 [2,610 B]        
Get:46 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-profiler-api-12-8 12.8.90-1 [18.6 kB]    
Get:47 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nvrtc-dev-12-8 12.8.93-1 [53.1 MB]       
Get:48 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-opencl-dev-12-8 12.8.90-1 [89.4 kB]      
Get:49 file:/var/cuda-repo-ubuntu2404-12-8-local  libcublas-dev-12-8 12.8.4.1-1 [487 MB]        
Get:50 file:/var/cuda-repo-ubuntu2404-12-8-local  libcufft-dev-12-8 11.3.3.83-1 [302 MB]        
Get:51 file:/var/cuda-repo-ubuntu2404-12-8-local  libcufile-dev-12-8 1.13.1.3-1 [2,679 kB]      
Get:52 file:/var/cuda-repo-ubuntu2404-12-8-local  libcurand-dev-12-8 10.3.9.90-1 [44.8 MB]      
Get:53 file:/var/cuda-repo-ubuntu2404-12-8-local  libcusolver-dev-12-8 11.7.3.90-1 [103 MB]     
Get:54 file:/var/cuda-repo-ubuntu2404-12-8-local  libcusparse-dev-12-8 12.5.8.93-1 [168 MB]     
Get:55 file:/var/cuda-repo-ubuntu2404-12-8-local  libnpp-dev-12-8 12.3.3.100-1 [130 MB]         
Get:56 file:/var/cuda-repo-ubuntu2404-12-8-local  libnvjitlink-dev-12-8 12.8.93-1 [26.1 MB]     
Get:57 file:/var/cuda-repo-ubuntu2404-12-8-local  libnvfatbin-dev-12-8 12.8.90-1 [619 kB]       
Get:58 file:/var/cuda-repo-ubuntu2404-12-8-local  libnvjpeg-dev-12-8 12.3.5.92-1 [2,612 kB]     
Get:59 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-libraries-dev-12-8 12.8.1-1 [2,654 B]    
Get:60 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nsight-12-8 12.8.90-1 [119 MB]           
Get:61 file:/var/cuda-repo-ubuntu2404-12-8-local  nsight-compute-2025.1.1 2025.1.1.2-1 [295 MB] 
Get:62 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nsight-compute-12-8 12.8.1-1 [4,056 B]   
Get:63 file:/var/cuda-repo-ubuntu2404-12-8-local  nsight-systems-2024.6.2 2024.6.2.225-246235244400v0 [374 MB]
Get:64 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nsight-systems-12-8 12.8.1-1 [3,352 B]   
Get:65 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nvml-dev-12-8 12.8.90-1 [127 kB]         
Get:66 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-nvvp-12-8 12.8.93-1 [115 MB]             
Get:67 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-visual-tools-12-8 12.8.1-1 [2,942 B]     
Get:68 file:/var/cuda-repo-ubuntu2404-12-8-local  gds-tools-12-8 1.13.1.3-1 [39.0 MB]           
Get:69 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-tools-12-8 12.8.1-1 [2,466 B]            
Get:70 file:/var/cuda-repo-ubuntu2404-12-8-local  cuda-toolkit-12-8 12.8.1-1 [3,360 B]          
Fetched 48.7 MB in 32s (1,504 kB/s)                                                             
Extracting templates from packages: 100%
Selecting previously unselected package ca-certificates-java.
(Reading database ... 160137 files and directories currently installed.)
Preparing to unpack .../00-ca-certificates-java_20240118_all.deb ...
Unpacking ca-certificates-java (20240118) ...
Selecting previously unselected package cuda-cccl-12-8.
Preparing to unpack .../01-cuda-cccl-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-cccl-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-cupti-12-8.
Preparing to unpack .../02-cuda-cupti-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-cupti-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-cupti-dev-12-8.
Preparing to unpack .../03-cuda-cupti-dev-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-cupti-dev-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-nvdisasm-12-8.
Preparing to unpack .../04-cuda-nvdisasm-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-nvdisasm-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-cuobjdump-12-8.
Preparing to unpack .../05-cuda-cuobjdump-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-cuobjdump-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-gdb-12-8.
Preparing to unpack .../06-cuda-gdb-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-gdb-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-nvprof-12-8.
Preparing to unpack .../07-cuda-nvprof-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-nvprof-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-nvtx-12-8.
Preparing to unpack .../08-cuda-nvtx-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-nvtx-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-sanitizer-12-8.
Preparing to unpack .../09-cuda-sanitizer-12-8_12.8.93-1_amd64.deb ...
Unpacking cuda-sanitizer-12-8 (12.8.93-1) ...
Selecting previously unselected package cuda-command-line-tools-12-8.
Preparing to unpack .../10-cuda-command-line-tools-12-8_12.8.1-1_amd64.deb ...
Unpacking cuda-command-line-tools-12-8 (12.8.1-1) ...
Selecting previously unselected package cuda-cuxxfilt-12-8.
Preparing to unpack .../11-cuda-cuxxfilt-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-cuxxfilt-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-toolkit-config-common.
Preparing to unpack .../12-cuda-toolkit-config-common_12.8.90-1_all.deb ...
Unpacking cuda-toolkit-config-common (12.8.90-1) ...
Selecting previously unselected package cuda-toolkit-12-config-common.
Preparing to unpack .../13-cuda-toolkit-12-config-common_12.8.90-1_all.deb ...
Unpacking cuda-toolkit-12-config-common (12.8.90-1) ...
Selecting previously unselected package cuda-toolkit-12-8-config-common.
Preparing to unpack .../14-cuda-toolkit-12-8-config-common_12.8.90-1_all.deb ...
Unpacking cuda-toolkit-12-8-config-common (12.8.90-1) ...
Selecting previously unselected package cuda-cudart-12-8.
Preparing to unpack .../15-cuda-cudart-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-cudart-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-driver-dev-12-8.
Preparing to unpack .../16-cuda-driver-dev-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-driver-dev-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-cudart-dev-12-8.
Preparing to unpack .../17-cuda-cudart-dev-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-cudart-dev-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-nvvm-12-8.
Preparing to unpack .../18-cuda-nvvm-12-8_12.8.93-1_amd64.deb ...
Unpacking cuda-nvvm-12-8 (12.8.93-1) ...
Selecting previously unselected package cuda-crt-12-8.
Preparing to unpack .../19-cuda-crt-12-8_12.8.93-1_amd64.deb ...
Unpacking cuda-crt-12-8 (12.8.93-1) ...
Selecting previously unselected package cuda-nvcc-12-8.
Preparing to unpack .../20-cuda-nvcc-12-8_12.8.93-1_amd64.deb ...
Unpacking cuda-nvcc-12-8 (12.8.93-1) ...
Selecting previously unselected package cuda-nvprune-12-8.
Preparing to unpack .../21-cuda-nvprune-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-nvprune-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-compiler-12-8.
Preparing to unpack .../22-cuda-compiler-12-8_12.8.1-1_amd64.deb ...
Unpacking cuda-compiler-12-8 (12.8.1-1) ...
Selecting previously unselected package cuda-documentation-12-8.
Preparing to unpack .../23-cuda-documentation-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-documentation-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-nvrtc-12-8.
Preparing to unpack .../24-cuda-nvrtc-12-8_12.8.93-1_amd64.deb ...
Unpacking cuda-nvrtc-12-8 (12.8.93-1) ...
Selecting previously unselected package cuda-opencl-12-8.
Preparing to unpack .../25-cuda-opencl-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-opencl-12-8 (12.8.90-1) ...
Selecting previously unselected package libcublas-12-8.
Preparing to unpack .../26-libcublas-12-8_12.8.4.1-1_amd64.deb ...
Unpacking libcublas-12-8 (12.8.4.1-1) ...
Selecting previously unselected package libcufft-12-8.
Preparing to unpack .../27-libcufft-12-8_11.3.3.83-1_amd64.deb ...
Unpacking libcufft-12-8 (11.3.3.83-1) ...
Selecting previously unselected package libcufile-12-8.
Preparing to unpack .../28-libcufile-12-8_1.13.1.3-1_amd64.deb ...
Unpacking libcufile-12-8 (1.13.1.3-1) ...
Selecting previously unselected package libcurand-12-8.
Preparing to unpack .../29-libcurand-12-8_10.3.9.90-1_amd64.deb ...
Unpacking libcurand-12-8 (10.3.9.90-1) ...
Selecting previously unselected package libcusolver-12-8.
Preparing to unpack .../30-libcusolver-12-8_11.7.3.90-1_amd64.deb ...
Unpacking libcusolver-12-8 (11.7.3.90-1) ...
Selecting previously unselected package libcusparse-12-8.
Preparing to unpack .../31-libcusparse-12-8_12.5.8.93-1_amd64.deb ...
Unpacking libcusparse-12-8 (12.5.8.93-1) ...
Selecting previously unselected package libnpp-12-8.
Preparing to unpack .../32-libnpp-12-8_12.3.3.100-1_amd64.deb ...
Unpacking libnpp-12-8 (12.3.3.100-1) ...
Selecting previously unselected package libnvjitlink-12-8.
Preparing to unpack .../33-libnvjitlink-12-8_12.8.93-1_amd64.deb ...
Unpacking libnvjitlink-12-8 (12.8.93-1) ...
Selecting previously unselected package libnvfatbin-12-8.
Preparing to unpack .../34-libnvfatbin-12-8_12.8.90-1_amd64.deb ...
Unpacking libnvfatbin-12-8 (12.8.90-1) ...
Selecting previously unselected package libnvjpeg-12-8.
Preparing to unpack .../35-libnvjpeg-12-8_12.3.5.92-1_amd64.deb ...
Unpacking libnvjpeg-12-8 (12.3.5.92-1) ...
Selecting previously unselected package cuda-libraries-12-8.
Preparing to unpack .../36-cuda-libraries-12-8_12.8.1-1_amd64.deb ...
Unpacking cuda-libraries-12-8 (12.8.1-1) ...
Selecting previously unselected package cuda-profiler-api-12-8.
Preparing to unpack .../37-cuda-profiler-api-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-profiler-api-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-nvrtc-dev-12-8.
Preparing to unpack .../38-cuda-nvrtc-dev-12-8_12.8.93-1_amd64.deb ...
Unpacking cuda-nvrtc-dev-12-8 (12.8.93-1) ...
Selecting previously unselected package cuda-opencl-dev-12-8.
Preparing to unpack .../39-cuda-opencl-dev-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-opencl-dev-12-8 (12.8.90-1) ...
Selecting previously unselected package libcublas-dev-12-8.
Preparing to unpack .../40-libcublas-dev-12-8_12.8.4.1-1_amd64.deb ...
Unpacking libcublas-dev-12-8 (12.8.4.1-1) ...
Selecting previously unselected package libcufft-dev-12-8.
Preparing to unpack .../41-libcufft-dev-12-8_11.3.3.83-1_amd64.deb ...
Unpacking libcufft-dev-12-8 (11.3.3.83-1) ...
Selecting previously unselected package libcufile-dev-12-8.
Preparing to unpack .../42-libcufile-dev-12-8_1.13.1.3-1_amd64.deb ...
Unpacking libcufile-dev-12-8 (1.13.1.3-1) ...
Selecting previously unselected package libcurand-dev-12-8.
Preparing to unpack .../43-libcurand-dev-12-8_10.3.9.90-1_amd64.deb ...
Unpacking libcurand-dev-12-8 (10.3.9.90-1) ...
Selecting previously unselected package libcusolver-dev-12-8.
Preparing to unpack .../44-libcusolver-dev-12-8_11.7.3.90-1_amd64.deb ...
Unpacking libcusolver-dev-12-8 (11.7.3.90-1) ...
Selecting previously unselected package libcusparse-dev-12-8.
Preparing to unpack .../45-libcusparse-dev-12-8_12.5.8.93-1_amd64.deb ...
Unpacking libcusparse-dev-12-8 (12.5.8.93-1) ...
Selecting previously unselected package libnpp-dev-12-8.
Preparing to unpack .../46-libnpp-dev-12-8_12.3.3.100-1_amd64.deb ...
Unpacking libnpp-dev-12-8 (12.3.3.100-1) ...
Selecting previously unselected package libnvjitlink-dev-12-8.
Preparing to unpack .../47-libnvjitlink-dev-12-8_12.8.93-1_amd64.deb ...
Unpacking libnvjitlink-dev-12-8 (12.8.93-1) ...
Selecting previously unselected package libnvfatbin-dev-12-8.
Preparing to unpack .../48-libnvfatbin-dev-12-8_12.8.90-1_amd64.deb ...
Unpacking libnvfatbin-dev-12-8 (12.8.90-1) ...
Selecting previously unselected package libnvjpeg-dev-12-8.
Preparing to unpack .../49-libnvjpeg-dev-12-8_12.3.5.92-1_amd64.deb ...
Unpacking libnvjpeg-dev-12-8 (12.3.5.92-1) ...
Selecting previously unselected package cuda-libraries-dev-12-8.
Preparing to unpack .../50-cuda-libraries-dev-12-8_12.8.1-1_amd64.deb ...
Unpacking cuda-libraries-dev-12-8 (12.8.1-1) ...
Selecting previously unselected package java-common.
Preparing to unpack .../51-java-common_0.75+exp1_all.deb ...
Unpacking java-common (0.75+exp1) ...
Selecting previously unselected package openjdk-21-jre-headless:amd64.
Preparing to unpack .../52-openjdk-21-jre-headless_21.0.6+7-1~24.04.1_amd64.deb ...
Unpacking openjdk-21-jre-headless:amd64 (21.0.6+7-1~24.04.1) ...
Selecting previously unselected package default-jre-headless.
Preparing to unpack .../53-default-jre-headless_2%3a1.21-75+exp1_amd64.deb ...
Unpacking default-jre-headless (2:1.21-75+exp1) ...
Selecting previously unselected package openjdk-21-jre:amd64.
Preparing to unpack .../54-openjdk-21-jre_21.0.6+7-1~24.04.1_amd64.deb ...
Unpacking openjdk-21-jre:amd64 (21.0.6+7-1~24.04.1) ...
Selecting previously unselected package default-jre.
Preparing to unpack .../55-default-jre_2%3a1.21-75+exp1_amd64.deb ...
Unpacking default-jre (2:1.21-75+exp1) ...
Selecting previously unselected package cuda-nsight-12-8.
Preparing to unpack .../56-cuda-nsight-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-nsight-12-8 (12.8.90-1) ...
Selecting previously unselected package nsight-compute-2025.1.1.
Preparing to unpack .../57-nsight-compute-2025.1.1_2025.1.1.2-1_amd64.deb ...
Unpacking nsight-compute-2025.1.1 (2025.1.1.2-1) ...
Selecting previously unselected package cuda-nsight-compute-12-8.
Preparing to unpack .../58-cuda-nsight-compute-12-8_12.8.1-1_amd64.deb ...
Unpacking cuda-nsight-compute-12-8 (12.8.1-1) ...
Selecting previously unselected package nsight-systems-2024.6.2.
Preparing to unpack .../59-nsight-systems-2024.6.2_2024.6.2.225-1_amd64.deb ...
Unpacking nsight-systems-2024.6.2 (2024.6.2.225-246235244400v0) ...
Selecting previously unselected package cuda-nsight-systems-12-8.
Preparing to unpack .../60-cuda-nsight-systems-12-8_12.8.1-1_amd64.deb ...
Unpacking cuda-nsight-systems-12-8 (12.8.1-1) ...
Selecting previously unselected package cuda-nvml-dev-12-8.
Preparing to unpack .../61-cuda-nvml-dev-12-8_12.8.90-1_amd64.deb ...
Unpacking cuda-nvml-dev-12-8 (12.8.90-1) ...
Selecting previously unselected package cuda-nvvp-12-8.
Preparing to unpack .../62-cuda-nvvp-12-8_12.8.93-1_amd64.deb ...
Unpacking cuda-nvvp-12-8 (12.8.93-1) ...
Selecting previously unselected package cuda-visual-tools-12-8.
Preparing to unpack .../63-cuda-visual-tools-12-8_12.8.1-1_amd64.deb ...
Unpacking cuda-visual-tools-12-8 (12.8.1-1) ...
Selecting previously unselected package gds-tools-12-8.
Preparing to unpack .../64-gds-tools-12-8_1.13.1.3-1_amd64.deb ...
Unpacking gds-tools-12-8 (1.13.1.3-1) ...
Selecting previously unselected package cuda-tools-12-8.
Preparing to unpack .../65-cuda-tools-12-8_12.8.1-1_amd64.deb ...
Unpacking cuda-tools-12-8 (12.8.1-1) ...
Selecting previously unselected package cuda-toolkit-12-8.
Preparing to unpack .../66-cuda-toolkit-12-8_12.8.1-1_amd64.deb ...
Unpacking cuda-toolkit-12-8 (12.8.1-1) ...
Selecting previously unselected package fonts-dejavu-extra.
Preparing to unpack .../67-fonts-dejavu-extra_2.37-8_all.deb ...
Unpacking fonts-dejavu-extra (2.37-8) ...
Selecting previously unselected package libatk-wrapper-java.
Preparing to unpack .../68-libatk-wrapper-java_0.40.0-3build2_all.deb ...
Unpacking libatk-wrapper-java (0.40.0-3build2) ...
Selecting previously unselected package libatk-wrapper-java-jni:amd64.
Preparing to unpack .../69-libatk-wrapper-java-jni_0.40.0-3build2_amd64.deb ...
Unpacking libatk-wrapper-java-jni:amd64 (0.40.0-3build2) ...
Setting up cuda-toolkit-config-common (12.8.90-1) ...
Setting up cuda-nvprof-12-8 (12.8.90-1) ...
Setting up java-common (0.75+exp1) ...
Setting up cuda-cuobjdump-12-8 (12.8.90-1) ...
Setting up cuda-nvrtc-12-8 (12.8.93-1) ...
Setting up cuda-sanitizer-12-8 (12.8.93-1) ...
Setting up cuda-nvvm-12-8 (12.8.93-1) ...
Setting up cuda-nvprune-12-8 (12.8.90-1) ...
Setting up cuda-cupti-12-8 (12.8.90-1) ...
Setting up cuda-nvml-dev-12-8 (12.8.90-1) ...
Setting up cuda-toolkit-12-8-config-common (12.8.90-1) ...
Setting alternatives
update-alternatives: using /usr/local/cuda-12.8 to provide /usr/local/cuda (cuda) in auto mode
update-alternatives: using /usr/local/cuda-12.8 to provide /usr/local/cuda-12 (cuda-12) in auto mode
Setting up cuda-nvrtc-dev-12-8 (12.8.93-1) ...
Setting up cuda-driver-dev-12-8 (12.8.90-1) ...
Setting up nsight-systems-2024.6.2 (2024.6.2.225-246235244400v0) ...
update-alternatives: using /opt/nvidia/nsight-systems/2024.6.2/target-linux-x64/nsys to provide /usr/local/bin/nsys (nsys) in auto mode
update-alternatives: using /opt/nvidia/nsight-systems/2024.6.2/host-linux-x64/nsys-ui to provide /usr/local/bin/nsys-ui (nsys-ui) in auto mode
Setting up cuda-documentation-12-8 (12.8.90-1) ...
Setting up cuda-profiler-api-12-8 (12.8.90-1) ...
Setting up cuda-nvdisasm-12-8 (12.8.90-1) ...
Setting up cuda-nsight-systems-12-8 (12.8.1-1) ...
Setting up fonts-dejavu-extra (2.37-8) ...
Setting up cuda-cuxxfilt-12-8 (12.8.90-1) ...
Setting up cuda-nvtx-12-8 (12.8.90-1) ...
Setting up libatk-wrapper-java (0.40.0-3build2) ...
Setting up ca-certificates-java (20240118) ...
No JRE found. Skipping Java certificates setup.
Setting up cuda-cccl-12-8 (12.8.90-1) ...
Setting up cuda-toolkit-12-config-common (12.8.90-1) ...
Setting up cuda-cudart-12-8 (12.8.90-1) ...
Setting up cuda-cupti-dev-12-8 (12.8.90-1) ...
Setting up cuda-cudart-dev-12-8 (12.8.90-1) ...
Setting up gds-tools-12-8 (1.13.1.3-1) ...
Setting up nsight-compute-2025.1.1 (2025.1.1.2-1) ...
Setting up cuda-crt-12-8 (12.8.93-1) ...
Setting up libcufft-12-8 (11.3.3.83-1) ...
Setting up libcublas-12-8 (12.8.4.1-1) ...
Setting up libcusparse-12-8 (12.5.8.93-1) ...
Setting up openjdk-21-jre-headless:amd64 (21.0.6+7-1~24.04.1) ...
update-alternatives: using /usr/lib/jvm/java-21-openjdk-amd64/bin/java to provide /usr/bin/java (java) in auto mode
update-alternatives: using /usr/lib/jvm/java-21-openjdk-amd64/bin/jpackage to provide /usr/bin/jpackage (jpackage) in auto mode
update-alternatives: using /usr/lib/jvm/java-21-openjdk-amd64/bin/keytool to provide /usr/bin/keytool (keytool) in auto mode
update-alternatives: using /usr/lib/jvm/java-21-openjdk-amd64/bin/rmiregistry to provide /usr/bin/rmiregistry (rmiregistry) in auto mode
update-alternatives: using /usr/lib/jvm/java-21-openjdk-amd64/lib/jexec to provide /usr/bin/jexec (jexec) in auto mode
Setting up libnvjitlink-12-8 (12.8.93-1) ...
Setting up libcurand-12-8 (10.3.9.90-1) ...
Setting up libcufft-dev-12-8 (11.3.3.83-1) ...
Setting up libnpp-12-8 (12.3.3.100-1) ...
Setting up libnpp-dev-12-8 (12.3.3.100-1) ...
Setting up cuda-opencl-12-8 (12.8.90-1) ...
Setting up libatk-wrapper-java-jni:amd64 (0.40.0-3build2) ...
Setting up cuda-gdb-12-8 (12.8.90-1) ...
Setting up libnvjitlink-dev-12-8 (12.8.93-1) ...
Setting up libcusolver-12-8 (11.7.3.90-1) ...
Setting up libnvfatbin-12-8 (12.8.90-1) ...
Setting up libnvjpeg-12-8 (12.3.5.92-1) ...
Setting up libcurand-dev-12-8 (10.3.9.90-1) ...
Setting up libcusolver-dev-12-8 (11.7.3.90-1) ...
Setting up cuda-nsight-compute-12-8 (12.8.1-1) ...
Setting up libcufile-12-8 (1.13.1.3-1) ...
Setting alternatives
update-alternatives: using /usr/local/cuda-12.8/gds/cufile.json to provide /etc/cufile.json (cufile.json) in auto mode
Setting up libcusparse-dev-12-8 (12.5.8.93-1) ...
Setting up libnvfatbin-dev-12-8 (12.8.90-1) ...
Setting up libcublas-dev-12-8 (12.8.4.1-1) ...
Setting up cuda-nvcc-12-8 (12.8.93-1) ...
Setting up libnvjpeg-dev-12-8 (12.3.5.92-1) ...
Setting up libcufile-dev-12-8 (1.13.1.3-1) ...
Setting up cuda-opencl-dev-12-8 (12.8.90-1) ...
Setting up cuda-command-line-tools-12-8 (12.8.1-1) ...
Setting up cuda-compiler-12-8 (12.8.1-1) ...
Setting up cuda-libraries-dev-12-8 (12.8.1-1) ...
Setting up cuda-libraries-12-8 (12.8.1-1) ...
Processing triggers for fontconfig (2.15.0-1.1ubuntu2) ...
Processing triggers for desktop-file-utils (0.27-2build1) ...
Processing triggers for hicolor-icon-theme (0.17-2) ...
Processing triggers for gnome-menus (3.36.0-1.1ubuntu3) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for ca-certificates-java (20240118) ...
Adding debian:ACCVRAIZ1.pem
Adding debian:AC_RAIZ_FNMT-RCM.pem
Adding debian:AC_RAIZ_FNMT-RCM_SERVIDORES_SEGUROS.pem
Adding debian:Actalis_Authentication_Root_CA.pem
Adding debian:AffirmTrust_Commercial.pem
Adding debian:AffirmTrust_Networking.pem
Adding debian:AffirmTrust_Premium_ECC.pem
Adding debian:AffirmTrust_Premium.pem
Adding debian:Amazon_Root_CA_1.pem
Adding debian:Amazon_Root_CA_2.pem
Adding debian:Amazon_Root_CA_3.pem
Adding debian:Amazon_Root_CA_4.pem
Adding debian:ANF_Secure_Server_Root_CA.pem
Adding debian:Atos_TrustedRoot_2011.pem
Adding debian:Atos_TrustedRoot_Root_CA_ECC_TLS_2021.pem
Adding debian:Atos_TrustedRoot_Root_CA_RSA_TLS_2021.pem
Adding debian:Autoridad_de_Certificacion_Firmaprofesional_CIF_A62634068.pem
Adding debian:Baltimore_CyberTrust_Root.pem
Adding debian:BJCA_Global_Root_CA1.pem
Adding debian:BJCA_Global_Root_CA2.pem
Adding debian:Buypass_Class_2_Root_CA.pem
Adding debian:Buypass_Class_3_Root_CA.pem
Adding debian:CA_Disig_Root_R2.pem
Adding debian:Certainly_Root_E1.pem
Adding debian:Certainly_Root_R1.pem
Adding debian:Certigna.pem
Adding debian:Certigna_Root_CA.pem
Adding debian:certSIGN_Root_CA_G2.pem
Adding debian:certSIGN_ROOT_CA.pem
Adding debian:Certum_EC-384_CA.pem
Adding debian:Certum_Trusted_Network_CA_2.pem
Adding debian:Certum_Trusted_Network_CA.pem
Adding debian:Certum_Trusted_Root_CA.pem
Adding debian:CFCA_EV_ROOT.pem
Adding debian:CommScope_Public_Trust_ECC_Root-01.pem
Adding debian:CommScope_Public_Trust_ECC_Root-02.pem
Adding debian:CommScope_Public_Trust_RSA_Root-01.pem
Adding debian:CommScope_Public_Trust_RSA_Root-02.pem
Adding debian:Comodo_AAA_Services_root.pem
Adding debian:COMODO_Certification_Authority.pem
Adding debian:COMODO_ECC_Certification_Authority.pem
Adding debian:COMODO_RSA_Certification_Authority.pem
Adding debian:DigiCert_Assured_ID_Root_CA.pem
Adding debian:DigiCert_Assured_ID_Root_G2.pem
Adding debian:DigiCert_Assured_ID_Root_G3.pem
Adding debian:DigiCert_Global_Root_CA.pem
Adding debian:DigiCert_Global_Root_G2.pem
Adding debian:DigiCert_Global_Root_G3.pem
Adding debian:DigiCert_High_Assurance_EV_Root_CA.pem
Adding debian:DigiCert_TLS_ECC_P384_Root_G5.pem
Adding debian:DigiCert_TLS_RSA4096_Root_G5.pem
Adding debian:DigiCert_Trusted_Root_G4.pem
Adding debian:D-TRUST_BR_Root_CA_1_2020.pem
Adding debian:D-TRUST_EV_Root_CA_1_2020.pem
Adding debian:D-TRUST_Root_Class_3_CA_2_2009.pem
Adding debian:D-TRUST_Root_Class_3_CA_2_EV_2009.pem
Adding debian:emSign_ECC_Root_CA_-_C3.pem
Adding debian:emSign_ECC_Root_CA_-_G3.pem
Adding debian:emSign_Root_CA_-_C1.pem
Adding debian:emSign_Root_CA_-_G1.pem
Adding debian:Entrust.net_Premium_2048_Secure_Server_CA.pem
Adding debian:Entrust_Root_Certification_Authority_-_EC1.pem
Adding debian:Entrust_Root_Certification_Authority_-_G2.pem
Adding debian:Entrust_Root_Certification_Authority_-_G4.pem
Adding debian:Entrust_Root_Certification_Authority.pem
Adding debian:ePKI_Root_Certification_Authority.pem
Adding debian:e-Szigno_Root_CA_2017.pem
Adding debian:GDCA_TrustAUTH_R5_ROOT.pem
Adding debian:GlobalSign_ECC_Root_CA_-_R4.pem
Adding debian:GlobalSign_ECC_Root_CA_-_R5.pem
Adding debian:GlobalSign_Root_CA.pem
Adding debian:GlobalSign_Root_CA_-_R3.pem
Adding debian:GlobalSign_Root_CA_-_R6.pem
Adding debian:GlobalSign_Root_E46.pem
Adding debian:GlobalSign_Root_R46.pem
Adding debian:GLOBALTRUST_2020.pem
Adding debian:Go_Daddy_Class_2_CA.pem
Adding debian:Go_Daddy_Root_Certificate_Authority_-_G2.pem
Adding debian:GTS_Root_R1.pem
Adding debian:GTS_Root_R2.pem
Adding debian:GTS_Root_R3.pem
Adding debian:GTS_Root_R4.pem
Adding debian:HARICA_TLS_ECC_Root_CA_2021.pem
Adding debian:HARICA_TLS_RSA_Root_CA_2021.pem
Adding debian:Hellenic_Academic_and_Research_Institutions_ECC_RootCA_2015.pem
Adding debian:Hellenic_Academic_and_Research_Institutions_RootCA_2015.pem
Adding debian:HiPKI_Root_CA_-_G1.pem
Adding debian:Hongkong_Post_Root_CA_3.pem
Adding debian:IdenTrust_Commercial_Root_CA_1.pem
Adding debian:IdenTrust_Public_Sector_Root_CA_1.pem
Adding debian:ISRG_Root_X1.pem
Adding debian:ISRG_Root_X2.pem
Adding debian:Izenpe.com.pem
Adding debian:Microsec_e-Szigno_Root_CA_2009.pem
Adding debian:Microsoft_ECC_Root_Certificate_Authority_2017.pem
Adding debian:Microsoft_RSA_Root_Certificate_Authority_2017.pem
Adding debian:NAVER_Global_Root_Certification_Authority.pem
Adding debian:NetLock_Arany_=Class_Gold=_Főtanúsítvány.pem
Adding debian:OISTE_WISeKey_Global_Root_GB_CA.pem
Adding debian:OISTE_WISeKey_Global_Root_GC_CA.pem
Adding debian:QuoVadis_Root_CA_1_G3.pem
Adding debian:QuoVadis_Root_CA_2_G3.pem
Adding debian:QuoVadis_Root_CA_2.pem
Adding debian:QuoVadis_Root_CA_3_G3.pem
Adding debian:QuoVadis_Root_CA_3.pem
Adding debian:Sectigo_Public_Server_Authentication_Root_E46.pem
Adding debian:Sectigo_Public_Server_Authentication_Root_R46.pem
Adding debian:Secure_Global_CA.pem
Adding debian:SecureSign_RootCA11.pem
Adding debian:SecureTrust_CA.pem
Adding debian:Security_Communication_ECC_RootCA1.pem
Adding debian:Security_Communication_RootCA2.pem
Adding debian:Security_Communication_RootCA3.pem
Adding debian:Security_Communication_Root_CA.pem
Adding debian:SSL.com_EV_Root_Certification_Authority_ECC.pem
Adding debian:SSL.com_EV_Root_Certification_Authority_RSA_R2.pem
Adding debian:SSL.com_Root_Certification_Authority_ECC.pem
Adding debian:SSL.com_Root_Certification_Authority_RSA.pem
Adding debian:SSL.com_TLS_ECC_Root_CA_2022.pem
Adding debian:SSL.com_TLS_RSA_Root_CA_2022.pem
Adding debian:Starfield_Class_2_CA.pem
Adding debian:Starfield_Root_Certificate_Authority_-_G2.pem
Adding debian:Starfield_Services_Root_Certificate_Authority_-_G2.pem
Adding debian:SwissSign_Gold_CA_-_G2.pem
Adding debian:SwissSign_Silver_CA_-_G2.pem
Adding debian:SZAFIR_ROOT_CA2.pem
Adding debian:Telia_Root_CA_v2.pem
Adding debian:TeliaSonera_Root_CA_v1.pem
Adding debian:TrustAsia_Global_Root_CA_G3.pem
Adding debian:TrustAsia_Global_Root_CA_G4.pem
Adding debian:Trustwave_Global_Certification_Authority.pem
Adding debian:Trustwave_Global_ECC_P256_Certification_Authority.pem
Adding debian:Trustwave_Global_ECC_P384_Certification_Authority.pem
Adding debian:T-TeleSec_GlobalRoot_Class_2.pem
Adding debian:T-TeleSec_GlobalRoot_Class_3.pem
Adding debian:TUBITAK_Kamu_SM_SSL_Kok_Sertifikasi_-_Surum_1.pem
Adding debian:TunTrust_Root_CA.pem
Adding debian:TWCA_Global_Root_CA.pem
Adding debian:TWCA_Root_Certification_Authority.pem
Adding debian:UCA_Extended_Validation_Root.pem
Adding debian:UCA_Global_G2_Root.pem
Adding debian:USERTrust_ECC_Certification_Authority.pem
Adding debian:USERTrust_RSA_Certification_Authority.pem
Adding debian:vTrus_ECC_Root_CA.pem
Adding debian:vTrus_Root_CA.pem
Adding debian:XRamp_Global_CA_Root.pem
done.
Setting up default-jre-headless (2:1.21-75+exp1) ...
Setting up openjdk-21-jre:amd64 (21.0.6+7-1~24.04.1) ...
Setting up default-jre (2:1.21-75+exp1) ...
Setting up cuda-nvvp-12-8 (12.8.93-1) ...
Setting up cuda-nsight-12-8 (12.8.90-1) ...
Setting up cuda-visual-tools-12-8 (12.8.1-1) ...
Setting up cuda-tools-12-8 (12.8.1-1) ...
Setting up cuda-toolkit-12-8 (12.8.1-1) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
eric@fantasy:~/Downloads$ 
```

安装命令参考
```
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/cuda-ubuntu2404.pin
sudo mv cuda-ubuntu2404.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/12.8.1/local_installers/cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb
sudo cp /var/cuda-repo-ubuntu2404-12-8-local/cuda-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install cuda-toolkit-12-8
```

```
code ~/.bashrc
```

通常做法
```
export PATH=/usr/local/cuda-12.8/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda-12.8/lib64:$LD_LIBRARY_PATH
```

更好的做法
```
export PATH=/usr/local/cuda-12.8/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-12.8/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

lspci | grep -E "VGA|3D"
```
lspci | grep -E "VGA|3D"
eric@fantasy:~/work/tmp$ lspci | grep -E "VGA|3D"
04:00.0 VGA compatible controller: NVIDIA Corporation GM107 [GeForce GTX 750 Ti] (rev a2)
```


```
eric@fantasy:~/work/tmp$ glxinfo | grep "OpenGL version"
Command 'glxinfo' not found, but can be installed with:
sudo apt install mesa-utils
eric@fantasy:~/work/tmp$ sudo apt-get install -y mesa-utils
[sudo] password for eric: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  mesa-utils-bin
The following NEW packages will be installed:
  mesa-utils mesa-utils-bin
0 upgraded, 2 newly installed, 0 to remove and 6 not upgraded.
Need to get 1,216 kB of archives.
After this operation, 3,088 kB of additional disk space will be used.
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 mesa-utils-bin amd64 9.0.0-2 [164 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 mesa-utils amd64 9.0.0-2 [1,051 kB]
Fetched 1,216 kB in 5s (227 kB/s)     
Selecting previously unselected package mesa-utils-bin:amd64.
(Reading database ... 212230 files and directories currently installed.)
Preparing to unpack .../mesa-utils-bin_9.0.0-2_amd64.deb ...
Unpacking mesa-utils-bin:amd64 (9.0.0-2) ...
Selecting previously unselected package mesa-utils.
Preparing to unpack .../mesa-utils_9.0.0-2_amd64.deb ...
Unpacking mesa-utils (9.0.0-2) ...
Setting up mesa-utils-bin:amd64 (9.0.0-2) ...
Setting up mesa-utils (9.0.0-2) ...
Processing triggers for man-db (2.12.0-4build2) ...
eric@fantasy:~/work/tmp$ vulkaninfo | grep apiVersion
Command 'vulkaninfo' not found, but can be installed with:
sudo apt install vulkan-tools
```

sudo apt install vulkan-tools
```
eric@fantasy:~/work/tmp$ sudo apt install vulkan-tools
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following NEW packages will be installed:
  vulkan-tools
0 upgraded, 1 newly installed, 0 to remove and 6 not upgraded.
Need to get 298 kB of archives.
After this operation, 1,609 kB of additional disk space will be used.
Get:1 http://cn.archive.ubuntu.com/ubuntu noble/universe amd64 vulkan-tools amd64 1.3.275.0+dfsg1-1 [298 kB]
Fetched 298 kB in 2s (170 kB/s)      
Selecting previously unselected package vulkan-tools.
(Reading database ... 212291 files and directories currently installed.)
Preparing to unpack .../vulkan-tools_1.3.275.0+dfsg1-1_amd64.deb ...
Unpacking vulkan-tools (1.3.275.0+dfsg1-1) ...
Setting up vulkan-tools (1.3.275.0+dfsg1-1) ...
Processing triggers for man-db (2.12.0-4build2) ...
eric@fantasy:~/work/tmp$ vulkaninfo | grep apiVersion
	apiVersion        = 1.3.289 (4206881)
```