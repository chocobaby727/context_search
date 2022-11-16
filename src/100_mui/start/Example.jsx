import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const  Example = () =>  {
//   return (
//     <div>
//       <Accordion>
//         <AccordionSummary
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             1
//           </Typography>
//         </AccordionDetails>
//         <AccordionDetails>
//           <Typography>
//             2
//           </Typography>
//         </AccordionDetails>
//         <AccordionDetails>
//           <Typography>
//             3
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }

const PanelHorizontal = styled.div`
  width: 220px;
  transform: translateX(-220px);
  transition: transform 400ms ease-in;

  .slideIn {
    transform: translateX(0);
  }
  .slideOut {
    transform: translateX(-220px);
  }
`;


class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  
  render() {
    const classesNames = ['panelHorizontal'];
    if (this.state.visible){
      classesNames.push('slideIn');
    } else {
      classesNames.push('slideOut');
    }
    return (
      <div>
        <h1
          className="title"
          onClick={()=>this.setState({visible: !this.state.visible})}
        >click to toggle</h1>
        
        <PanelHorizontal>
          content here
        </PanelHorizontal>
      </div>
    );
  };
}


export default Example;
