import { ChartData } from 'chart.js';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { SelectValue } from '../../../../types/UtilTypes.ts';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks.ts';
import { getUserDetails } from '../../../../store/userSlice.tsx';
import { addingStatThunk, getAllStats } from '../../../../store/statSlice.tsx';
import {
  taskByUserPieChart,
  taskPriorityPieChart,
  taskStatusPieChart,
  taskTypePieChart,
} from '../../../../utils/diagramUtils.ts';
import { AddStat, StatCategory, StatType } from '../../../../types/StatType.ts';
import PieChartComponent from '../../../../components/diagrams/pieChart.component.tsx';
import { mapJsonToPieChart } from '../../../../utils/mappers/chartUtils/mapJsonToChart.ts';
import SelectWrapperComponent from '../selectWrapper.component.tsx';
import SelectComponent from '../../../../components/form/select.component.tsx';
import TaskChartWrapperComponent from '../taskChartWrapper.component.tsx';
import { mapDateToString } from '../../../../utils/mappers/mapDateToString.ts';
import { getAllTasks } from '../../../../store/taskSlice.tsx';
import { TaskPriority, TaskStatus, TaskType } from '../../../../types/TaskType.ts';
import { RoleType } from '../../../../types/UserType.ts';

const TASK_DIAGRAM_TYPE: SelectValue[] = [
  {
    text: 'Statusy usług',
    value: 'taskStatus',
  },
  {
    text: 'Typy usług',
    value: 'taskType',
  },
  {
    text: 'Priorytet usług',
    value: 'taskPriority',
  },
  {
    text: 'Usługi względem roli',
    value: 'taskByUser',
  },
];

const TaskPanelContainer = () => {
  const [taskDiagramType, setTaskDiagramType] = useState<string>('taskStatus');
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector(getUserDetails);
  const stats = useAppSelector(getAllStats);
  const tasks = useAppSelector(getAllTasks);

  // status

  const pendingTasks = tasks.filter((task) => task.taskStatus === TaskStatus.PENDING);
  const inProgressTasks = tasks.filter((task) => task.taskStatus === TaskStatus.IN_PROGRESS);
  const doneTasks = tasks.filter((task) => task.taskStatus === TaskStatus.DONE);
  const canceledTasks = tasks.filter((task) => task.taskStatus === TaskStatus.CANCELED);

  // type

  const logisticTasks = tasks.filter((task) => task.taskType === TaskType.LOGISTIC);
  const purchaseTasks = tasks.filter((task) => task.taskType === TaskType.PURCHASE);
  const informaticTasks = tasks.filter((task) => task.taskType === TaskType.INFORMATIC);

  // priority

  const minorTasks = tasks.filter((task) => task.taskPriority === TaskPriority.MINOR);
  const majorTasks = tasks.filter((task) => task.taskPriority === TaskPriority.MAJOR);
  const criticalTasks = tasks.filter((task) => task.taskPriority === TaskPriority.CRITICAL);

  // doneBy

  const doneByClient = tasks.filter((task) => task.userDTOTaskDetailsCreator.creatorRole === RoleType.CLIENT);
  const doneByWorker = tasks.filter((task) => task.userDTOTaskDetailsCreator.creatorRole === RoleType.WORKER);

  const properTaskBody = () => {
    switch (taskDiagramType) {
      case 'taskStatus':
        return {
          type: StatType.PIE,
          chart: taskStatusPieChart([pendingTasks.length, inProgressTasks.length, doneTasks.length, canceledTasks.length]),
          description: 'Usługi ze względu na status',
        };
      case 'taskType':
        return {
          type: StatType.PIE,
          chart: taskTypePieChart([logisticTasks.length, purchaseTasks.length, informaticTasks.length]),
          description: 'Usługi ze względu na typ',
        };
      case 'taskPriority':
        return {
          type: StatType.PIE,
          chart: taskPriorityPieChart([minorTasks.length, majorTasks.length, criticalTasks.length]),
          description: 'Usługi ze względu na priorytet',
        };
      case 'taskByUser':
        return {
          type: StatType.PIE,
          chart: taskByUserPieChart([doneByClient.length, doneByWorker.length]),
          description: 'Usługi ze względu na rolę twórcy',
        };
      default:
        return {
          type: StatType.PIE,
          chart: taskPriorityPieChart([2, 2, 3]),
          description: 'Usługi ze względu na priorytet',
        };
    }
    return taskStatusPieChart([0, 0, 0, 0]);
  };

  const onCreateDiagramHandler = () => {
    const { type, chart, description } = properTaskBody();

    const statBody: AddStat = {
      creatorId: loggedUser.id,
      chartData: JSON.stringify(chart),
      statCategory: StatCategory.TASK,
      statType: type,
      description,
    };
    try {
      dispatch(addingStatThunk(statBody));
    } catch (e) {
      throw e;
    }
  };

  const taskPieCharts = stats?.filter((s) => s.statCategory === StatCategory.TASK).map((stat) => (

    <PieChartComponent isStatPage id={stat.id} key={stat.id} description={stat.description} chartData={mapJsonToPieChart(stat.chartData)} creatorUsername={stat.creatorUsername} createdTime={mapDateToString(stat.createdTime)} chartType={stat.statType} />));

  return (
    <div>
      <SelectWrapperComponent>
        <SelectComponent
          options={TASK_DIAGRAM_TYPE}
          onChange={setTaskDiagramType}
          value={taskDiagramType}
          label="Wybierz jaki wykres ma być utworzony"
        />
      </SelectWrapperComponent>
      <Button onClick={onCreateDiagramHandler} colorScheme="teal">Utwórz wykres:</Button>
      <p>Przegląd wykresów:</p>
      <TaskChartWrapperComponent>
        {taskPieCharts}
      </TaskChartWrapperComponent>
    </div>
  );
};

export default TaskPanelContainer;
