import ModalComponent from '../../components/modal.component.tsx';
import { ModalProps } from '../../types/UtilTypes.ts';
import CreatingTaskModalContent from './components/task/creatingTaskModalContent.component.tsx';
import TaskWrapper from './components/task/taskWrapper.component.tsx';
import TaskSettingsContainer from './components/taskSettings/taskSettings.container.tsx';

const modalProps: ModalProps = {
  buttonText: 'Create Task',
  modalHeader: 'Adding Task',
  modalActionButtonText: 'Create',
  modalBody: <CreatingTaskModalContent />,
};

const TaskPageContainer = () => (
  <div>
    TASKS
    {/* <CreateTaskButton /> */}
    <ModalComponent modalProps={modalProps} />
    <TaskSettingsContainer />
    <TaskWrapper />
  </div>
);

export default TaskPageContainer;