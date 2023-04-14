# internship-tasks

## Task 1

| Input  | Output - Description |
| ------------- | ------------- |
| abcabcbb  | 3 - Basic happy path  |
| aaaaa  | 1 - Non-repeat basic check  |
| a4bezz  |  5 - Verification that numbers are also characters |
| a!bezz  |  5 - Verification that special characters are also characters |
| a bba  | 3 - Blank characters should be counted |
|   |  0 - Should not cause application to crash |
|  All_Characters | 65536 - Longest letter/number/special-characters substring  |
| null  | 0 - Should check if application can handle null  |
| 'a'.repeat(2 ** 28 - 16)  | 1 - Longest String for Chrome  |
| undefined  | 0 - Should check if application can handle undefined  |
| new Array('a', 'b', 'c')  | 3 - Should check for array type  |

## Task 2

### 1. Install Cypress

[Install Cypress by following official guide](https://docs.cypress.io/guides/getting-started/installing-cypress)

### 2. Start project in development mode

- clone or download this repository
- npm install
- npx cypress open (runs in gui dev mode - allows to inspect every spec invidually)
  - Continue (Only during initial launch)
  - E2E Testing
  - Pick Chrome browser
- npx cypress run (runs all specs in console)

### Dependecies

- Cypress 12.9.0
