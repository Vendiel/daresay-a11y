---
id: modal-focus
title: Make sure focus is set correctly with modal dialogs when navigating with keyboard
tags:
  - Modal dialogs
reqs:
  - 2.1.1 A
  - 2.1.2 A
  - 2.4.3 A
roles:
  - Tech
sidebar_label: Correct Focus in Modal Navigation
---

## Description

When a modal dialog is shown, focus must be moved to the dialog so users navigating with keyboard gets access to it. In most cases focus should be set on the first interactive element in the dialog, but there are a few exceptions:

- If there is a lot of content in the dialog, set focus on a static element at the top of the dialog.
- If the dialog performs an action that is not easily reversible, like deleting data, set focus on the last destructive action.

It is also important that it’s not possible to leave the modal dialog and continue navigating the underlying content. It should also support standard ways of dismissing it, like pressing the Escape key.

When the modal dialog is dismissed, focus should return to the control that initially activated/triggered it. If that control has been removed, focus should be set to the one next in line.
