const zod = require('zod')

const recordZ = zod.record(zod.string());

console.log(
    'Record with all string values:',
    recordZ.safeParse({
        'test-key-1': 'test-value-1',
        'test-key-2': 'test-value-2',
    }).success
)

console.log(
    'Record with null value:',
    recordZ.safeParse({
        'test-key-1': 'test-value-1',
        'test-key-2': 'test-value-2',
        'test-key-3': null
    }).success
)

console.log(
    'Record with undefined value:',
    recordZ.safeParse({
        'test-key-1': 'test-value-1',
        'test-key-2': 'test-value-2',
        'test-key-3': undefined,
    }).success
)
