---
title: "Camunda Modeler - BPMN, CMMN und DMN Dateien erstellen"
date: 2017-10-25T10:39:22+02:00
draft: false
showSubNavCustom: true
mycontent: "static"
---
<div style="margin-top:50px"></div>
{{%two-columns left="Version:"%}}
  {{<variable urlvariable="releases modeler latestVersion">}}
{{%/two-columns%}}
{{%two-columns left="Release-Datum:"%}}{{<variable urlvariable="releases modeler releaseDate">}}{{%/two-columns%}}
{{%two-columns left="Unterstützt:"%}}{{<text-icon icon="glyphicon-ok" text="BPMN">}}{{<text-icon icon="glyphicon-ok" text="DMN">}}{{<text-icon icon="glyphicon-ok" text="CMMN">}}{{%/two-columns%}}
{{%two-columns left="Download:"%}}
  <a class="modeler-download" href="{{<variable urlvariable="releases modeler baseUrl">}}{{<variable urlvariable="releases modeler latestVersion">}}/camunda-modeler-{{<variable urlvariable="releases modeler latestVersion">}}-mac.zip">{{<text-icon text="Mac OS .zip" icon="glyphicon-download-alt">}}</a>
  <a class="modeler-download" href="{{<variable urlvariable="releases modeler baseUrl">}}{{<variable urlvariable="releases modeler latestVersion">}}/camunda-modeler-{{<variable urlvariable="releases modeler latestVersion">}}-mac.dmg">{{<text-icon text="Mac OS .dmg" icon="glyphicon-download-alt">}}</a>

  <a href="{{<variable urlvariable="releases modeler baseUrl">}}{{<variable urlvariable="releases modeler latestVersion">}}/camunda-modeler-{{<variable urlvariable="releases modeler latestVersion">}}-win-ia32.zip">{{<text-icon text="Windows 32bit" icon="glyphicon-download-alt">}}</a>
  <a href="{{<variable urlvariable="releases modeler baseUrl">}}{{<variable urlvariable="releases modeler latestVersion">}}/camunda-modeler-{{<variable urlvariable="releases modeler latestVersion">}}-win-x64.zip">{{<text-icon text="Windows 64bit" icon="glyphicon-download-alt">}}</a>

  <a class="modeler-download" href="{{<variable urlvariable="releases modeler baseUrl">}}{{<variable urlvariable="releases modeler latestVersion">}}/camunda-modeler-{{<variable urlvariable="releases modeler latestVersion">}}-linux-ia32.tar.gz">{{<text-icon text="Linux 32bit" icon="glyphicon-download-alt">}}</a>
  <a class="modeler-download" href="{{<variable urlvariable="releases modeler baseUrl">}}{{<variable urlvariable="releases modeler latestVersion">}}/camunda-modeler-{{<variable urlvariable="releases modeler latestVersion">}}-linux-x64.tar.gz">{{<text-icon text="Linux 64bit" icon="glyphicon-download-alt">}}</a>
{{%/two-columns%}}

<h2 class="light lead text-center" style="margin-top:80px">Erste Schritte</h2>

{{%list-group%}}{{%list-item-numbered itemnumber="1" %}}
#### Downloaden und Entpacken
Den Download einfach in einem Ordner Ihrer Wahl entpacken. Eine spezielle Installation ist nicht notwendig.
{{%/list-item-numbered%}}{{%list-item-numbered itemnumber="2" %}}
#### Camunda Modeler öffnen
`Camunda Modeler.exe` (Windows), `Camunda Modeler.app` (Mac) oder `camunda-modeler` (Linux).
{{%/list-item-numbered%}}{{%list-item-numbered itemnumber="3" %}}
#### Eigenen Workflow bauen
Einfach die [getting started page](https://docs.camunda.org/get-started/quick-start/) lesen oder die Video-Reihe [Niall and his hawk](/learn/videos) anschauen.
{{%/list-item-numbered%}}
{{%/list-group%}}
