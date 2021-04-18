import React, { useContext } from 'react';

import { takeContext } from './styles.highcharts';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HealthDisplay: React.FC = () => {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={takeContext()} />
    </>
  );
};

export default HealthDisplay;
