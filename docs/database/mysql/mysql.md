# MySQL

## Article link

-  [MySQL Community Downloads](https://dev.mysql.com/downloads/connector/odbc/).


## downloads

-  [MySQL Community Downloads](https://dev.mysql.com/downloads/mysql/).

## Data Directory
```
C:\ProgramData\MySQL\MySQL Server 9.3\
```


## Type and Networking

### Server Configuration Type
Choose the correct server configuration type for this MySQL Server installation. This setting will define how much system resources are assigned to the MySQL Server instance.

**Config Type:** Development Computer

### Connectivity
Use the following controls to select how you would like to connect to this server.

- [x] TCP/IP  Port: 3306  X Protocol Port: 33060
- [x] Open Windows Firewall ports for network access
- [ ] Named Pipe  Pipe Name: MYSQL
- [ ] Shared Memory  Memory Name: MYSQL

### Advanced Configuration
Select the check box below to get additional configuration pages where you can set advanced and logging options for this server instance.

- [ ] Show Advanced and Logging Options

## Windows Service

- [x] Configure MySQL Server as a Windows Service

### Windows Service Details
Please specify a Windows Service name to be used for this MySQL Server instance. A unique name is required for each instance.

**Windows Service Name:** MySQL93

- [x] Start the MySQL Server at System Startup

### Run Windows Service as ...
The MySQL Server needs to run under a given user account. Based on the security requirements of your system you need to pick one of the options below.

- [x] Standard System Account
  - Recommended for most scenarios.
- [ ] Custom User
  - An existing user account can be selected for advanced scenarios.
  
## Server File Permissions

MySQL Configurator can secure the server's data directory by updating the permissions of files and folders located at:

**C:\ProgramData\MySQL\MySQL Server 9.3\**

Do you want MySQL Configurator to update the server file permissions for you?

- [x] Yes, grant full access to the user running the Windows Service (if applicable) and the administrators group only. Other users and groups will not have access.
- [ ] Yes, but let me review and configure the level of access.
- [ ] No, I will manage the permissions after the server configuration.


```
Executing step: Writing configuration file

Saving my.ini configuration file...
Saved my.ini configuration file.
Completed execution of step: Writing configuration file

Executing step: Updating Windows Firewall rules

Adding a Windows Firewall rule for MySQL93 on port 3306.
Attempting to add a Windows Firewall rule with command: netsh.exe advfirewall firewall add rule name="Port 3306" protocol=TCP localport=3306 dir=in action=allow
纭畾銆?


Successfully added the Windows Firewall rule.
Adding a Windows Firewall rule for MySQL93 on port 33060.
Attempting to add a Windows Firewall rule with command: netsh.exe advfirewall firewall add rule name="Port 33060" protocol=TCP localport=33060 dir=in action=allow
纭畾銆?


Successfully added the Windows Firewall rule.
Completed execution of step: Updating Windows Firewall rules

Executing step: Adjusting Windows service

Attempting to grant the required filesystem permissions to the 'NT AUTHORITY\NetworkService' account.
Granted permissions to the data directory.
Granted permissions to the install directory.
Adding new service
New service added
Completed execution of step: Adjusting Windows service

Executing step: Initializing database (may take a long time)

Attempting to run MySQL Server with --initialize-insecure option...
Starting process for MySQL Server 9.3.0...
Starting process with command: C:\Program Files\MySQL\MySQL Server 9.3\bin\mysqld.exe --defaults-file="C:\ProgramData\MySQL\MySQL Server 9.3\my.ini" --console --initialize-insecure=on --lower-case-table-names=1...
MySQL Server Initialization - start.
C:\Program Files\MySQL\MySQL Server 9.3\bin\mysqld.exe (mysqld 9.3.0) initializing of server in progress as process 48764
InnoDB initialization has started.
InnoDB initialization has ended.
root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option.
MySQL Server Initialization - end.
Process for mysqld, with ID 48764, was run successfully and exited with code 0.
Successfully started process for MySQL Server 9.3.0.
MySQL Server 9.3.0 intialized the database successfully.
Completed execution of step: Initializing database (may take a long time)

Executing step: Updating permissions for the data folder and related server files

Attempting to update the permissions for the data folder and related server files...
Inherited permissions have been converted to explicit permissions.
Full control permissions granted to: NETWORK SERVICE.
Full control permissions granted to: Administrators.
Full control permissions granted to: CREATOR OWNER.
Full control permissions granted to: SYSTEM.
Access to the data directory is removed for the users group.
Permissions for the data folder and related server files are updated correctly.
Completed execution of step: Updating permissions for the data folder and related server files

Executing step: Starting the server

Attempting to start service MySQL93...
MySQL Server - start.
C:\Program Files\MySQL\MySQL Server 9.3\bin\mysqld.exe (mysqld 9.3.0) starting as process 41476
InnoDB initialization has started.
InnoDB initialization has ended...
CA certificate ca.pem is self signed.
Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
X Plugin ready for connections. Bind-address: '::' port: 33060
C:\Program Files\MySQL\MySQL Server 9.3\bin\mysqld.exe: ready for connections. Version: '9.3.0'  socket: ''  port: 3306  MySQL Community Server - GPL.
Successfully started service MySQL93.
Waiting until a connection to MySQL Server 9.3.0 can be established (with a maximum of 10 attempts)...
Retry 1: Attempting to connect to Mysql@localhost:3306 with user root with no password...
Successfully connected to MySQL Server 9.3.0.
Completed execution of step: Starting the server

Executing step: Applying security settings

Attempting to update security settings.
Updated security settings.
Completed execution of step: Applying security settings

Executing step: Updating the Start menu link

Attempting to verify command-line client shortcut.
Verified command-line client shortcut.
Verified command-line client shortcut.
Completed execution of step: Updating the Start menu link

Executing step: Updating example databases

Updating example databases...
Completed execution of step: Updating example databases
``` 

Search odbc32.lib
```
Search results:
4 files and 0 directories found

c:\Program Files (x86)\Windows Kits\10\Lib\10.0.22621.0\um\arm\odbc32.lib
c:\Program Files (x86)\Windows Kits\10\Lib\10.0.22621.0\um\arm64\odbc32.lib
c:\Program Files (x86)\Windows Kits\10\Lib\10.0.22621.0\um\x64\odbc32.lib
c:\Program Files (x86)\Windows Kits\10\Lib\10.0.22621.0\um\x86\odbc32.lib
```

Search sql.h
```
Search results:
4 files and 0 directories found

c:\dev\mingw64\x86_64-w64-mingw32\include\sql.h
c:\local\Qt\Tools\mingw1310_64\x86_64-w64-mingw32\include\sql.h
c:\msys64\mingw64\include\sql.h
c:\Program Files (x86)\Windows Kits\10\Include\10.0.22621.0\um\sql.h
```


```
cmake -D ODBC_INCLUDE_DIR="C:/Program Files (x86)/Windows Kits/10/Include/10.0.22621.0/um" 
      -D ODBC_LIBRARY="C:/Program Files (x86)/Windows Kits/10/Lib/10.0.22621.0/um/x64/odbc32.lib" ..
```

```
\Program Files\MySQL\MySQL Server 9.3\bin\"
```

## search my_bool
```
Search results:
[2 files and 0 directories found]
d:\work\vtk2025\codes\VTK-9.4.2\IO\MySQL\vtkMySQLDatabase.cxx
d:\work\vtk2025\codes\VTK-9.4.2\IO\MySQL\vtkMySQLQuery.cxx
```

vtkMySQLDatabase.cxx
```cpp
//------------------------------------------------------------------------------
bool vtkMySQLDatabase::Open(const char* password)
{
  if (this->IsOpen())
  {
    vtkGenericWarningMacro("Open(): Database is already open.");
    return true;
  }

  assert(this->Private->Connection == nullptr);

  if (this->Reconnect)
  {
    my_bool recon = true;
    mysql_options(&this->Private->NullConnection, MYSQL_OPT_RECONNECT, &recon);
  }
  ......
}
```

vtkMySQLQuery.cxx
```cpp
VTK_ABI_NAMESPACE_BEGIN
class vtkMySQLBoundParameter
{
public:
  vtkMySQLBoundParameter()
    : IsNull(true)
    , Data(nullptr)
    , BufferSize(0)
    , DataLength(0)
    , HasError(false)
  {
  }

  ~vtkMySQLBoundParameter() { delete[] this->Data; }

  void SetData(char* data, unsigned long size)
  {
    delete[] this->Data;
    this->BufferSize = size;
    this->Data = new char[size];
    memcpy(this->Data, data, size);
  }

  MYSQL_BIND BuildParameterStruct()
  {
    MYSQL_BIND output;
    output.buffer_type = this->DataType;
    output.buffer = this->Data;
    output.buffer_length = this->BufferSize;
    output.length = &(this->DataLength);
    output.is_null = &(this->IsNull);
    output.is_unsigned = this->IsUnsigned;
    output.error = nullptr;
    return output;
  }

  my_bool IsNull;                 // Is this parameter nullptr?
  my_bool IsUnsigned;             // For integer types, is it unsigned?
  char* Data;                     // Buffer holding actual data
  unsigned long BufferSize;       // Buffer size
  unsigned long DataLength;       // Size of the data in the buffer (must
                                  // be less than or equal to BufferSize)
  my_bool HasError;               // for the server to report truncation
  enum enum_field_types DataType; // MySQL data type for the contained data
};
```

```
MySQL_INCLUDE_DIR="c:/Program Files/MySQL/MySQL Server 9.3/include" `
MySQL_LIBRARY="c:/Program Files/MySQL/MySQL Server 9.3/lib/libmysql.lib" `
```

my_bool
```
在MySQL :: MySQL 8.0 Release Notes :: Changes in MySQL 8.0.1 (2017-04-10, Development Milestone)中注明：mysql.h 头文件现在需要 C++ 或 C99 编译器才能编译。
MySQL源代码中不再使用该类型，使用此类型来表示 C 布尔变量的任何第三方代码都应改用 bool 或 int C 类型。
```

```
- mysql.h now requires a C++ or C99 header to compile. (All supported platforms have C99 compilers, but some are C89 by default and need mode switches like --std=gnu99 or --std=c99.)
- The my_bool type no longer exists, and people may have been using it in their own code since some mysql.h functions have been returning that. The recommended fix is to use bool or int, which will work both in 8.0 and older versions.
```