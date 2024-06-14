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
    text: 'wsparcie',
    value: SupportRequest.SUPPORT,
  },
  {
    text: 'problem',
    value: SupportRequest.BUG,
  },
  {
    text: 'inne',
    value: SupportRequest.OTHER,
  },
  {
    text: 'pomysł',
    value: SupportRequest.IMPROVEMENT,
  },
  {
    text: 'wszystkie',
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

  // useEffect(() => {
  //   dispatch(fetchSupportRequestsThunk());
  // }, []);

  // const filteredSupports = filteredSupportRequest === 'all'
  //   ? supports
  //   : supportRequests.filter(((support) => support.supportCategory === filteredSupportRequest)).map((item) => <SingleSupportComponent key={item.id} support={item} isAdminOrWorker={false} />);
  //
  // const properHeaderInfo = loggedUser.userRole === RoleType.CLIENT
  //   ? <ClientItemsCountComponent count={clientSupports.length} itemName="zgłoszeń wsparcia" name={loggedUser.name} surname={loggedUser.surname} />
  //   : <PageItemsCountComponent count={supportRequests.length} text="zgłoszeń wsparcia" />;

  const properClientsSupports = filteredSupportRequest === 'all'
    ? clientSupports.map((support) => <SingleSupportComponent key={support.id} support={support} isAdminOrWorker={false} />)
    : clientSupports.filter(((support) => support.supportCategory === filteredSupportRequest)).map((item) => <SingleSupportComponent key={item.id} support={item} isAdminOrWorker={false} />);

  if (supports.length === 0) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Zgłoszenia wsparcia" />
        <MessageComponent message="W systemie nie ma zgłoszeń wsparcia" />
      </PageWrapperComponent>
    );
  }

  const properWorkerSupports = filteredSupportRequest === 'all'
    ? supportRequests.map((support) => <SingleSupportComponent key={support.id} support={support} isAdminOrWorker />)
    : clientSupports.filter(((support) => support.supportCategory === filteredSupportRequest)).map((item) => <SingleSupportComponent key={item.id} support={item} isAdminOrWorker />);

  if (loggedUser.userRole === RoleType.CLIENT) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Zgłoszenia wsparcia" />
        <ClientItemsCountComponent count={clientSupports.length} itemName="zgłoszeń wsparcia" name={loggedUser.name} surname={loggedUser.surname} />
        <FilterSupportRequestAuthorSelectComponent onChange={setFilteredSupportRequest} options={SUPPORT_REQUEST_SELECT_OPTIONS} />
        <SupportItemsWrapperComponent>
          {properClientsSupports}
        </SupportItemsWrapperComponent>
      </PageWrapperComponent>
    );
  }

  if (loggedUser.userRole === RoleType.WORKER || loggedUser.userRole === RoleType.ADMIN) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Zgłoszenia wsparcia" />
        <PageItemsCountComponent count={supportRequests.length} text="zgłoszeń wsparcia" />;
        <FilterSupportRequestAuthorSelectComponent onChange={setFilteredSupportRequest} options={SUPPORT_REQUEST_SELECT_OPTIONS} />
        <SupportItemsWrapperComponent>
          {properWorkerSupports}
        </SupportItemsWrapperComponent>
      </PageWrapperComponent>
    );
  }

  // return (
  //   <PageWrapperComponent>
  //     <PageHeaderComponent text="Zgłoszenia wsparcia" />
  //     {properHeaderInfo}
  //     <FilterSupportRequestAuthorSelectComponent onChange={setFilteredSupportRequest} options={SUPPORT_REQUEST_SELECT_OPTIONS} />
  //     <SupportItemsWrapperComponent>
  //       {filteredSupports}
  //     </SupportItemsWrapperComponent>
  //   </PageWrapperComponent>
  // );
};

export default SupportPageContainer;
