---
id: review-and-correct
title: It should be possible to review, correct and confirm the entered information of an important form submission or make it possible to reverse the submission
tags:
  - Forms
reqs:
  - 3.3.4 AA
roles:
  - Design
prio: 181
---

## Description

Transactions that are legal commitments, financial transactions, updating or deleting personal data or submitting users test responses are considered important.

## Examples

Making a purchase online, submitting an income tax return, transfer funds between accounts, submitting a questionnaire, deleting user files etc.

## Possible solutions

- Provide a time period where user can cancel or change an order. If canceling or changing the order is not possible through the site, there must be instructions on how to do it.
- If the transaction is irreversible, provide a possibility for the user to review the entered information before submitting. Either by making it possible to go back and look through the form (if divided on different pages) or create a summary with all entered data and the possibility to go back and correct potential errors.
- If irreversible, provide a mechanism (like a modal dialog) where the user can confirm or cancel data deletion.
- If the transaction is irreversible, provide a checkbox to verify that the user is ready to submit.
- Provide a mechanism for restoring deleted data, either by moving it to a trash folder and store it for x days or use version control.
