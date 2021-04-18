import { useContext } from 'react';
import { FiltredContext } from '../../contexts/filtredContext';

export const takeContext = () => {
  const { dataFilterStatus } = useContext(FiltredContext);
  const { inAlert, inDowntime, inOperation, undefined } = dataFilterStatus();

  const square = 200;

  const options = {
    chart: {
      width: square,
      height: square,
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: '',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontSize: square / 8
      },
      y: square / 5
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
          distance: -5,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -140,
        endAngle: 140,
        center: ['50%', '75%'],
        size: '95%',
        y: '50%'
      }
    },

    series: [
      {
        type: 'pie',
        name: '',
        innerSize: '80%',
        data: [
          { name: 'Em Operação', y: inOperation, color: '#18d217' },
          { name: 'Em alerta', y: inAlert, color: '#FFC035' },
          { name: 'Em Parada', y: inDowntime, color: '#ff3440' },
          { name: 'Desligado', y: undefined, color: '#929292' }
        ]
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          }
        }
      ]
    }
  };

  return options;
};
