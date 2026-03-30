---
title: Stuck States
sidebar_position: 2
---

# Stuck States

**Symptom:** ControlZebra reports an in-progress operation and blocks normal actions (merge/rebase/cherry-pick).

If ControlZebra reports an in-progress operation:

1. Open repository diagnostics (if available in your build).
2. Use the guided recovery option suggested by the app.
3. Retry your workflow.

Support-only commands that may be requested:

- `git merge --abort`
- `git rebase --abort`
- `git cherry-pick --abort`
