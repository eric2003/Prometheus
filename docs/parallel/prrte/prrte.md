# PRRTE

## Link

- [MPI_Comm_size always returns 1 again](https://stackoverflow.com/questions/78815680/mpi-comm-size-always-returns-1-again).
- [PMIx Reference Runtime Environment (PRRTE)](https://docs.prrte.org/en/latest/).


## Ubuntu

```
wget https://github.com/openpmix/prrte/releases/download/v4.0.0/prrte-4.0.0.tar.gz
```

```
tar -xzf prrte-4.0.0.tar.gz
cd prrte-4.2.4
```

```
eric@fantasy:~/work/prrte_work$ tar -xzf prrte-4.0.0.tar.gz
eric@fantasy:~/work/prrte_work$ ls
prrte-4.0.0  prrte-4.0.0.tar.gz
eric@fantasy:~/work/prrte_work$ cd prrte-4.0.0/
eric@fantasy:~/work/prrte_work/prrte-4.0.0$ 
```

### sudo apt-get install -y build-essential libevent-dev
```
eric@fantasy:~/work/prrte_work/prrte-4.0.0$ sudo apt-get install -y build-essential libevent-dev
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
build-essential is already the newest version (12.10ubuntu1).
The following additional packages will be installed:
  libevent-2.1-7t64 libevent-extra-2.1-7t64 libevent-openssl-2.1-7t64
The following NEW packages will be installed:
  libevent-2.1-7t64 libevent-dev libevent-extra-2.1-7t64 libevent-openssl-2.1-7t64
0 upgraded, 4 newly installed, 0 to remove and 6 not upgraded.
Need to get 498 kB of archives.
After this operation, 2,373 kB of additional disk space will be used.
Get:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libevent-2.1-7t64 amd64 2.1.12-stable-9ubuntu2 [145 kB]
Get:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libevent-extra-2.1-7t64 amd64 2.1.12-stable-9ubuntu2 [64.2 kB]
Get:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libevent-openssl-2.1-7t64 amd64 2.1.12-stable-9ubuntu2 [15.7 kB]
Get:4 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 libevent-dev amd64 2.1.12-stable-9ubuntu2 [274 kB]
Fetched 498 kB in 2s (254 kB/s)       
Selecting previously unselected package libevent-2.1-7t64:amd64.
(Reading database ... 214002 files and directories currently installed.)
Preparing to unpack .../libevent-2.1-7t64_2.1.12-stable-9ubuntu2_amd64.deb ...
Unpacking libevent-2.1-7t64:amd64 (2.1.12-stable-9ubuntu2) ...
Selecting previously unselected package libevent-extra-2.1-7t64:amd64.
Preparing to unpack .../libevent-extra-2.1-7t64_2.1.12-stable-9ubuntu2_amd64.deb ...
Unpacking libevent-extra-2.1-7t64:amd64 (2.1.12-stable-9ubuntu2) ...
Selecting previously unselected package libevent-openssl-2.1-7t64:amd64.
Preparing to unpack .../libevent-openssl-2.1-7t64_2.1.12-stable-9ubuntu2_amd64.deb ...
Unpacking libevent-openssl-2.1-7t64:amd64 (2.1.12-stable-9ubuntu2) ...
Selecting previously unselected package libevent-dev.
Preparing to unpack .../libevent-dev_2.1.12-stable-9ubuntu2_amd64.deb ...
Unpacking libevent-dev (2.1.12-stable-9ubuntu2) ...
Setting up libevent-openssl-2.1-7t64:amd64 (2.1.12-stable-9ubuntu2) ...
Setting up libevent-2.1-7t64:amd64 (2.1.12-stable-9ubuntu2) ...
Setting up libevent-extra-2.1-7t64:amd64 (2.1.12-stable-9ubuntu2) ...
Setting up libevent-dev (2.1.12-stable-9ubuntu2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
eric@fantasy:~/work/prrte_work/prrte-4.0.0$
```

### ./configure --prefix=/usr/local/prrte --with-pmix=/usr/local/openpmix
```
eric@fantasy:~/work/prrte_work/prrte-4.0.0$ ./configure --prefix=/usr/local/prrte --with-pmix=/usr/local/openpmix
PRTE configuration:
-----------------------
Version: 4.0.0
Debug build: no
Devel check enabled: no
Platform file: (none)

Miscellaneous
-----------------------
HTML docs and man pages: installing packaged docs
Install legacy tools: yes
Testbuild launchers: no
 
Required Packages
-----------------------
HWLOC: yes (pkg-config: default search paths)
Libevent: yes (default search paths)
PMIx: yes (pkg-config: /usr/local/openpmix)
 
Resource Managers
-----------------------
Grid Engine: no
LSF: no
PBS: yes (scheduler)
Slurm: yes
ssh/rsh: yes
Torque: no (not found)
 
Personalities
-----------------------
OMPI: yes
PRTE: yes
```

```
make -j4
sudo make install
```

```
export PATH=/usr/local/prrte/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/prrte/lib:$LD_LIBRARY_PATH
```

```
export PATH=/usr/local/prrte/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/prrte/lib${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

### prte --version
```
eric@fantasy:~$ prte --version
prte (PRRTE) 4.0.0
Report bugs to: https://github.com/openpmix/prrte
```

