# PowerShell

## Link

-  [How to Upgrade and Install Powershell 7 on Windows 11](https://www.youtube.com/watch?v=z4w0OYi5L4M).

## $PROFILE

powershell 5
```powershell
PS C:\Users\eric> $PROFILE
C:\Users\eric\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
```

powershell 7
```powershell
PS C:\Users\eric> $PROFILE
C:\Users\eric\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
```

PowerShell_profile.ps1
```powershell
#region conda initialize
# !! Contents within this block are managed by 'conda init' !!
#(& "c:\Users\eric\miniconda3\Scripts\conda.exe" "shell.powershell" "hook") | Out-String | Invoke-Expression
#endregion
```

modify PowerShell_profile.ps1 as UTF8
```powershell
# 设置 PowerShell 的输出和输入编码为 UTF-8
[System.Console]::OutputEncoding = [System.Console]::InputEncoding = [System.Text.Encoding]::UTF8
#region conda initialize
# !! Contents within this block are managed by 'conda init' !!
#(& "c:\Users\eric\miniconda3\Scripts\conda.exe" "shell.powershell" "hook") | Out-String | Invoke-Expression
#endregion
```

## How to Upgrade and Install Powershell 7 on Windows 11

-  [How to Upgrade and Install Powershell 7 on Windows 11](https://www.youtube.com/watch?v=z4w0OYi5L4M).
-  [Update PowerShell to the Latest Version: Fast and Simple Guide!](https://www.youtube.com/watch?v=lfkNr9Z_A3I).
-  [在 Windows 上安裝 PowerShell](https://learn.microsoft.com/zh-tw/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.5).

winget search Microsoft.PowerShell
```powershell
PS C:\Users\eric> winget search Microsoft.PowerShell
名称               ID                           版本    源
---------------------------------------------------------------
PowerShell         Microsoft.PowerShell         7.5.0.0 winget
PowerShell Preview Microsoft.PowerShell.Preview 7.6.0.3 winget
```

winget install --id Microsoft.PowerShell --source winget
```powershell
```

## Check version

$PSVersionTable.PSVersion
```powershell
PS C:\Users\eric> $PSVersionTable.PSVersion

Major  Minor  Build  Revision
-----  -----  -----  --------
5      1      26100  2161
```

Get-Command powershell* | Select-Object -ExpandProperty Source
```powershell
PS C:\Users\eric> Get-Command powershell* | Select-Object -ExpandProperty Source
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
C:\Windows\System32\WindowsPowerShell\v1.0\powershell_ise.exe
```

```powershell
PS C:\Users\eric> $PSHOME
C:\Program Files\PowerShell\7
PS C:\Users\eric> $PSHOME
C:\Windows\System32\WindowsPowerShell\v1.0
```

```powershell
PS C:\Users\eric> $PSHOME
C:\Program Files\PowerShell\7
```

Get-History
```powershell
PS C:\Users\eric> Get-History

  Id     Duration CommandLine
  --     -------- -----------
   2        0.007 Clear-History
```

Clear-History
```
PS C:\Users\eric> Clear-History
```

DownloadFile example 1
```
    $cli = New-Object System.Net.WebClient;
    $cli.Headers['User-Agent'] = 'myUserAgentString';
    $cli.DownloadFile('https://domain.name/file.name', 'C:\file.name')
```

DownloadFile example 2
```
$WebClient = New-Object System.Net.WebClient
$WebClient.DownloadFile("https://www.contoso.com/file","C:\path\file")
```


DownloadFile example 3
```
(New-Object System.Net.WebClient).DownloadFile("https://community.chocolatey.org/install.ps1","d:\tmp\install.ps1")
(New-Object System.Net.WebClient).DownloadFile("https://community.chocolatey.org/install.ps1","d:\download\install.ps1")
(New-Object System.Net.WebClient).DownloadFile("http://speedtest.tele2.net/1MB.zip","d:\download\1MB.zip")
(New-Object System.Net.WebClient).DownloadFile("https://download.microsoft.com/download/A/E/0/AE002626-9D9D-448D-8197-1EA510E297CE/msmpisdk.msi","d:\download\msmpisdk.msi")
(New-Object System.Net.WebClient).DownloadFile("https://download.microsoft.com/download/A/E/0/AE002626-9D9D-448D-8197-1EA510E297CE/msmpisdk.msi","msmpisdk.msi")
(New-Object System.Net.WebClient).DownloadFile("https://download.microsoft.com/download/A/E/0/AE002626-9D9D-448D-8197-1EA510E297CE/msmpisdk.msi","d:\tmp\msmpisdk.msi")
(New-Object System.Net.WebClient).DownloadFile("https://download.microsoft.com/download/A/E/0/AE002626-9D9D-448D-8197-1EA510E297CE/msmpisdk.msi","D:\work\bazel_work\msmpisdk.msi")
(New-Object System.Net.WebClient).DownloadFile("https://community.chocolatey.org/install.ps1","D:\work\bazel_work\install.ps1")
(New-Object System.Net.WebClient).DownloadFile("https://community.chocolatey.org/install.ps1","D:\work\bazel_work\install.txt")
```


## Edge

```
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
"C:\Program Files (x86)\Microsoft\Edge\Application"
```