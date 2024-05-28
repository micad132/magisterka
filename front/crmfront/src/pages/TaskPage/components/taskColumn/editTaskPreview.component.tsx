import SelectComponent from '../../../../components/form/select.component.tsx';
import InputComponent from '../../../../components/form/input.component.tsx';
import { SelectValue } from '../../../../types/UtilTypes.ts';
import { PreviewTask } from '../../../../types/TaskType.ts';

interface Props {
  options: {
    assigneeOptions: SelectValue[],
    priorityOptions: SelectValue[],
    statusOptions: SelectValue[],
  },
  setPreview: (key: string, value: string) => void,
  previewTask: PreviewTask,
}

const EditTaskPreviewComponent = ({ options, setPreview, previewTask }: Props) => (
  <div>
    <SelectComponent
      options={options.assigneeOptions}
      onChange={(e) => setPreview('assigneeUsername', e)}
      label="Select task assignee"
      value={previewTask.assigneeUsername}
    />
    <SelectComponent
      options={options.statusOptions}
      onChange={(e) => setPreview('taskStatus', e)}
      label="Select task status"
      value={previewTask.taskStatus}
    />
    <SelectComponent
      options={options.priorityOptions}
      onChange={(e) => setPreview('taskPriority', e)}
      label="Select task priority"
      value={previewTask.taskPriority}
    />
    <InputComponent
      name="totalHoursSpent"
      value={previewTask.totalHoursSpent}
      onChange={(e) => setPreview('totalHoursSpent', e.target.value)}
      placeholder="Hours"
      label="Total hours spent"
      type="number"
      isInvalid={false}
    />
    <InputComponent
      name="actualCost"
      value={previewTask.actualCost}
      onChange={(e) => setPreview('actualCost', e.target.value)}
      placeholder="Cost"
      label="Actual cost"
      type="number"
      isInvalid={false}
    />
  </div>
);

export default EditTaskPreviewComponent;
