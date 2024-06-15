import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import SelectComponent from '../../../../components/form/select.component.tsx';
import { SelectValue } from '../../../../types/UtilTypes.ts';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks.ts';
import { addingStatThunk, getAllStats } from '../../../../store/statSlice.tsx';
import { AddStat, StatCategory, StatType } from '../../../../types/StatType.ts';
import { getUserDetails } from '../../../../store/userSlice.tsx';
import { supportRequestCategoriesPie } from '../../../../utils/supportRequestCharts.ts';
import TaskChartWrapperComponent from '../taskChartWrapper.component.tsx';
import PieChartComponent from '../../../../components/diagrams/pieChart.component.tsx';
import { mapJsonToPieChart } from '../../../../utils/mappers/chartUtils/mapJsonToChart.ts';
import { mapDateToString } from '../../../../utils/mappers/mapDateToString.ts';
import SelectWrapperComponent from '../selectWrapper.component.tsx';
import { ActionType, AddHistory } from '../../../../types/HistoryType.ts';
import { getAllSupportRequests } from '../../../../store/supportRequestSlice.tsx';
import { SupportRequest } from '../../../../types/SupportRequest.ts';

const SUPPORT_REQUESTS_CHART_VALUES: SelectValue[] = [{
  text: 'Wykres typów zgłoszeń wsparcia',
  value: 'supportRequestCategory',
}];

const SupportRequestPanelContainer = () => {
  const [supportRequestChartType, setSupportRequestChartType] = useState<string>('');
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector(getUserDetails);
  const stats = useAppSelector(getAllStats);

  const supports = useAppSelector(getAllSupportRequests);

  const improvementSupports = supports.filter((support) => support.supportCategory === SupportRequest.IMPROVEMENT);
  const suportSupports = supports.filter((support) => support.supportCategory === SupportRequest.SUPPORT);
  const bugSupports = supports.filter((support) => support.supportCategory === SupportRequest.BUG);
  const otherSupports = supports.filter((support) => support.supportCategory === SupportRequest.OTHER);

  const supportStats = stats?.filter((stat) => stat.statCategory === StatCategory.SUPPORT).map((s) => (
    <PieChartComponent isStatPage id={s.id} key={s.id} description={s.description} chartData={mapJsonToPieChart(s.chartData)} creatorUsername={s.creatorUsername} createdTime={mapDateToString(s.createdTime)} chartType={s.statType} />
  ));

  const createChartHandler = () => {
    const obj: AddStat = {
      creatorId: loggedUser.id,
      statType: StatType.DOUGHNUT,
      statCategory: StatCategory.SUPPORT,
      chartData: JSON.stringify(supportRequestCategoriesPie([improvementSupports.length, suportSupports.length, bugSupports.length, otherSupports.length])),
      description: 'Wykres typów zgłoszeń wsparcia',
    };

    try {
      dispatch(addingStatThunk(obj));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <SelectWrapperComponent>
        <SelectComponent
          options={SUPPORT_REQUESTS_CHART_VALUES}
          onChange={setSupportRequestChartType}
          label="Wybierz jaki rodzaj wykresu chcesz utworzyć?"
          value={supportRequestChartType}
        />
      </SelectWrapperComponent>
      <Button colorScheme="teal" onClick={createChartHandler}>Utwórz wykres</Button>
      <TaskChartWrapperComponent>
        {supportStats}
      </TaskChartWrapperComponent>
    </div>

  );
};

export default SupportRequestPanelContainer;
