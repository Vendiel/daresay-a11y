---
id: content-dismissable
title: Any pop-up content that is shown on hover or focus must be easily dismissable
tags:
  - Content
  - Tooltips
  - Pop-overs
  - Drop downs
reqs:
  - 1.4.13 AA
roles:
  - Design
  - Tech
---

### Description

For people using different magnifying tools (where the popover for instance could take over their entire viewport) it’s important that there is easy accessible ways to close down the pop-over content without moving the mouse of keyboard focus, to be able to see the underlying (original) content.

Recommended solutions is to make it possible to close it by pressing the Escape key on the keyboard and by clicking at the same control that opened it.

## Examples

Examples of pop-up content: custom tooltips, sub-menus (drop down menus), nonmodal popovers.

## Exceptions

1. Modal dialogues
2. Pop-up content styled by the browser such as built-in tooltips.
3. Input error messages (should not be possible to dismiss)
