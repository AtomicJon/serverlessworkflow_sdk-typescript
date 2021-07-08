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
import { eventstateBuilder } from '../../../src/lib/builders/eventstate-builder';
import { oneventsBuilder } from '../../../src/lib/builders/onevents-builder';

describe('eventstateBuilder ', () => {
  it('should build an object', () => {
    const object = eventstateBuilder()
      .name('Book Lending Request')
      .onEvents([oneventsBuilder().eventRefs(['Book Lending Request Event']).build()])
      .transition('Get Book Status')
      .build();

    expect(object.exclusive).toBeTrue();

    const serializedObject = object.normalize();
    expect(JSON.stringify(serializedObject)).toBe(
      JSON.stringify({
        type: 'event',
        name: 'Book Lending Request',
        onEvents: [
          {
            eventRefs: ['Book Lending Request Event'],
          },
        ],
        transition: 'Get Book Status',
      })
    );

    //    const deserializedObject = object.deserialize(serializedObject);
    //    expect(deserializedObject.exclusive).toBeTrue();

    //Having serialize/ deserialize de following signature

    //  deserialize(value: string): Eventstate {

    //   }
    //   normalize(): string {

    //   }
    //
  });
});