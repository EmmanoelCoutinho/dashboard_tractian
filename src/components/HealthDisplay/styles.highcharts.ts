import { useContext } from 'react';
import { FiltredContext } from '../../contexts/filtredContext';

import { ThemeContext } from 'styled-components';

export const takeContext = () => {
  const { dataFilterHealth } = useContext(FiltredContext);
  const { colors } = useContext(ThemeContext);

  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -48,
        style: {
          fontSize: '11px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      enabled: true
    },
    tooltip: {
      pointFormat: 'Saúde do motor: <b>{point.y:.1f}%</b>'
    },
    series: [
      {
        name: 'HealthDisplay',
        data: dataFilterHealth(),
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: colors.primary,
          align: 'right',
          shadow: false,
          format: '{point.y:.1f}%', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '12px',
            textOutline: false,
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }
    ]
  };

  return options;
};
