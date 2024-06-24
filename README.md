# Salary Discount Calculator Web

This project is an Angular application that calculates the net salary based on gross salary, discounts, and the number of dependents.

## Prerequisites

- Node.js (version 18.19.0)
- Angular CLI

## Installation

1. Clone the repository:

    ```bash
        https://github.com/AysllaGomes/salary-discount-calculator-web.git
    ```

2. Install dependencies:

    ```bash
        npm install
    ```

3. Start the development server:

    ```bash
        ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

1. Enter the gross salary in the "Salário" field.
2. Enter the discounts in the "Descontos" field.
3. Enter the number of dependents in the "Número de dependentes" field.
4. Click the "Calcular" button to calculate the net salary.

## Build

To build the project for production, run:

```bash
    ng build
```

## Running Unit Tests
To execute the unit tests via Karma, run:

```bash
    ng test
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Dependencies
This project relies on the following dependencies:

- Angular Material
- ngx-mask
- sprintf-js

## Configuration
Handling CommonJS Dependencies
To avoid optimization bailouts due to CommonJS dependencies, we configured Angular to allow the usage of sprintf-js. This configuration can be found in the angular.json file:

```bash
{
    "projects": {
        "salary-discount-calculator-web": {
            "architect": {
                "build": {
                    "options": {
                        "allowedCommonJsDependencies": [
                            "sprintf-js"
                        ]
                    }
                }
            }
        }
    }
}
```
For more information, see the [Angular CLI](https://angular.dev/tools/cli/build#configuring-commonjs-dependencies) documentation.
