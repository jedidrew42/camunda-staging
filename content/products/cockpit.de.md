---
title: "Cockpit"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---
{{<highlight-visual title="Cockpit" svg="/products/cockpit.svg" svg_width="20%">}}
Workflows und Entscheidungen im Produktivbetrieb überwachen, um technische Probleme zu erkennen, zu analysieren und zu beheben.
{{</highlight-visual>}}

{{%list-item title="Probleme erkennen" img="https://docs.camunda.org/manual/7.7/webapps/cockpit/img/cockpit-process-definitions-view.png" img_shadow="true" img_width="100%" %}}
Cockpit stellt ein Dashboard bereit, mit dem Sie jederzeit sofort erkennen können, ob Ihre BPMN-Prozesse reibungslos funktionieren. Sie können einzelne Prozessinstanzen zudem auch über eine mächtige Suchfunktion schnell auffinden.

Technische Probleme werden in der Übersicht direkt hervorgehoben. Sie können das Problem genauer untersuchen, um die Ursache zu entdecken.

Einige typische Beispiele für technische Probleme:

* Eine Aufgabe in einem Workflow hat versucht einen API Service aufzurufen, aber einen Timeout erhalten, oder der API Service hat eine Fehlermeldung zurückgegeben, oder auch fehlerhafte Daten.
* Eine technische Expression an einem conditional flow (an einem Gateway), oder in einem Event-Attribut oder ähnlichem ist fehlgeschlagen, weil erwartete Daten gefehlt haben.
* Bei der Ausführung von Java Code, der durch einen Service Task aufgerufen wurde, wurde eine Exception geworfen.
* In einem Subprocess wurde ein BPMN Error Event geworfen.


{{%/list-item%}}

{{%list-item title="Probleme analysieren" img="https://docs.camunda.org/manual/webapps/cockpit/img/cockpit-decision-instance-view.png" img_shadow="true" img_width="100%"  %}}
Um die Ursache für ein technisches Workflow-Problem zu finden, müssen Sie häufig die Prozessausführung nachvollziehen, die vor dem Auftreten des Problems stattgefunden hat.

Ein Beispiel: Ein technischer Ausdruck an einem Gateway Branch ist vielleicht deshalb fehlgeschlagen, weil fünf Schritte zuvor bei einer Variable ein falscher Wert gesetzt wurde, was wiederum an einem fehlerhaften Design einer DMN-Entscheidungstabelle lag, die zu diesem Zeitpunkt im Workflow aufgerufen wurde.

Mit Cockpit könnten Sie einen solchen Zusammenhang schnell erkennen, in dem Sie

* das [BPMN Audit Log](https://docs.camunda.org/manual/webapps/cockpit/bpmn/process-history-views/#process-instance-history-view) der ausgeführten Schritte untersuchen,
* die Änderungen prüfen, die an Prozessvariablen in den jeweiligen Schritten vorgenommen wurden
* und indem Sie die [Historie der DMN-Ausführungen](https://docs.camunda.org/manual/webapps/cockpit/dmn/decision-instance-view/) betrachten, um zu sehen welche Regeln in der konkreten Prozessinstanz zur Anwendung kamen.
{{%/list-item%}}

{{%list-item title="Probleme beheben" img="https://docs.camunda.org/manual/webapps/cockpit/img/migration/step1_overview.png"  img_shadow="true" img_width="100%"  %}}
Sobald Sie die Ursache des Problems gefunden haben, können Sie

* [Den Prozess anhalten ("suspend")](https://docs.camunda.org/manual/webapps/cockpit/bpmn/suspension/) um weitere Ausführungen solange zu pausieren, bis die Ursache beseitigt wurde,
* [Prozessvariablen hinzufügen, bearbeiten oder löschen](https://docs.camunda.org/manual/webapps/cockpit/bpmn/process-instance-view/#add-variables),
* [Den aktuellen Stand verändern](https://docs.camunda.org/manual/webapps/cockpit/bpmn/process-instance-modification/), d.h. bei einer oder mehrerer Prozessinstanzen dafür sorgen, dass sie an eine andere Stelle im Prozessmodell "springen",
* [Eine Migration vornehmen](https://docs.camunda.org/manual/webapps/cockpit/bpmn/process-instance-migration/), um eine oder mehrere Prozessinstanzen in einer neuen Version des Prozessmodells fortzusetzen,
* [Entscheidungstabellen bearbeiten](https://docs.camunda.org/manual/webapps/cockpit/dmn/live-editing/), ohne ein komplettes Redeployment vornehmen zu müssen,
* [Prozessinstanzen abbrechen](https://docs.camunda.org/manual/webapps/cockpit/bpmn/process-instance-view/#cancel-a-process-instance),
* [Die technische Ausführung erneut anstoßen](https://docs.camunda.org/manual/webapps/cockpit/bpmn/failed-jobs/).

{{%/list-item%}}

{{%list-item title="Benutzerverwaltung" img="https://docs.camunda.org/manual/webapps/admin/img/admin-initial-user-setup.png" img_width="100%" %}}
Mit Camunda Admin können Sie Benutzer verwalten, in Gruppen organisieren und Zugriffsrechte vergeben. Camunda trennt hierbei zwischen der Authentifizierung eines Benutzers, und der Autorisierung zur Ausführung bestimmter Aktionen.

Zur Authentifizierung can Sie entweder das User Management verwenden, das mit Camunda ausgeliefert wird, oder Ihr internes User Management via LDAP anbinden. Sobald sich ein User identifiziert hat (z.B. in dem er sich in eine Camunda Web-Anwendung einloggt), wird Camunda ihm Zugriffsrechte auf Basis der Konfiguration in Camunda Admin erteilen.

Die in Camunda Admin vergebenen Zugriffsrechte wirken sich auf allen Ebenen aus, egal ob Sie die Engines via Java API, oder via REST API, oder über die Camunda-Anwendungen aufrufen.
{{%/list-item%}}


<center id="features" style="margin-bottom: 50px; margin-top:150px;">
<h2 class="light lead">Community vs. Enterprise</h2>
<p class="light lead" style="width:60%">Cockpit ist in der Open Source Community Platform mit einigen Basis-Features enthalten. Die volle Funkionalität von Cockpit ist mit der Enterprise Platform verfügbar.</p>
</center>
{{<cockpit>}}
