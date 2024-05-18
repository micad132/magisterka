import styled from 'styled-components';
import SelectComponent from '../../components/form/select.component.tsx';
import { SelectValue } from '../../types/UtilTypes.ts';

const Wrapper = styled.div`
  width: 400px;
  margin: 20px auto;
`;

interface Props {
  onChange: (value: string) => void,
  options: SelectValue[],
}

const FilterSupportRequestAuthorSelectComponent = ({ onChange, options }: Props) => (
  <Wrapper>
    <SelectComponent
      options={options}
      onChange={onChange}
      label="Filter support requests by author"
    />
  </Wrapper>
);

export default FilterSupportRequestAuthorSelectComponent;
