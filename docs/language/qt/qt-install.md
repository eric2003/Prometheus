# Qt-Install

## Download

Download Qt for open source use
```
https://www.qt.io/download-dev
```

## ./qt-online-installer-windows-x64-4.8.1.exe --help

```
PS C:\Users\eric\Downloads> ./qt-online-installer-windows-x64-4.8.1.exe --help
Usage: C:\Users\eric\Downloads\qt-online-installer-windows-x64-4.8.1.exe [options] command <args> <key=value>

Qt Installer Framework supports both GUI and headless mode. The installation operations can be invoked with the following commands and options. Note that the options marked with "CLI" are available in the headless mode only.

Commands:
  in, install - install default or selected packages and aliases - <pkg|alias ...>
  ch, check-updates - show available updates information on maintenance tool
  up, update - update all or selected packages - <pkg ...>
  rm, remove - uninstall packages and their child components - <pkg ...>
  li, list - list currently installed packages - <regexp for pkg>
  se, search - search available aliases or packages - <regexp for pkg|alias>
    Note: The --filter-packages option can be used to specify
    additional filters for the search operation
    Note: The --type option can be used to specify
    the content type to search
  co, create-offline - create offline installer from selected packages - <pkg ...>
  cc, clear-cache - clear contents of the local metadata cache
  pr, purge - uninstall all packages and remove entire program directory

Options:
  -?, -h, --help                                     Displays help on
                                                     commandline options.
  --help-all                                         Displays help, including
                                                     generic Qt options.
  -v, --version                                      Displays version
                                                     information.
  -d, --verbose                                      Verbose mode. Prints out
                                                     more information. Adding -d
                                                     or --verbose more than once
                                                     increases verbosity.
  -g, --logging-rules <rules>                        Enables logging according
                                                     to passed rules. Comma
                                                     separated logging rules
                                                     have the following syntax:
                                                     loggingCategory=true/false.
                                                     Passing empty logging rules
                                                     enables all logging
                                                     categories. The following
                                                     rules enable a single
                                                     category: ifw.*=false,
                                                     ifw.category=true. The
                                                     following logging
                                                     categories are available:
                                                     ifw.installer.installlog
                                                     ifw.server
                                                     ifw.developer.build
                                                     js
  --ar, --add-repository <URI,...>                   Add a local or remote
                                                     repository to the list of
                                                     user defined repositories.
  --at, --add-temp-repository <URI,...>              Add a local or remote
                                                     repository to the list of
                                                     temporary available
                                                     repositories.
  --st, --set-temp-repository <URI,...>              Set a local or remote
                                                     repository as temporary
                                                     repository, it is the only
                                                     one used during fetch.
                                                     Note: URI must be prefixed
                                                     with the protocol, i.e.
                                                     file:///, https://, http://
                                                     or ftp://.
  --sp, --system-proxy                               Use system proxy on
                                                     Windows and Linux. This
                                                     option has no effect on
                                                     macOS. (Default)
  --np, --no-proxy                                   Do not use system proxy.
  --su, --start-updater                              Start application in
                                                     updater mode. This will
                                                     override the internal
                                                     marker that is used to
                                                     distinguish which kind of
                                                     binary is currently
                                                     running.
  --sm, --start-package-manager                      Start application in
                                                     package manager mode. This
                                                     will override the internal
                                                     marker that is used to
                                                     distinguish which kind of
                                                     binary is currently
                                                     running.
  --sr, --start-uninstaller                          Start application in
                                                     uninstaller mode. This will
                                                     override the internal
                                                     marker that is used to
                                                     distinguish which kind of
                                                     binary is currently
                                                     running.
  -t, --root <directory>                             [CLI] Set installation
                                                     root directory.
  --oi, --offline-installer-name <filename>          [CLI] Set custom filename
                                                     for the generated offline
                                                     installer. Without this the
                                                     original filename is used
                                                     with an added
                                                     "_offline-yyyy-MM-dd"
                                                     suffix.
  -p, --platform <plugin>                            Use the specified platform
                                                     plugin.
  --nf, --no-force-installations                     Allow deselecting
                                                     components that are marked
                                                     as forced.
  --nd, --no-default-installations                   Deselects components that
                                                     are marked as default.
  --ns, --no-size-checking                           Disable checking of free
                                                     space for installation
                                                     target.
  --sv, --show-virtual-components                    Show virtual components in
                                                     installer and package
                                                     manager.
  -i, --install-compressed-repository <URI,...>      Installs QBSP or 7z file.
                                                     The QBSP (Board Support
                                                     Package) file must be a .7z
                                                     file which contains a valid
                                                     repository.
  --cl, --create-local-repository                    Create a local repository
                                                     inside the installation
                                                     directory. This option has
                                                     no effect on online
                                                     installers.
  --fp, --filter-packages <element=regex,...>        [CLI] Comma separated list
                                                     of additional key-value
                                                     pair filters used to query
                                                     packages with the search
                                                     command. The keys can be
                                                     any of the possible package
                                                     information elements, like
                                                     "DisplayName" and
                                                     "Description".
  --cp, --cache-path <path>                          Sets the path used for
                                                     local metadata cache. The
                                                     path must be writable by
                                                     the current user.
  --type <package|alias>                             [CLI] Sets the type of the
                                                     given arguments for
                                                     commands supporting
                                                     multiple argument types,
                                                     like "search". By default
                                                     aliases are searched first,
                                                     and if no matching aliases
                                                     are found, then packages
                                                     are searched with the same
                                                     search pattern.
  --am, --accept-messages                            [CLI] Accepts all message
                                                     queries without user input.
  --rm, --reject-messages                            [CLI] Rejects all message
                                                     queries without user input.
  --aa, --auto-answer <identifier=value>             [CLI] Automatically
                                                     answers the message queries
                                                     with the message identifier
                                                     and button value. Several
                                                     identifier=value pairs can
                                                     be given separated with
                                                     comma, for example
                                                     --auto-answer
                                                     message.id=Ok,message.id2=C
                                                     ancel.
  --da, --default-answer                             [CLI] Automatically
                                                     answers to message queries
                                                     with their default values.
  --al, --accept-licenses                            [CLI] Accepts all licenses
                                                     without user input.
  --file-query <identifier=value>                    [CLI] Automatically sets
                                                     the QFileDialog values
                                                     getExistingDirectory() or
                                                     getOpenFileName() requested
                                                     by install script. Several
                                                     identifier=value pairs can
                                                     be given separated with
                                                     comma, for example
                                                     --file-query
                                                     filedialog.id=C:/Temp,filed
                                                     ialog.id2=C:/Temp2
  -c, --confirm-command                              [CLI] Confirms starting of
                                                     installation, update or
                                                     removal of components
                                                     without user input.
  -s, --script <file>                                Execute the script given
                                                     as argument.
  --ss, --start-server <mode, socketname, key>       Starts the application as
                                                     headless process waiting
                                                     for commands to execute.
                                                     Mode can be DEBUG or
                                                     PRODUCTION. In DEBUG mode,
                                                     the option values can be
                                                     omitted. Note: The server
                                                     will not shutdown on his
                                                     own, you need to quit the
                                                     process by hand.
  --sc, --start-client <socketname, key>             Starts the application to
                                                     debug the client-server
                                                     communication. If a value
                                                     is omitted, the client will
                                                     use a default instead.
                                                     Note: The server process is
                                                     not started by the client
                                                     application in that case,
                                                     you need to start it on
                                                     your own.
  -q, --squish-port <port number>                    Give a port where Squish
                                                     can connect to. If no port
                                                     is given, attach to squish
                                                     not done. Note: To enable
                                                     Squish support you first
                                                     need to build IFW with
                                                     SQUISH_PATH parameter where
                                                     SQUISH_PATH is pointing to
                                                     your Squish installation
                                                     folder:
                                                     <path_to_qt>/bin/qmake -r
                                                     SQUISH_PATH=<pat_to_squish>
  --mco, --max-concurrent-operations <threads>       Specifies the maximum
                                                     number of threads used to
                                                     perform concurrent
                                                     operations in the unpacking
                                                     phase of components. Set to
                                                     a positive number, or 0
                                                     (default) to let the
                                                     application determine the
                                                     ideal thread count from the
                                                     amount of logical processor
                                                     cores in the system.
  -m, --email <email>                                [CLI] (Deprecated) Email
                                                     used for Qt Account login.
                                                     Note: usage of this option
                                                     with the --password option
                                                     is not recommended way to
                                                     perform the login, as the
                                                     shell the installer was
                                                     invoked from can save the
                                                     command history. Instead,
                                                     use the interactive login
                                                     prompt or the
                                                     "QT_INSTALLER_JWT_TOKEN"
                                                     environment variable.
  --pw, --password <password>                        [CLI] (Deprecated)
                                                     Password used for Qt
                                                     Account login.
                                                     Note: usage of this option
                                                     with the --email option is
                                                     not recommended way to
                                                     perform the login, as the
                                                     shell the installer was
                                                     invoked from can save the
                                                     command history. Instead,
                                                     use the interactive login
                                                     prompt or the
                                                     "QT_INSTALLER_JWT_TOKEN"
                                                     environment variable.
  --ra, --reset-qtaccount                            Erase Qt Account
                                                     information from disk.
  --ao, --accept-obligations                         [CLI] Accepts Qt Open
                                                     Source usage obligations
                                                     without user input.
  --mirror <mirror>                                  Uses the given mirror url
                                                     for opensource downloads.
  --no-save-account, --na                            Does not save the Qt
                                                     Account information to a
                                                     file.
  --lk, --license-keys <KEY,...>                     Uses the given license
                                                     keys in offline installers.
                                                     Optional for Qt Account.
  --li, --license-id <ID>                            License id for Qt License
                                                     Server based usage. Used
                                                     together with the
                                                     "create-offline" command
                                                     and "--license-server-url"
                                                     option for creating an
                                                     offline installer with
                                                     embedded license id
                                                     configuration, or
                                                     temporarily overridding the
                                                     embedded license id when
                                                     launching the created
                                                     offline installer.
  --lu, --license-user <user>                        [CLI] User name for the
                                                     license keys or license id.
                                                     Used together with --lk or
                                                     --license-keys, and --li or
                                                     --license-id
  --pu, --proxy-url, --ls, --license-server-url <URL [CLI] URL for Qt License
  >                                                  Server. Used together with
                                                     the "create-offline"
                                                     command and "--license-id"
                                                     option for creating an
                                                     offline installer with
                                                     embedded license id
                                                     configuration. The created
                                                     installer will use this URL
                                                     for validating the given
                                                     license id.

Arguments:
  Command                                            Command to be run by
                                                     installer. Note that this
                                                     feature may be disabled by
                                                     vendor.
  Args                                               Extra arguments for
                                                     command, each separated by
                                                     space.
  InstallerValue                                     Key-value pair to be set
                                                     internally by the
                                                     framework.
```

## --mirror <mirror> 

```
./qt-online-installer-windows-x64-4.8.1.exe --mirror https://mirrors.ustc.edu.cn/qtproject
```

## server replied: Forbidden

```
无法下载存档 http://download.qt.io/oneline/qtsdkrepository/all_os/qt/qt6_681_windows_line_endings_src/qt.qt6.681.doc/
6.8.1-0-202411221531qt5-documentation.zip: Error transferring
https://mirrors.tuna.tsinghua.edu.cn/qt/online/qtsdkrepository/all_os/qt/qt6_681_windows_line_endings_src/qt.qt6.681.doc/
6.8.1-0-202411221531qt5-documentation.zip - server replied: Forbidden
```

```
无法下载存档 http://download.qt.io/online/qtsdkrepository/all_os/qt/qt6_681_windows_line_endings_src/qt.qt6.681.doc/6.8.1-0-202411221531qt5-documentation.zip：Error transferring https://mirrors.tuna.tsinghua.edu.cn/qt/online/qtsdkrepository/all_os/qt/qt6_681_windows_line_endings_src/qt.qt6.681.doc/6.8.1-0-202411221531qt5-documentation.zip - server replied: Forbidden
```

## Environment variables 

QT_DIR
```
QT_DIR
c:\local\Qt\6.8.1\msvc2022_64\lib\cmake\
```

Qt6_DIR
```
Qt6_DIR
c:\local\Qt\6.8.1\msvc2022_64\lib\cmake\
```
## QtCreator

```
c:\local\Qt\Tools\QtCreator\bin\qtcreator.exe
```

## MaintenanceTool

```powershell
./MaintenanceTool.exe --help
```

```powershell
./MaintenanceTool.exe --mirror https://mirrors.ustc.edu.cn/qtproject
```



