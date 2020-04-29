/* eslint-disable */
import DmnModeler from 'dmn-js/lib/Modeler';
// inlined in result file via brfs
import exampleXML from './resources/di.dmn';

export default class DMNSimulator {
  initialize() {
    this.dirty = false;
    this.container = $('#js-drop-zone');
    this.canvas = $('#js-table');
    this.renderer = new DmnModeler({
      container: this.canvas,
      keyboard: { bindTo: window.document },
      table: {
        minColWidth: 200,
        tableName: 'DMN Table'
      }
    });
    this.initListener();
    this.init();
  }

  initListener() {
    this.renderer.on('views.changed', () => {
      this.exportArtifacts();
    });
    this.renderer.on('import.done', () => {
      $(inputsContainer).empty();
      $(outputsContainer).empty();
      this.exportArtifacts();
    });
    $('#downloadButton').on('click', () => {
      this.renderer.saveXML({ format: true }, (err, data) => {
        const encodedData = encodeURIComponent(data);
        if (data) {
          $('#downloadButton').attr('href', `data:application/xml;charset=UTF-8,${encodedData}`);
          $('#downloadButton').attr('download', 'simulation.dmn');
        }
      });
    });

    $('#uploadButton').on('click', () => {
      $('#myModal .modal-dialog').addClass('modal-lg');
      $('#myModal #myModalLabel').text('Upload your DMN File for Simulation');
      $('#myModal #myModalBody').html('<p><strong>Q: How can I simulate an existing DMN Decision Table?</strong></p><p>A: Simply drag your DMN file on the decision table area in this website.</p><p><img style="max-width:100%" src="/assets/img/dmn/simulator/dmn-simulator-drag.gif" class="img-responsive"></p>');
      $('#myModal').modal();
    });
  }

  showDRD() {
    var drdView = this.renderer.getViews()[0];
    this.renderer.open(drdView);
  }

  createDemoTable() {
    this.openTable(exampleXML);
  }

  openTable(xml) {
    this.renderer.importXML(xml, (err) => {
      if (err) {
        this.container.removeClass('with-table').addClass('with-error');
        this.container.find('.error pre').text(err.message);
        console.error(err);
      } else {
        this.container.removeClass('with-error').addClass('with-table');
      }
    });
  }

  saveTable(done) {
    this.renderer.saveXML({ format: true }, function(err, xml) {
      done(err, xml);
    });
  }

  registerFileDrop(container, callback) {
    function handleFileSelect(e) {

      e.stopPropagation();
      e.preventDefault();

      if(this.dirty && !window.confirm('You made changes to the previous table, ' +
            'do you really want to load the new table and overwrite the changes?')) {
        return;
      }

      var files = e.dataTransfer.files;

      var file = files[0];

      var reader = new FileReader();
      var that = this;
      reader.onload = function(e) {
        var xml = e.target.result;
        callback.call(that,xml);
      };

      reader.readAsText(file);
    }

    function handleDragOver(e) {
      e.stopPropagation();
      e.preventDefault();

      e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }

    this.container.get(0).addEventListener('dragover', (e) => {
      handleDragOver.call(this, e);
    }, false);
    this.container.get(0).addEventListener('drop', (e) => {
      handleFileSelect.call(this, e);
    }, false);
  }

  init() {
    if (!window.FileList || !window.FileReader) {
      window.alert(
        'Looks like you use an older browser that does not support drag and drop. ' +
        'Try using Chrome, Firefox or the Internet Explorer > 10.');
    } else {
      this.registerFileDrop(this.container, this.openTable);
    }

    $('.buttons a').click(function(e) {
      if (!$(this).is('.active')) {
        e.preventDefault();
        e.stopPropagation();
      }
    });

    function checkDirty() {
      if (dirty) {
        return 'The changes you performed on the table will be lost upon navigation.';
      }
    }

    window.onbeforeunload = checkDirty;

    var inputsContainer = window.document.getElementById('inputsContainer');
    var outputsContainer = window.document.getElementById('outputsContainer');
    inputsContainer.innerHTML = '';
    outputsContainer.innerHTML = '';

    $('#decisionTableName').on('change', () => {
      this.renderer.chosenTable = $('#decisionTableName').val();
      this.currentView = this.renderer._views.filter((views) => {
        if (views.element.id === this.renderer.chosenTable) {
            return true;
        }
      });
      if (this.currentView.length>0) {
        this.renderer.open(this.currentView[0]);

        variableTables.push(decisionElement[0].id);
        if (decisionElement[0].informationRequirement != null) {
          decisionElement[0].informationRequirement.forEach(function(informationRequirement) {
            if (informationRequirement.requiredDecision != null && informationRequirement.requiredDecision.href != null) {
              var requiredDecisionId = informationRequirement.requiredDecision.href.replace('#','');
              variableTables.push(requiredDecisionId);
              var dependedDecisions = this.renderer._definitions.drgElements.filter(function(element) {
                if (element.$type === 'dmn:Decision' && element.id === requiredDecisionId) {
                  return true;
                }
              });
              dependedDecisions.forEach(function(dependedDecision) {
                if (dependedDecision.informationRequirement) {
                  dependedDecision.informationRequirement.forEach(function(informationRequirement) {
                    if (informationRequirement.requiredDecision != null && informationRequirement.requiredDecision.href != null) {
                      var requiredDecisionId = informationRequirement.requiredDecision.href.replace('#','');
                      variableTables.push(requiredDecisionId);
                    }
                  });
                }
              });
            }
          });
        }
      }
      $('#inputsContainer tr').hide();
      $('#outputsContainer tr').hide();
      variableTables.forEach(function(variable) {
        $('.'+variable).show();
      });
      if (this.renderer.chosenTable === '') {
        //this.showDRD();
        $('#inputsContainer tr').show();
        $('#outputsContainer tr').show();
      }
    });

    this.createDemoTable();

    window.document.getElementById('simulateButton').addEventListener('click', (evt) => {
      $('.dmn-js-parent tr').removeClass('fired');
      this.renderer.saveXML({ format: false }, (err, xml) => {
        var payload = {
          xml: xml,
          inputs: this.renderer.inputs.map((input) => {
            var type = input.inputExpression.typeRef;
            return {
              type: type,
              varname: input.inputExpression.text,
              value: this.parseValue(input.html.value, type)
            };
          })
        };

        var $decisionTableSelect = $('#decisionTableName');
        if ($decisionTableSelect.length>0) {
          var decisionTableVal = $decisionTableSelect.val();
          if (decisionTableVal != null && decisionTableVal != '') {
            payload.decisionTable = decisionTableVal;
          }
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () => {
          this.renderer.lastResponse = oReq.response;
          this.handleResults(oReq.response);
        });

        oReq.open("POST", "/backend/dmn/proxy.php", true);
        oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        oReq.send(JSON.stringify(payload));
      });
    });
  }

  handleResults(responseText) {
    $('#outputsContainer input').val('');
    var text = responseText;
    var idx = responseText.indexOf('{"');
    if(idx === -1) {
      this.renderer.lastResponse = null;
      $('#myModal .modal-dialog').addClass('modal-lg');
      $('#myModal #myModalBody').html(responseText);
      $('#myModal').modal();
      var styleBullshit = window.document.querySelector('#myModalBody style');
      styleBullshit.parentNode.removeChild(styleBullshit);

      return;
    } else {
      text = responseText.substr(idx);
    }

    var res = JSON.parse(text);

    // Display Error Message, if exists
    if (res.error) {
      this.renderer.lastResponse = null;
      $('#myModal .modal-dialog').removeClass('modal-lg');
      $('#myModal #myModalLabel').text('Error in Execution');
      $('#myModal #myModalBody').html('<h4>' + res.error +'</h4>');
      $('#myModal').modal();
      return;
    }

    // If there are no rules, notify user
    if (res.rules.length == 0 && (res.tableResults == null || res.tableResults && res.tableResults.length<1)) {
      this.renderer.lastResponse = null;
      $('#myModal .modal-dialog').removeClass('modal-lg');
      $('#myModal #myModalLabel').text('No Rule applied');
      $('#myModal #myModalBody').html('<p>No rule applied for the input data you have provided.</p>');
      $('#myModal').modal();
    }

    var resultValues = {};
    for(var i = 0; i < res.rules.length; i++) {
      var rule = res.rules[i];
      var elem = window.document.querySelector('[data-row-id="'+rule.ruleId+'"]');
      if (elem) {
        $(elem).parent().addClass('fired');
      }
      for(var j = 0; j < rule.outputs.length; j++) {
        var ruleOutput = rule.outputs[j];
        if (ruleOutput != null && Object.keys(ruleOutput).length > 0) {
          var key = Object.keys(ruleOutput)[0];
          if (resultValues[key] != null) {
            resultValues[key] = resultValues[key] + ', ' + ruleOutput[key];
          } else {
            resultValues[key] = ruleOutput[key];
          }
        }
      }
    }

    this.renderer.outputs.forEach(function(output) {
      output.value = '';
    });
    Object.keys(resultValues).forEach((key) => {
      this.renderer.outputs.forEach((output) => {
        if (key === output.id) {
          output.value = resultValues[key];
        }
      });
    });

    var cleanTableResults = {};
    res.tableResults.forEach((tableResult) => {

      var keys = Object.keys(tableResult);
      if (keys.length>0) {
        var key = keys[0];
        if (cleanTableResults[key] == null) {
          cleanTableResults[key] = tableResult[keys];
        } else {
          cleanTableResults[key] = cleanTableResults[key] + ', ' + tableResult[keys];
        }
      }
    });
    this.renderer.outputs.forEach((output) => {
      if (cleanTableResults[output.name] != null) {
          output.value = cleanTableResults[output.name];
      }
      res.inputs.forEach((additionalResult) => {
        if (additionalResult != null && additionalResult[output.name] != null) {
          if (output.value == '') {
            output.value = additionalResult[output.name];
          }
        }
      });
    });

    this.updateOutputs(this.renderer.outputs);
  }

  exportArtifacts() {
    var decisionElements = this.renderer._definitions.drgElements.filter(function(element) {
      if (element.$type === 'dmn:Decision') {
        return true;
      }
    });
    var inputs = [];
    var outputs = [];

    if (this.renderer.lastResponse != null) {
      this.handleResults(this.renderer.lastResponse);
    }
    $('#decisionTableName').empty();
    $('#decisionTableName').append('<option value="">All tables</option>');
    decisionElements.forEach(function(decisionElement) {
      $('#decisionTableName').append('<option value='+decisionElement.id+'>'+decisionElement.name+'</option>');
      if (decisionElement.decisionTable) {
        inputs = inputs.concat(decisionElement.decisionTable.input);
        outputs = outputs.concat(decisionElement.decisionTable.output);
      } else if (decisionElement.literalExpression) {
        outputs = outputs.concat(decisionElement);
      }
    });
    if (this.renderer.chosenTable != null) {
      $('#decisionTableName').val(this.renderer.chosenTable);
    }
    //$('#decisionTableName').change();
    var filteredInputs = [];
    var outputVariables = outputs.map(function(item) {
      if (item.name == null || item.name === '') {
        item.name = item.label;
      }
      return item.variable ? item.variable.name : item.name;
    });
    inputs.forEach(function(input) {
      if (input != null && input.inputExpression != null) {
        if (input.inputExpression.text == null || input.inputExpression.text == '') {
          input.inputExpression.text = input.label.replace(' ','');
        }
        if (outputVariables.indexOf(input.inputExpression.text)<0) {
          filteredInputs.push(input);
        }
      }
    });
    this.updateInputs(filteredInputs);
    this.updateOutputs(outputs);
    this.renderer.inputs = filteredInputs;
    this.renderer.outputs = outputs;
  };

  updateInputs(inputs) {
    for(var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      // create html representation if necessary
      if(!input.html) {
        var typeRef = input.inputExpression.typeRef;

        if (typeRef === 'boolean') {
          input.html = window.document.createElement('select');
          $(input.html).append('<option value="true">True</option><option value="false">False</option>');
          $(input.html).val('true');
          $(input.html).on('change', function() {
            var newVal = $(this).val();
            var originalItem = this;
            var attr = $(this).attr('data-id');
            var $items = $('[data-id="'+attr+'"]');
            $items.each(function(index, item) {
              if (item !== originalItem) {
                $(item).val(newVal);
              }
            });
          });
        } else if(['integer', 'long', 'double'].indexOf(typeRef) !== -1) {
          input.html = window.document.createElement('input');
          $(input.html).attr('type', 'number');
          $(input.html).attr('placeholder', 'Enter Number');
          $(input.html).val(0);
          $(input.html).on('change', function() {
            var newVal = $(this).val();
            var originalItem = this;
            var attr = $(this).attr('data-id');
            var $items = $('[data-id="'+attr+'"]');
            $items.each(function(index, item) {
              if (item !== originalItem) {
                $(item).val(newVal);
              }
            });
          });
        } else if(typeRef == 'date') {
          input.html = window.document.createElement('input');
          var date = new Date();
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          $(input.html).attr('placeholder', 'yyyy-MM-dd HH:mm:ss');
          $(input.html).val(year + '-' + month + '-' + day + ' 00:00:00');
          $(input.html).on('change', function() {
            var newVal = $(this).val();
            var originalItem = this;
            var attr = $(this).attr('data-id');
            var $items = $('[data-id="'+attr+'"]');
            $items.each(function(index, item) {
              if (item !== originalItem) {
                $(item).val(newVal);
              }
            });
          });
        } else {
          input.html = window.document.createElement('input');
          $(input.html).attr('placeholder', 'Enter String');
          $(input.html).on('change', function() {
            var newVal = $(this).val();
            var originalItem = this;
            var attr = $(this).attr('data-id');
            var $items = $('[data-id="'+attr+'"]');
            $items.each(function(index, item) {
              if (item !== originalItem) {
                $(item).val(newVal);
              }
            });
          });
        }
        input.labelspan = window.document.createElement('span');
        input.typeref = window.document.createElement('span');
        input.row = window.document.createElement('tr');
        $(input.row).attr('id', 'inputFor_' + input.id);
        $(input.html).attr('data-id','inputFor_' + input.inputExpression.text);
        if (input.$parent && input.$parent.$parent) {
          input.referenceTable = input.$parent.$parent.id;
          input.referenceTableName = input.$parent.$parent.name;
          $(input.row).addClass(input.$parent.$parent.id);
        }
        var cell1 = window.document.createElement('td');
        cell1.appendChild(input.labelspan);
        input.row.appendChild(cell1);
        var cell2 = window.document.createElement('td');
        $(cell2).addClass('inputElement');
        cell2.appendChild(input.html);
        input.row.appendChild(cell2);

        var cell3 = window.document.createElement('td');
        cell3.appendChild(input.typeref);
        $(cell3).addClass('inputTypeRef');
        input.row.appendChild(cell3);

        var referenceTable = $('.table-'+input.referenceTable,inputsContainer);
        if (referenceTable.length<1) {
          $(inputsContainer).append($('<table class="table-'+input.referenceTable+'"><tr class="'+input.referenceTable+'"><th colspan="3">'+input.referenceTableName+'</th></tr></table>'));
          referenceTable = $('.table-'+input.referenceTable,inputsContainer);
        }
        referenceTable.append(input.row);
      }
      input.labelspan.innerHTML = input.label + ':';
      input.typeref.innerHTML = input.inputExpression.typeRef;
      if (input.inputExpression.text) {
        $(input.html).attr('data-id','inputFor_' + input.inputExpression.text);
      }
    }
  }

  updateOutputs(outputs) {
    for(var i = 0; i < outputs.length; i++) {
      var output = outputs[i];
      // create html representation if necessary
      if(!output.html) {
        output.html = window.document.createElement('input');
        output.labelspan = window.document.createElement('span');
        output.row = window.document.createElement('tr');
        if (output.literalExpression) {
          $(output.row).attr('id', 'outputFor_' + output.variable.name);
          $(output.row).addClass(output.id);
        } else {
          $(output.row).attr('id', 'outputFor_' + output.id);
          if (output.$parent && output.$parent.$parent) {
            $(output.row).addClass(output.$parent.$parent.id);
          }
        }

        var cell1 = window.document.createElement('td');
        cell1.appendChild(output.labelspan);
        output.row.appendChild(cell1);
        var cell2 = window.document.createElement('td');
        cell2.appendChild(output.html);
        output.row.appendChild(cell2);
        output.html.setAttribute('readonly', 'true');
        outputsContainer.appendChild(output.row);
      }
      if (output.literalExpression) {
        $(output.row).attr('id', 'outputFor_' + output.variable.name);
        output.labelspan.innerHTML = output.variable.name + ':';
      } else {
        output.labelspan.innerHTML = output.label + ':';
      }

      output.html.value = output.value ||'';
    }
  };
  parseValue(value, type) {
    if(['integer', 'long', 'double'].indexOf(type) !== -1) {
      return parseFloat(value);
    }
    return value;
  };
}
