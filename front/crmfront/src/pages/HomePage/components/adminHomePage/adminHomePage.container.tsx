// @ts-nocheck
import {
  Button,
  Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/react';
import styled from 'styled-components';
import axios from 'axios';
import PageWrapperComponent from '../../../../components/pageWrapper.component.tsx';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { getAllStats } from '../../../../store/statSlice.tsx';
import { StatCategory } from '../../../../types/StatType.ts';
import ChartsWrapperComponent from './chartsWrapper.component.tsx';
import SystemSingleInfoComponent from './systemSingleInfo.component.tsx';
import SystemInfoComponent from './systemInfo/systemInfo.component.tsx';
import { API_URL } from '../../../../utils/consts.ts';

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

  return (
    <PageWrapperComponent>
      <MainHeader>Wszystkie dane zawarte w systemie:</MainHeader>
      <Tabs>
        <CustomTabList>
          <Tab>Dane systemu:</Tab>
          <Tab>Wykresy systemu:</Tab>
        </CustomTabList>

        <TabPanels>

          <TabPanel>
            <SystemInfoComponent />
          </TabPanel>
          <TabPanel>
            <div>
              <h1>Na tej stronie możesz przejrzeć wszystkie szczegóły wykresów:</h1>
              <CustomTabPanel>
                <ChartsWrapperComponent stats={taskStats} spanText="Wykresy o tematyce usług:" />
                <ChartsWrapperComponent stats={messagesStats} spanText="Wykresy o tematyce wiadomości:" />
                <ChartsWrapperComponent stats={supportStats} spanText="Wykresy o tematyce zgłoszeń wsparcia:" />
                <ChartsWrapperComponent stats={peopleStats} spanText="Wykresy o tematyce użytkowników:" />
              </CustomTabPanel>
            </div>
          </TabPanel>

        </TabPanels>
      </Tabs>

    </PageWrapperComponent>
  );
};

export default AdminHomePageContainer;
