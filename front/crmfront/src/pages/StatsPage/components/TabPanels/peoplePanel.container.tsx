import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import SelectComponent from '../../../../components/form/select.component.tsx';
import { SelectValue } from '../../../../types/UtilTypes.ts';
import {
  clientByGenderPie,
  clientsByCountry,
  clientsByProvince,
  usersByRoleDoughnut,
} from '../../../../utils/peopleCharts.ts';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks.ts';
import { getAllUsers, getUserDetails } from '../../../../store/userSlice.tsx';
import { RoleType, User, UserGender } from '../../../../types/UserType.ts';
import { AddStat, StatCategory, StatType } from '../../../../types/StatType.ts';
import { addingStatThunk, getAllStats } from '../../../../store/statSlice.tsx';
import PieChartComponent from '../../../../components/diagrams/pieChart.component.tsx';
import { getProperJsonMap, mapJsonToDoughnutChart } from '../../../../utils/mappers/chartUtils/mapJsonToChart.ts';
import { mapDateToString } from '../../../../utils/mappers/mapDateToString.ts';
import TaskChartWrapperComponent from '../taskChartWrapper.component.tsx';
import SelectWrapperComponent from '../selectWrapper.component.tsx';

const PEOPLE_CHART_VALUES: SelectValue[] = [
  {
    text: 'Płeć klientów',
    value: 'clientByGender',
  },
  {
    text: 'Role klientów',
    value: 'usersByRole',
  },
  {
    text: 'Klienci z województw',
    value: 'usersByCountry',
  },
];

interface CountryCounts {
  [key: string]: number,
}

const PeoplePanelContainer = () => {
  const [peopleChartType, setPeopleChartType] = useState<string>('clientGender');
  const dispatch = useAppDispatch();
  const users = useAppSelector(getAllUsers);
  const loggedUser = useAppSelector(getUserDetails);
  const stats = useAppSelector(getAllStats);
  const clientUsers = users.filter((user) => user.userRole === RoleType.CLIENT);
  const workerUsers = users.filter((user) => user.userRole === RoleType.WORKER);
  const adminUsers = users.filter((user) => user.userRole === RoleType.ADMIN);
  const manClients = clientUsers.filter((user) => user.userGender === UserGender.MAN);
  const womanClients = clientUsers.filter((user) => user.userGender === UserGender.WOMAN);
  console.log('USERS', users);

  // country

  const provinceCounts = clientUsers.reduce((acc: CountryCounts, user: User) => {
    acc[user.provinceName] = (acc[user.provinceName] || 0) + 1;
    return acc;
  }, {});

  const provinceNames = Object.keys(provinceCounts);
  const provinceValues = Object.values(provinceCounts);

  const getProperChart = () => {
    switch (peopleChartType) {
      case 'clientByGender':
        return {
          type: StatType.PIE,
          chart: clientByGenderPie([manClients.length, womanClients.length]),
          description: 'Liczba klientów ze względu na płeć',
        };
      case 'usersByRole':
        return {
          type: StatType.DOUGHNUT,
          chart: usersByRoleDoughnut([clientUsers.length, workerUsers.length, adminUsers.length]),
          description: 'Liczba użytkowników ze względu na role',
        };
      case 'usersByCountry':
        return {
          type: StatType.BAR,
          chart: clientsByProvince(provinceNames, provinceValues),
          description: 'Liczba klientów ze względu na województwo',
        };
      default:
        return {
          type: StatType.DOUGHNUT,
          chart: usersByRoleDoughnut([0, 0, 0]),
          description: 'Amount of users by role',
        };
    }
  };

  const createPeopleChartHandler = () => {
    const { type, chart, description } = getProperChart();

    const obj: AddStat = {
      creatorId: loggedUser.id,
      statType: type,
      chartData: JSON.stringify(chart),
      statCategory: StatCategory.PEOPLE,
      description,
    };
    try {
      dispatch(addingStatThunk(obj));
    } catch (e) {
      console.error(e);
    }
  };

  const peopleStats = stats?.filter((stat) => stat.statCategory === StatCategory.PEOPLE)
    .map((s) => <PieChartComponent isStatPage id={s.id} key={s.id} description={s.description} chartData={getProperJsonMap(s.statType, s.chartData)} creatorUsername={s.creatorUsername} createdTime={mapDateToString(s.createdTime)} chartType={s.statType} />);

  return (
    <div>
      <SelectWrapperComponent>
        <SelectComponent
          options={PEOPLE_CHART_VALUES}
          onChange={setPeopleChartType}
          label="Wybierz jaki wykres ma zostać stworzony"
        />
      </SelectWrapperComponent>
      <Button colorScheme="teal" onClick={createPeopleChartHandler}>Utwórz wykres</Button>
      <TaskChartWrapperComponent>
        {peopleStats}
      </TaskChartWrapperComponent>
    </div>
  );
};

export default PeoplePanelContainer;
