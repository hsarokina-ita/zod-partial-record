import type {TypeOf} from 'zod'
import {z} from 'zod'

const recordZ = z.record(z.string());
type TypeOfParser = TypeOf<typeof recordZ>

const recordWithAllStrings: TypeOfParser = {
  'test-key-1': 'test-value-1',
  'test-key-2': 'test-value-2',
}

console.log(
    'Record with all string values:',
    recordZ.safeParse(recordWithAllStrings).success
)

const recordWithUndefined: TypeOfParser = {
  'test-key-1': 'test-value-1',
  'test-key-2': 'test-value-2',
  'test-key-3': undefined,
}

console.log(
  'Record with undefined value:',
  recordZ.safeParse(recordWithUndefined).success
)
