import { useEffect, useState } from 'react';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import SingleSupportComponent from './singleSupportItem/singleSupport.component.tsx';
import SupportItemsWrapperComponent from './supportItemsWrapper.component.tsx';
import { SupportRequest } from '../../types/SupportRequest.ts';
import PageItemsCountComponent from '../../components/pageItemsCount.component.tsx';
import FilterSupportRequestAuthorSelectComponent from './filterSupportRequestAuthorSelect.component.tsx';
import { SelectValue } from '../../types/UtilTypes.ts';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import { fetchSupportRequestsThunk, getAllSupportRequests } from '../../store/supportRequestSlice.tsx';
import { getUserDetails } from '../../store/userSlice.tsx';
import { RoleType } from '../../types/UserType.ts';
import ClientItemsCountComponent from '../../components/clientItemsCount.component.tsx';

const SUPPORT_REQUEST_SELECT_OPTIONS: SelectValue[] = [
  {
    text: 'support',
    value: SupportRequest.SUPPORT,
  },
  {
    text: 'bug',
    value: SupportRequest.BUG,
  },
  {
    text: 'other',
    value: SupportRequest.OTHER,
  },
  {
    text: 'improvement',
    value: SupportRequest.IMPROVEMENT,
  },
  {
    text: 'all',
    value: 'all',
  },
];

const SupportPageContainer = () => {
  const [filteredSupportRequest, setFilteredSupportRequest] = useState<string>('all');
  const dispatch = useAppDispatch();
  const supportRequests = useAppSelector(getAllSupportRequests);
  const loggedUser = useAppSelector(getUserDetails);
  const supports = supportRequests.map((support) => <SingleSupportComponent key={support.id} support={support} />);

  useEffect(() => {
    dispatch(fetchSupportRequestsThunk());
  }, []);

  const filteredSupports = filteredSupportRequest === 'all'
    ? supports
    : supportRequests.filter(((support) => support.supportCategory === filteredSupportRequest)).map((item) => <SingleSupportComponent key={item.id} support={item} />);

  const properHeaderInfo = loggedUser.userRole === RoleType.CLIENT
    ? <ClientItemsCountComponent count={12} itemName="support requests" />
    : <PageItemsCountComponent count={supportRequests.length} text="support requests" />;

  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="Support" />
      {properHeaderInfo}
      <FilterSupportRequestAuthorSelectComponent onChange={setFilteredSupportRequest} options={SUPPORT_REQUEST_SELECT_OPTIONS} />
      <SupportItemsWrapperComponent>
        {filteredSupports}
      </SupportItemsWrapperComponent>
    </PageWrapperComponent>
  );
};

export default SupportPageContainer;
