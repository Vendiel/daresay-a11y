---
id: pop-up-persistent
title: Pop-up content that is shown on hover or focus must remain persistent
tags:
  - Tooltips
  - Pop-overs
reqs:
  - 1.4.13 AA
roles:
  - Design
  - Tech
prio: 251
---

## Description

The content of the pop-up must remain visible until:

1. User removes hover or focus from the trigger or the pop-up content.
2. User dismisses the pop-up content via a close mechanism like the Escape key.
3. The information in the pop-up content is no longer valid, such as a busy message that is no longer valid.

This is so that user will have enough time to take in/read the pop-up content.

## Examples

Examples of pop-up content: custom tooltips, sub-menus (drop down menus), nonmodal popovers.

## Exceptions

1. Modal dialogues
2. Pop-up content styled by the browser such as built-in tooltips.
