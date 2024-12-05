# Changelog

## [1.1.0] - 2024-12-05

| **Category**      | **Description**                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Major Changes**  | - Updated CI workflows to improve efficiency and maintainability.                                                                                   |
| **Improvements**   | - Added import ordering rules to the Prettier configuration for better code consistency. <br> - Updated the import order configuration to handle all cases properly, including: <br> &nbsp;&nbsp;• Specific handling for `@angular` modules. <br> &nbsp;&nbsp;• Correct ordering of `@env` imports. <br> &nbsp;&nbsp;• Placement of relative paths at the end of the import list. |
| **Enhancements**   | - Introduced new Git rules: <br> • **Commit Rules**: Enforced message formatting for standardized commit messages. <br> • **Push Rules**: Enforced branch naming patterns for consistent workflow. |

**Summary**:  
This release includes major updates to the CI workflows and introduces new rules for both Git commit and push processes. Additionally, Prettier configuration has been improved with import ordering rules, ensuring consistent code style across the project.

[#44](https://github.com/kiforks/kifor-prettier-config/pull/9) by [@kiforks](https://github.com/kiforks).

## [1.0.7] - 2024-06-05

| **Category**      | **Description**                                                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Improvements**  | - Updated package versions to latest stable versions ([#8](https://github.com/kiforks/kifor-prettier-config/pull/8)).                          |
| **Cleanup**       | - Removed redundant files for cleaner repository ([#8](https://github.com/kiforks/kifor-prettier-config/pull/8)).                              |
| **Changes**       | - Disabled Dependabot due to misaligned workflows ([#8](https://github.com/kiforks/kifor-prettier-config/pull/8)).                              |

---

## [1.0.6] - 2024-05-24

| **Category**      | **Description**                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Improvements**  | - Updated package versions for better compatibility ([#6](https://github.com/kiforks/kifor-prettier-config/pull/6)).          |
| **Enhancements**  | - Added `.gitattributes` configuration file to normalize line endings ([#6](https://github.com/kiforks/kifor-prettier-config/pull/6)). |

---

## [1.0.5] - 2024-04-17

| **Category**      | **Description**                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| **Fixes**         | - Fixed tab formatting issues ([#5](https://github.com/kiforks/kifor-prettier-config/pull/5)).       |

---

## [1.0.4] - 2024-04-17

| **Category**      | **Description**                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Fixes**         | - Changed configuration file format from `js` to `json` for better tooling compatibility ([#4](https://github.com/kiforks/kifor-prettier-config/pull/4)). |

---

## [1.0.3] - 2024-04-17

| **Category**      | **Description**                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| **Fixes**         | - Corrected the main file path in `package.json` ([#3](https://github.com/kiforks/kifor-prettier-config/pull/3)). |

---

## [1.0.2] - 2024-04-17

| **Category**      | **Description**                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| **Fixes**         | - Fixed package main file path to resolve import issues ([#2](https://github.com/kiforks/kifor-prettier-config/pull/2)).       |

---

## [1.0.1] - 2024-04-17

| **Category**      | **Description**                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| **Changes**       | - Updated repository settings to enhance collaboration ([#1](https://github.com/kiforks/kifor-prettier-config/pull/1)).        |

---

## [1.0.0] - 2024-04-17

| **Category**      | **Description**                                                                                                    |
| ----------------- |--------------------------------------------------------------------------------------------------------------------|
| **Major Changes** | - Released the final version of the configuration ([#1](https://github.com/kiforks/kifor-prettier-config/pull/1)). |
