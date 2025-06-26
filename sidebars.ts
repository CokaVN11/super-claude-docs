import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'getting-started',
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
  ],
};

export default sidebars;