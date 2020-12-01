---
id: tablelayout
title: Don’t use tables for layout purposes
tags:
  - Layout
reqs:
  - 1.3.1 A
roles:
  - Tech
sidebar_label: Tables for Layout
---

## Description

Use the correct HTML-elements for tables instead of changing the layout. Change the styling properties instead of using tables for layout purposes.

Increase the chance that the information is presented correct no matter which assistive technology the user has by using html-elements in the correct manner.

If poorly handled, for example if a table is created with the use of white characters or css-positioning the content will be perceived wrong by a screen reader.

## What to do

- Provide HTML table markup and provide column headers for simple tables and column headers and row headers for complex tables
- When using nested tables, consider the possibility of breaking the content into logical individual tables instead of nested tables
