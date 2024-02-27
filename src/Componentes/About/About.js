import React from 'react'; 
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";

export const About = () => {
  return (
    <div className="card flex justify-content-center">
      <Button label="Check" icon="pi pi-check" />
    </div>
  )
}
export default About;