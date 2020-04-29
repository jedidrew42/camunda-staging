---
title: "Die Camunda BPMN Workflow Engine | Camunda BPM"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---

{{<highlight-visual title="BPMN Workflow Engine" svg="/products/workflow-engine.svg" svg_width="20%">}}
BPMN-Prozessmodelle automatisieren:<br> (Micro-)Service Orchestration, Human Workflow Management uvm.
{{</highlight-visual>}}

{{%list-item title="BPMN 2.0 Unterstützung" img="/svg/diagram.svg" img_width="100%" %}}
Die Workflow Engine unterstützt fast alle Symbole des BPMN 2.0 - Standards. Den kompletten Überblick finden Sie unter [Docs: BPMN 2.0 Coverage](https://docs.camunda.org/manual/reference/bpmn20/).

BPMN eignet sich für Service-Orchestrierung, Human Workflow Managemement, Event Handling und viele weitere Use Cases. Mit BPMN können Sie  Workflows definieren die technisch ausführbar und trotzdem fachlich leicht verständlich sind.

Dank der vorhandenen Integration mit der DMN Decision Engine können Sie innerhalb eines BPMN-Workflows auch sehr leicht Entscheidungstabellen ausführen.
{{%/list-item%}}

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">REST API</h2>
      </header>
      <div class="row">
        <div class="col-md-6">
          <p>Sie können die Workflow Engine via REST nutzen um Prozessinstanzen zu starten, Aufgaben abzuarbeiten usw. Die komplette REST API Dokumentation finden Sie unter <a href="https://docs.camunda.org/manual/reference/rest/">REST API Reference</a>.</p>
          <p>Mit dem <a href="https://docs.camunda.org/manual/user-guide/process-engine/external-tasks/">External Tasks Pattern</a> können Sie Ihre (Micro-)Services komplett entkoppelt von der Workfow Engine entwickeln und betreiben, so dass sich Ihre Services <a href="https://blog.camunda.com/post/2015/11/external-tasks/">die Arbeit via REST ziehen</a>, wann immer es Sinn macht.</p>
        </div>
        <div class="col-md-6" style="background-color: #333333; color:lightgrey; padding:10px">
        	<code>POST /process-definition/key/<span style="color:yellow">invoice</span>/start<br>
				Request Body:<br>
				{"variables":<br>
    			 &nbsp; &nbsp; &nbsp;{"creditor" : {"value" : "Nice Pizza Inc.", "type": "String"},<br>
     			 &nbsp; &nbsp; &nbsp; "amount" : {"value" : 12, "type": "Integer"}}<br>
     			}
			</code>
        </div>
    </div>
</section>

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">Java API</h2>
      </header>
      <div class="row">
        <div class="col-md-6">
          <p>Die Workflow Engine kann als simple <a href="https://docs.camunda.org/get-started/apache-maven/">Maven dependency</a> in jede Java-Anwendung eingebettet werden, um dann via <a href="https://docs.camunda.org/manual/user-guide/process-engine/process-engine-api/">Java API</a> von Ihrer Anwendung benutzt zu werden. Zusätzlich gibt es Integrationen mit <a href="https://docs.camunda.org/get-started/spring/">Spring</a>, <a href="https://docs.camunda.org/get-started/spring-boot/">Spring Boot</a> und <a href="https://docs.camunda.org/get-started/javaee6/">Java EE</a>. Aus einem BPMN-Workflow heraus kann Java-Code sehr einfach ausgeführt werden, in dem Sie <a href="https://docs.camunda.org/manual/user-guide/process-engine/delegation-code/#java-delegate">Java Delegates</a> benutzen.</p>
          <p>Die Workflow Engine ist weniger als 3MB groß, läuft in jeder JVM, und besitzt eine erweiterte Integration für unterschiedliche Java Application Servers.</p>
        </div>
        <div class="col-md-6" style="background-color: #333333; color:lightgrey; padding:10px">
        	<code>
        		Map<String, Object> variables = new HashMap<String,Object>();<br>
				variables.put("creditor", "Nice Pizza Inc.");<br>
				variables.put("amount", 12);<br>
				ProcessInstance instance = runtimeService.startProcessInstanceByKey("<span style="color:yellow">invoice</span>", variables);<br>
			</code>
        </div>
    </div>
</section>

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">Performance und Skalierbarkeit</h2>
      </header>
      <div class="row">
        <div class="col-md-6">
          <p>
            Die Camunda Workflow Engine ist super-schnell dank sehr effizienter Persistenz-Strategien. Außerdem trennt Camunda die Laufzeit-Daten ("Runtime") von historischen Daten ("History"), was sich ebenfalls sehr positiv auf die Performance auswirkt.
          </p>
          <p>
            Horizontale Skalierbarkeit mittels Clustering ist sehr einfach, da die Engine stateless ist: Mehrere Instanzen teilen sich einfach eine Datenbank.
          </p>
          <p>Sie finden eine detaillierte Beschreibung dieser Aspekte unter <a href="/products/performance">Performance and Scalability</a>.</p>
          <p>
          Dank seiner guten Performance wird Camunda u.a von diesen Organisationen erfolgreich eingesetzt:
          <ul>
          	<li><a href="/case-studies/zalando/">Zalando: Bestellabwicklung</a></li>
          	<li><a href="/case-studies/t-mobile-austria/">T-Mobile: Leistungsbereitstellung</a></li>
          	<li><a href="/case-studies/nasa/">NASA: Weltraummissionen</a></li>
          	<li><a href="/case-studies/24-hour-fitness/">24 Hours Fitness: Mehr oder weniger alles</a></li>
          </ul>
          </p>
        </div>
        <div class="col-md-6" style="height:400px; overflow:hidden">
        	<img src="/svg/products/performance/rocket.svg" style="max-height:100%">
        </div>
    </div>
</section>
