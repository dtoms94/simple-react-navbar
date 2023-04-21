import React from 'react'
import Navbar from './components/Navbar/Navbar'
import NavbarHeader from './components/Navbar/NavbarHeader'
import NavbarContent from './components/Navbar/NavbarContent'
import NavbarSection from './components/Navbar/NavbarSection'
import NavbarSubMenu from './components/Navbar/NavbarSubMenu'
import NavbarMenuItem from './components/Navbar/NavbarMenuItem'
import NavbarFooter from './components/Navbar/NavbarFooter'

import { 
  IconSettings, 
  IconHelpHexagon,
  IconUserCircle,
  IconBuilding,
  IconArrowFork,
  IconGitPullRequest,
  IconClipboardList,
  IconPlayerPlay,
  IconTool,
  IconBox,
  IconBug,
  IconBook2,
  IconMountain
} from '@tabler/icons-react'

export default function Sidebar() {
  return (
    <Navbar collapsable>
      <NavbarHeader 
          shadowed
          basicBrand={{text: 'SN', color: 'purple'}}
          title='Simple Nav'
          tagline='Collapsible'
        />
        <NavbarContent scrollable>
          <NavbarSection title='Tests'>
            <NavbarMenuItem
              link='#test'
              title='Repository'
              icon={<IconBuilding />}
            />
            <NavbarSubMenu
              title='Submenu'
              description='Open me!'
              icon={<IconTool />}
            >

              <NavbarMenuItem
              link='#test'
              title='Defects sdfg sdfgsd sdfgsfdg sdfg'
              icon={<IconBug />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Requirements sdfg sdfgsdfg'
              icon={<IconBook2 />}
              badge={{
                text: '99+',
                color: 'red'
              }}
            />
            <NavbarMenuItem
              link='#wow'
              title='Milestones'
              icon={<IconMountain />}
            />

            </NavbarSubMenu>
            <NavbarMenuItem
              link='#wow'
              title='Shared Steps'
              icon={<IconArrowFork />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Review'
              description='Review great requests'
              icon={<IconGitPullRequest />}
              badge={{ text: 'New', color: 'purple' }}
            />
          </NavbarSection>
          <NavbarSection title='Execution'>
            <NavbarMenuItem
              link='#test'
              title='Test Plans'
              icon={<IconClipboardList />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Test Runs'
              icon={<IconPlayerPlay />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Configurations'
              icon={<IconTool />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Environments'
              icon={<IconBox />}
            />
          </NavbarSection>

          <NavbarSection title='Issues'>
            <NavbarMenuItem
              link='#test'
              title='Defects'
              icon={<IconBug />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Requirements'
              icon={<IconBook2 />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Milestones'
              icon={<IconMountain />}
            />
          </NavbarSection>

          <NavbarSection title='Tests'>
            <NavbarMenuItem
              link='#test'
              title='Repository'
              icon={<IconBuilding />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Shared Steps'
              icon={<IconArrowFork />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Review'
              description='Review great requests'
              icon={<IconGitPullRequest />}
              badge={{ text: 'New', color: 'purple' }}
            />
          </NavbarSection>
          <NavbarSection title='Execution'>
            <NavbarMenuItem
              link='#test'
              title='Test Plans'
              icon={<IconClipboardList />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Test Runs'
              icon={<IconPlayerPlay />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Configurations'
              icon={<IconTool />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Environments'
              icon={<IconBox />}
            />
          </NavbarSection>

          <NavbarSection title='Issues'>
            <NavbarMenuItem
              link='#test'
              title='Defects'
              icon={<IconBug />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Requirements'
              icon={<IconBook2 />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Milestones'
              icon={<IconMountain />}
            />
          </NavbarSection>

        </NavbarContent>
        <NavbarFooter shadowed>
        <NavbarMenuItem
              link='#wow'
              title='Requirements'
              icon={<IconBook2 />}
            />
            <NavbarMenuItem
              link='#wow'
              title='Milestones'
              icon={<IconMountain />}
            />
        </NavbarFooter>
    </Navbar>
  )
}
