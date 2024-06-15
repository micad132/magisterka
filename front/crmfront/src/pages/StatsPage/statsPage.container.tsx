import {
  Tab,
  TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/react';
import styled from 'styled-components';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import StatsPageInfoComponent from './components/statsPageInfo.component.tsx';
import SupportRequestPanelContainer from './components/TabPanels/supportRequestPanel.container.tsx';
import MessagesPanelContainer from './components/TabPanels/messagesPanel.container.tsx';
import PeoplePanelContainer from './components/TabPanels/peoplePanel.container.tsx';
import TaskPanelContainer from './components/TabPanels/taskPanel.container.tsx';

const CustomTabList = styled(TabList)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100%;
`;

const StatsPageContainer = () => {
  const a = 3;
  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="Wykresy" />
      <StatsPageInfoComponent />
      <Tabs>
        <CustomTabList>
          <Tab>Wykresy zgłoszeń wsparcia</Tab>
          <Tab>Wykresy zadań</Tab>
          <Tab>Wykresy wiadomości</Tab>
          <Tab>Wykresy użytkowników</Tab>
        </CustomTabList>

        <TabPanels>
          <TabPanel>
            <SupportRequestPanelContainer />
          </TabPanel>
          <TabPanel>
            <TaskPanelContainer />
          </TabPanel>
          <TabPanel>
            <MessagesPanelContainer />
          </TabPanel>
          <TabPanel>
            <PeoplePanelContainer />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PageWrapperComponent>
  );
};

export default StatsPageContainer;
