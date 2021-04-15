import React, { useContext } from 'react';

import { apiContext } from '../../contexts/apiContexts';

import { Container, ProgressiveBar, ContainerListStatus, ListStatus } from './styles';

const ActivityDisplay = () => {
  const { dataAssets } = useContext(apiContext);

  const status = [];
  const filtred = {
    inAlert: 0,
    inDowntime: 0,
    inOperation: 0,
    undefined: 0
  };

  dataAssets.map((data: any) => {
    status.push(data.status);
  });

  status.forEach(function (i) {
    filtred[i] = (filtred[i] || 0) + 1;
  });

  return (
    <Container>
      <ProgressiveBar />
      <ContainerListStatus>
        <ListStatus>Em alerta: {filtred.inAlert}</ListStatus>
        <ListStatus>Em operação: {filtred.inAlert}</ListStatus>
        <ListStatus>Deligadas: {filtred.inAlert}</ListStatus>
      </ContainerListStatus>
    </Container>
  );
};

export default ActivityDisplay;
