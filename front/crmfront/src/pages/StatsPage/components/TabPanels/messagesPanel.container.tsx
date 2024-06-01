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
    text: 'Messages in time',
    value: MESSAGE_DIAGRAM_TYPE_VALUES.MESSAGES_IN_TIME,
  },
  {
    text: 'Role messages count',
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

  const properTaskBody = (): ChartData<'doughnut' | 'line'> => {
    switch (messageDiagramType) {
      case MESSAGE_DIAGRAM_TYPE_VALUES.ROLE_MESSAGES:
        return roleMessageCountDoughnout([clientMessages.length, workerMessages.length]);
      case MESSAGE_DIAGRAM_TYPE_VALUES.MESSAGES_IN_TIME:
        return roleMessagesWithTimeLine(dates, clientCounts, workerCounts);
      default:
        roleMessageCountDoughnout([0, 0, 0, 0]);
    }
    return roleMessageCountDoughnout([0, 0, 0, 0]);
  };

  const onAddMessageChart = () => {
    const properStatType = messageDiagramType === 'messagesInTime' ? StatType.LINE : StatType.DOUGHNUT;
    const statBody: AddStat = {
      creatorId: loggedUser.id,
      chartData: JSON.stringify(properTaskBody()),
      statCategory: StatCategory.MESSAGE,
      statType: properStatType,
      description: '',
    };
    try {
      dispatch(addingStatThunk(statBody));
    } catch (e) {
      throw e;
    }
  };

  const messageChart = stats?.filter((s) => s.statCategory === StatCategory.MESSAGE).map((stat) => (
    <PieChartComponent key={stat.id} description={stat.description} chartData={mapJsonToDoughnutChart(stat.chartData)} creatorUsername={stat.creatorUsername} createdTime={mapDateToString(stat.createdTime)} chartType={stat.statType} />
  ));

  return (
    <div>
      <SelectWrapperComponent>
        <SelectComponent
          options={MESSAGE_DIAGRAM_TYPE}
          onChange={setMessageDiagramType}
          label="Select which message chart you want to make"
          value={messageDiagramType}
        />
      </SelectWrapperComponent>
      <Button onClick={onAddMessageChart} colorScheme="teal">Create message chart</Button>
      <TaskChartWrapperComponent>
        {messageChart}
      </TaskChartWrapperComponent>
    </div>
  );
};

export default MessagesPanelContainer;
