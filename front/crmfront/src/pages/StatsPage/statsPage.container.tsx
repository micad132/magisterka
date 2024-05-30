import {
  Tab,
  TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/react';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import StatsPageInfoComponent from './components/statsPageInfo.component.tsx';
import SupportRequestPanelContainer from './components/TabPanels/supportRequestPanel.container.tsx';
import TaskPanelContainer from './components/TabPanels/TaskPanel/taskPanel.container.tsx';
import MessagesPanelContainer from './components/TabPanels/messagesPanel.container.tsx';
import PeoplePanelContainer from './components/TabPanels/peoplePanel.container.tsx';

const StatsPageContainer = () => {
  const a = 3;
  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="STATS PAGE" />
      <StatsPageInfoComponent />
      <Tabs>
        <TabList>
          <Tab>Support request diagrams</Tab>
          <Tab>Task diagrams</Tab>
          <Tab>Messages diagrams</Tab>
          <Tab>Poeple diagrams</Tab>
        </TabList>

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
