This is a reproduction of the bug with zod record typing (zod version 3.13.2)

1. Run `npm install` 
2. Run `npm run typecheck`
3. Run `npm run start`

Expected result:
Either both use cases print `true` as a parsing result or `typecheck` fails because of the incorrect type.

Actual result:
`typecheck` accepts both use cases, but parsing is successful only for use case without undefined. That shows that TS typing for record is too loose.
