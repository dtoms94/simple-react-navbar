import NavbarMenuItem from '../../components/Navbar/NavbarMenuItem';
import Navbar from '../../components/Navbar/Navbar'
import { Icon24Hours, IconAB, IconSettings, IconMessage } from '@tabler/icons-react';


//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Navbar Menu Item',
  component: NavbarMenuItem,
};

const exampleIcons = {
  'IconSettings': <IconSettings />,
  'Icon24Hours': <Icon24Hours />,
  'IconAB': <IconAB />,
  'IconMessage': <IconMessage />
}

export const Playground = {
  render: (args) => (
    <Navbar expandedWidth={args.Width}>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
        icon={args.Icon ? exampleIcons[args.Icon] : <IconSettings />}
        disabled={args.Disabled}
      />
    </Navbar>
  ),
  argTypes: {
    Icon: {
      control: 'select',
      options: ['IconSettings', 'Icon24Hours', 'IconAB'],
    },
  },
  args: {
    Link: '#about',
    Title: 'Settings',
    Description: '',
    Badge: undefined,
    Width: 250,
    Disabled: false
  }
};

export const WithDescription = {
  render: (args) => (
    <Navbar expandedWidth={args.Width}>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
        icon={args.Icon ? exampleIcons[args.Icon] : <IconSettings />}
      />
    </Navbar>
  ),
  argTypes: {
    Icon: {
      control: 'select',
      options: ['IconSettings', 'Icon24Hours', 'IconAB'],
    },
  },
  args: {
    Link: '#about',
    Title: 'Settings',
    Description: 'Controls & Preferences',
    Badge: undefined,
    Width: 250,
  }
};

export const NoIcon = {
  render: (args) => (
    <Navbar expandedWidth={args.Width}>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
      />
    </Navbar>
  ),
  args: {
    Link: '#about',
    Title: 'Settings',
    Description: 'Controls & Preferences',
    Badge: undefined,
    Width: 250,
  }
};

export const WithBadge = {
  render: (args) => (
    <Navbar expandedWidth={args.Width}>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
        icon={args.Icon ? exampleIcons[args.Icon] : <IconSettings />}
      />
    </Navbar>
  ),
  argTypes: {
    Icon: {
      control: 'select',
      options: ['IconSettings', 'Icon24Hours', 'IconAB'],
    },
  },
  args: {
    Link: '#about',
    Title: 'Settings',
    Description: '',
    Badge: {
      text: 'New',
      color: 'purple'
    },
    Width: 250,
  }
};

export const LongTitle = {
  render: (args) => (
    <Navbar expandedWidth={args.Width}>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
        icon={args.Icon ? exampleIcons[args.Icon] : <IconSettings />}
      />
    </Navbar>
  ),
  argTypes: {
    Icon: {
      control: 'select',
      options: ['IconSettings', 'Icon24Hours', 'IconAB'],
    },
  },
  args: {
    Link: '#about',
    Title: 'Settings & Other Things That Make The Title Long',
    Description: '',
    Badge: {
      text: 'New',
      color: 'purple'
    },
    Width: 250,
  }
};

export const LongDescription = {
  render: (args) => (
    <Navbar expandedWidth={args.Width}>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
        icon={args.Icon ? exampleIcons[args.Icon] : <IconSettings />}
      />
    </Navbar>
  ),
  argTypes: {
    Icon: {
      control: 'select',
      options: ['IconSettings', 'Icon24Hours', 'IconAB'],
    },
  },
  args: {
    Link: '#about',
    Title: 'Settings',
    Description: 'User Preferences to Make The Experience Better',
    Badge: {
      text: 'New',
      color: 'purple'
    },
    Width: 250,
  }
};

export const AllOptions = {
  render: (args) => (
    <Navbar expandedWidth={args.Width}>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
        icon={args.Icon ? exampleIcons[args.Icon] : <IconMessage />}
      />
    </Navbar>
  ),
  argTypes: {
    Icon: {
      control: 'select',
      options: ['IconSettings', 'Icon24Hours', 'IconAB'],
    },
  },
  args: {
    Link: '/messages',
    Title: 'Settings',
    Description: 'Friends & Family',
    Badge: {
      text: '99+',
      color: 'maroon'
    },
    Width: 250,
  }
};

export const Collapsed = {
  render: (args) => (
    <Navbar collapsed>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
        icon={args.Icon ? exampleIcons[args.Icon] : <IconMessage />}
      />
    </Navbar>
  ),
  argTypes: {
    Icon: {
      control: 'select',
      options: ['IconSettings', 'Icon24Hours', 'IconAB'],
    },
  },
  args: {
    Link: '/messages',
    Title: 'Settings',
    Description: 'Friends & Family',
    Badge: undefined,
    Width: 250,
  }
};

export const CollapsedWithBadge = {
  render: (args) => (
    <Navbar collapsed>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
        icon={args.Icon ? exampleIcons[args.Icon] : <IconMessage />}
      />
    </Navbar>
  ),
  argTypes: {
    Icon: {
      control: 'select',
      options: ['IconSettings', 'Icon24Hours', 'IconAB'],
    },
  },
  args: {
    Link: '/messages',
    Title: 'Settings',
    Description: 'Friends & Family',
    Badge: {
      text: 'New',
      color: 'navy'
    },
    Width: 250,
  }
};

export const compact = {
  render: (args) => (
    <Navbar compact>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
        icon={args.Icon ? exampleIcons[args.Icon] : <IconMessage />}
      />
    </Navbar>
  ),
  argTypes: {
    Icon: {
      control: 'select',
      options: ['IconSettings', 'Icon24Hours', 'IconAB'],
    },
  },
  args: {
    Link: '/messages',
    Title: 'Settings',
    Description: 'Friends & Family',
    Badge: {
      text: 'New',
      color: 'navy'
    },
    Width: 250,
  }
};

export const CompactAndCollapsed = {
  render: (args) => (
    <Navbar compact collapsed>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
        icon={args.Icon ? exampleIcons[args.Icon] : <IconMessage />}
      />
    </Navbar>
  ),
  argTypes: {
    Icon: {
      control: 'select',
      options: ['IconSettings', 'Icon24Hours', 'IconAB'],
    },
  },
  args: {
    Link: '/messages',
    Title: 'Settings',
    Description: 'Friends & Family',
    Badge: {
      text: 'New',
      color: 'navy'
    },
    Width: 250,
  }
};

export const Disabled = {
  render: (args) => (
    <Navbar>
      <NavbarMenuItem
        link={args.Link}
        title={args.Title}
        description={args.Description}
        badge={args.Badge}
        icon={args.Icon ? exampleIcons[args.Icon] : <IconMessage />}
        disabled
      />
    </Navbar>
  ),
  argTypes: {
    Icon: {
      control: 'select',
      options: ['IconSettings', 'Icon24Hours', 'IconAB'],
    },
  },
  args: {
    Link: '/messages',
    Title: 'Settings',
    Description: 'Friends & Family',
    Badge: {
      text: 'New',
      color: 'navy'
    },
    Width: 250,
  }
};
