---
sidebar_position: 3
---

# Core Workflows

This is the practical day-to-day workflow for teams using ControlZebra.

## Recommended daily workflow

1. **Sync** before starting work
2. Make your file changes
3. **Save Changes** with a clear message
4. Repeat save steps during the day at safe checkpoints
5. **Share** when your changes are ready for teammates

This sequence reduces conflicts and keeps history clear.

## Save Changes

Creates a named checkpoint of your current folder state.

Use it when:

- You finish a meaningful task
- You reach a stable checkpoint before testing
- You want a clear rollback point

Good save message examples:

- "Adjusted conveyor startup delay"
- "Updated HMI alarm labels"
- "Added pressure interlock for pump line B"

:::tip
Avoid vague messages like "updates" or "fix".
:::

## Sync

Brings in your team's latest shared changes.

Use it:

- At the start of your day
- Before working on shared files
- Before a merge

If there are overlapping edits, ControlZebra guides you through resolution.

## Share

Publishes your saved checkpoints for your team.

Use it after you finish a clean unit of work.

:::note
If you have unsaved changes, save first.
:::

## Merge action

Use **Merge Changes** when you need to combine work from one branch into another.

Typical flow:

1. Choose source and target branches
2. Run the conflict check
3. If no conflicts, complete merge
4. If conflicts appear, resolve file-by-file in the merge helper
5. Save the merge result and share

Conflict choices are usually:

- **Keep Mine**: keep your version
- **Keep Theirs**: keep incoming version
- **Edit**: manually combine both

:::tip
When unsure, compare both versions and involve the file owner before completing the merge.
:::

## History

Shows your project timeline: who changed what, when, and why.

Use history to:

- Audit changes before release
- Investigate regressions
- Compare snapshots
- Restore confidence after mistakes

From the History area you can typically:

- Browse previous checkpoints
- Open changed file lists
- Review side-by-side diffs
- Undo a recent checkpoint when needed

## Branches (simple explanation)

A branch is a separate work lane.

Use branches when:

- You are trying risky changes
- Multiple features are in progress
- You want clean review before touching main

Name branches clearly, for example:

- `feature/hmi-alarm-cleanup`
- `fix/pump-permission-logic`
- `test/new-startup-sequence`

:::info Placeholder
Add screenshots for: Save panel, Merge helper, and History timeline view.
:::
