---
sidebar_position: 4
---

# App & Repo Settings

ControlZebra has two settings scopes:

- **App Settings**: applies to your app experience everywhere
- **Repository Settings**: applies only to the currently opened project

Understanding this difference prevents accidental misconfiguration.

## App Settings (global)

Use App Settings for personal defaults and account-level setup.

Typical items:

1. **Appearance / Theme**
   - Choose dark, light, or system behavior.
2. **Profile identity**
   - Your display name and email used for save history attribution.
3. **Connected accounts**
   - Connect or reconnect GitHub/GitLab accounts.
4. **Recent folders and app behavior**
   - Manage startup behavior and recently opened projects.

:::tip
Set your profile identity before your first shared save. It keeps history readable for everyone.
:::

## Repository Settings (per project)

Use Repository Settings when one project needs custom behavior.

Typical items:

1. **Protected branches**
   - Warn or require confirmation before direct saves to critical branches.
2. **Background refresh tasks**
   - Auto-refresh branch metadata and optimize repository health in the background.
3. **Large file handling (LFS)**
   - Configure file types that should be treated as large assets.
4. **Remote/project-specific options**
   - Keep project-specific rules local to this repository.

## Suggested baseline for non-technical teams

For shared production repositories:

- Enable protected branch warnings
- Keep automatic background refresh enabled
- Configure large file patterns early
- Use clear branch naming conventions as a team standard

## When to change what

- "I want this preference in every project" → **App Settings**
- "I only want this behavior in this one project" → **Repository Settings**

## Safe settings rollout checklist

When introducing ControlZebra to a team:

1. Set profile identity for each user
2. Connect account provider once
3. Define protected branch list
4. Define large file patterns
5. Confirm merge policy and naming conventions

:::info Placeholder
Add exact screenshots and final menu paths for:
- Theme selector
- Profile identity form
- Protected branch settings
- LFS pattern settings
- Background task controls
:::
