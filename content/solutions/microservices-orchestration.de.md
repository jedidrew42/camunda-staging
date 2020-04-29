---
title: "Microservices Orchestration | Camunda BPM"
date: 2018-05-14T10:39:22+02:00
draft: false
contact: true
---

{{<highlight title="Microservices Orchestration" btn="Mit einem Experten sprechen" btnlink="#contact">}}
Camunda ermöglicht eine leichtgewichtige und flexible Orchestrierung von Microservices inklusive Monitoring der übergreifenden Geschäftsprozesse.
{{</highlight>}}

<div style="margin-top:100px"></div>

{{%list-item title="Das Chaos der Choreographie" img="/img/solutions/silos.png" img_width="100%" %}}

Microservice-basierte Architekturen werden zunehmend populär, und das aus guten Gründen: Durch die lose Kopplung können Microservices unabhängig voneinander entwickelt, betrieben und skaliert werden und die jeweils verantwortlichen Teams ebenfalls autonomer agieren, was die Organisation insgesamt deutlich agiler macht.

Die zu automatisierenden Geschäftsprozesse werden dabei durch das Zusammenspiel zahlreicher Microservices technisch abgearbeitet. Dieses Zusammenspiel muss organisiert werden. Eine mögliche Herangehensweise sind Choreograhie-Modelle, in denen Microservices sich entweder gegenseitig direkt aufrufen (Request/Reponse Pattern) oder lediglich indirekt über Events kommunizieren, die auf einem zentralen Message oder Event Bus veröffentlicht werden (Publish/Subscribe Pattern). Gerade das Publish/Subscribe Pattern wird der Idee der Unabhängigkeit der einzelnen Microservices besser gerecht, da diese prinzipiell nichts voneinander wissen müssen und daher auch autonom entwickelt, betrieben und skaliert werden können.

Mit zunehmender Anzahl Microservices treten mit diesem Ansatz jedoch auch gravierende Probleme zutage:

* Der Gesamtfluss lässt sich im Zusammenspiel der Microservices nur schwer erkennen und im Betrieb überwachen. Besonders gefährlich ist hierbei, dass dieses Problem nicht unbedingt von Anfang an spürbar ist, sondern sich erst im Verlauf der Zeit durch die wachsende Anzahl Microservices schleichend verschärft. Im schlimmsten Fall ist die Abarbeitung des End-to-End-Prozesses nicht mehr gewährleistet, es kommt zu unbeabsichtigten Deadlocks o.ä.

* Der Choreographie-Ansatz stellt zunächst keine Lösungen für die Behandlung von Fehlern oder Timeouts bereit, sondern wälzt dieses Problem auf den jeweiligen Client ab. Dies erschwert die Absicherung des Gesamtflusses gegen Ausfälle und kann im schlimmsten Fall zu negativen Kundenerfahrungen führen, z.B. wenn eine Webseite eine technische Fehlermeldung anzeigt, ohne eine Lösung anzubieten.

Mit Camunda lassen sich diese Probleme vermeiden, ohne dass hierbei die Paradigmen der Autonomie und losen Kopplung von Microservices verletzt werden.

{{%/list-item%}}

{{%list-item title="Prozesse im Griff trotz loser Kopplung" img="/img/solutions/microservices-orchestration.svg" img_width="50%"  %}}

Camunda ermöglicht das Microservice-übergreifende Monitoring und Management von End-to-End-Prozessen, ohne die zentralen Paradigmen hinter Microservices zu verletzen.

Mit Hilfe des ISO-Standards BPMN können Prozesse auch fachlich leicht verständlich in ihrer logischen Abfolge dargestellt werden, wobei auch Ereignisse, die auf laufende Prozesse korreliert werden, modelliert sind.

In einem ersten Schritt können auf diese Weise die Events, die durch Microservices publiziert werden, in Camunda protokolliert (z.B. via Subscribe auf einen Event Bus) und der Gesamtfluss nachvollziehbar gemacht werden. Hierbei kann auch bereits ein gegebenes BPMN-Modell herangezogen werden, um zu prüfen, ob die Events in der erwarteten Reihenfolge und innerhalb definierter SLA-Grenzen (z.B. Bearbeitungszeiten für Bestellungen) stattgefunden haben.

In einer weiteren Ausbaustufe kann auch Camunda selbst Events publizieren, die im Sinne des Event-Command-Patterns signalisieren, dass aus Sicht des Geschäftsprozesse nun eine bestimmte Aktivität stattfinden sollte. Diese kann durch einen autonom agierenden Microservice, der sich auf das entsprechende Event subscribed hat, erledigt und das Ergebnis wiederum als Event publiziert werden, was Camunda zur Fortsetzung des Geschäftsprozesses bewegt. Camunda spielt hierbei nicht zwingend die Rolle einer "übergeordneten Schicht", sondern ist selbst einfach ein weiterer Service mit einem bestimmten Auftrag, nämlich dem Monitoring und ggf. Management des End-to-end-Prozesses.

Eine mögliche Variante ist die Definition einer hybriden Architektur, bei der Camunda teilweise über ein publish/subscribe pattern mit (anderen) Microservices interagiert, und teilweise zusätzliche Services über request/response direkt orchestriert. Dies kann z.B. im Kontext einer schrittweisen Umstellung eines Monolithen auf eine Microservices Architektur sinnvoll sein. Camunda kann hierbei auch mit weiteren Technologien wie z.B. Robotic Process Automation (RPA) kombiniert werden, wenn einzelne Legacy Anwendungen keine API bereitstellen.

{{%/list-item%}}

{{%list-item title="Wir helfen gern" img="/img/solutions/consulting.svg" img_width="50%"  %}}

Camunda ist leichtgewichtig und lässt sich sowohl standalone als auch direkt in Microservices eingebettet betreiben. Die Core Workflow Engine ist open source, und die [Camunda Enterprise Platform](/de/enterprise/) ist mit zusätzlichen Features, Tools und bis zu 24x7 Support verfügbar, um Ihre Entwicklung zu beschleunigen und Ihren Betrieb abzusichern.

Wenn Sie komplexe Microservices Architekturen aufbauen, können Sie auf unsere Unterstützung zählen. Wir können Sie von den ersten Architekturdiskussionen über die Implementierung bis hin zum Go Live begleiten, so dass Sie von unseren umfangreichen Projekterfahrungen profitieren können.

[Kontaktieren Sie uns](#contact), um Ihr Projekt zu besprechen und erste hilfreiche Hinweise zu erhalten.

{{%/list-item%}}


<div class="row">
	<div class="col-md-6">
		<div class="row">
		        <div class="col-xs-4" >
		          <img class="img img-responsive img-circle pull-right" width="165" src="/img/solutions/milosevic.jpg">
		        </div>
		        <div class="col-xs-8 left-line">
		            <img src="https://images.ctfassets.net/vpidbgnakfvf/27ZNesJj6sGECgSOGmWwsy/88ea70106f5ec308596deb80a737c680/asseco.svg" height="40" alt="Asseco Logo" style="margin-bottom: 15px;">
		            <p><strong>Aleksandar Milosevic<br> Chief Software Architect</strong></p>
		            <p>
		              As a part of our investment in the next generation of microservices-based banking applications, we were looking for embeddable workflow engine. After detailed examination and a proof-of-concept project, we decided to use Camunda BPMN for its excellent support for BPMN, DMN, and CMMN standards; its lightweight engine; and the agile evolution of a codebase that follows market needs.
		            </p>
		        </div>
		  </div>
	</div>
	<div class="col-md-6">
		<div class="row">
		        <div class="col-xs-4" >
		          <img class="img img-responsive img-circle pull-right" width="165" src="/img/solutions/lind.jpg">
		        </div>
		        <div class="col-xs-8 left-line">
		            <img src="https://images.ctfassets.net/vpidbgnakfvf/4toOxfu4lqUG8YCCUucwEa/ab2ac00d23460dca7967c52d9aae373c/blue-step-bank.svg" height="40" alt="Hamburger Sparkasse Logo" style="margin-bottom: 15px;">
		            <p><strong>Eric Lind<br> Chief Information Officer</strong></p>
		            <p>
						We see Camunda as a valuable component within our new lending platform, which is built using a microservices architecture. To achieve the desired efficiency gains, we needed a much higher degree of automation in our processes, and Camunda's capabilities fits our needs well. It is modern, easy to integrate with, and gives us flexibility when designing our processes. 		              
		            </p>
		        </div>
		  </div>
	</div>
</div>
