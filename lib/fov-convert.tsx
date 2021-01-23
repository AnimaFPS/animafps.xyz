import React from "react";
import { atan, tan, pi } from "mathjs";
import { Row, Col, Jumbotron } from "react-bootstrap";
import { TextField, MenuItem } from "@material-ui/core";

interface IFOVConvertState {
  ifovt: number;
  ofovt: number;
  ifov: number;
  [x: number]: any;
}

interface IFocalState {
  ofov: number;
  sens: number;
  ifov: number;
  [x: number]: any;
}

interface IProps {

}

export class FovConvertForm extends React.Component<IProps, IFOVConvertState> {
  constructor(props: any) {
    super(props);
    this.state = {
      ifovt: 0,
      ofovt: 0,
      ifov: 0,
    };
  }
  myChangeHandler = (event: any) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (val === "hFOV") {
    }
    this.setState({ [nam]: val });
  };

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
                  <MenuItem value={0.5625}>16:9 hFOV (OW, Val, QC)</MenuItem>
                  <MenuItem value={0.75}>4:3 hFOV (Source, Quake)</MenuItem>
                  <MenuItem value={1}>vFOV (R6, OW(ads))</MenuItem>
                  <MenuItem value="hFOV">hFOV (Custom/Other)</MenuItem>
                </TextField>
              </div>
              <br />
              <div>
                <TextField
                  id="ofovt"
                  select
                  name="ofovt"
                  label="Output FOV Type"
                  onChange={this.myChangeHandler}
                  fullWidth
                >
                  <MenuItem value={0.5625}>16:9 hFOV (OW, Val, QC)</MenuItem>
                  <MenuItem value={0.75}>4:3 hFOV (Source, Quake)</MenuItem>
                  <MenuItem value={1}>vFOV (R6, OW(ads))</MenuItem>
                  <MenuItem value="hFOV">hFOV (Custom/Other)</MenuItem>
                </TextField>
              </div>
              <div style={{ display: "none" }}>
                <br />

                <br />
              </div>
              <br />
              <div>
                <TextField
                  id="ifov"
                  name="ifov"
                  label="Input FOV Value"
                  onChange={this.myChangeHandler}
                  fullWidth
                  type="number"
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
                  value={(
                    (atan(
                      (this.state.ifovt /
                        this.state.ofovt) *
                        tan((this.state.ifov * pi) / 360)
                    ) *
                      360) /
                    pi
                  ).toString()}
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
export class FocalLengthForm extends React.Component<IProps, IFocalState> {
  constructor(props: any) {
    super(props);
    this.state = {
      ifov: 0,
      ofov: 0,
      sens: 0,
    };
  }
  myChangeHandler = (event: any) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

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
                  name="ifov"
                  onChange={this.myChangeHandler}
                  fullWidth
                  type="number"
                />
              </div>
              <br />
              <div>
                <TextField
                  label="Output FOV Value"
                  name="ofov"
                  onChange={this.myChangeHandler}
                  fullWidth
                  type="number"
                />
              </div>
              <br />
              <div>
                <TextField
                  label="Input Sensitivity Value"
                  name="sens"
                  onChange={this.myChangeHandler}
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
                  value={(
                    (tan((this.state.ofov * pi) / 360) /
                      tan((this.state.ifov * pi) / 360)) *
                    this.state.sens
                  ).toString()}
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
