import React from 'react'
import { atan, tan, pi } from 'mathjs'
import { Row, Col, Jumbotron,  } from 'react-bootstrap'
import { TextField, MenuItem } from '@material-ui/core'
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
        <Jumbotron>
          <Row>
            <Col xs={6}>
              <h3>Inputs</h3>
              <form autoComplete="off">
                  <div>
                    <TextField
                      id="ifovt"
                      select
                      label="Input FOV Type"
                      name="ifovt"
                      onChange={this.myChangeHandler}
                      fullWidth
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
                      fullWidth
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
                      fullWidth
                      type="number"
                      min="0"
                      max="180"
                      step="any"
                    />
                  </div>
                </form>
            </Col>
            <Col xs={6}>
              <h3>Outputs</h3>
              <form autoComplete="off">
                  <div>
                    <TextField
                      id="ofov"
                      label="Output FOV Value" 
                      value={((atan(((parseFloat(this.state.ifovt)) / (parseFloat(this.state.ofovt))) * tan((parseFloat(this.state.ifov) * pi) / 360)) * 360) / pi).toString()} 
                      readOnly
                      fullWidth
                    />
                  </div>
                </form>
            </Col>
          </Row>
        </Jumbotron>
      );
    }
  }
  export class FocalLengthForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          ifov: "null",
          ofov: "null",
          sens: "null"
      };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
      return (
        <Jumbotron>
          <Row>
            <Col xs={6}>
              <h3>Inputs</h3>
              <form autoComplete="off">
                <div>
                  <TextField
                    label="Input FOV Value"
                    helperText="Please enter the input FOV value"
                    name="ifov" 
                    onChange={this.myChangeHandler}
                    min="0"
                    max="180"
                    step="any"
                    fullWidth
                    type="number"
                  />
                </div>
                <div>
                  <TextField
                    label="Output FOV Value"
                    helperText="Please enter the output FOV value"
                    name="ofov" 
                    onChange={this.myChangeHandler}
                    min="0"
                    max="180"
                    step="any"
                    fullWidth
                    type="number"
                  />
                </div>
                <div>
                  <TextField
                    label="Input Sensitivity Value"
                    helperText="Please enter the input sensitivity value"
                    name="sens" 
                    onChange={this.myChangeHandler}
                    min="0"
                    max="180"
                    step="any"
                    fullWidth
                    type="number"
                  />
                </div>
              </form>
            </Col>
            <Col xs={6}>
              <h3>Outputs</h3>
              <form noValidate>
                <div>
                  <TextField
                    label="Output Sensitivity Value"
                    value={((tan( parseFloat(this.state.ofov) * pi / 360 ) / tan( parseFloat(this.state.ifov) * pi / 360) ) * parseFloat(this.state.sens)).toString()} 
                    readOnly
                    fullWidth
                  />
                </div>
              </form>
            </Col>
          </Row>
        </Jumbotron>
      );
    }
  }
  