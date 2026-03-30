---
title: Team Setup Guide
sidebar_position: 3
---

# Team Setup Guide

## Understanding Settings Scopes

ControlZebra has two settings scopes:

- **App Settings**: applies to your app experience everywhere
- **Repository Settings**: applies only to the currently opened project

Understanding this difference prevents accidental misconfiguration.

## When to Change What

- "I want this preference in every project" → **App Settings**
- "I only want this behavior in this one project" → **Repository Settings**

## Suggested Baseline for Non-Technical Teams

For shared production repositories:

- Enable protected branch warnings
- Keep automatic background refresh enabled
- Configure large file patterns early
- Use clear branch naming conventions as a team standard

## Safe Settings Rollout Checklist

When introducing ControlZebra to a team:

1. Set profile identity for each user
2. Connect account provider once
3. Define protected branch list
4. Define large file patterns
5. Confirm merge policy and naming conventions
