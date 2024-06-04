import { ChartData } from 'chart.js';
import { ChartDataObject, StatType, StatTypeType } from '../../../types/StatType.ts';

// export const mapJsonToChart = <T extends ChartTypes>(json: string): ChartData<T> => {
//   const parsedData: ChartDataObject = JSON.parse(json);
//   const chartData: ChartData<T> = {
//     labels: parsedData.labels,
//     datasets: parsedData.datasets.map((dataset) => ({
//       ...dataset,
//     })) as ChartDataset<T>,
//   };
//   return chartData;
// };

export const mapJsonToDoughnutChart = (json: string): ChartData<'doughnut'> => {
  const parsedData: ChartDataObject = JSON.parse(json);
  const chartData: ChartData<'doughnut'> = {
    labels: parsedData.labels,
    datasets: parsedData.datasets.map((dataset) => ({
      ...dataset,
    })),
  };
  return chartData;
};

export const mapJsonToPieChart = (json: string): ChartData<'pie'> => {
  const parsedData: ChartDataObject = JSON.parse(json);
  const chartData: ChartData<'pie'> = {
    labels: parsedData.labels,
    datasets: parsedData.datasets.map((dataset) => ({
      ...dataset,
    })),
  };
  return chartData;
};

export const mapJsonToBarChart = (json: string): ChartData<'bar'> => {
  const parsedData: ChartDataObject = JSON.parse(json);
  const chartData: ChartData<'bar'> = {
    labels: parsedData.labels,
    datasets: parsedData.datasets.map((dataset) => ({
      ...dataset,
    })),
  };
  return chartData;
};

export const getProperJsonMap = (chartType: StatTypeType, json: string) => {
  switch (chartType) {
    case StatType.PIE:
      return mapJsonToPieChart(json);
    case StatType.DOUGHNUT:
      return mapJsonToDoughnutChart(json);
    case StatType.BAR:
      return mapJsonToBarChart(json);
    default:
      mapJsonToDoughnutChart(json);
  }
  return mapJsonToDoughnutChart(json);
};
