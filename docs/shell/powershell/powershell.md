# PowerShell

## article link
-  [www.markdownguide.org](https://www.markdownguide.org/).


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
