import React, { useContext } from 'react';

import { apiContext } from '../../contexts/apiContexts';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HealthDisplay: React.FC = () => {
  const { dataAssets } = useContext(apiContext);

  const components = [];

  const takeValue = dataAssets.map((data: any) => {
    components.push([data.name, data.healthscore]);
  });

  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Saúde dos seus ativos'
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -48,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
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
