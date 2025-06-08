# openpmix

## Link

- [openpmix github](https://github.com/openpmix/openpmix).

## Ubuntu

```
wget https://github.com/openpmix/prrte/releases/download/v4.0.0/prrte-4.0.0.tar.gz
```

```
tar -xzf pmix-6.0.0.tar.gz
tar -xzvf pmix-6.0.0.tar.gz 
cd pmix-6.0.0
```

```
./configure --prefix=/usr/local/openpmix
```

### sudo apt-get install -y libhwloc-dev
```
eric@fantasy:~/work/openpmix_work/pmix-6.0.0$ sudo apt-get install -y libhwloc-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libltdl-dev libnuma-dev
Suggested packages:
  libtool-doc
The following NEW packages will be installed:
  libhwloc-dev libltdl-dev libnuma-dev
0 upgraded, 3 newly installed, 0 to remove and 6 not upgraded.
Need to get 473 kB of archives.
After this operation, 2,340 kB of additional disk space will be used.
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libltdl-dev amd64 2.4.7-7build1 [168 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libnuma-dev amd64 2.0.18-1build1 [37.0 kB]
Get:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libhwloc-dev amd64 2.10.0-1build1 [268 kB]
Fetched 473 kB in 1s (483 kB/s)       
Selecting previously unselected package libltdl-dev:amd64.
(Reading database ... 214086 files and directories currently installed.)
Preparing to unpack .../libltdl-dev_2.4.7-7build1_amd64.deb ...
Unpacking libltdl-dev:amd64 (2.4.7-7build1) ...
Selecting previously unselected package libnuma-dev:amd64.
Preparing to unpack .../libnuma-dev_2.0.18-1build1_amd64.deb ...
Unpacking libnuma-dev:amd64 (2.0.18-1build1) ...
Selecting previously unselected package libhwloc-dev:amd64.
Preparing to unpack .../libhwloc-dev_2.10.0-1build1_amd64.deb ...
Unpacking libhwloc-dev:amd64 (2.10.0-1build1) ...
Setting up libnuma-dev:amd64 (2.0.18-1build1) ...
Setting up libltdl-dev:amd64 (2.4.7-7build1) ...
Setting up libhwloc-dev:amd64 (2.10.0-1build1) ...
Processing triggers for man-db (2.12.0-4build2) ...
```

```
PMIx configuration:
-----------------------
Version: 6.0.0
PMIx Standard Version: 4.1
PMIx Standard Stable ABI Version(s): 0.0
PMIx Standard Provisional ABI Version(s): 0.0
Debug build: no
Devel check enabled: no
Platform file: (none)

Miscellaneous
-----------------------
Atomics: GCC built-in style atomics
HTML docs and man pages: installing packaged docs
 
Required Packages
-----------------------
HWLOC: yes (pkg-config: default search paths)
Libevent: yes (default search paths)
 
External Packages
-----------------------
Curl: no (explicitly disabled)
Jansson: no (explicitly disabled)
munge: no (not found)
ZLIB: yes (pkg-config: default search paths)
ZLIBNG: no (not found)
 
GDS
-----------------------
Hash: yes
Shared-Memory: yes
 
Transports
-----------------------
Simptest: no
```

```
make -j4
sudo make install
```

```
echo $PATH
echo $LD_LIBRARY_PATH
```

```
export PATH=/usr/local/openpmix/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/openpmix/lib:$LD_LIBRARY_PATH
```

```
export PATH=/usr/local/openpmix/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/openpmix/lib${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

```
eric@fantasy:~/work/openpmix_work/pmix-6.0.0$ export PATH=/usr/local/openpmix/bin${PATH:+:${PATH}}
eric@fantasy:~/work/openpmix_work/pmix-6.0.0$ export LD_LIBRARY_PATH=/usr/local/openpmix/lib${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
eric@fantasy:~/work/openpmix_work/pmix-6.0.0$ source ~/.bashrc
eric@fantasy:~/work/openpmix_work/pmix-6.0.0$ echo $PATH
/opt/hdfview/bin:/usr/local/cuda-12.8/bin:/usr/local/openpmix/bin:/home/eric/bin:/opt/hdfview/bin:/usr/local/cuda-12.8/bin:/home/eric/software/modules/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
eric@fantasy:~/work/openpmix_work/pmix-6.0.0$ echo $LD_LIBRARY_PATH
/opt/hdfview/lib:/usr/local/cuda-12.8/lib64:/usr/local/openpmix/lib:/opt/hdfview/lib:/usr/local/cuda-12.8/lib64
```

```
eric@fantasy:~/work/openpmix_work/pmix-6.0.0$ lstopo
Machine (47GB total)
  Package L#0
    NUMANode L#0 (P#0 47GB)
    L3 L#0 (25MB)
      L2 L#0 (256KB) + L1d L#0 (32KB) + L1i L#0 (32KB) + Core L#0
        PU L#0 (P#0)
        PU L#1 (P#10)
      L2 L#1 (256KB) + L1d L#1 (32KB) + L1i L#1 (32KB) + Core L#1
        PU L#2 (P#1)
        PU L#3 (P#11)
      L2 L#2 (256KB) + L1d L#2 (32KB) + L1i L#2 (32KB) + Core L#2
        PU L#4 (P#2)
        PU L#5 (P#12)
      L2 L#3 (256KB) + L1d L#3 (32KB) + L1i L#3 (32KB) + Core L#3
        PU L#6 (P#3)
        PU L#7 (P#13)
      L2 L#4 (256KB) + L1d L#4 (32KB) + L1i L#4 (32KB) + Core L#4
        PU L#8 (P#4)
        PU L#9 (P#14)
      L2 L#5 (256KB) + L1d L#5 (32KB) + L1i L#5 (32KB) + Core L#5
        PU L#10 (P#5)
        PU L#11 (P#15)
      L2 L#6 (256KB) + L1d L#6 (32KB) + L1i L#6 (32KB) + Core L#6
        PU L#12 (P#6)
        PU L#13 (P#16)
      L2 L#7 (256KB) + L1d L#7 (32KB) + L1i L#7 (32KB) + Core L#7
        PU L#14 (P#7)
        PU L#15 (P#17)
      L2 L#8 (256KB) + L1d L#8 (32KB) + L1i L#8 (32KB) + Core L#8
        PU L#16 (P#8)
        PU L#17 (P#18)
      L2 L#9 (256KB) + L1d L#9 (32KB) + L1i L#9 (32KB) + Core L#9
        PU L#18 (P#9)
        PU L#19 (P#19)
  HostBridge
    PCIBridge
      PCI 04:00.0 (VGA)
    PCIBridge
      PCI 07:00.0 (Ethernet)
        Net "enp7s0"
    PCI 00:1f.2 (SATA)
      Block(Disk) "sdb"
      Block(Disk) "sda"
```

### pmix_info
```
eric@fantasy:~/work/openpmix_work/pmix-6.0.0$ pmix_info
Command 'pmix_info' not found, but can be installed with:
sudo apt install libpmix-bin
```

### sudo apt-get install libpmix-bin
```
eric@fantasy:~/work/openpmix_work/pmix-6.0.0$ sudo apt-get install libpmix-bin
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libpmix-dev
The following NEW packages will be installed:
  libpmix-bin libpmix-dev
0 upgraded, 2 newly installed, 0 to remove and 6 not upgraded.
Need to get 4,059 kB of archives.
After this operation, 11.6 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libpmix-bin amd64 5.0.1-4.1build1 [41.5 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 libpmix-dev amd64 5.0.1-4.1build1 [4,018 kB]
Fetched 4,059 kB in 1s (3,499 kB/s)    
Selecting previously unselected package libpmix-bin.
(Reading database ... 214211 files and directories currently installed.)
Preparing to unpack .../libpmix-bin_5.0.1-4.1build1_amd64.deb ...
Unpacking libpmix-bin (5.0.1-4.1build1) ...
Selecting previously unselected package libpmix-dev:amd64.
Preparing to unpack .../libpmix-dev_5.0.1-4.1build1_amd64.deb ...
Unpacking libpmix-dev:amd64 (5.0.1-4.1build1) ...
Setting up libpmix-bin (5.0.1-4.1build1) ...
Setting up libpmix-dev:amd64 (5.0.1-4.1build1) ...
Processing triggers for man-db (2.12.0-4build2) ...
```

```
sudo apt-get install libpmix-bin
```

### sudo apt remove libpmix-bin
```
eric@fantasy:~$ sudo apt remove libpmix-bin
[sudo] password for eric: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following package was automatically installed and is no longer required:
  libpmix-dev
Use 'sudo apt autoremove' to remove it.
The following packages will be REMOVED:
  libpmix-bin
0 upgraded, 0 newly installed, 1 to remove and 6 not upgraded.
After this operation, 242 kB disk space will be freed.
Do you want to continue? [Y/n] y
(Reading database ... 214638 files and directories currently installed.)
Removing libpmix-bin (5.0.1-4.1build1) ...
```

### sudo apt purge libpmix-bin
```
eric@fantasy:~$ sudo apt purge libpmix-bin
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Package 'libpmix-bin' is not installed, so not removed
The following package was automatically installed and is no longer required:
  libpmix-dev
Use 'sudo apt autoremove' to remove it.
0 upgraded, 0 newly installed, 0 to remove and 6 not upgraded.
```

### sudo apt autoremove
```
eric@fantasy:~$ sudo apt autoremove
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages will be REMOVED:
  libpmix-dev
0 upgraded, 0 newly installed, 1 to remove and 6 not upgraded.
After this operation, 11.3 MB disk space will be freed.
Do you want to continue? [Y/n] y
(Reading database ... 214626 files and directories currently installed.)
Removing libpmix-dev:amd64 (5.0.1-4.1build1) ...
Processing triggers for man-db (2.12.0-4build2) ...
```

```
export PKG_CONFIG_PATH=/usr/local/openpmix/lib/pkgconfig:$PKG_CONFIG_PATH
export PKG_CONFIG_PATH=/usr/local/openpmix/lib/pkgconfig${PKG_CONFIG_PATH:+:${PKG_CONFIG_PATH}}
```