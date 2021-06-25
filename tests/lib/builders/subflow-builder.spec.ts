/*
 * Copyright 2021-Present The Serverless Workflow Specification Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { subflowstateBuilder } from '../../../src/lib/builders/subflowstate-builder';

describe('subflowstateBuilder ', () => {
  it('should build an object', () => {
    const object = subflowstateBuilder().name('StartApplication').workflowId('startApplicationWorkflowId').build();
    expect(object.waitForCompletion).toBeFalse();

    const serializedObject = object.normalize();
    expect(JSON.stringify(serializedObject)).toBe(
      JSON.stringify({
        type: 'subflow',
        name: 'StartApplication',
        workflowId: 'startApplicationWorkflowId',
        end: true,
      })
    );
    expect(serializedObject.waitForCompletion).toBeUndefined();
  });
});
