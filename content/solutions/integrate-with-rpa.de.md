---
title: "Integration mit Robotic Process Automation | Camunda BPM"
description: "Camunda BPM kann mit RPA Produkten integriert werden, um das Management und Monitoring von End-to-End-Prozessen zu ermöglichen."
date: 2018-05-25T12:00:00+02:00
draft: false
contact: true
---

{{<highlight title="Integration mit RPA" btn="Mit einem Experten sprechen" btnlink="#contact">}}
Integrieren Sie Camunda BPM mit Ihrem Robotic Process Automation Produkt, um End-to-End Geschäftsprozesse zu definieren, auszuführen und auszuwerten.
{{</highlight>}}

<div style="margin-top:100px"></div>

{{%list-item title="RPA & Das End-to-End-Problem" img="/img/solutions/05-rpa-robot-confused-top.svg" img_width="50%" %}}

Robotic Process Automation (RPA) ist ein Trend-Thema, und die zugrunde liegende Idee ist in der Tat ansprechend: Die Möglichkeit, zeitraubende, wenig kreative Tätigkeiten wie das Erfassen von Daten in einer Maske zu automatisieren, auch wenn die entsprechende Anwendung keinerlei Schnittstellen oder API für eine technische Integration bietet.

In solchen Situationen kann der Einsatz von RPA - zumindest vorübergehend - eine adäquate Lösung ein. Allerdings bleibt eine wichtige Frage unbeantwortet: Wie wird der Geschäftsprozess, in dessen Verlauf die Daten erfasst werden müssen, insgesamt gesteuert und überwacht? Eine solche ganzheitliche Betrachtung des Prozesses wird auch "End-to-End" genannt, also "Von einem Ende zum anderen", und RPA-Produkte alleine können dieses Problem nicht lösen:

RPA konzentriert sich auf Aufgaben, in denen ein Mitarbeiter mit einem Anwendungssystem interagieren muss. In der End-to-End-Betrachtung des Prozesses kommen solche Aufgaben vor, aber es finden auch zahlreiche andere Aktivitäten statt.

Ein Beispiel: Bei der Abwicklung eines Bestellprozesses könnten folgende Aktivitäten stattfinden, die in einem RPA-Produkt typischerweise nicht betrachtet werden:

* Aufgaben, die durch ein Anwendungssystem automatisch erledigt werden, und die über eine API angestoßen werden können (z.B. das Anstoßen der Rechnungsstellung in SAP).
* Aufgaben, die durch Mitarbeiter direkt, ohne Interaktion mit einer Anwendung, erledigt werden können und müssen (z.B. das manuelle Prüfen der Bestelldaten).
* Ereignisse, die einen Prozess auslösen (z.B. die eingehende Bestellung), auf die wir im Prozessverlauf warten (z.B. den Zahlungseingang) oder die unerwartet passieren können (z.B. Die Stornierung der Bestellung).

Das Management des End-to-end-Prozesses erfordert, all diese Aktivitäten zu steuern bzw. auf entsprechende Ereignisse zu reagieren. RPA-Produkte spielen in solchen Prozessen eine wichtige Rolle, aber eben als Baustein und nicht als Gesamtlösung. Der isolierte Einsatz eines RPA-Produktes birgt daher das Risiko, den Prozess insgesamt nicht ausreichend im Griff zu haben.

Camunda BPM kann mit RPA-Produkten leicht integriert werden, um von RPA bei der Prozessabwicklung zu profitieren, ohne den Gesamtprozess aus den Augen zu verlieren.

{{%/list-item%}}

{{%list-item title="End-to-end Automatisierung mit Camunda BPM und RPA" img="/img/solutions/05-rpa-high-five-middle.svg" img_width="50%"  %}}

Camunda BPM ist eine leichtgewichtige Workflow Engine für die Modellierung, Ausführung und Überwachung von End-to-End-Geschäftsprozessen.

Sie können Camunda BPM auf unterschiedliche Arten mit Ihrem RPA-Produkt integrieren bzw. diese Integration durch unser Team vornehmen lassen. Technisch gesprochen kann Camunda BPM Ihr RPA-Produkt direkt über dessen API aufrufen, oder über das [External Task Pattern](https://docs.camunda.org/manual/user-guide/process-engine/external-tasks/) mit dem RPA-Produkt asynchron kommunizieren, um auch länger laufende Prozeduren in den Gesamtprozess zu integrieren. Umgekehrt kann auch Camunda BPM durch jedes RPA-Produkt mit Hilfe der Camunda REST API problemlos angesprochen werden.

Dank Veröffentlichung unter der Apache 2.0 Open Source Lizenz reduziert sich Ihre Abhängigkeit vom Hersteller, während Sie gleichzeitig über einen Lizenzvertrag eine Enterprise-Fassung von Camunda BPM erhalten können, die hilfreiche zusätzliche Tools und bis 24/ Support bereit stellt.

Camunda BPM ist auch für Fachanwender wertvoll:

* Camunda BPM unterstützt den ISO-Standard [BPMN 2.0](/bpmn/), der sich als gemeinsame Sprache für Business Analysts und Softwarentwickler etabliert hat.
* [Cawemo](/products/cawemo/) ermöglicht Business Analysten mit allen Projektbeteiligten kollaborativ BPMN Prozessdiagramme für die Ausführung zu spezifizieren.
* Mit dem [Camunda Modeler](/products/modeler/) können Entwickler BPMN Prozessdiagramme und DMN Entscheidungstabellen technisch ausführbar machen.
* [Camunda Optimize](/products/optimize/) stellt ein Live-Monitoring und Reports für alle relevanten Stakeholder bereit, so dass keine Fragen zu den automatisierten Prozessen unbeantwortet bleiben.

{{%/list-item%}}

<hr>
<div class="row">
	<div class="col-md-10">
		<h2 class="light lead" style="margin-top: 0px;">Blog Post: End-To-End Workflow Automation with RPA and Camunda BPM</h2>
		<p>Many Camunda users have asked us how to think about RPA in the context of workflow automation, and so in this write-up, we’ll share how we think about combining RPA and Camunda BPM to get the most out of both tools.</p>
		<p><a href="https://blog.camunda.com/post/2018/05/combining-bpm-rpa-workflow-automation/">Read Full Blog Post</a></p>
	</div>
</div>
<hr>

{{%list-item title="Wir helfen gern" img="/img/solutions/consulting.svg" img_width="50%"  %}}

Wenn Sie eine Integration Ihres RPA-Produkts mit Camunda BPM erwägen, können Sie auf unsere Unterstützung zählen. Wir können Sie von den ersten Architekturdiskussionen über die Implementierung bis hin zum Go-Live begleiten, so dass Sie von unseren umfangreichen Projekterfahrungen profitieren können.

Die [Camunda Enterprise Platform](/de/enterprise/) ist mit zusätzlichen Features, Tools und bis zu 24x7 Support verfügbar, um Ihren Betrieb abzusichern.

[Kontaktieren Sie uns](#contact), um zu besprechen, wie Camunda BPM bei Ihnen eingesetzt werden könnte.


{{%/list-item%}}
