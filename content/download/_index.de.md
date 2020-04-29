---
title: "Download Open Source Workflow Software | Camunda BPM"
date: 2017-10-25T10:39:22+02:00
draft: false
showSubNavCustom: true
mycontent: "static"
---
{{%tabs navlabels="GA Release////Preview Release" navcontrols="garelease////previewrelease"%}}

{{%nav-group control="garelease" visible="true"%}}
{{%two-columns left="Version:"%}}
  {{<variable urlvariable="releases camundabpm ce latestVersion">}}
{{%/two-columns%}}
{{%two-columns left="Release-Datum:"%}}
  {{<variable urlvariable="releases camundabpm ce releaseDate">}}
{{%/two-columns%}}
{{%two-columns left="Enthält:" mobilefullwidth="true"%}}
  {{<text-icon icon="glyphicon-ok" svg="/products/workflow-engine.svg" svg_width="55px" text="Engines">}}{{<text-icon icon="glyphicon-ok" svg="/products/tasklist.svg" svg_width="55px" text="Tasklist">}}{{<text-icon icon="glyphicon-ok" svg="/products/cockpit.svg" svg_width="55px" text="Cockpit Basic">}}
{{%/two-columns%}}
{{%two-columns left="Enthält nicht:" mobilefullwidth="true"%}}
  {{%text-icon icon="glyphicon-remove" svg="/products/cockpit.svg" svg_width="55px" text="Cockpit Full [get it here](/download/enterprise)"%}}{{%text-icon icon="glyphicon-remove" svg="/products/optimize.svg" svg_width="55px" text="Optimize [get it here](/download/enterprise)"%}}
{{%/two-columns%}}
{{%two-columns left="Lizenz:"%}}
Die Camunda Community Platform wird unter der Apache Lizenz bereitgestellt. Enthaltene Komponenten dritter Parteien bzw. in der Distribution enthaltene Application Servers werden unter ihren jeweiligen Lizenzen veröffentlicht ([Siehe Dokumentation](https://docs.camunda.org/manual/introduction/third-party-libraries/))
{{%/two-columns%}}
{{%two-columns left="Keine Garantien:"%}}
Die Camunda Community Platform enthält möglicherweise technische Fehler und wird ohne Garantien oder Gewährleistungen bereitgestellt. Die kommerziell lizensierte [Camunda Enterprise Platform](/enterprise/) ist separat verfügbar.
{{%/two-columns%}}
{{%two-columns left="Download:"%}}
{{<text-icon text="ZIP" icon="glyphicon-download-alt" linkclass="community-download" urlvariable="releases camundabpm ce zip">}} {{<text-icon text="TAR" icon="glyphicon-download-alt" linkclass="community-download" urlvariable="releases camundabpm ce tar">}}
{{%/two-columns%}}
{{%/nav-group%}}

{{%nav-group control="previewrelease"%}}
{{%two-columns left="Version:"%}}
  {{<variable urlvariable="releases camundabpm preview latestVersion">}} · <a href="{{<variable urlvariable="releases camundabpm preview releaseNotes">}}">Release Notes</a>
{{%/two-columns%}}
{{%two-columns left="Release-Datum:"%}}
{{<variable urlvariable="releases camundabpm preview releaseDate">}}
{{%/two-columns%}}
{{%two-columns left="Enthält:" mobilefullwidth="true"%}}
  {{<text-icon icon="glyphicon-ok" svg="/products/workflow-engine.svg" svg_width="55px" text="Engines">}}{{<text-icon icon="glyphicon-ok" svg="/products/tasklist.svg" svg_width="55px" text="Tasklist">}}{{<text-icon icon="glyphicon-ok" svg="/products/cockpit.svg" svg_width="55px" text="Cockpit Basic">}}
{{%/two-columns%}}
{{%two-columns left="Enthält nicht:" mobilefullwidth="true"%}}
  {{%text-icon icon="glyphicon-remove" svg="/products/cockpit.svg" svg_width="55px" text="Cockpit Full [get it here](/download/enterprise)"%}}{{%text-icon icon="glyphicon-remove" svg="/products/optimize.svg" svg_width="55px" text="Optimize [get it here](/download/enterprise)"%}}
{{%/two-columns%}}
{{%two-columns left="Lizenz:"%}}
Die Camunda Community Platform wird unter der Apache Lizenz bereitgestellt. Enthaltene Komponenten dritter Parteien bzw. in der Distribution enthaltene Application Servers werden unter ihren jeweiligen Lizenzen veröffentlicht ([Siehe Dokumentation](https://docs.camunda.org/manual/introduction/third-party-libraries/))
{{%/two-columns%}}
{{%two-columns left="Keine Garantien:"%}}
Die Camunda Community Platform enthält möglicherweise technische Fehler und wird ohne Garantien oder Gewährleistungen bereitgestellt. Die kommerziell lizensierte [Camunda Enterprise Platform](/enterprise/) ist separat verfügbar.
{{%/two-columns%}}
{{%two-columns left="Download:"%}}
{{<text-icon text="ZIP" icon="glyphicon-download-alt" urlvariable="releases camundabpm preview zip">}} {{<text-icon text="TAR" icon="glyphicon-download-alt" urlvariable="releases camundabpm preview tar">}}
{{%/two-columns%}}
{{%/nav-group%}}
{{%/tabs%}}


<div class="full-width dark-bg inner-shadow-top">
  <div class="container">
    <h2 class="light lead text-center" style="margin-top:80px">Installation</h2>
{{%list-group%}}{{%list-item-numbered itemnumber="1" %}}
#### Downloaden und Entpacken
In dieser Distro ist Camunda in einem Apache Tomcat vorinstalliert. Im [Installation Manual](https://docs.camunda.org/manual/installation/) werden alternative Setups beschrieben.
{{%/list-item-numbered%}}{{%list-item-numbered itemnumber="2" %}}
#### Camunda hochfahren
start-camunda.bat (Windows) oder start-camunda.sh (Linux)
{{%/list-item-numbered%}}{{%list-item-numbered itemnumber="3" %}}
#### Ausprobieren
http://localhost:8080/camunda-welcome/index.html öffnen und das bereits deployte Beispiel ("Invoice") ausprobieren.
{{%/list-item-numbered%}}{{%list-item-numbered itemnumber="4" %}}
#### Eigenen Workflow bauen
Einfach die [getting started page](https://docs.camunda.org/get-started/quick-start/) lesen oder die Video-Reihe [Niall and his hawk](/learn/videos) anschauen.
{{%/list-item-numbered%}}{{%list-item-numbered itemnumber="5" %}}
#### Mit Kollegen zusammenarbeiten
In [Cawemo](/products/cawemo) mit allen Kollegen zusammen Workflows modellieren und sich abstimmen.
{{%/list-item-numbered%}}
{{%/list-group%}}
</div>
</div>
