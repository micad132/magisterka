import { useState } from 'react';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import SingleSupportComponent from './singleSupportItem/singleSupport.component.tsx';
import SupportItemsWrapperComponent from './supportItemsWrapper.component.tsx';
import { Support, SupportRequest } from '../../types/SupportRequest.ts';
import PageItemsCountComponent from '../../components/pageItemsCount.component.tsx';
import FilterSupportRequestAuthorSelectComponent from './filterSupportRequestAuthorSelect.component.tsx';
import { SelectValue } from '../../types/UtilTypes.ts';

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
    text: SupportRequest.SUPPORT,
    value: 'support',
  },
  {
    text: SupportRequest.BUG,
    value: 'bug',
  },
  {
    text: SupportRequest.OTHER,
    value: 'other',
  },
  {
    text: SupportRequest.IMPROVEMENT,
    value: 'other',
  },
  {
    text: 'all',
    value: 'all',
  },
];

const SupportPageContainer = () => {
  const a = 5;

  const [filteredSupportRequest, setFilteredSupportRequest] = useState<string>('all');
  const supports = MOCKED_SUPPORT_REQUESTS.map((support, index) => <SingleSupportComponent key={index} support={support} />);

  const filteredSupports = filteredSupportRequest === 'all'
    ? supports
    : MOCKED_SUPPORT_REQUESTS.filter(((support) => support.supportType === filteredSupportRequest)).map((item, index) => <SingleSupportComponent key={index} support={item} />);

  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="Support" />
      <PageItemsCountComponent count={MOCKED_SUPPORT_REQUESTS.length} text="support requests" />
      <FilterSupportRequestAuthorSelectComponent onChange={setFilteredSupportRequest} options={SUPPORT_REQUEST_SELECT_OPTIONS} />
      <SupportItemsWrapperComponent>
        {filteredSupports}
      </SupportItemsWrapperComponent>
    </PageWrapperComponent>
  );
};

export default SupportPageContainer;
