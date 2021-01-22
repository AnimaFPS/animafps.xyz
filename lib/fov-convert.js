import React from 'react'
import { atan, tan, pi } from 'mathjs'
import { Container, Grid, MenuItem, TextField } from '@material-ui/core';

export class FovConvertForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          ifovt: "null",
          ofovt: "null",
          ifov: "null"
      };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
      return (
        <Container>
          <Grid container>
            <Grid item xs={6}>
              <h3>Inputs</h3>
              <form noValidate autoComplete="off">
                <div>
                  <TextField
                    id="ifovt"
                    select
                    label="Input FOV Type"
                    name="ifovt"
                    onChange={this.myChangeHandler} 
                    helperText="Please select your Input FOV Type"
                  >
                    <MenuItem value="0.5625">16:9 hFOV (OW, Val, QC)</MenuItem>
                    <MenuItem value="0.75">4:3 hFOV (Source, Quake)</MenuItem>
                    <MenuItem value="1">vFOV (R6, OW(ads))</MenuItem>
                  </TextField>
                </div>
                <br/>
                <div>
                  <TextField
                    id="ofovt"
                    select
                    name="ofovt"
                    label="Output FOV Type"
                    onChange={this.myChangeHandler} 
                    helperText="Please select your Output FOV Type"
                  >
                    <MenuItem value="0.5625">16:9 hFOV (OW, Val, QC)</MenuItem>
                    <MenuItem value="0.75">4:3 hFOV (Source, Quake)</MenuItem>
                    <MenuItem value="1">vFOV (R6, OW(ads))</MenuItem>
                  </TextField>
                </div>
                <br/>
                <div>
                  <TextField
                    id="ifov"
                    name="ifov"
                    label="Input FOV Value"
                    onChange={this.myChangeHandler}
                    helperText="Please Enter The Input FOV Value"
                  />
                </div>
              </form>
            </Grid>
            <Grid item xs={6} >
              <h3>Outputs</h3>
              <form noValidate autoComplete="off">
                <div>
                  <TextField
                    id="ofov"
                    label="Output FOV Value" 
                    value={((atan(((parseFloat(this.state.ifovt)) / (parseFloat(this.state.ofovt))) * tan((parseFloat(this.state.ifov) * pi) / 360)) * 360) / pi).toString()} 
                    readOnly
                  />
                </div>
              </form>
            </Grid>
          </Grid>
          
        </Container>
      );
    }
  }
  