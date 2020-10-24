---
id: clear-status-messages
title: Make sure that all users are aware of status messages such as errors messages, successful submissions and other important changes in content
tags:
  - Forms
reqs:
  - 4.1.3 AA
roles:
  - Tech
sidebar_label: Status Messages
---

### Description

Blind or low vision users with screen readers must be made aware of important changes in content that are happening in other parts of the UI that doesn’t have their focus. Depending on what kind of information and how the user should be alerted, make use of pre-defined aria-roles related to status messages or the more generic aria-live for regions where you can set the precise details you want with additional aria-attributes.

### Examples

- Use role=“alert” for important and time-sensitive messages like errors.
- Use role=“status” for a successful submit of a form.
- Use role=""status"" for the search result text when a search result has been returned.
- Use role=“log” for chat conversation updates.

### Additional Information

If the error is displayed in a modal dialog it will automatically get focus, which means that no additional means needs to be taken.

Note. Don’t use too many status messages, it can be too chatty and the user might be constantly disrupted when trying to navigate your site.
