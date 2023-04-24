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
  IconChartAreaLine,
  IconClick
} from '@tabler/icons-react';


//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Navbar',
  component: Navbar,
};

export const StaticExpandedNavbar = {
  render: (args) => (
    <Navbar>
      <NavbarHeader
        basicBrand={{
          text: 'SN',
          color: 'maroon'
        }}
        title='Simple Nav'
        tagline='w/ Comfort padding'
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
            title='Buttons'
          />
          <NavbarMenuItem
            link='/widgets/custom'
            icon={<IconShoppingBag />}
            title='Custom'
            description='Create your own widget'
            badge={{
              text: 'PRO',
              color: 'purple'
            }}
          />
        </NavbarSection>
      </NavbarContent>
      <NavbarFooter>

      </NavbarFooter>
    </Navbar>
  ),
  args: {

  }
};