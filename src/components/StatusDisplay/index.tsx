import React, { useContext, useEffect, useState } from 'react';

import { AiOutlineRocket } from 'react-icons/ai';
import { AiOutlinePoweroff } from 'react-icons/ai';

//configs of highcharts
import { takeContext } from './styles.highcharts';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { FiltredContext } from '../../contexts/filtredContext';
import { ThemeContext } from 'styled-components';

import { Container, CaptionContainer, Title, List } from './styles';

const StatusDisplay = () => {
  const { dataFilterStatus, activesNumber } = useContext(FiltredContext);
  const { colors } = useContext(ThemeContext);

  const { inAlert, inDowntime, inOperation, undefined } = dataFilterStatus();

  const [filtred, setFiltred] = useState({
    inAlert: 0,
    inDowntime: 0,
    inOperation: 0,
    undefined: 0
  });

  useEffect(
    () =>
      setFiltred({
        inAlert: inAlert,
        inDowntime: inDowntime,
        inOperation: inOperation,
        undefined: undefined
      }),
    [dataFilterStatus]
  );

  const styles = {
    margin: '0.5rem',
    fontSize: '1.2rem'
  };

  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={takeContext()} />

      <Title>
        <AiOutlineRocket style={{ color: colors.secundary, fontSize: '1.8rem' }} />
        {activesNumber} ATIVOS
      </Title>

      <CaptionContainer>
        <List>
          <AiOutlinePoweroff color="#18d217" style={styles} />
          {filtred.inAlert} Em alerta
        </List>
        <List>
          <AiOutlinePoweroff color="#FFC035" style={styles} />
          {filtred.inDowntime} Em parada
        </List>
        <List>
          <AiOutlinePoweroff color="#ff3440" style={styles} />
          {filtred.inOperation} Em operação
        </List>
        <List>
          <AiOutlinePoweroff color="#929292" style={styles} />
          {filtred.undefined} Desligados
        </List>
      </CaptionContainer>
    </Container>
  );
};

export default StatusDisplay;
