# Windows Forms

## Windows Forms Link

-  [How to Make a Mario Style Side Scrolling Game in Windows Form and C# in Visual Studio](https://www.youtube.com/watch?v=yw_sn9DonH4/).
-  [How to make PAC MAN game in Windows Form and C# with Visual Studio](https://www.youtube.com/watch?v=fdw-HGIMZFY/).
-  [C# Tutorial – Create a simple PAC MAN game in Visual Studio](https://www.mooict.com/c-tutorial-create-a-simple-pac-man-game-in-visual-studio/).


## CSharp ItemTemplates

```
c:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\ItemTemplates\CSharp\1033\AssemblyInfoInternal\
```


AssemblyInfo.cs
```csharp
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

// General Information about an assembly is controlled through the following 
// set of attributes. Change these attribute values to modify the information
// associated with an assembly.
[assembly: AssemblyTitle("$rootnamespace$")]
[assembly: AssemblyDescription("")]
[assembly: AssemblyConfiguration("")]
[assembly: AssemblyCompany("$registeredorganization$")]
[assembly: AssemblyProduct("$rootnamespace$")]
[assembly: AssemblyCopyright("Copyright © $registeredorganization$ $year$")]
[assembly: AssemblyTrademark("")]
[assembly: AssemblyCulture("")]

// Setting ComVisible to false makes the types in this assembly not visible 
// to COM components.  If you need to access a type in this assembly from 
// COM, set the ComVisible attribute to true on that type.
[assembly: ComVisible(false)]

// The following GUID is for the ID of the typelib if this project is exposed to COM
[assembly: Guid("$guid1$")]

// Version information for an assembly consists of the following four values:
//
//      Major Version
//      Minor Version 
//      Build Number
//      Revision
//
[assembly: AssemblyVersion("1.0.0.0")]
[assembly: AssemblyFileVersion("1.0.0.0")]
```

form.cs
```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
$if$ ($targetframeworkversion$ >= 3.5)using System.Linq;
$endif$using System.Text;
$if$ ($targetframeworkversion$ >= 4.5)using System.Threading.Tasks;
$endif$using System.Windows.Forms;

namespace $rootnamespace$
{
    public partial class $safeitemrootname$: Form
    {
        public $safeitemrootname$()
        {
            InitializeComponent();
        }
    }
}
```

form.designer.cs
```csharp
namespace $rootnamespace$
{
    partial class $safeitemrootname$
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Text = "$safeitemrootname$";
        }

        #endregion
    }
}
```

windowsform.vstemplate
```xml
<?xml version="1.0" encoding="utf-8"?>
<VSTemplate Version="3.0.0" Type="Item" xmlns="http://schemas.microsoft.com/developer/vstemplate/2005">
  <TemplateData>
    <Name Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2237" />
    <Description Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2264" />
    <Icon Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="4535" />
    <TemplateID>Microsoft.CSharp.WindowsForm</TemplateID>
    <AppliesTo>CSharp + WindowsForms</AppliesTo>
    <ShowByDefault>false</ShowByDefault>
    <ProjectType>CSharp</ProjectType>
    <SortOrder>93</SortOrder>
    <RequiredFrameworkVersion>2.0</RequiredFrameworkVersion>
    <NumberOfParentCategoriesToRollUp>1</NumberOfParentCategoriesToRollUp>
    <DefaultName>Form.cs</DefaultName>
  </TemplateData>
  <TemplateContent>
		<References>
			<Reference>
				<Assembly>System</Assembly>
			</Reference>
			<Reference>
				<Assembly>System.Data</Assembly>
			</Reference>
			<Reference>
				<Assembly>System.Drawing</Assembly>
			</Reference>
			<Reference>
				<Assembly>System.Windows.Forms</Assembly>
			</Reference>
			<Reference>
				<Assembly>System.Xml</Assembly>
			</Reference>
		</References>

    <ProjectItem ReplaceParameters="true" SubType="Form">Form.cs</ProjectItem>
    <ProjectItem ReplaceParameters="true">Form.Designer.cs</ProjectItem>
  </TemplateContent>
</VSTemplate>
```

```
c:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\ItemTemplates\CSharp\1033\
AppConfigInternal
  App.config
  App.vstemplate
AppManifestInternal
  app.manifest
  appManifestInternal.vstemplate
AssemblyInfoInternal
  AssemblyInfo.cs
  AssemblyInfo.vstemplate
ResourceInternal
  Resource.resX
  Resource.vstemplate
SettingsInternal
  Settings.settings
  Settings.vstemplate
```

App.config
```xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
</configuration>
```

App.vstemplate
```xml
<?xml version="1.0" encoding="utf-8"?>
<VSTemplate Version="3.0.0" Type="Item" xmlns="http://schemas.microsoft.com/developer/vstemplate/2005">
  <TemplateData>
    <Name Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2403" />
    <Description Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2404" />
    <Icon Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="4600" />
    <TemplateID>Microsoft.CSharp.AppConfig.Internal</TemplateID>
    <ProjectType>CSharp</ProjectType>
    <RequiredFrameworkVersion>2.0</RequiredFrameworkVersion>
    <DefaultName>App.config</DefaultName>
    <Hidden>true</Hidden>
  </TemplateData>
  <TemplateContent>
    <ProjectItem OpenInEditor="false">App.config</ProjectItem>
  </TemplateContent>
</VSTemplate>
```

app.manifest
```xml
<?xml version="1.0" encoding="utf-8"?>
<assembly manifestVersion="1.0" xmlns="urn:schemas-microsoft-com:asm.v1">
  <assemblyIdentity version="1.0.0.0" name="MyApplication.app"/>
  <trustInfo xmlns="urn:schemas-microsoft-com:asm.v2">
    <security>
      <requestedPrivileges xmlns="urn:schemas-microsoft-com:asm.v3">
        <!-- UAC Manifest Options
             If you want to change the Windows User Account Control level replace the 
             requestedExecutionLevel node with one of the following.

        <requestedExecutionLevel  level="asInvoker" uiAccess="false" />
        <requestedExecutionLevel  level="requireAdministrator" uiAccess="false" />
        <requestedExecutionLevel  level="highestAvailable" uiAccess="false" />

            Specifying requestedExecutionLevel element will disable file and registry virtualization. 
            Remove this element if your application requires this virtualization for backwards
            compatibility.
        -->
        <requestedExecutionLevel level="asInvoker" uiAccess="false" />
      </requestedPrivileges>
    </security>
  </trustInfo>

  <compatibility xmlns="urn:schemas-microsoft-com:compatibility.v1">
    <application>
      <!-- A list of the Windows versions that this application has been tested on
           and is designed to work with. Uncomment the appropriate elements
           and Windows will automatically select the most compatible environment. -->

      <!-- Windows Vista -->
      <!--<supportedOS Id="{e2011457-1546-43c5-a5fe-008deee3d3f0}" />-->

      <!-- Windows 7 -->
      <!--<supportedOS Id="{35138b9a-5d96-4fbd-8e2d-a2440225f93a}" />-->

      <!-- Windows 8 -->
      <!--<supportedOS Id="{4a2f28e3-53b9-4441-ba9c-d69d4a4a6e38}" />-->

      <!-- Windows 8.1 -->
      <!--<supportedOS Id="{1f676c76-80e1-4239-95bb-83d0f6d0da78}" />-->

      <!-- Windows 10 -->
      <!--<supportedOS Id="{8e0f7a12-bfb3-4fe8-b9a5-48fd50a15a9a}" />-->

    </application>
  </compatibility>

  <!-- Indicates that the application is DPI-aware and will not be automatically scaled by Windows at higher
       DPIs. Windows Presentation Foundation (WPF) applications are automatically DPI-aware and do not need 
       to opt in. Windows Forms applications targeting .NET Framework 4.6 that opt into this setting, should 
       also set the 'EnableWindowsFormsHighDpiAutoResizing' setting to 'true' in their app.config. 
       
       Makes the application long-path aware. See https://docs.microsoft.com/windows/win32/fileio/maximum-file-path-limitation -->
  <!--
  <application xmlns="urn:schemas-microsoft-com:asm.v3">
    <windowsSettings>
      <dpiAware xmlns="http://schemas.microsoft.com/SMI/2005/WindowsSettings">true</dpiAware>
      <longPathAware xmlns="http://schemas.microsoft.com/SMI/2016/WindowsSettings">true</longPathAware>
    </windowsSettings>
  </application>
  -->

  <!-- Enable themes for Windows common controls and dialogs (Windows XP and later) -->
  <!--
  <dependency>
    <dependentAssembly>
      <assemblyIdentity
          type="win32"
          name="Microsoft.Windows.Common-Controls"
          version="6.0.0.0"
          processorArchitecture="*"
          publicKeyToken="6595b64144ccf1df"
          language="*"
        />
    </dependentAssembly>
  </dependency>
  -->

</assembly>
```

appManifestInternal.vstemplate
```xml
<?xml version="1.0" encoding="utf-8"?>
<VSTemplate Version="3.0.0" Type="Item" xmlns="http://schemas.microsoft.com/developer/vstemplate/2005">
  <TemplateData>
    <Name Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2428" />
    <Description Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2429" />
    <Icon Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="4592" />
    <TemplateID>Microsoft.CSharp.AppManifestInternal</TemplateID>
    <ProjectType>CSharp</ProjectType>
    <DefaultName>app.manifest</DefaultName>
    <Hidden>true</Hidden>
  </TemplateData>
  <TemplateContent>
    <ProjectItem OpenInEditor="false">app.manifest</ProjectItem>
  </TemplateContent>
  <WizardExtension>
    <Assembly>Microsoft.VSDesigner, Version=16.0.0.0, Culture=Neutral, PublicKeyToken=b03f5f7f11d50a3a</Assembly>
    <FullClassName>Microsoft.VSDesigner.ProjectWizard.AppManifestTemplateWizard</FullClassName>
  </WizardExtension>
</VSTemplate>
```

AssemblyInfo.cs
```csharp
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

// General Information about an assembly is controlled through the following 
// set of attributes. Change these attribute values to modify the information
// associated with an assembly.
[assembly: AssemblyTitle("$rootnamespace$")]
[assembly: AssemblyDescription("")]
[assembly: AssemblyConfiguration("")]
[assembly: AssemblyCompany("$registeredorganization$")]
[assembly: AssemblyProduct("$rootnamespace$")]
[assembly: AssemblyCopyright("Copyright © $registeredorganization$ $year$")]
[assembly: AssemblyTrademark("")]
[assembly: AssemblyCulture("")]

// Setting ComVisible to false makes the types in this assembly not visible 
// to COM components.  If you need to access a type in this assembly from 
// COM, set the ComVisible attribute to true on that type.
[assembly: ComVisible(false)]

// The following GUID is for the ID of the typelib if this project is exposed to COM
[assembly: Guid("$guid1$")]

// Version information for an assembly consists of the following four values:
//
//      Major Version
//      Minor Version 
//      Build Number
//      Revision
//
[assembly: AssemblyVersion("1.0.0.0")]
[assembly: AssemblyFileVersion("1.0.0.0")]
```

AssemblyInfo.vstemplate
```xml
<?xml version="1.0" encoding="utf-8"?>
<VSTemplate Version="3.0.0" Type="Item" xmlns="http://schemas.microsoft.com/developer/vstemplate/2005">
  <TemplateData>
    <Name Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2405" />
    <Description Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2406" />
    <Icon Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="4601" />
    <TemplateID>Microsoft.CSharp.AssemblyInfo.Internal</TemplateID>
    <ProjectType>CSharp</ProjectType>
    <RequiredFrameworkVersion>2.0</RequiredFrameworkVersion>
    <DefaultName>AssemblyInfo.cs</DefaultName>
    <Hidden>true</Hidden>
  </TemplateData>
  <TemplateContent>
    <References>
      <Reference>
        <Assembly>System</Assembly>
      </Reference>
    </References>
    <ProjectItem ReplaceParameters="true" OpenInEditor="false">AssemblyInfo.cs</ProjectItem>
  </TemplateContent>
  <WizardExtension>
    <Assembly>Microsoft.VisualStudio.Templates.AssemblyInfo.Wizard, Version=16.3.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35</Assembly>
    <FullClassName>AssemblyInfoTemplateWizard</FullClassName>
  </WizardExtension>
</VSTemplate>
```

Resource.resX
```xml
<?xml version="1.0" encoding="utf-8"?>
<root>
	<!-- 
		Microsoft ResX Schema

		Version 1.3

		The primary goals of this format is to allow a simple XML format 
		that is mostly human readable. The generation and parsing of the 
		various data types are done through the TypeConverter classes 
		associated with the data types.

		Example:

		... ado.net/XML headers & schema ...
		<resheader name="resmimetype">text/microsoft-resx</resheader>
		<resheader name="version">1.3</resheader>
		<resheader name="reader">System.Resources.ResXResourceReader, System.Windows.Forms, ...</resheader>
		<resheader name="writer">System.Resources.ResXResourceWriter, System.Windows.Forms, ...</resheader>
		<data name="Name1">this is my long string</data>
		<data name="Color1" type="System.Drawing.Color, System.Drawing">Blue</data>
		<data name="Bitmap1" mimetype="application/x-microsoft.net.object.binary.base64">
			[base64 mime encoded serialized .NET Framework object]
		</data>
		<data name="Icon1" type="System.Drawing.Icon, System.Drawing" mimetype="application/x-microsoft.net.object.bytearray.base64">
			[base64 mime encoded string representing a byte array form of the .NET Framework object]
		</data>

		There are any number of "resheader" rows that contain simple 
		name/value pairs.

		Each data row contains a name, and value. The row also contains a 
		type or mimetype. Type corresponds to a .NET class that support 
		text/value conversion through the TypeConverter architecture. 
		Classes that don't support this are serialized and stored with the 
		mimetype set.

		The mimetype is used for serialized objects, and tells the 
		ResXResourceReader how to depersist the object. This is currently not 
		extensible. For a given mimetype the value must be set accordingly:

		Note - application/x-microsoft.net.object.binary.base64 is the format 
		that the ResXResourceWriter will generate, however the reader can 
		read any of the formats listed below.

		mimetype: application/x-microsoft.net.object.binary.base64
		value   : The object must be serialized with 
			: System.Serialization.Formatters.Binary.BinaryFormatter
			: and then encoded with base64 encoding.

		mimetype: application/x-microsoft.net.object.soap.base64
		value   : The object must be serialized with 
			: System.Runtime.Serialization.Formatters.Soap.SoapFormatter
			: and then encoded with base64 encoding.

		mimetype: application/x-microsoft.net.object.bytearray.base64
		value   : The object must be serialized into a byte array 
			: using a System.ComponentModel.TypeConverter
			: and then encoded with base64 encoding.
	-->
	
	<xsd:schema id="root" xmlns="" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:msdata="urn:schemas-microsoft-com:xml-msdata">
		<xsd:element name="root" msdata:IsDataSet="true">
			<xsd:complexType>
				<xsd:choice maxOccurs="unbounded">
					<xsd:element name="data">
						<xsd:complexType>
							<xsd:sequence>
								<xsd:element name="value" type="xsd:string" minOccurs="0" msdata:Ordinal="1" />
								<xsd:element name="comment" type="xsd:string" minOccurs="0" msdata:Ordinal="2" />
							</xsd:sequence>
							<xsd:attribute name="name" type="xsd:string" msdata:Ordinal="1" />
							<xsd:attribute name="type" type="xsd:string" msdata:Ordinal="3" />
							<xsd:attribute name="mimetype" type="xsd:string" msdata:Ordinal="4" />
						</xsd:complexType>
					</xsd:element>
					<xsd:element name="resheader">
						<xsd:complexType>
							<xsd:sequence>
								<xsd:element name="value" type="xsd:string" minOccurs="0" msdata:Ordinal="1" />
							</xsd:sequence>
							<xsd:attribute name="name" type="xsd:string" use="required" />
						</xsd:complexType>
					</xsd:element>
				</xsd:choice>
			</xsd:complexType>
		</xsd:element>
	</xsd:schema>
	<resheader name="resmimetype">
		<value>text/microsoft-resx</value>
	</resheader>
	<resheader name="version">
		<value>1.3</value>
	</resheader>
	<resheader name="reader">
		<value>System.Resources.ResXResourceReader, System.Windows.Forms, Version=2.0.3500.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</value>
	</resheader>
	<resheader name="writer">
		<value>System.Resources.ResXResourceWriter, System.Windows.Forms, Version=2.0.3500.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</value>
	</resheader>
</root>
```

Resource.vstemplate
```xml
<?xml version="1.0" encoding="utf-8"?>
<VSTemplate Version="3.0.0" Type="Item" xmlns="http://schemas.microsoft.com/developer/vstemplate/2005">
  <TemplateData>
    <Name Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2390" />
    <Description Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2391" />
    <Icon Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="4565" />
    <TemplateID>Microsoft.CSharp.Resource.Internal</TemplateID>
    <ProjectType>CSharp</ProjectType>
    <DefaultName>Resource.resx</DefaultName>
    <Hidden>true</Hidden>
  </TemplateData>
  <TemplateContent>
    <ProjectItem OpenInEditor="false">Resource.resx</ProjectItem>
    <CustomParameters>
      <CustomParameter Name="$itemproperties$" Value="CustomTool" />
      <CustomParameter Name="$CustomTool$" Value="ResXFileCodeGenerator" />
    </CustomParameters>
  </TemplateContent>
  <WizardExtension>
    <Assembly>Microsoft.VisualStudio.Editors, Version=15.0.0.0, Culture=Neutral, PublicKeyToken=b03f5f7f11d50a3a</Assembly>
    <FullClassName>Microsoft.VisualStudio.Editors.ResourceEditor.ResxItemWizard</FullClassName>
  </WizardExtension>
</VSTemplate>
```

Settings.settings
```xml
<?xml version='1.0' encoding='utf-8'?>
<SettingsFile xmlns="http://schemas.microsoft.com/VisualStudio/2004/01/settings" CurrentProfile="(Default)">
  <Profiles>
    <Profile Name="(Default)" />
  </Profiles>
</SettingsFile>
```

Settings.vstemplate
```xml
<?xml version="1.0" encoding="utf-8"?>
<VSTemplate Version="3.0.0" Type="Item" xmlns="http://schemas.microsoft.com/developer/vstemplate/2005">
  <TemplateData>
    <Name Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2410" />
    <Description Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="2411" />
    <Icon Package="{FAE04EC1-301F-11d3-BF4B-00C04F79EFBC}" ID="4603" />
    <TemplateID>Microsoft.CSharp.Settings.Internal</TemplateID>
    <ProjectType>CSharp</ProjectType>
    <RequiredFrameworkVersion>2.0</RequiredFrameworkVersion>
    <DefaultName>Settings.settings</DefaultName>
    <Hidden>true</Hidden>
  </TemplateData>
  <TemplateContent>
		<References>
			<Reference>
				<Assembly>System</Assembly>				
			</Reference>
		</References>

    <ProjectItem OpenInEditor="false">Settings.settings</ProjectItem>
    <CustomParameters>
      <CustomParameter Name="$itemproperties$" Value="CustomTool" />
      <CustomParameter Name="$CustomTool$" Value="SettingsSingleFileGenerator" />
    </CustomParameters>
  </TemplateContent>
  <WizardExtension>
    <Assembly>Microsoft.VSDesigner, Version=16.0.0.0, Culture=Neutral, PublicKeyToken=b03f5f7f11d50a3a</Assembly>
    <FullClassName>Microsoft.VSDesigner.ProjectWizard.ItemPropertyWizard</FullClassName>
  </WizardExtension>
</VSTemplate>
```