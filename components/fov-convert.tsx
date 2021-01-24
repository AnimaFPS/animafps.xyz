import React from "react";
import { atan, tan, pi } from "mathjs";
import { Row, Col, Jumbotron } from "react-bootstrap";
import { TextField, MenuItem } from "@material-ui/core";

export function FovConvertForm():JSX.Element {
  const [state, setState] = React.useState({
    ifovt: 0,
    ofovt: 0,
    ifov: 0,
  })
  const myChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const nam = event.target.name;
    const val = event.target.value;
    setState({...state, [nam]: val });
  };
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
                onChange={myChangeHandler}
                fullWidth
              >
                <MenuItem value={0.5625}>16:9 hFOV (OW, Val, QC)</MenuItem>
                <MenuItem value={0.75}>4:3 hFOV (Source, Quake)</MenuItem>
                <MenuItem value={1}>vFOV (R6, OW(ads))</MenuItem>
                <MenuItem >hFOV (Custom/Other)</MenuItem>
              </TextField>
            </div>
            <br />
            <div>
              <TextField
                id="ofovt"
                select
                name="ofovt"
                label="Output FOV Type"
                onChange={myChangeHandler}
                fullWidth
              >
                <MenuItem value={0.5625}>16:9 hFOV (OW, Val, QC)</MenuItem>
                <MenuItem value={0.75}>4:3 hFOV (Source, Quake)</MenuItem>
                <MenuItem value={1}>vFOV (R6, OW(ads))</MenuItem>
                <MenuItem>hFOV (Custom/Other)</MenuItem>
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
                onChange={myChangeHandler}
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
                    (state.ifovt /
                      state.ofovt) *
                      tan((state.ifov * pi) / 360)
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

export function FocalLengthForm():JSX.Element {
  const [state, setState] = React.useState({
    ifov: 0,
    ofov: 0,
    sens: 0,
  })
  const myChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const nam = event.target.name;
    const val = event.target.value;
    setState({...state, [nam]: val });
  };
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
                  onChange={myChangeHandler}
                  fullWidth
                  type="number"
                />
              </div>
              <br />
              <div>
                <TextField
                  label="Output FOV Value"
                  name="ofov"
                  onChange={myChangeHandler}
                  fullWidth
                  type="number"
                />
              </div>
              <br />
              <div>
                <TextField
                  label="Input Sensitivity Value"
                  name="sens"
                  onChange={myChangeHandler}
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
                    (tan((state.ofov * pi) / 360) /
                      tan((state.ifov * pi) / 360)) *
                    state.sens
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
