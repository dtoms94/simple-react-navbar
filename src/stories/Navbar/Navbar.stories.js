import Navbar from '../../components/Navbar/Navbar'
import NavbarHeader from '../../components/Navbar/NavbarHeader'
import NavbarContent from '../../components/Navbar/NavbarContent'
import NavbarSection from '../../components/Navbar/NavbarSection'
import NavbarMenuItem from '../../components/Navbar/NavbarMenuItem'
import NavbarFooter from '../../components/Navbar/NavbarFooter'

import { 
  IconGraph, 
  IconHeartHandshake, 
  IconShoppingBag, 
  IconSubtask,
  IconEgg,
  IconFeather,
  IconChartAreaLine,
  IconClick,
  IconTableOptions,
  IconMail,
  IconUserCircle,
  IconHelpHexagon,
  IconPlayerTrackNext,
  IconBook
} from '@tabler/icons-react';
import NavbarSubMenu from '../../components/Navbar/NavbarSubMenu'


//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Navbar',
  component: Navbar,
};

export const Playground = {
  render: (args) => (
    <div style={{height: '450px'}}>
      <Navbar 
        collapsed={args.Collapsed} 
        collapsible={args.Collapsible}
        compact={args.Compact}
        expandedWidth={args.ExpandedWidth}
        extraStyles={{height: 450}}
        theme={args.Theme}
      >
        <NavbarHeader
          basicBrand={{
            text: 'SN',
            color: 'darkblue'
          }}
          title='Simple Nav'
          tagline='Playground'
          shadowed={args.ShadowedHeader}
        />
        <NavbarContent scrollable={args.ScrollContentOnly}>
          <NavbarSection
            title='Dashboards'
          >
            <NavbarMenuItem
              link='/dashboards/analytics'
              icon={<IconGraph />}
              title='Analytics'
            />
            <NavbarMenuItem
              link='/dashboards/CRM'
              icon={<IconHeartHandshake />}
              title='CRM'
              description='Customer Relationship Management'
            />
            <NavbarMenuItem
              link='/dashboards/ecommerce'
              icon={<IconShoppingBag />}
              title='eCommerce'
              description='eCommerce Partners'
              badge={{
                text: 'New',
                color: 'darkorange'
              }}
            />
            <NavbarSubMenu
              icon={<IconSubtask />}
              title='Submenu'
              description='Open me!'
            >
              <NavbarMenuItem
                link='/dashboards/nested/egg'
                icon={<IconEgg />}
                title='Nested Item'
                description="I'm nested!"
              />
              <NavbarMenuItem
                link='/dashboards/nested/egg'
                icon={<IconFeather />}
                title='Me Too!'
                description='And disabled!'
                badge={{
                  text: 'cool',
                }}
                disabled
              />
            </NavbarSubMenu>
          </NavbarSection>
          <NavbarSection
            title='Widgets'
          >
            <NavbarMenuItem
              link='/widgets/graphs'
              icon={<IconChartAreaLine />}
              title='Graphs'
            />
            <NavbarMenuItem
              link='/widgets/buttons'
              icon={<IconClick />}
              title="I'm a button!"
              asButton
            />
            <NavbarMenuItem
              link='/widgets/custom'
              icon={<IconTableOptions />}
              title='Custom'
              description='Upgrade today!'
              disabled
              badge={{
                text: 'PRO',
                color: 'purple'
              }}
            />
          </NavbarSection>
          <NavbarSection
            title='Help'
          >
            <NavbarMenuItem
              link='/help/faq'
              icon={<IconHelpHexagon />}
              title='FAQ'
            />
            <NavbarMenuItem
              link='/help/getting-started'
              icon={<IconPlayerTrackNext />}
              title="Getting Started"
            />
            <NavbarMenuItem
              link='/help/api-documentation'
              icon={<IconBook />}
              title='API Docs'
              badge={{
                text: 'New',
                color: 'darkorange'
              }}
            />
          </NavbarSection>
        </NavbarContent>
        <NavbarFooter shadowed={args.ShadowedFooter}>
          <NavbarMenuItem
              link='/messages'
              icon={<IconMail />}
              title='Messages'
              description="You've got mail!"
              badge={{
                text: '99+',
                color: 'red'
              }}
            />
            <NavbarMenuItem
              link='/profile'
              icon={<IconUserCircle />}
              title='Profile'
            />
        </NavbarFooter>
      </Navbar>
    </div>
  ),
  args: {
    Compact: false,
    Collapsed: false,
    Collapsible: false,
    ExpandedWidth: 250,
    ShadowedHeader: false,
    ShadowedFooter: false,
    Theme: {},
    ScrollContentOnly: false
  }
};

export const ExpandedNavbar = {
  render: (args) => (
    <Navbar>
      <NavbarHeader
        basicBrand={{
          text: 'SN',
          color: 'darkblue'
        }}
        title='Simple Nav'
        tagline='w/ Comfort padding'
      />
      <NavbarContent>
        <NavbarSection
          title='Dashboards'
        >
          <NavbarMenuItem
            link='/dashboards/analytics'
            icon={<IconGraph />}
            title='Analytics'
          />
          <NavbarMenuItem
            link='/dashboards/CRM'
            icon={<IconHeartHandshake />}
            title='CRM'
            description='Customer Relationship Management'
          />
          <NavbarMenuItem
            link='/dashboards/ecommerce'
            icon={<IconShoppingBag />}
            title='eCommerce'
            description='eCommerce Partners'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
          <NavbarSubMenu
            icon={<IconSubtask />}
            title='Submenu'
            description='Open me!'
          >
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconEgg />}
              title='Nested Item'
              description="I'm nested!"
            />
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconFeather />}
              title='Me Too!'
              description='And disabled!'
              badge={{
                text: 'cool',
              }}
              disabled
            />
          </NavbarSubMenu>
        </NavbarSection>
        <NavbarSection
          title='Widgets'
        >
          <NavbarMenuItem
            link='/widgets/graphs'
            icon={<IconChartAreaLine />}
            title='Graphs'
          />
          <NavbarMenuItem
            link='/widgets/buttons'
            icon={<IconClick />}
            title="I'm a button!"
            asButton
          />
          <NavbarMenuItem
            link='/widgets/custom'
            icon={<IconTableOptions />}
            title='Custom'
            description='Upgrade today!'
            disabled
            badge={{
              text: 'PRO',
              color: 'purple'
            }}
          />
        </NavbarSection>
        <NavbarSection
          title='Help'
        >
          <NavbarMenuItem
            link='/help/faq'
            icon={<IconHelpHexagon />}
            title='FAQ'
          />
          <NavbarMenuItem
            link='/help/getting-started'
            icon={<IconPlayerTrackNext />}
            title="Getting Started"
          />
          <NavbarMenuItem
            link='/help/api-documentation'
            icon={<IconBook />}
            title='API Docs'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
        </NavbarSection>
      </NavbarContent>
      <NavbarFooter shadowed>
        <NavbarMenuItem
            link='/messages'
            icon={<IconMail />}
            title='Messages'
            description="You've got mail!"
            badge={{
              text: '99+',
              color: 'red'
            }}
          />
          <NavbarMenuItem
            link='/profile'
            icon={<IconUserCircle />}
            title='Profile'
          />
      </NavbarFooter>
    </Navbar>
  ),
  args: {

  }
};

export const CollapsedNavbar = {
  render: (args) => (
    <Navbar collapsed>
      <NavbarHeader
        basicBrand={{
          text: 'SN',
          color: 'darkblue'
        }}
        title='Simple Nav'
        tagline='w/ Comfort padding'
      />
      <NavbarContent>
        <NavbarSection
          title='Dashboards'
        >
          <NavbarMenuItem
            link='/dashboards/analytics'
            icon={<IconGraph />}
            title='Analytics'
          />
          <NavbarMenuItem
            link='/dashboards/CRM'
            icon={<IconHeartHandshake />}
            title='CRM'
            description='Customer Relationship Management'
          />
          <NavbarMenuItem
            link='/dashboards/ecommerce'
            icon={<IconShoppingBag />}
            title='eCommerce'
            description='eCommerce Partners'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
          <NavbarSubMenu
            icon={<IconSubtask />}
            title='Submenu'
            description='Open me!'
          >
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconEgg />}
              title='Nested Item'
              description="I'm nested!"
            />
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconFeather />}
              title='Me Too!'
              description='And disabled!'
              badge={{
                text: 'cool',
              }}
              disabled
            />
          </NavbarSubMenu>
        </NavbarSection>
        <NavbarSection
          title='Widgets'
        >
          <NavbarMenuItem
            link='/widgets/graphs'
            icon={<IconChartAreaLine />}
            title='Graphs'
          />
          <NavbarMenuItem
            link='/widgets/buttons'
            icon={<IconClick />}
            title="I'm a button!"
            asButton
          />
          <NavbarMenuItem
            link='/widgets/custom'
            icon={<IconTableOptions />}
            title='Custom'
            description='Upgrade today!'
            disabled
            badge={{
              text: 'PRO',
              color: 'purple'
            }}
          />
        </NavbarSection>
        <NavbarSection
          title='Help'
        >
          <NavbarMenuItem
            link='/help/faq'
            icon={<IconHelpHexagon />}
            title='FAQ'
          />
          <NavbarMenuItem
            link='/help/getting-started'
            icon={<IconPlayerTrackNext />}
            title="Getting Started"
          />
          <NavbarMenuItem
            link='/help/api-documentation'
            icon={<IconBook />}
            title='API Docs'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
        </NavbarSection>
      </NavbarContent>
      <NavbarFooter shadowed>
        <NavbarMenuItem
            link='/messages'
            icon={<IconMail />}
            title='Messages'
            description="You've got mail!"
            badge={{
              text: '99+',
              color: 'red'
            }}
          />
          <NavbarMenuItem
            link='/profile'
            icon={<IconUserCircle />}
            title='Profile'
          />
      </NavbarFooter>
    </Navbar>
  ),
  args: {

  }
};

export const CompactExpandedNavbar = {
  render: (args) => (
    <Navbar compact>
      <NavbarHeader
        basicBrand={{
          text: 'SN',
          color: 'darkblue'
        }}
        title='Simple Nav'
        tagline='w/ Compact padding'
      />
      <NavbarContent>
        <NavbarSection
          title='Dashboards'
        >
          <NavbarMenuItem
            link='/dashboards/analytics'
            icon={<IconGraph />}
            title='Analytics'
          />
          <NavbarMenuItem
            link='/dashboards/CRM'
            icon={<IconHeartHandshake />}
            title='CRM'
            description='Customer Relationship Management'
          />
          <NavbarMenuItem
            link='/dashboards/ecommerce'
            icon={<IconShoppingBag />}
            title='eCommerce'
            description='eCommerce Partners'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
          <NavbarSubMenu
            icon={<IconSubtask />}
            title='Submenu'
            description='Open me!'
          >
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconEgg />}
              title='Nested Item'
              description="I'm nested!"
            />
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconFeather />}
              title='Me Too!'
              description='And disabled!'
              badge={{
                text: 'cool',
              }}
              disabled
            />
          </NavbarSubMenu>
        </NavbarSection>
        <NavbarSection
          title='Widgets'
        >
          <NavbarMenuItem
            link='/widgets/graphs'
            icon={<IconChartAreaLine />}
            title='Graphs'
          />
          <NavbarMenuItem
            link='/widgets/buttons'
            icon={<IconClick />}
            title="I'm a button!"
            asButton
          />
          <NavbarMenuItem
            link='/widgets/custom'
            icon={<IconTableOptions />}
            title='Custom'
            description='Upgrade today!'
            disabled
            badge={{
              text: 'PRO',
              color: 'purple'
            }}
          />
        </NavbarSection>
        <NavbarSection
          title='Help'
        >
          <NavbarMenuItem
            link='/help/faq'
            icon={<IconHelpHexagon />}
            title='FAQ'
          />
          <NavbarMenuItem
            link='/help/getting-started'
            icon={<IconPlayerTrackNext />}
            title="Getting Started"
          />
          <NavbarMenuItem
            link='/help/api-documentation'
            icon={<IconBook />}
            title='API Docs'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
        </NavbarSection>
      </NavbarContent>
      <NavbarFooter shadowed>
        <NavbarMenuItem
            link='/messages'
            icon={<IconMail />}
            title='Messages'
            description="You've got mail!"
            badge={{
              text: '99+',
              color: 'red'
            }}
          />
          <NavbarMenuItem
            link='/profile'
            icon={<IconUserCircle />}
            title='Profile'
          />
      </NavbarFooter>
    </Navbar>
  ),
  args: {

  }
};

export const CompactCollapsedNavbar = {
  render: (args) => (
    <Navbar
      compact
      collapsed
    >
      <NavbarHeader
        basicBrand={{
          text: 'SN',
          color: 'darkblue'
        }}
        title='Simple Nav'
        tagline='w/ Comfort padding'
      />
      <NavbarContent>
        <NavbarSection
          title='Dashboards'
        >
          <NavbarMenuItem
            link='/dashboards/analytics'
            icon={<IconGraph />}
            title='Analytics'
          />
          <NavbarMenuItem
            link='/dashboards/CRM'
            icon={<IconHeartHandshake />}
            title='CRM'
            description='Customer Relationship Management'
          />
          <NavbarMenuItem
            link='/dashboards/ecommerce'
            icon={<IconShoppingBag />}
            title='eCommerce'
            description='eCommerce Partners'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
          <NavbarSubMenu
            icon={<IconSubtask />}
            title='Submenu'
            description='Open me!'
          >
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconEgg />}
              title='Nested Item'
              description="I'm nested!"
            />
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconFeather />}
              title='Me Too!'
              description='And disabled!'
              badge={{
                text: 'cool',
              }}
              disabled
            />
          </NavbarSubMenu>
        </NavbarSection>
        <NavbarSection
          title='Widgets'
        >
          <NavbarMenuItem
            link='/widgets/graphs'
            icon={<IconChartAreaLine />}
            title='Graphs'
          />
          <NavbarMenuItem
            link='/widgets/buttons'
            icon={<IconClick />}
            title="I'm a button!"
            asButton
          />
          <NavbarMenuItem
            link='/widgets/custom'
            icon={<IconTableOptions />}
            title='Custom'
            description='Upgrade today!'
            disabled
            badge={{
              text: 'PRO',
              color: 'purple'
            }}
          />
        </NavbarSection>
        <NavbarSection
          title='Help'
        >
          <NavbarMenuItem
            link='/help/faq'
            icon={<IconHelpHexagon />}
            title='FAQ'
          />
          <NavbarMenuItem
            link='/help/getting-started'
            icon={<IconPlayerTrackNext />}
            title="Getting Started"
          />
          <NavbarMenuItem
            link='/help/api-documentation'
            icon={<IconBook />}
            title='API Docs'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
        </NavbarSection>
      </NavbarContent>
      <NavbarFooter shadowed>
        <NavbarMenuItem
            link='/messages'
            icon={<IconMail />}
            title='Messages'
            description="You've got mail!"
            badge={{
              text: '99+',
              color: 'red'
            }}
          />
          <NavbarMenuItem
            link='/profile'
            icon={<IconUserCircle />}
            title='Profile'
          />
      </NavbarFooter>
    </Navbar>
  ),
  args: {

  }
};

export const CollapsibleNavbar = {
  render: (args) => (
    <Navbar collapsible>
      <NavbarHeader
        basicBrand={{
          text: 'SN',
          color: 'darkblue'
        }}
        title='Simple Nav'
        tagline='Collapse me!'
      />
      <NavbarContent>
        <NavbarSection
          title='Dashboards'
        >
          <NavbarMenuItem
            link='/dashboards/analytics'
            icon={<IconGraph />}
            title='Analytics'
          />
          <NavbarMenuItem
            link='/dashboards/CRM'
            icon={<IconHeartHandshake />}
            title='CRM'
            description='Customer Relationship Management'
          />
          <NavbarMenuItem
            link='/dashboards/ecommerce'
            icon={<IconShoppingBag />}
            title='eCommerce'
            description='eCommerce Partners'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
          <NavbarSubMenu
            icon={<IconSubtask />}
            title='Submenu'
            description='Open me!'
          >
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconEgg />}
              title='Nested Item'
              description="I'm nested!"
            />
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconFeather />}
              title='Me Too!'
              description='And disabled!'
              badge={{
                text: 'cool',
              }}
              disabled
            />
          </NavbarSubMenu>
        </NavbarSection>
        <NavbarSection
          title='Widgets'
        >
          <NavbarMenuItem
            link='/widgets/graphs'
            icon={<IconChartAreaLine />}
            title='Graphs'
          />
          <NavbarMenuItem
            link='/widgets/buttons'
            icon={<IconClick />}
            title="I'm a button!"
            asButton
          />
          <NavbarMenuItem
            link='/widgets/custom'
            icon={<IconTableOptions />}
            title='Custom'
            description='Upgrade today!'
            disabled
            badge={{
              text: 'PRO',
              color: 'purple'
            }}
          />
        </NavbarSection>
        <NavbarSection
          title='Help'
        >
          <NavbarMenuItem
            link='/help/faq'
            icon={<IconHelpHexagon />}
            title='FAQ'
          />
          <NavbarMenuItem
            link='/help/getting-started'
            icon={<IconPlayerTrackNext />}
            title="Getting Started"
          />
          <NavbarMenuItem
            link='/help/api-documentation'
            icon={<IconBook />}
            title='API Docs'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
        </NavbarSection>
      </NavbarContent>
      <NavbarFooter shadowed>
        <NavbarMenuItem
            link='/messages'
            icon={<IconMail />}
            title='Messages'
            description="You've got mail!"
            badge={{
              text: '99+',
              color: 'red'
            }}
          />
          <NavbarMenuItem
            link='/profile'
            icon={<IconUserCircle />}
            title='Profile'
          />
      </NavbarFooter>
    </Navbar>
  ),
  args: {

  }
};

export const CompactCollapsibleNavbar = {
  render: (args) => (
    <Navbar compact collapsible>
      <NavbarHeader
        basicBrand={{
          text: 'SN',
          color: 'darkblue'
        }}
        title='Simple Nav'
        tagline='Collapse me!'
      />
      <NavbarContent>
        <NavbarSection
          title='Dashboards'
        >
          <NavbarMenuItem
            link='/dashboards/analytics'
            icon={<IconGraph />}
            title='Analytics'
          />
          <NavbarMenuItem
            link='/dashboards/CRM'
            icon={<IconHeartHandshake />}
            title='CRM'
            description='Customer Relationship Management'
          />
          <NavbarMenuItem
            link='/dashboards/ecommerce'
            icon={<IconShoppingBag />}
            title='eCommerce'
            description='eCommerce Partners'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
          <NavbarSubMenu
            icon={<IconSubtask />}
            title='Submenu'
            description='Open me!'
          >
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconEgg />}
              title='Nested Item'
              description="I'm nested!"
            />
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconFeather />}
              title='Me Too!'
              description='And disabled!'
              badge={{
                text: 'cool',
              }}
              disabled
            />
          </NavbarSubMenu>
        </NavbarSection>
        <NavbarSection
          title='Widgets'
        >
          <NavbarMenuItem
            link='/widgets/graphs'
            icon={<IconChartAreaLine />}
            title='Graphs'
          />
          <NavbarMenuItem
            link='/widgets/buttons'
            icon={<IconClick />}
            title="I'm a button!"
            asButton
          />
          <NavbarMenuItem
            link='/widgets/custom'
            icon={<IconTableOptions />}
            title='Custom'
            description='Upgrade today!'
            disabled
            badge={{
              text: 'PRO',
              color: 'purple'
            }}
          />
        </NavbarSection>
        <NavbarSection
          title='Help'
        >
          <NavbarMenuItem
            link='/help/faq'
            icon={<IconHelpHexagon />}
            title='FAQ'
          />
          <NavbarMenuItem
            link='/help/getting-started'
            icon={<IconPlayerTrackNext />}
            title="Getting Started"
          />
          <NavbarMenuItem
            link='/help/api-documentation'
            icon={<IconBook />}
            title='API Docs'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
        </NavbarSection>
      </NavbarContent>
      <NavbarFooter shadowed>
        <NavbarMenuItem
            link='/messages'
            icon={<IconMail />}
            title='Messages'
            description="You've got mail!"
            badge={{
              text: '99+',
              color: 'red'
            }}
          />
          <NavbarMenuItem
            link='/profile'
            icon={<IconUserCircle />}
            title='Profile'
          />
      </NavbarFooter>
    </Navbar>
  ),
  args: {

  }
};

export const CustomTheme = {
  render: (args) => (
    <Navbar
      theme={args.Theme}
      compact
    >
      <NavbarHeader
        basicBrand={{
          text: 'SN',
          color: 'skyblue'
        }}
        title='Custom Theme'
        tagline='Forest Green'
        shadowed
      />
      <NavbarContent>
        <NavbarSection
          title='Dashboards'
        >
          <NavbarMenuItem
            link='/dashboards/analytics'
            icon={<IconGraph />}
            title='Analytics'
          />
          <NavbarMenuItem
            link='/dashboards/CRM'
            icon={<IconHeartHandshake />}
            title='CRM'
            description='Customer Relationship Management'
          />
          <NavbarMenuItem
            link='/dashboards/ecommerce'
            icon={<IconShoppingBag />}
            title='eCommerce'
            description='eCommerce Partners'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
          <NavbarSubMenu
            icon={<IconSubtask />}
            title='Submenu'
            description='Open me!'
          >
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconEgg />}
              title='Nested Item'
              description="I'm nested!"
            />
            <NavbarMenuItem
              link='/dashboards/nested/egg'
              icon={<IconFeather />}
              title='Me Too!'
              description='And disabled!'
              badge={{
                text: 'cool',
              }}
              disabled
            />
          </NavbarSubMenu>
        </NavbarSection>
        <NavbarSection
          title='Widgets'
        >
          <NavbarMenuItem
            link='/widgets/graphs'
            icon={<IconChartAreaLine />}
            title='Graphs'
          />
          <NavbarMenuItem
            link='/widgets/buttons'
            icon={<IconClick />}
            title="I'm a button!"
            asButton
          />
          <NavbarMenuItem
            link='/widgets/custom'
            icon={<IconTableOptions />}
            title='Custom'
            description='Upgrade today!'
            disabled
            badge={{
              text: 'PRO',
              color: 'purple'
            }}
          />
        </NavbarSection>
        <NavbarSection
          title='Help'
        >
          <NavbarMenuItem
            link='/help/faq'
            icon={<IconHelpHexagon />}
            title='FAQ'
          />
          <NavbarMenuItem
            link='/help/getting-started'
            icon={<IconPlayerTrackNext />}
            title="Getting Started"
          />
          <NavbarMenuItem
            link='/help/api-documentation'
            icon={<IconBook />}
            title='API Docs'
            badge={{
              text: 'New',
              color: 'darkorange'
            }}
          />
        </NavbarSection>
      </NavbarContent>
      <NavbarFooter shadowed>
        <NavbarMenuItem
            link='/messages'
            icon={<IconMail />}
            title='Messages'
            description="You've got mail!"
            badge={{
              text: '99+',
              color: 'red'
            }}
          />
          <NavbarMenuItem
            link='/profile'
            icon={<IconUserCircle />}
            title='Profile'
          />
      </NavbarFooter>
    </Navbar>
  ),
  args: {
    Theme: {
      backgroundColor: '#609966',
      textColor: '#EDF1D6',
      hoverColor: '#9DC08B',
      shadowColor: '#40513B'
    }
  }
};
