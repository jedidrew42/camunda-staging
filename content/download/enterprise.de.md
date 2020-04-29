---
title: "Camunda Enterprise Platform Download - 30 Day Trial | Camunda BPM"
description: "Klicken Sie hier, um Ihre kostenlose Testversion die Camunda Business Process Management-Software zu erhalten. Camunda ist der Marktführer für Workflow-Automatisierung und BPM. Holen Sie sich heute Ihre 30-Tage-Testversion."
date: 2017-10-25T10:39:22+02:00
draft: false
showSubNavCustom: true
mycontent: "static"
---

{{%tabs navlabels="GA Release////Preview Release" navcontrols="garelease////previewrelease"%}}

{{%nav-group control="garelease" visible="true"%}}

<!-- The code for version and last release date is at the bottom in comment-->

{{%two-columns left="Enthält:" mobilefullwidth="true"%}}
  {{<text-icon icon="glyphicon-ok" svg="/products/workflow-engine.svg" svg_width="55px" text="Engines">}}{{<text-icon icon="glyphicon-ok" svg="/products/tasklist.svg" svg_width="55px" text="Tasklist">}}{{<text-icon icon="glyphicon-ok" svg="/products/cockpit.svg" svg_width="55px" text="Cockpit Full">}}{{<text-icon icon="glyphicon-ok" svg="/products/cawemo.svg" svg_width="55px" text="Cawemo">}}{{<text-icon icon="glyphicon-ok" svg="/products/optimize.svg" svg_width="55px" text="Optimize">}}
{{%/two-columns%}}
{{%two-columns left="Download:"%}}
{{%ee-download firstname="Vorname" type="ga" %}}
Diese Enterprise Distribution wird mit einem Trial License Key ausgeliefert, der 30 Tage gültig ist. Wenn Sie diese Software herunter laden, erklären Sie sich mit den adsasdasd [AGB für die Camunda Enterprise Testlizenz](/de/legal/terms/trial/) und unserer [Datenschutzerklärung](/de/legal/privacy/) einverstanden.
Ein kostenloser Test von Cawemo ist auf [cawemo.com](https://cawemo.com/signup) möglich.
{{%/ee-download%}}
{{%/two-columns%}}
{{%/nav-group%}}

{{%nav-group control="previewrelease"%}}

{{%two-columns left="Release-Datum:"%}}
  {{<variable urlvariable="releases camundabpm preview releaseDate">}}
{{%/two-columns%}}
{{%two-columns left="Enthält:" mobilefullwidth="true"%}}
  {{<text-icon icon="glyphicon-ok" svg="/products/workflow-engine.svg" svg_width="55px" text="Engines">}}{{<text-icon icon="glyphicon-ok" svg="/products/tasklist.svg" svg_width="55px" text="Tasklist">}}{{<text-icon icon="glyphicon-ok" svg="/products/cockpit.svg" svg_width="55px" text="Cockpit Full">}}{{<text-icon icon="glyphicon-ok" svg="/products/cawemo.svg" svg_width="55px" text="Cawemo">}}{{<text-icon icon="glyphicon-ok" svg="/products/optimize.svg" svg_width="55px" text="Optimize">}}
{{%/two-columns%}}
{{%two-columns left="Download:"%}}
{{%ee-download firstname="Vorname asdas" type="preview" %}}
Diese Enterprise Distribution wird mit einem Trial License Key ausgeliefert, der 30 Tage gültig ist. Wenn Sie diese Software herunter laden, erklären Sie sich mit den [AGB für die Camunda Enterprise Testlizenz](/de/legal/terms/trial/) und unserer [Datenschutzerklärung](/de/legal/privacy/) einverstanden.
<!--Ein kostenloser Test von Cawemo ist auf [cawemo.com](https://cawemo.com/signup) möglich.-->
{{%/ee-download%}}
{{%/two-columns%}}
{{%/nav-group%}}
{{%/tabs%}}

<div class="full-width dark-bg inner-shadow-top">
  <div class="container">
    <h2 class="light lead text-center" style="margin-top:80px">Installation</h2>
{{%list-group%}}{{%list-item-numbered itemnumber="1" %}}
#### Downloaden und Entpacken
In dieser Distro ist Camunda in Apache Tomcat vorinstalliert. Im [Installation Manual](https://docs.camunda.org/manual/installation/) werden alternative Setups beschrieben.
{{%/list-item-numbered%}}{{%list-item-numbered itemnumber="2" %}}
#### Camunda hochfahren
start-camunda.bat (Windows) oder start-camunda.sh (Linux)
{{%/list-item-numbered%}}{{%list-item-numbered itemnumber="3" %}}
#### Ausprobieren
http://localhost:8080/camunda-welcome/index.html öffnen und das bereits deployte Beispiel ("Invoice") ausprobieren.
{{%/list-item-numbered%}}{{%list-item-numbered itemnumber="4" %}}
#### Eigenen Workflow bauen
Einfach die [getting started page](https://docs.camunda.org/get-started/quick-start/) lesen oder die Video-Reihe [Niall and his hawk](/de/learn/videos) anschauen.
{{%/list-item-numbered%}}{{%list-item-numbered itemnumber="5" %}}
#### Mit Kollegen zusammenarbeiten
In [Cawemo](/products/cawemo) mit allen Kollegen zusammen Workflows modellieren und sich abstimmen.
{{%/list-item-numbered%}}{{%list-item-numbered itemnumber="6" %}}
#### Mehr über die eigenen Workflows erfahren
Im [getting started with Optimize](/de/learn/videos/getting-started-optimize/) Video erfahren, wie man Optimize in weniger als 5 Minuten installieren und nutzen kann.
{{%/list-item-numbered%}}
{{%/list-group%}}
</div>
</div>
<!--
{{%two-columns left="Version:"%}}
  {{<variable urlvariable="releases camundabpm ee latestVersion">}}
{{%/two-columns%}}
{{%two-columns left="Release-Datum:"%}}
  {{<variable urlvariable="releases camundabpm ee releaseDate">}}
{{%/two-columns%}}
-->
