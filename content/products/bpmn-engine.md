---
title: "The Camunda BPM Workflow Engine | Camunda BPM"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---

{{<highlight-visual title="BPMN Workflow Engine" svg="/products/workflow-engine.svg" svg_width="20%">}}
Automate BPMN 2.0 process diagrams<br> for (micro-)service orchestration, human task flows or both.
{{</highlight-visual>}}

{{%list-item title="BPMN 2.0 Support" img="/svg/diagram.svg" img_width="100%" %}}
The Workflow Engine executes most of the symbols defined in the BPMN 2.0 standard. View the [Docs: BPMN 2.0 Coverage](https://docs.camunda.org/manual/reference/bpmn20/) for more details.

With BPMN, you can express reliable service orchestration, human task flows, event handling and much more in diagrams that are technically executable yet easy to understand for everyone.

Thanks to the pre-built integration with the DMN Decision Engine, you can easily execute decision tables from within a BPMN process.
{{%/list-item%}}

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">REST API</h2>
      </header>
      <div class="row">
        <div class="col-md-6">
          <p>You can access the Workflow Engine via REST in order to start process instances, complete tasks and much more. Check out the <a href="https://docs.camunda.org/manual/reference/rest/">REST API Reference</a> for a complete overview.</p>
          <p>With the <a href="https://docs.camunda.org/manual/user-guide/process-engine/external-tasks/">external tasks pattern</a>, you can develop and operate your (micro-)services completely decoupled from the Workflow Engine and let them <a href="https://blog.camunda.com/post/2015/11/external-tasks/">pull the work via REST</a> whenever it suits them.</p>
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
          <p>Add the Workflow Engine as a simple <a href="https://docs.camunda.org/get-started/apache-maven/">Maven dependency</a> and use the <a href="https://docs.camunda.org/manual/user-guide/process-engine/process-engine-api/">Java API</a> in your own application. There are also existing integrations with <a href="https://docs.camunda.org/get-started/spring/">Spring</a>, <a href="https://docs.camunda.org/get-started/spring-boot/">Spring Boot</a> and <a href="https://docs.camunda.org/get-started/javaee6/">Java EE</a>. Calling Java Code from within a BPMN workflow is super simple thanks to <a href="https://docs.camunda.org/manual/user-guide/process-engine/delegation-code/#java-delegate">Java Delegates</a>.</p>
          <p>The Workflow Engine requires less than 3MB, can run in any JVM and comes with extended integration for different Java runtime containers.</p>
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
        <h2 class="light lead">Performance and Scalability</h2>
      </header>
      <div class="row">
        <div class="col-md-6">
          <p>
          	The Camunda Workflow Engine is lightning fast as it executes persistence as efficiently as possible. In addition, Camunda separates Runtime Data from History Data</a> which is another powerful concept for better performance.
          </p>
          <p>
          	Clustering for horizontal scalability is straightforward as the engine is stateless: multiple instances can share the same database.
          </p>
          <p>You can find a detailed description of these advantages under <a href="/products/performance">Performance and Scalability</a>.</p>
          <p>
          Because of its scalability, Camunda is successfully being used by organizations like:
          <ul>
          	<li><a href="/case-studies/zalando/">Zalando for order processing</a></li>
          	<li><a href="/case-studies/t-mobile-austria/">T-Mobile for service provisioning</a></li>
          	<li><a href="/case-studies/nasa/">NASA for space missions</a></li>
          	<li><a href="/case-studies/24-hour-fitness/">24 Hours Fitness for more or less anything</a></li>
          </ul>
          </p>
        </div>
        <div class="col-md-6" style="height:400px; overflow:hidden">
        	<img src="/svg/products/performance/rocket.svg" style="max-height:100%">
        </div>
    </div>
</section>
