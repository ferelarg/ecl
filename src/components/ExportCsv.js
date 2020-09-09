import React from 'react';
import { pure } from 'recompose';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';

const ExportCsv = ({onExport}) => {
  return [
    <a className="filters-action" href="images/landscape.pdf" aria-label="Download as PDF">
      <SystemUpdateIcon /><span>Download as PDF</span>
    </a>,
    <div className="filters-action" onClick={()=>onExport()} aria-label="Download as CSV">
      <SystemUpdateIcon /><span>Download as CSV</span>
    </div>
  ];
};
export default pure(ExportCsv);
