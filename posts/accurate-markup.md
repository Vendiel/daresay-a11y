---
id: accurate-markup
title: Make sure that all HTML validates according to chosen doctype
tags:
  - Markup
reqs:
  - 4.1.1 A
roles:
  - Tech
sidebar_label: Accurate Markup
---

## Description

It’s important that the markup is accurate so that assistive technologies can interpret and parse the content, which rely on the markup in DOM.

Extra important that these things are correct:

- Start and end tags are used according to specification. Make sure there’s no missing character.
- Elements are nested according to specification. Don’t put a div inside a span, or an li without an ul or ol.
- An attribute is only used once per element, no duplicates.
- And ID is only used once per page, no duplicates.

You can validate your HTML automatically with a validator. It’s not always certain that the validator checks all aspects or the specification so make sure you understand how to follow the specification.
