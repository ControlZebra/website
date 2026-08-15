import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://controlzebra.com',
  output: 'static',
  integrations: [
    starlight({
      title: 'ControlZebra Docs',
      description: 'Product documentation for ControlZebra desktop workflows, setup, settings, and troubleshooting.',
      customCss: ['./src/styles/starlight.css'],
      lastUpdated: true,
      social: [
        {
          icon: 'github',
          label: 'GitHub Releases',
          href: 'https://github.com/ControlZebra/controlzebra-releases',
        },
      ],
      sidebar: [
        { label: 'Website Home', link: '/' },
        { slug: 'docs', label: 'Introduction' },
        {
          label: 'Getting Started',
          items: [
            'docs/getting-started/installation',
            {
              label: 'First-Time Setup',
              autogenerate: { directory: 'docs/getting-started/first-time-setup' },
            },
            'docs/getting-started/open-a-project',
            'docs/getting-started/first-checkpoint',
            'docs/getting-started/daily-checklist',
          ],
        },
        {
          label: 'Core Workflows',
          items: [
            'docs/core-workflows/daily-workflow',
            'docs/core-workflows/save-changes',
            'docs/core-workflows/sync',
            'docs/core-workflows/share',
            {
              label: 'Merge',
              autogenerate: { directory: 'docs/core-workflows/merge' },
            },
            'docs/core-workflows/history',
            'docs/core-workflows/branches',
          ],
        },
        {
          label: 'Settings',
          items: [
            {
              label: 'App Settings',
              items: [
                'docs/settings/app-settings/appearance',
                'docs/settings/app-settings/profile-identity',
                'docs/settings/app-settings/connected-accounts',
              ],
            },
            {
              label: 'Repo Settings',
              items: [
                'docs/settings/repo-settings/protected-branches',
                'docs/settings/repo-settings/large-files-lfs',
                'docs/settings/repo-settings/background-tasks',
              ],
            },
            'docs/settings/team-setup-guide',
          ],
        },
        {
          label: 'Troubleshooting',
          items: [
            {
              label: 'Setup Issues',
              items: [
                'docs/troubleshooting/setup-issues/missing-tools',
                'docs/troubleshooting/setup-issues/history-problems',
              ],
            },
            {
              label: 'Sync and Auth',
              items: [
                'docs/troubleshooting/sync-and-auth/sync-fails',
                'docs/troubleshooting/sync-and-auth/auth-expired',
              ],
            },
            {
              label: 'Merge Issues',
              items: [
                'docs/troubleshooting/merge-issues/merge-conflicts',
                'docs/troubleshooting/merge-issues/stuck-states',
              ],
            },
            {
              label: 'Performance',
              items: ['docs/troubleshooting/performance/large-files'],
            },
          ],
        },
      ],
    }),
    sitemap({
      filter: (page) => page !== 'https://controlzebra.com/designs/',
    }),
  ],
  server: {
    host: true,
  },
});