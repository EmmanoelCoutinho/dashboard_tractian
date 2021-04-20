import { useContext, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { IoWarningOutline } from 'react-icons/io5';

import { insightsContext } from '../../contexts/insightContext';

import {
  Container,
  InsightsBlocks,
  IconStyles,
  InsightsData,
  InsightsIcon,
  InsightsTexts,
  InsightsTitle,
  Title
} from './styles';

const Insights: React.FC = () => {
  const { HelthInsights } = useContext(insightsContext);

  useEffect(() => {
    HelthInsights();
  }, [HelthInsights]);

  return (
    <Container>
      <Title>últimos insights:</Title>
      {HelthInsights().map((data) => (
        <div key={uuidv4()}>
          <InsightsBlocks key={data.name}>
            <InsightsIcon key={uuidv4()}>
              <IoWarningOutline key={uuidv4()} style={IconStyles} />
            </InsightsIcon>
            <InsightsTexts key={uuidv4()}>
              <InsightsTitle key={uuidv4()}>Saude do ativo abaixo de 70%</InsightsTitle>
              <InsightsData key={uuidv4()}>
                Sauda do ativo {data.name} em {data.hs}%
              </InsightsData>
            </InsightsTexts>
          </InsightsBlocks>
        </div>
      ))}
    </Container>
  );
};

export default Insights;
