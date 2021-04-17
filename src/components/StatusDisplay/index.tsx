import React, { useContext, useEffect } from 'react';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { apiContext } from '../../contexts/apiContexts';

import { Container, HighchartsContainer, CaptionContainer, Title, List } from './styles';

const StatusDisplay = () => {
  const { dataAssets } = useContext(apiContext);

  const status = [];
  const filtred = {
    inAlert: 0,
    inDowntime: 0,
    inOperation: 0,
    undefined: 0
  };

  const takeValue = dataAssets.map((data: any) => {
    status.push(data.status);
  });

  const filter = status.forEach(function (i) {
    filtred[i] = (filtred[i] || 0) + 1;
  });

  //set the same value to height and width ind options
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
          { name: 'Em Operação', y: filtred.inOperation, color: '#18d217' },
          { name: 'Em alerta', y: filtred.inAlert, color: '#FFC035' },
          { name: 'Em Parada', y: filtred.inDowntime, color: '#ff3440' },
          { name: 'Desligado', y: filtred.undefined, color: '#929292' }
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

  return (
    <Container>
      <HighchartsContainer>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </HighchartsContainer>
      <Title>ATIVOS: {dataAssets.length}</Title>
      <CaptionContainer>
        <List>Em Alerta: {filtred.inAlert}</List>
        <List>Em Parada: {filtred.inDowntime}</List>
        <List>Em Operação: {filtred.inOperation}</List>
        <List>Desligado: {filtred.undefined}</List>
      </CaptionContainer>
    </Container>
  );
};

export default StatusDisplay;
