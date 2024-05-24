import { useEffect, useState } from 'react';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import SingleSupportComponent from './singleSupportItem/singleSupport.component.tsx';
import SupportItemsWrapperComponent from './supportItemsWrapper.component.tsx';
import { Support, SupportRequest } from '../../types/SupportRequest.ts';
import PageItemsCountComponent from '../../components/pageItemsCount.component.tsx';
import FilterSupportRequestAuthorSelectComponent from './filterSupportRequestAuthorSelect.component.tsx';
import { SelectValue } from '../../types/UtilTypes.ts';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import { fetchSupportRequestsThunk, getAllSupportRequests } from '../../store/supportRequestSlice.tsx';

const MOCKED_SUPPORT_REQUESTS: Support[] = [
  {
    author: 'mikad132',
    supportType: SupportRequest.SUPPORT,
    date: '13.02.2021',
    description: 'nbnnnghjgfihugif',
  },
  {
    author: 'kimek6',
    supportType: SupportRequest.BUG,
    date: '24.12.2023',
    description: 'jboghfgjifhbgfbhgbhg',
  },
  {
    author: 'cosik',
    supportType: SupportRequest.OTHER,
    date: '12.06.1993',
    description: 'jcjchdhhhhxcxxx',
  },
  {
    author: 'grzesiek6',
    supportType: SupportRequest.IMPROVEMENT,
    date: '12.12.2012',
    description: 'Jjjfjdsguhdfhgidhfghifd',
  },
];

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
  const supports = supportRequests.map((support) => <SingleSupportComponent key={support.id} support={support} />);

  useEffect(() => {
    dispatch(fetchSupportRequestsThunk());
  }, []);

  const filteredSupports = filteredSupportRequest === 'all'
    ? supports
    : supportRequests.filter(((support) => support.supportCategory === filteredSupportRequest)).map((item) => <SingleSupportComponent key={item.id} support={item} />);

  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="Support" />
      <PageItemsCountComponent count={supportRequests.length} text="support requests" />
      <FilterSupportRequestAuthorSelectComponent onChange={setFilteredSupportRequest} options={SUPPORT_REQUEST_SELECT_OPTIONS} />
      <SupportItemsWrapperComponent>
        {filteredSupports}
      </SupportItemsWrapperComponent>
    </PageWrapperComponent>
  );
};

export default SupportPageContainer;
