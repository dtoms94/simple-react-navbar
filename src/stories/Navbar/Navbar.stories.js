import Navbar from '../../components/Navbar/Navbar'
import NavbarHeader from '../../components/Navbar/NavbarHeader'
import NavbarContent from '../../components/Navbar/NavbarContent'
import NavbarSection from '../../components/Navbar/NavbarSection'
import NavbarMenuItem from '../../components/Navbar/NavbarMenuItem'
import NavbarFooter from '../../components/Navbar/NavbarFooter'

import { Icon24Hours, IconAB, IconSettings, IconMessage } from '@tabler/icons-react';


//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Navbar',
  component: Navbar,
};

export const CompleteNavbar = {
  render: (args) => (
    <Navbar>
      <NavbarHeader
        basicBrand={{
          text: 'SN',
          color: 'maroon'
        }}
        title='Simple Nav'
        tagline='Collapsible Too!'
        shadowed
      />
      <NavbarContent>
        <NavbarSection
          title='General'
        >
          <NavbarMenuItem
            link='#about'
            icon={<IconSettings />}
            title='Settings'
            description='Controls & Preferences'
            badge={{
              text: 'new',
              color: 'purple'
            }}
          />
          <NavbarMenuItem
            link='#about'
            icon={<IconSettings />}
            title='Test'
            description='Controls & Preferences'
            badge={{
              text: 'new',
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