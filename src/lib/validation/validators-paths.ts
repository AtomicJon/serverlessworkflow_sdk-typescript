/**
* A map of type names and their corresponding schema
*/
export const validatorsPaths: [string, string][] = [
  ['Workflow', 'https://serverlessworkflow.org/core/0.6/workflow.json'],
  ['Crondef', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/crondef'],
  ['Exectimeout', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/exectimeout'],
  ['Transition', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/transition'],
  ['Error', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/error'],
  ['Onevents', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/onevents'],
  ['Action', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/action'],
  ['Eventref', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/eventref'],
  ['Branch', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/branch'],
  ['Delaystate', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/delaystate'],
  ['Eventstate', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/eventstate'],
  ['Operationstate', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/operationstate'],
  ['Parallelstate', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/parallelstate'],
  ['Switchstate', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/switchstate'],
  ['Eventbasedswitch', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/eventbasedswitch'],
  ['Databasedswitch', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/databasedswitch'],
  ['Defaultdef', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/defaultdef'],
  ['Eventcondition', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/eventcondition'],
  ['Transitioneventcondition', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/transitioneventcondition'],
  ['Enddeventcondition', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/enddeventcondition'],
  ['Datacondition', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/datacondition'],
  ['Transitiondatacondition', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/transitiondatacondition'],
  ['Enddatacondition', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/enddatacondition'],
  ['Subflowstate', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/subflowstate'],
  ['Injectstate', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/injectstate'],
  ['Foreachstate', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/foreachstate'],
  ['Callbackstate', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/callbackstate'],
  ['Startdef', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/startdef'],
  ['Schedule', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/schedule'],
  ['End', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/end'],
  ['Produceeventdef', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/produceeventdef'],
  ['Statedatafilter', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/statedatafilter'],
  ['Eventdatafilter', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/eventdatafilter'],
  ['Actiondatafilter', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/actiondatafilter'],
  ['Repeat', 'https://serverlessworkflow.org/core/0.6/workflow.json#/definitions/repeat'],
  ['Metadata', 'https://serverlessworkflow.org/core/0.6/common.json#/definitions/metadata'],
  ['Function', 'https://serverlessworkflow.org/core/0.6/functions.json#/definitions/function'],
  ['Eventdef', 'https://serverlessworkflow.org/core/0.6/events.json#/definitions/eventdef'],
  ['CorrelationDef', 'https://serverlessworkflow.org/core/0.6/events.json#/definitions/correlationDef'],
  ['Retrydef', 'https://serverlessworkflow.org/core/0.6/retries.json#/definitions/retrydef'],
  ['Events', 'https://serverlessworkflow.org/core/0.6/events.json#/events'],
  ['Functions', 'https://serverlessworkflow.org/core/0.6/functions.json#/functions'],
  ['Retries', 'https://serverlessworkflow.org/core/0.6/retries.json#/retries'],
]