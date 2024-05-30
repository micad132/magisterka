import { MessageType } from '../../types/MessageType.ts';
import { RoleType } from '../../types/UserType.ts';

export const mapDateToString = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Dodajemy 1, ponieważ miesiące są indeksowane od 0
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
  return formattedDate;
};

export const mapDateToYearMonthDay = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const countMessageRolesByCount = (messages: MessageType[]) => {
  const roleCounts: { [key: string]: { clientCount: number, workerCount: number } } = {};

  messages.forEach((message) => {
    const date = mapDateToYearMonthDay(message.date);
    if (!roleCounts[date]) {
      roleCounts[date] = { clientCount: 0, workerCount: 0 };
    }
    if (message.authorRole === RoleType.CLIENT) {
      roleCounts[date].clientCount += 1;
    } else if (message.authorRole === RoleType.WORKER) {
      roleCounts[date].workerCount += 1;
    }
  });

  const dates = Object.keys(roleCounts).sort();
  const clientCounts = dates.map((date) => roleCounts[date].clientCount);
  const workerCounts = dates.map((date) => roleCounts[date].workerCount);

  return { dates, clientCounts, workerCounts };
};
