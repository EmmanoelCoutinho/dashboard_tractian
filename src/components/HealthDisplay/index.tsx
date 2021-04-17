import React, { useContext } from 'react';

import { apiContext } from '../../contexts/apiContexts';
import { ThemeContext } from 'styled-components';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { NONAME } from 'node:dns';

const HealthDisplay: React.FC = () => {
  const { dataAssets } = useContext(apiContext);
  const { colors } = useContext(ThemeContext);

  const components = [];

  const takeValue = dataAssets.map((data: any) => {
    components.push({ name: data.name, y: data.healthscore, color: colors.secundary });
  });

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
        data: components,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
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

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default HealthDisplay;
