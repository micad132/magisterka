import {
  Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/react';
import styled from 'styled-components';
import PageWrapperComponent from '../../../../components/pageWrapper.component.tsx';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { getAllStats } from '../../../../store/statSlice.tsx';
import { StatCategory } from '../../../../types/StatType.ts';
import ChartsWrapperComponent from './chartsWrapper.component.tsx';
import SystemSingleInfoComponent from './systemSingleInfo.component.tsx';
import SystemInfoComponent from './systemInfo/systemInfo.component.tsx';

const MainHeader = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;

const CustomTabList = styled(TabList)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100%;
`;

const CustomTabPanel = styled(TabPanel)`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const AdminHomePageContainer = () => {
  const d = 4;

  const stats = useAppSelector(getAllStats);

  const taskStats = stats.filter((s) => s.statCategory === StatCategory.TASK);
  const messagesStats = stats.filter((s) => s.statCategory === StatCategory.MESSAGE);
  const supportStats = stats.filter((s) => s.statCategory === StatCategory.SUPPORT);
  const peopleStats = stats.filter((s) => s.statCategory === StatCategory.PEOPLE);
  console.log('task stats', taskStats);
  return (
    <PageWrapperComponent>
      <MainHeader>As a admin on main screen you can preview all data in system</MainHeader>
      <Tabs>
        <CustomTabList>
          <Tab>System info</Tab>
          <Tab>System charts</Tab>
        </CustomTabList>

        <TabPanels>

          <TabPanel>
            <SystemInfoComponent />
          </TabPanel>
          <div>
            <h1>Here you can preview all existing charts in system</h1>
            <CustomTabPanel>
              <ChartsWrapperComponent stats={taskStats} spanText="All charts with task category" />
              <ChartsWrapperComponent stats={messagesStats} spanText="All charts with message category" />
              <ChartsWrapperComponent stats={supportStats} spanText="All charts with support category" />
              <ChartsWrapperComponent stats={peopleStats} spanText="All charts with people category" />
            </CustomTabPanel>
          </div>
        </TabPanels>
      </Tabs>

    </PageWrapperComponent>
  );
};

export default AdminHomePageContainer;
