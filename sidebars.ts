import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "getting-started/installation",
        {
          type: "category",
          label: "First-Time Setup",
          items: [
            "getting-started/first-time-setup/profile-and-identity",
            "getting-started/first-time-setup/connect-accounts",
          ],
        },
        "getting-started/open-a-project",
        "getting-started/first-checkpoint",
        "getting-started/daily-checklist",
      ],
    },
    {
      type: "category",
      label: "Core Workflows",
      items: [
        "core-workflows/daily-workflow",
        "core-workflows/save-changes",
        "core-workflows/sync",
        "core-workflows/share",
        {
          type: "category",
          label: "Merge",
          items: [
            "core-workflows/merge/merge-action",
            "core-workflows/merge/conflict-resolution",
          ],
        },
        "core-workflows/history",
        "core-workflows/branches",
      ],
    },
    {
      type: "category",
      label: "Settings",
      items: [
        {
          type: "category",
          label: "App Settings",
          items: [
            "settings/app-settings/appearance",
            "settings/app-settings/profile-identity",
            "settings/app-settings/connected-accounts",
          ],
        },
        {
          type: "category",
          label: "Repo Settings",
          items: [
            "settings/repo-settings/protected-branches",
            "settings/repo-settings/large-files-lfs",
            "settings/repo-settings/background-tasks",
          ],
        },
        "settings/team-setup-guide",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: [
        {
          type: "category",
          label: "Sync & Auth Issues",
          items: [
            "troubleshooting/sync-and-auth/sync-fails",
            "troubleshooting/sync-and-auth/auth-expired",
          ],
        },
        {
          type: "category",
          label: "Merge Issues",
          items: [
            "troubleshooting/merge-issues/merge-conflicts",
            "troubleshooting/merge-issues/stuck-states",
          ],
        },
        {
          type: "category",
          label: "Performance",
          items: ["troubleshooting/performance/large-files"],
        },
        {
          type: "category",
          label: "Setup Issues",
          items: [
            "troubleshooting/setup-issues/missing-tools",
            "troubleshooting/setup-issues/history-problems",
          ],
        },
      ],
    },
  ],
};

export default sidebars;
