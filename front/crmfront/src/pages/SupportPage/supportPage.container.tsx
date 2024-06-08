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
import MessageComponent from '../../components/message.component.tsx';

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
  console.log('supports', supportRequests);
  const loggedUser = useAppSelector(getUserDetails);

  const clientSupports = supportRequests.filter((support) => support.username === loggedUser.username);
  const supports = (loggedUser.userRole === RoleType.ADMIN || loggedUser.userRole === RoleType.WORKER)
    ? supportRequests.map((support) => <SingleSupportComponent key={support.id} support={support} isAdminOrWorker />)
    : clientSupports.map((support) => <SingleSupportComponent key={support.id} support={support} isAdminOrWorker={false} />);

  useEffect(() => {
    dispatch(fetchSupportRequestsThunk());
  }, []);

  const filteredSupports = filteredSupportRequest === 'all'
    ? supports
    : supportRequests.filter(((support) => support.supportCategory === filteredSupportRequest)).map((item) => <SingleSupportComponent key={item.id} support={item} isAdminOrWorker />);

  const properHeaderInfo = loggedUser.userRole === RoleType.CLIENT
    ? <ClientItemsCountComponent count={clientSupports.length} itemName="support requests" />
    : <PageItemsCountComponent count={supportRequests.length} text="support requests" />;

  if (supports.length === 0) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Support" />
        <MessageComponent message="There are no support requests in the system" />
      </PageWrapperComponent>
    );
  }

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
