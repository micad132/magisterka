import { ChartData } from 'chart.js';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import PieChartComponent from '../../../../../components/diagrams/pieChart.component.tsx';
import SelectComponent from '../../../../../components/form/select.component.tsx';
import { SelectValue } from '../../../../../types/UtilTypes.ts';
import { addingStatThunk, getAllStats } from '../../../../../store/statSlice.tsx';
import { useAppDispatch, useAppSelector } from '../../../../../utils/hooks.ts';
import { AddStat, StatCategory, StatType } from '../../../../../types/StatType.ts';
import { getUserDetails } from '../../../../../store/userSlice.tsx';
import { taskPriorityPieChart, taskStatusPieChart, taskTypePieChart } from '../../../../../utils/diagramUtils.ts';
import TaskChartWrapperComponent from '../../taskChartWrapper.component.tsx';
import { mapJsonToChart, mapJsonToPieChart } from '../../../../../utils/mappers/chartUtils/mapJsonToChart.ts';
import { mapDateToString } from '../../../../../utils/mappers/mapDateToString.ts';

const TASK_DIAGRAM_TYPE: SelectValue[] = [
  {
    text: 'Tasks by task status',
    value: 'taskStatus',
  },
  {
    text: 'Tasks by task type',
    value: 'taskType',
  },
  {
    text: 'Tasks by tasks priority',
    value: 'taskPriority',
  },
  {
    text: 'Tasks made by user',
    value: 'taskByUser',
  },
];

const TaskPanelContainer = () => {
  const f = 5;
  const [taskDiagramType, setTaskDiagramType] = useState<string>('taskStatus');
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector(getUserDetails);
  const stats = useAppSelector(getAllStats);
  console.log('STATS', stats);
  console.log('JOL', stats[0].chartData);

  const properTaskBody = (): ChartData<'pie'> => {
    switch (taskDiagramType) {
      case 'taskStatus':
        return taskStatusPieChart([3, 5, 2, 1]);
      case 'taskType':
        return taskTypePieChart([1, 2, 3]);
      case 'taskPriority':
        return taskPriorityPieChart([2, 2, 3]);
      case 'taskByUser':
    }
    return taskStatusPieChart([0, 0, 0, 0]);
  };

  const onCreateDiagramHandler = () => {
    const statBody: AddStat = {
      creatorId: loggedUser.id,
      chartData: JSON.stringify(properTaskBody()),
      statCategory: StatCategory.TASK,
      statType: StatType.PIE,
    };
    try {
      dispatch(addingStatThunk(statBody));
    } catch (e) {
      throw e;
    }
  };

  const taskPieCharts = stats.filter((s) => s.statCategory === StatCategory.TASK).map((stat) => (

    <PieChartComponent key={stat.id} chartData={mapJsonToPieChart(stat.chartData)} creatorUsername={stat.creatorUsername} createdTime={mapDateToString(stat.createdTime)} chartType={stat.statType} />));

  return (
    <div>
      TASK PANEL CONTAINER
      <SelectComponent
        options={TASK_DIAGRAM_TYPE}
        onChange={setTaskDiagramType}
        value={taskDiagramType}
        label="Select which diagram you want to make"
      />
      <Button onClick={onCreateDiagramHandler} colorScheme="teal">Create diagram</Button>
      <p>Task diagrams preview:</p>
      <TaskChartWrapperComponent>
        {taskPieCharts}
      </TaskChartWrapperComponent>
    </div>
  );
};

export default TaskPanelContainer;
