---
id: clear-errors
title: All users must know that an error has occurred and how to identify it
tags:
  - Forms
reqs:
  - 3.3.1 A
roles:
  - Tech
  - Design
prio: 184
---

## Description

It must be possible for users to identify the specific error fields, though for some users just indicating the fields isn't sufficent for them to percieve that an error has occurred. Screen reader users, for example, will not know there was an error until they actually encountering it while tabbing through the website. If that error is not alerted or in their path, they will miss it. Hence, additional effort must be taken so that they also are made aware of the errors.

To be extra helpful it's recommended to help users navigate to the fields where the errors occurred.

## Possible solutions

- If using a client-side solution that triggers an error when leaving a field, an alert dialog could be shown, stating what went wrong so the user can go back and fix it. (Could use role=“alertdialog”). When the user closes the dialog, focus is set on the field where the error occurred.
- If using a client-side solution that triggers when the user is pressing the submit button, an error message could be shown below the button, with links to each field with an error. Each error field also gets a text label so the user can identify the next one without going back to the error message below the button.
- If using server-side to validate the form, re-display the form (including all previously entered data) and add an error message above the form, with a link to each field that has an error. Each error field also gets a text label so the user can identify the next one without going back to the error message in the top.

## Additional information

- Use aria-invalid if it's not possible to programmatically associate specific error description with the failed field.
- aria-live can be used to notify users when an error occur.
- Use aria-describedby to associate the error text with the field.
- Could also use aria-live or role=“alert” when using client-side validation.
