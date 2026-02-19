---
sidebar_position: 5
---

# Troubleshooting

Use this page when ControlZebra is blocked, stuck, or not syncing as expected.

## 1) Sync fails

**Symptom:** Clicking **Sync** shows an error.

Try this order:

1. Check internet connection.
2. Confirm you opened the correct project folder.
3. Reconnect account in **Settings → Accounts**.
4. Retry **Sync**.
5. If still failing, ask a teammate whether remote access permissions changed.

## 2) Authentication expired

**Symptom:** Sync or Share reports a permission/authentication error.

Fix:

1. Go to **Settings → Accounts**
2. Disconnect provider
3. Reconnect and re-authenticate
4. Retry Sync/Share

## 3) Merge conflicts appear

**Symptom:** You see conflict files after Sync or Merge.

Do this:

1. Open **Merge Changes** / conflict helper.
2. For each file, choose:
   - **Keep Mine** — Use your version
   - **Keep Theirs** — Use the team's version
   - **Edit** — Open the file and manually merge
3. Save after all conflicts are resolved.
4. Share the merged result.

:::tip
Conflicts are normal in shared projects. Resolve slowly and verify critical files before sharing.
:::

## 4) Large files are slow

**Symptom:** Sync/Share takes too long on big assets.

Fix:

1. Check LFS status in settings/status area.
2. Add your custom large file patterns in repository settings.
3. Avoid merging very large binaries during peak team usage windows.

## 5) App says required tools are missing

**Symptom:** Startup message says required tooling is not found.

Fix:

1. Reinstall or repair the app.
2. Restart your computer.
3. Reopen ControlZebra.
4. If issue persists, contact support with a screenshot.

### Advanced checks (for support-guided sessions)

Only run these if support asks you to:

- `git --version`
- `git lfs version`
- `git status`

These commands help support confirm local setup.

## 6) History looks wrong or missing

**Symptom:** You expected a checkpoint in History but cannot find it.

Try:

1. Confirm you are on the expected branch.
2. Refresh the app view.
3. Check whether your checkpoint was saved with a different message.
4. Ask teammate whether it was saved on another branch.

If support asks for diagnostics, they may request:

- `git log --oneline --decorate -20`
- `git reflog -20`

## 7) Stuck states (merge/rebase/cherry-pick)

If ControlZebra reports an in-progress operation and blocks normal actions:

1. Open repository diagnostics (if available in your build).
2. Use the guided recovery option suggested by the app.
3. Retry your workflow.

Support-only commands that may be requested:

- `git merge --abort`
- `git rebase --abort`
- `git cherry-pick --abort`

## Still Need Help?

- [Report an issue on GitHub](https://github.com/ControlZebra/controlzebra-releases/issues)
- [Email support](mailto:hello@controlzebra.com)
