---
title: "End-to-End Process Automation Überwachung, Reporting und Optimierung | Camunda BPM"
description: "End-to-End Process Automation Überwachung und Reporting: Reports, Alerting und Analytics."
date: 2020-04-21T10:39:22+02:00
draft: false
showProductSubnav: true
contact: true
---

{{<highlight title="Optimize">}}
  End-to-End Process Automation Monitoring und Reporting
  <p style="margin-top:30px">
    <a href="/de/download/enterprise/" class="btn btn-primary">Jetzt umsonst ausprobieren</a>
  </p>
  <p>
  <div style="text-align: center;">
      <div style="display: inline-block; text-align: left;"><br>
        <li>Überwachen Sie Camunda und externe Prozessautomatisierungsaktivitäten</li>
        <li>Detaillierte Berichte zur Beantwortung der für Ihr Team wichtigsten Fragen </li>
        <li>Sehen Sie mit BPMN Heatmaps wo End-to-End-Prozesse reibungslos ablaufen oder auf Engpässe stoßen</li>
        <li>Verbessern Sie die Prozessanalyse und identifizieren Sie langsame Prozesszweige</li>
        <li>Erstellen Sie benutzerdefinierte Dashboards und Warnungen, um stets über die aktuellen Aktivitäten informiert zu sein.</li>
      </div>
  </div>
  </p>
{{</highlight>}}

{{%list-item title="Business Activity Monitoring" video="https://www.youtube.com/embed/GGQ4hstOneA?rel=0&amp;&amp;showinfo=0" %}}
Camunda Optimize unterstützt die kontinuierliche Verbesserung Ihrer Prozesse sowie Entscheidungstabellen durch verständliche Darstellung der Prozess-Leistung und Schwachstellenanalyse direkt auf dem BPMN-Prozessdiagramm bzw. der DMN-Entscheidungstabelle. Business-friendly Reports und Dashboards sowie Alerts helfen Ihnen dabei Flaschenhälse im Prozess kurzfristig zu erkennen und den gesamten Prozess zu verbessern.

Optimize funktioniert out-of-the-box und die Installation ist sehr einfach. In den nachfolgenden Abschnitten können Sie mehr über Optimize erfahren.
{{%/list-item%}}

{{%list-item title="Reports" img="/img/products/optimize/reports.png" img_shadow="true" img_width="100%" %}}
Mit Optimize können Ihre Stakeholder schnell und einfach eigene Reports erstellen und anpassen.

Sie können beispielsweise die Anzahl der gestarteten Prozessinstanzen pro Tag anzeigen, oder die durchschnittliche Durchlaufzeit der Prozesse.

Reports können mit anderen geteilt werden, selbst wenn diese nicht in Optimize angemeldet sind. Sie können Reports auch in andere Webseiten wie z.B. Atlassian Confluence einbetten, um sie weiteren Zielgruppen zugänglich zu machen.

Über den CSV-Export können Sie die Report-Daten in weiteren Tools wie Microsoft Excel bearbeiten.

[Finden Sie mehr über Reports heraus](/de/products/optimize/reports).
{{%/list-item%}}

{{%list-item title="Prozesse filtern" img="/img/products/optimize/filter.png" img_shadow="true" img_width="100%" %}}
Mit Hilfe von Filtern lassen sich die Prozessinstanzen und die Evaluierungen von Entscheidungstabellen in einem Report bequem eingrenzen.

Sie können einen Report beispielsweise auf Prozessinstanzen fokussieren, die

* momentan laufen, abgeschlossen oder (nicht) abgebrochen wurden.
* in einem bestimmten Zeitraum gestartet oder abgeschlossen wurden, z.B. in den letzten 7 Tagen oder 24 Stunden.
* zur Abarbeitung länger als eine definierte Zeitspanne benötigt haben, wodurch Sie Performance-Defizite aufdecken können.
* Variablen mit bestimmten Werten enthalten, welche Sie in einem Dialog bequem auswählen können.
* bestimmte Schritte durchlaufen haben, sodass Sie Ihren Report auf unterschiedliche Prozessvarianten beziehen können.

{{%/list-item%}}


{{%list-item title="BPMN-Heatmaps" img="/img/products/optimize/heatmap.png" img_shadow="true" img_width="100%" %}}
BPMN ist die gemeinsame Sprache für Business und IT und das perfekte Instrument, um Prozessdaten zu analysieren.

In Optimize können Sie anhand von BPMN-Heatmaps erkennen, welche Prozess-Schritte besonders häufig durchlaufen werden oder besonders langsam in der Abarbeitung sind - ein direkter Hinweis auf mögliche Flaschenhälse im Prozess.

In Kombination mit Filtern können Sie auf diese Weise schnell erkennen, unter welchen Umständen Performance-Defizite auftreten und Hinweise auf mögliche Ursachen erhalten.
{{%/list-item%}}

{{%list-item title="Dashboards" img="/img/products/optimize/dashboard.png" img_shadow="true" img_width="100%" %}}
Stellen Sie Ihre Reports in Dashboards zusammen, um einen schnellen Überblick zu erhalten. Wenn Sie möchten, können Sie sogar externe Reports auf den Dashboards platzieren. Sie können unbegrenzt viele Dashboards einrichten, um Ihren jeweiligen Stakeholdern die passenden Informationen bereit zu stellen.

Dashboards können mit anderen geteilt werden, selbst wenn diese nicht in Optimize angemeldet sind. Sie können Dashboards auch in andere Webseiten wie z.B. Atlassian Confluence einbetten, um sie weiteren Zielgruppen zugänglich zu machen.
{{%/list-item%}}

{{%list-item title="Alerts" img="/img/products/optimize/alert.png" img_shadow="true" img_width="70%" %}}
Möglicherweise wollen Ihre Stakeholder sofort informiert werden, wenn bestimmte Schwellwerte erreicht oder überschritten wurden. Zu diesem Zweck können Sie Alerts auf Basis von Reports konfigurieren.

Sie könnten zum Beispiel einen Report definieren der die Prozessinstanzen zählt, die in den letzten 24 Stunden gestartet, aber noch nicht abgeschlossen wurden. Dann könnten Sie einen Alert einrichten, der jede Minute prüft, ob der Report mehr als 100 Prozessinstanzen zählt. In diesem Fall würde der Alert eine Email an den hinterlegten Empfänger schicken und, falls gewünscht, diesen in regelmäßigen Abständen erinnern sowie eine Nachricht schicken, wenn das Problem behoben wurde und die Anzahl wieder unter den definierten Schwellwert gesunken ist.
{{%/list-item%}}

{{%list-item title="Prozessvarianten analysieren" img="/img/products/optimize/branch.png" img_shadow="true" img_width="100%" %}}
Wie wirken sich bestimmte Varianten im Prozess auf die Ergebnisse aus? Diese Frage lässt sich mit dem Feature "Branch Analysis" beantworten, indem Sie ein Prozess-Endereignis und ein Gateway auswählen. Optimize wird dann die statistische Wahrscheinlichkeit errechnen, mit der eine Prozessinstanz, die einen bestimmten Gateway-Pfad durchlaufen hat, zu dem definierten Endereignis gelangen wird.

In diesem Beispiel betrachten wir Stellen-Bewerbungen, die wir als Unternehmen erhalten haben. Die meisten Bewerbungen werden automatisch einem Hiring Manager zugewiesen, ein Teil muss jedoch manuell zugewiesen werden. Diese beiden Varianten sind über das Gateway (Rautensymbol) dargestellt, aus dem zwei Pfade herausführen. Unglücklicherweise beschließen Bewerber immer mal wieder, ihre Bewerbung zurück zu ziehen, was durch den Ereignis-Teilprozess dargestellt wird. In diesem Beispiel ist dieser Negativ-Fall immerhin bei 19,7% aller Bewerbungen aufgetreten.

Optimize teilt uns jedoch mit dass die Quote der Absagen bei rund 24% lag, wenn die Bewerbungen manuell zugewiesen wurden, und bei rund 18%, wenn sie automatisch zugewiesen wurden. Offenbar sollten wir sämtliche Bewerbungen automatisch zuweisen, um den Prozessablauf zu beschleunigen und das Risiko der Absagen zu reduzieren.

{{%/list-item%}}

{{%list-item title="Untersuchen Sie Ihre eigenen Daten" img="/img/products/optimize/optimize-architecture.png" img_width="80%" %}}
Optimize kann sehr einfach installiert werden, ohne Ihre Camunda-Umgebung zu beeinflussen: Das Tool verbindet sich mit der Camunda REST API, um die historischen Daten zu importieren und diese in einem Big Data Repository (Elasticsearch) zu speichern. Nach dem erstmaligen Import wird Optimize in konfigurierbaren Intervallen neue Daten aus Camunda laden, wodurch stets aktuelle Daten vorhanden sind. Wenn historische Daten in Camunda gelöscht werden, so werden diese nicht automatisch in Optimize gelöscht. Dadurch ist es möglich Reports auf Basis historischer Informationen zu erstellen, obwohl diese bereits aus der Camunda Datenbank gelöscht wurden.

Sie können den Datenimport selbst anpassen, um die zu ladenden Daten einzuschränken oder zu erweitern. Auf diese Weise können Sie beispielsweise zusätzliche Daten laden, die sich in anderen Quellen befinden, aber den Prozessinstanzen logisch zugeordnet werden können. Diese Daten können dann in Optimize z.B. für das Filtern der Prozessinstanzen verwendet werden.
{{%/list-item%}}

{{%list-item title="Importieren Sie externe Events für End-to-End Reporting" img="/img/products/optimize/optimize-3-architecture.png" img_width="100%" %}}
Optimize kann sogar in Situationen verwendet werden, in denen Sie nicht den gesamten End-to-End-Geschäftsprozess mit Camunda automatisiert haben oder Teile davon in anderen Systemen ausgeführt werden.

Senden Sie einfach prozessbezogene Ereignisse nach Optimize (REST), ordnen Sie die Ereignisse einem Prozessmodell zu und erhalten Sie vollständige Transparenz für Ihren gesamten Prozess.

Bitte <a href="#contact">kontaktieren Sie uns</a>, um eine Demo oder eine technische Diskussion mit unseren Consultants zu führen.
{{%/list-item%}}
