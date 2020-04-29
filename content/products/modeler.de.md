---
title: "Modeler"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---
{{<highlight-visual title="Modeler" svg="/products/modeler.svg" svg_width="20%">}}
Ein leicht bedienbarer Editor für<br> BPMN-Prozessmodelle und DMN-Entscheidungstabellen.
{{</highlight-visual>}}

{{%list-item title="Workflows und Entscheidungen modellieren" img="https://docs.camunda.org/manual/modeler/camunda-modeler/bpmn/img/demo.gif" img_shadow="true" img_width="100%" %}}
Dank der einfachen Bedienbarkeit können Softwareentwickler den Camunda Modeler nutzen, um Prozessmodelle und Entscheidungstabellen gemeinsam zu entwickeln.

Der Modeler unterstützt BPMN 2.0, CMMN 1.1 und DMN 1.1 (inklusive Entscheidungstabellen und Decision Requirements Diagrams).

<a href="/download/modeler" class="btn btn-primary">Download</a>

{{%/list-item%}}

{{%list-item title="Modelle technisch ausführen" img="https://docs.camunda.org/manual/modeler/camunda-modeler/bpmn/img/quickstart-3.png" img_shadow="true" img_width="100%" %}}
Neben der grafischen Modellierung erlaubt der Modeler auch die Bearbeitung aller Attribute, die für die technische Ausführung erforderlich sind. Der Modeler arbeitet dabei stets direkt auf den XML-Formaten, die vom BPMN- bzw DMN-Standard vorgegeben sind. Dadurch können Sie den Modeler problemlos in Kombination mit Ihrer IDE (z.B. Eclipse, Netbeans, IntelliJ) kombinieren.

Der erzeugten XML-Dateien können auf die Camunda Platform deployed werden, um von der BPMN- bzw. DMN-Engine ausgeführt zu werden.
{{%/list-item%}}

{{%list-item title="Element Templates" img="/svg/products/element-templates.png" img_shadow="true" img_width="100%" %}}
Mit Hilfe von Element Template können Sie schnell und einfach eigene BPMN-Elemente definieren, die die vorhandenen Symbole um zusätzliche Attribute ergänzen. Die entsprechende Definition dieser eigenen Attribute erfolgt in einer JSon-Datei. Im Ergebnis erhält der Anwender ein erweitertes Properties Panel.

Dadurch können Sie z.B. einen "Email Task" definieren, der den BPMN Send Task erweitert und im Properties Panel die Eingabe einer Empfänger-Adresse, ein Subject und einen Body erfordert. Die entsprechenden Eingaben werden mit der BPMN-Datei auf die Camunda Platform deployed, die den Task mit einer vordefinierten Execution Logic ausführt, z.B. in Java.

Auf diese Weise können Sie eigene Low-Code-Plattformen entwerfen, um die Entwicklung und Anpassung von Workflows in Ihrer Organisation zu vereinfachen.

[Element Templates Dokumentation](https://github.com/camunda/camunda-modeler/tree/master/docs/element-templates)
{{%/list-item%}}

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">Eigene Plugins</h2>
      </header>
      <div class="row">
        <div class="col-md-6">
        	<p>
          Sie können ganz eigene Plugins entwickeln, um den Modeler um zusätzliche Funktionen und Menü-Einträge zu ergänzen, oder um das Erscheinungsbild zu customizen.
</p>
<p>Sie fügen dem Modeler Ihr Plugin einfach hinzu, in dem Sie Ihre Plugin-Datei in das entsprechende Verzeichnis legen.
        	</p>
        	<p><a href="https://github.com/camunda/camunda-modeler-plugins#camunda-modeler-plugins-electric_plug">Liste verfügbarer Plugins</a></p>
        </div>
        <div class="col-md-6" >
			<blockquote class="twitter-tweet" data-lang="de"><p lang="en" dir="ltr">Token Simulation v0.6.0 is here. It ships with lots of improvements. Get the Camunda Modeler plugin: <a href="https://t.co/YR3ZJKIxoH">https://t.co/YR3ZJKIxoH</a> <a href="https://t.co/jAa1biPibZ">pic.twitter.com/jAa1biPibZ</a></p>&mdash; Philipp Fromme (@philippfromme) <a href="https://twitter.com/philippfromme/status/909449520676818944?ref_src=twsrc%5Etfw">17. September 2017</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    </div>
</section>
