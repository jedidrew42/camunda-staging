---
title: "Microservices Orchestration and Monitoring | Camunda BPM"
description: "Camunda Workflow Engine enables lightweight microservices orchestration, including end-to-end monitoring of business processes. Camunda is the leader for workflow automation & business process management. Get your 30-day trial today."
date: 2018-05-14T10:39:22+02:00
draft: false
contact: true
---

{{<highlight title="Microservices Orchestration" btn="Talk to an Expert" btnlink="#contact">}}
Camunda Workflow Engine enables lightweight microservices orchestration, including end-to-end monitoring of business processes.
{{</highlight>}}

<div style="margin-top:100px"></div>

{{%list-item title="Dealing with Choreography Chaos?" img="/img/solutions/silos.png" img_width="100%" %}}

Microservices architectures have become increasingly popular in recent years, and for good reason: teams can deliver value quickly and independently while working with a technology stack of their choice, not bound to a common set of technologies shared by an organization.

End-to-end business processes often involve numerous microservices, and their interaction must be organized. One possible approach is the choreography model, in which microservices either call each other directly (Request / Reponse Pattern) or communicate only indirectly via events published on a central message or event bus (Publish / Subscribe Pattern).

The Publish / Subscribe Pattern in particular is well-suited to the concept of independence of individual microservices--the microservices don't need to be aware of one another and can therefore be developed, operated, and scaled autonomously.

As the number of microservices involved in a business process increases, however, serious problems can emerge.

* The overall flow of a process will become difficult to monitor and troubleshoot across a group of microservices. Particularly troublesome here is that this problem might not be noticeable when first working with a microservices architecture, but it gradually becomes worse over time as the number of microservices increases. In the worst case, the success of the end-to-end business process is no longer guaranteed due to unforeseen deadlocks and other issues.

* By default, the choreography approach does not provide solutions for handling errors or timeouts, and it instead passes these issues to the client. This makes it difficult to prevent failures in an overall flow and in the worst case scenario can lead to negative customer experiences--for example, when a website displays an error message without offering a solution.

With Camunda, you can avoid these problems without compromising the paradigms of autonomy and loose coupling of microservices.

{{%/list-item%}}

{{%list-item title=" Loose Coupling and Processes Under Control" img="/img/solutions/microservices-orchestration.svg" img_width="50%"  %}}

Camunda enables cross-service monitoring and management of end-to-end processes without violating the core paradigms behind microservices.

Using ISO-standard BPMN, processes can be visualized in a technically easy-to-understand manner according to their logical sequence, and events from running processes can also be modeled.

As a first step, events that are published by microservices can be logged in Camunda (for example, by subscribing to an event bus), making it possible to trace the overall flow of a process. A BPMN model can be used to check whether the events have taken place in the expected order and within defined SLA limits (for example, shipment turnaround times for e-commerce orders).

And as a next step, Camunda itself can publish events that use an event-command pattern to signify that a certain activity in a business process should take place. This can be done by an autonomous Camunda-powered microservice subscribed to a relevant upstream event, and the resulting command can also be published as an event--meaning that Camunda coordinates the business process without violating the principle of loose coupling.

Camunda does not necessarily play the role of a "controlling" layer and is itself simply another service with a well-defined scope: specifically, the monitoring (and possibly also management) of the end-to-end process.

One possible variant is a hybrid architecture in which Camunda interacts with (other) microservices in part via a publish / subscribe pattern, and in some cases directly orchestrates additional services via request / response. This may be useful, for example, in the context of a gradual migration of a monolith to a microservices architecture. When necessary, Camunda can be combined with other technologies such as Robotic Process Automation (RPA) if certain legacy applications do not provide an API.

{{%/list-item%}}

{{%list-item title="We're Here to Help" img="/img/solutions/consulting.svg" img_width="50%"  %}}

Camunda is lightweight and can be embedded inside a microservice, and it’s easy to deploy in a wide range of cloud and on-premises environments. The core workflow engine is open source and free to use, and the [Camunda Enterprise Platform](https://camunda.com/enterprise/) provides additional features, tools, and up to 24x7 support to accelerate your development and safeguard your operations.

When building complex microservices architectures, you can count on our support. We can guide you from the initial architectural discussions to implementation to go live, and you'll benefit from our extensive project experience.

To learn more, you can [download the whitepaper “Microservices and BPM”](https://camunda.com/learn/whitepapers/microservices-and-bpm/).

Interested in using Camunda for microservices orchestration? [Contact us](#contact) to discuss your project with an expert.


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
