import SelectComponent from '../../../../components/form/select.component.tsx';
import InputComponent from '../../../../components/form/input.component.tsx';
import { SelectValue } from '../../../../types/UtilTypes.ts';
import { PreviewTask, TaskPreview } from '../../../../types/TaskType.ts';

interface Props {
  options: {
    assigneeOptions: SelectValue[],
    priorityOptions: SelectValue[],
    statusOptions: SelectValue[],
  },
  setPreview: (key: string, value: string) => void,
  previewTask: PreviewTask,
  oldValues: TaskPreview,
}

const EditTaskPreviewComponent = ({
  options, setPreview, previewTask, oldValues,
}: Props) => (
  <div>
    <SelectComponent
      options={options.assigneeOptions}
      onChange={(e) => setPreview('assigneeUsername', e)}
      label="Wybierz osobę do której zostanie przypisany"
      value={previewTask.assigneeUsername}
    />
    <SelectComponent
      options={options.statusOptions}
      onChange={(e) => setPreview('taskStatus', e)}
      label="Wybierz status usługi"
      value={previewTask.taskStatus}
    />
    <SelectComponent
      options={options.priorityOptions}
      onChange={(e) => setPreview('taskPriority', e)}
      label="Wybierz prioryter usługi"
      value={previewTask.taskPriority}
    />
    <InputComponent
      name="totalHoursSpent"
      value={previewTask.totalHoursSpent || oldValues.hoursSpent}
      onChange={(e) => setPreview('totalHoursSpent', e.target.value)}
      placeholder="Godziny:"
      label="Całkowita ilość przepracowanych godzin(h)"
      type="number"
      isInvalid={false}
    />
    <InputComponent
      name="actualCost"
      value={previewTask.actualCost || oldValues.actualCost}
      onChange={(e) => setPreview('actualCost', e.target.value)}
      placeholder="koszt"
      label="Aktualny koszt(zł)"
      type="number"
      isInvalid={false}
    />
  </div>
);

export default EditTaskPreviewComponent;
