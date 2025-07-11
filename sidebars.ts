import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    'version-comparison',
    {
      type: 'category',
      label: 'Core Configuration',
      items: [
        'core-config/claude-md',
      ],
    },
    {
      type: 'category',
      label: 'Rules & Standards',
      items: [
        'rules-standards/overview',
      ],
    },
    {
      type: 'category',
      label: 'Personas',
      items: [
        'personas/overview',
      ],
    },
    {
      type: 'category',
      label: 'Comprehensive Guides',
      items: [
        'guides/claude-md-guide',
        'guides/rules-md-guide',
        'guides/mcp-md-guide',
        'guides/personas-md-guide',
        'guides/commands-guide',
        'guides/sequential-thinking-guide',
        'guides/conversation-starters',
        'guides/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Quick Reference',
      items: [
        'reference/commands-quick-ref',
      ],
    },
    {
      type: 'category',
      label: 'Legacy Documentation (v1)',
      collapsed: true,
      items: [
        'v1/intro',
        'v1/getting-started',
        {
          type: 'category',
          label: 'v1 Core Configuration',
          items: [
            'v1/core-config/claude-md',
          ],
        },
        {
          type: 'category',
          label: 'v1 Guides',
          items: [
            'v1/guides/claude-md-guide',
            'v1/guides/rules-md-guide',
            'v1/guides/mcp-md-guide',
            'v1/guides/personas-md-guide',
            'v1/guides/commands-guide',
            'v1/guides/conversation-starters',
            'v1/guides/best-practices',
          ],
        },
        {
          type: 'category',
          label: 'v1 Reference',
          items: [
            'v1/reference/commands-quick-ref',
          ],
        },
      ],
    },
  ],
};

export default sidebars;