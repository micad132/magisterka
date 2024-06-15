// @ts-nocheck
import styled from 'styled-components';
import { useState } from 'react';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import PageItemsCountComponent from '../../components/pageItemsCount.component.tsx';
import { useAppSelector } from '../../utils/hooks.ts';
import { getAllSurveys } from '../../store/surveySlice.tsx';
import SingleSurveyComponent from './components/singleSurvey.component.tsx';
import SelectComponent from '../../components/form/select.component.tsx';
import { SelectValue } from '../../types/UtilTypes.ts';
import { getAllUsers } from '../../store/userSlice.tsx';
import { RoleType } from '../../types/UserType.ts';

const SurveyWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const SelectWrapper = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;

const SurveyPageContainer = () => {
  const g = 4;
  const surveys = useAppSelector(getAllSurveys);
  const users = useAppSelector(getAllUsers);
  const [filterSurvey, setFilterSurvey] = useState<string>('all');

  const selectOptions: SelectValue[] = users.filter((user) => user.userRole === RoleType.CLIENT).map((s) => ({
    text: `${s.name} ${s.surname} - ${s.username}`,
    value: s.username,
  }));

  selectOptions.push({
    text: 'ALL',
    value: 'all',
  });

  const filteredClients = filterSurvey === 'all'
    ? surveys
    : surveys.filter((s) => s.authorUsername === filterSurvey);

  const surveyComponents = filteredClients.map((survey) => <SingleSurveyComponent key={survey.id} survey={survey} />);

  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="Ankiety klienta" />
      <PageItemsCountComponent count={surveys.length} text="ankiety" />
      <SelectWrapper>
        <SelectComponent
          options={selectOptions}
          onChange={setFilterSurvey}
          label="Wybierz ankiety użytkownika"
          value={filterSurvey}
        />
      </SelectWrapper>

      <SurveyWrapper>
        {surveyComponents}
      </SurveyWrapper>
    </PageWrapperComponent>
  );
};

export default SurveyPageContainer;
