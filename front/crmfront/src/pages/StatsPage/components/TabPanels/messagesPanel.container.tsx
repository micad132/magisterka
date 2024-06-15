import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { ChartData } from 'chart.js';
import SelectComponent from '../../../../components/form/select.component.tsx';
import { SelectValue } from '../../../../types/UtilTypes.ts';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks.ts';
import { getAllMessages } from '../../../../store/messageSlice.tsx';
import { RoleType } from '../../../../types/UserType.ts';
import { roleMessageCountDoughnout, roleMessagesWithTimeLine } from '../../../../utils/messageCharts.ts';
import { AddStat, StatCategory, StatType } from '../../../../types/StatType.ts';
import { getUserDetails } from '../../../../store/userSlice.tsx';
import { addingStatThunk, getAllStats } from '../../../../store/statSlice.tsx';
import PieChartComponent from '../../../../components/diagrams/pieChart.component.tsx';
import { mapJsonToDoughnutChart } from '../../../../utils/mappers/chartUtils/mapJsonToChart.ts';
import TaskChartWrapperComponent from '../taskChartWrapper.component.tsx';
import {
  countMessageRolesByCount,
  mapDateToString,
  mapDateToYearMonthDay,
} from '../../../../utils/mappers/mapDateToString.ts';
import SelectWrapperComponent from '../selectWrapper.component.tsx';

const MESSAGE_DIAGRAM_TYPE_VALUES = {
  MESSAGES_IN_TIME: 'messagesInTime',
  ROLE_MESSAGES: 'roleMessages',
};

const MESSAGE_DIAGRAM_TYPE: SelectValue[] = [
  {
    text: 'Wiadomości w czasie',
    value: MESSAGE_DIAGRAM_TYPE_VALUES.MESSAGES_IN_TIME,
  },
  {
    text: 'Wiadomości dla ról',
    value: MESSAGE_DIAGRAM_TYPE_VALUES.ROLE_MESSAGES,
  },
];

const MessagesPanelContainer = () => {
  const [messageDiagramType, setMessageDiagramType] = useState<string>(MESSAGE_DIAGRAM_TYPE_VALUES.MESSAGES_IN_TIME);
  const messages = useAppSelector(getAllMessages);
  const loggedUser = useAppSelector(getUserDetails);
  const stats = useAppSelector(getAllStats);
  const dispatch = useAppDispatch();

  // doughnout chart

  const clientMessages = messages.filter((msg) => msg.authorRole === RoleType.CLIENT);
  const workerMessages = messages.filter((msg) => msg.authorRole === RoleType.WORKER);

  // line chart
  const dateLabels = messages.map((msg) => mapDateToYearMonthDay(msg.date));

  const { dates, clientCounts, workerCounts } = countMessageRolesByCount(messages);
  console.log(dates, clientCounts, workerCounts);

  console.log('MESSAGES', messages);
  const g = 4;

  const properTaskBody = () => {
    switch (messageDiagramType) {
      case MESSAGE_DIAGRAM_TYPE_VALUES.ROLE_MESSAGES:
        return {
          type: StatType.DOUGHNUT,
          chart: roleMessageCountDoughnout([clientMessages.length, workerMessages.length]),
          description: 'Wiadomości ze względu na rolę',
        };
      case MESSAGE_DIAGRAM_TYPE_VALUES.MESSAGES_IN_TIME:
        return {
          type: StatType.LINE,
          chart: roleMessagesWithTimeLine(dates, clientCounts, workerCounts),
          description: 'Wiadomości ze względu na czas',
        };
      default:
        roleMessageCountDoughnout([0, 0, 0, 0]);
    }
    return roleMessageCountDoughnout([0, 0, 0, 0]);
  };

  const onAddMessageChart = () => {
    const { type, chart, description } = properTaskBody();
    const statBody: AddStat = {
      creatorId: loggedUser.id,
      chartData: JSON.stringify(chart),
      statCategory: StatCategory.MESSAGE,
      statType: type,
      description,
    };
    try {
      dispatch(addingStatThunk(statBody));
    } catch (e) {
      throw e;
    }
  };

  const messageChart = stats?.filter((s) => s.statCategory === StatCategory.MESSAGE).map((stat) => (
    <PieChartComponent isStatPage key={stat.id} id={stat.id} description={stat.description} chartData={mapJsonToDoughnutChart(stat.chartData)} creatorUsername={stat.creatorUsername} createdTime={mapDateToString(stat.createdTime)} chartType={stat.statType} />
  ));

  return (
    <div>
      <SelectWrapperComponent>
        <SelectComponent
          options={MESSAGE_DIAGRAM_TYPE}
          onChange={setMessageDiagramType}
          label="Wybierz jaki wykres dla wiadomości ma zostać utworzony"
          value={messageDiagramType}
        />
      </SelectWrapperComponent>
      <Button onClick={onAddMessageChart} colorScheme="teal">Utwórz wykres wiadomości</Button>
      <TaskChartWrapperComponent>
        {messageChart}
      </TaskChartWrapperComponent>
    </div>
  );
};

export default MessagesPanelContainer;
