---
id: error-details
title: Any error message should be as specific as possible and suggest how the user can recover from the error
tags:
  - Forms
reqs:
  - 3.3.1 A
  - 3.3.3 AA
roles:
  - Copy
---

## Description

Describe the nature of the problem, don’t be generic. Provide simple and detailed instructions on how they can solve the problem.

If the user must follow certain format or values, then the text should describe this, suggest the allowed value that is most similar to the one entered or give a descriptive example.

## Examples

- “Invalid email adress, enter example@yourdomain.com” is specific and offers an example of the format that’s needed.
- User has misspelled a city name. The error message includes a list of city names that the user may have meant.

## Exception

1. If it would jeopardise the security of the site.
2. If it would jeopardise the purpose of the content.
