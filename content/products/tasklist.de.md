---
title: "Tasklist"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---
{{<highlight-visual title="Tasklist" svg="/products/tasklist.svg" svg_width="20%">}}
Eine Web Anwendung, mit der Anwender die Aufgaben erledigen können, die ihnen durch den Prozess zugewiesen wurden.
{{</highlight-visual>}}

{{%list-item title="BPMN User Tasks Frontend" img="https://docs.camunda.org/manual/webapps/tasklist/img/tasklist-dashboard.png" img_width="100%" %}}
Anwender nutzen Tasklist zur Organisation und Abarbeitung der Aufgaben, die sie von der Workflow Engine erhalten haben:

Während der Workflow-Ausführung erzeugt die Workflow Engine Aufgaben für Endanwender, basierend auf dem zuvor definierten BPMN-Prozessmodell. Wenn der Anwender auf die Aufgabe in Camunda Tasklist klickt, sieht er ein Task-Formular das Informationen anzeigt und um die Eingabe von Daten bittet. Sobald dies geschehen ist, schließt der Anwender die Aufgabe ab, in dem er auf den entsprechenden Button klickt. Dies veranlasst die Workflow Engine, die Prozessausführung unter Berücksichtigung der erhaltenen Daten fortzusetzen.

Sie können Tasklist out-of-the-box verwenden, oder als Inspiration für Ihr eigenes Frontend nutzen.

{{%/list-item%}}
