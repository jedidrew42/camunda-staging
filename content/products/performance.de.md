---
title: "BPMN Engine"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---

{{<highlight-visual title="Performance and Scalability" svg="products/performance/runrimte-history.svg" svg_width="20%">}}
How the Camunda Workflow Engine handles high throughput.
{{</highlight-visual>}}

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">Persistence Strategies</h2>
      </header>
					<p>
						Camunda runs on many different relational databases (see: <a href="https://docs.camunda.org/manual/introduction/supported-environments/#databases">supported environments</a>).
						Camunda uses those databases as efficient as possible, applying the following concepts:
					</p>
					<div class="row ">
						<div class="col-md-12">
							<div class="row">
								<div class="col-sm-4">
									<img class="img-responsive" src="/svg/products/performance/compact-tables.svg">
									<h3>Compact Tables</h3>
									<p>
										Camunda uses a compact data model and sophisticated algorithms to minimize the number of rows necessary to
										store the state of process instances in the database. This makes execution faster by reducing the number of
										rows that need to be stored. In the best case, only a single row needs to be updated when advancing from one
										activity to the next.
									</p>
								</div>
								<div class="col-sm-4">
									<img class="img-responsive" src="/svg/products/performance/deadlock-avoidance.svg">
									<h3>Deadlock Avoidance</h3>
									<p>
										Camunda uses optimistic concurrency control to support high levels of concurrency while minimizing the
										risk of dead locks. Locks are never held during user think time. All modifications to database state are
										batch flushed at the end of a transaction while using intelligent SQL statement ordering to avoid circular
										waits.
									</p>
								</div>
								<div class="col-sm-4">
									<img class="img-responsive" src="/svg/products/performance/control-savepoints.svg">
									<h3>Control Savepoints</h3>
									<p>
										When reaching a savepoint, the in-memory state is synchronized with the database to ensure
										fault-tolerance. Camunda provides fine granular control over the placement of savepoints,and thus
										allows you to balance fault tolerance and performance. For example, you can batch the execution of
										multiple activities in a single transaction and by this reduce the number of database synchronization
										points.
									</p>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-4">
									<img class="img-responsive" src="/svg/products/performance/intelligent-caching.svg">
									<h3>Intelligent Caching</h3>
									<p>
										Write-only savepoints are supported through reusing the 1st level cache in subsequent transactions.
										This substantially reduces the number of SELECT statements necessary to execute a sequece of activities
										with intermediary savepoints. This is most effective when implementing data-heavy processes like JSON
										or XML payload transformation
									</p>
								</div>
								<div class="col-sm-4">
									<img class="img-responsive" src="/svg/products/performance/true-concurrency.svg">
									<h3>True Concurrency</h3>
									<p>
										Concurrent tokens are represented as individual rows in the database. This model allows for true
										intra process instance concurrency since seperate rows can be updated concurrently.
									</p>
								</div>
							</div>
						</div>
					</div>
</section>

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">Clustering</h2>
      </header>
					<p>
						You can run Camunda in a Cluster in order to achieve load balancing and/or high availability. For example, it is a very
						common use case to run Camunda in an active/active configuration.
					</p>
					<div class="row ">
						<div class="col-sm-8">
							<h3>Multiple Nodes, Shared Database</h3>
							<p>
									In order to provide load balancing or fail-over capabilities, the process engine can be distributed to
									different nodes in a cluster. Each process engine instance will then connect to a shared database.
							</p>
							<p>
									The individual process engine instances do not maintain session state across transactions.
									Whenever the process engine runs a transaction, the complete state is flushed out to the shared database.
									This makes it possible to route subsequent requests which do work in the same process instance to different
									cluster nodes. This model is very simple and easy to understand and imposes limited restrictions when it
									comes to deploying a cluster installation. As far as the process engine is concerned there is also no
									difference between setups for load balancing and setups for fail-over (as the process engine keeps no
									session state between transactions).
							</p>
							<p>
								As a consequence, it is extremely easy to set up HA configurations such as active/active nodes.
							</p>
							<p>
								The process engine <a href="https://docs.camunda.org/manual/user-guide/process-engine/the-job-executor/">
								job executor</a> is also clustered and runs on each node.
								This way, there is no single point of failure as far as the process engine is concerned.
								 The job executor can run in both <a href="https://docs.camunda.org/manual/user-guide/process-engine/the-job-executor/#cluster-setups">
								 homogeneous and heterogeneous clusters</a>.
							</p>
							<h3>Minimal resource allocation</h3>
							<p>
								Because the process engine is stateless, it allocates a minimal amount of RAM resource per node (typically less than 10 MB). Basically, you can have billions of
								process instances persisted in the database, without a necessary impact on resource allocation per node. This also means that
								you can run many process engine instances per node.
							</p>
						</div>
						<div class="col-sm-4">
							<img style="margin-top:20px;" class="img-responsive" src="/svg/products/performance/nodes-shared-db.svg">
						</div>
					</div>
</section>
<section class="page-section">
      <header>
        <h2 class="light lead">Runtime vs. History</h2>
      </header>
					<p>
						<strong>Runtime Data</strong> is the minimal amount of data the Camunda process engines needs to persist in order to do asynchronous continuation - e.g. when the
						process engine waits for a user interaction (<a href="https://docs.camunda.org/manual/reference/bpmn20/tasks/user-task/">user task</a>),
						incoming message (<a href="https://docs.camunda.org/manual/reference/bpmn20/events/message-events/">message event</a>) or
						timespan (<a href="https://docs.camunda.org/manual/reference/bpmn20/events/timer-events/">timer event</a>), or when there are
						asynchronous service interactions (<a href="https://docs.camunda.org/manual/reference/bpmn20/tasks/service-task/">service task</a>).
					</p>
					<p>
						<strong>History Data</strong> are not necessary for execution, but may be logged for the sake of audits, reporting etcetera. They allow
						you inspect the complete audit trail of running and completed process instances, including their payload.
					</p>
					<p>
						Camunda separates Runtime Data from History Data, which is a very powerful architectural concept for performance optimization.
					</P>
					<div class="row ">
						<div class="col-sm-8">
							<h3>History Event Stream</h3>
							<p>
	 								In addition to maintaining the runtime state, the process engine creates an audit log providing
	 								audit information about executed process instances. We call this event stream the history event stream.
	 								The individual events which make up this event stream are called History Events and contain data about
	 								executed process instances, activity instances, changed process variables and so forth.
	 								In the default configuration, the process engine will simply write this event stream to the Camunda history
	 								database. The HistoryService API allows querying this database.
							</p>
							<h3>Configurable Log Level</h3>
							<p>
								The history level controls the amount of data the process engine provides via the history event stream.
								A number of settings are available out of the box, like with or without payload (process variables), or "full"
								or "none". However, you can also create your very own log level configuration. For example, you could decide that
								only for certain processes of a certain kind a certai amount of data should be logged, e.g. when orders are
								processed that have a volume of more than $100 USD.
							</p>
							<h3>Big Data</h3>
							<p>
								Alternatively, you can reroute the history event stream to any target you like, including queues and what
								ever big data solutions you want to use. This is possible because the Camunda Process Engine component does not read any state
								 from the history database.
							</p>
						</div>
						<div class="col-sm-4">
							<img style="margin-top:20px;" class="img-responsive" src="/svg/products/performance/runrimte-history.svg">
						</div>
					</div>
				</div>

</section>
