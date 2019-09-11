// @flow

import React from 'react';
import {Button} from 'react-bootstrap';
import Section from "../../enums/Section.js";
import url from "../../utils/url.js";
import cdn from "../../utils/cdn.js";

type Props = {|
  onClickFindProjects: () => void
|};

class SplashScreen extends React.PureComponent<Props> {
  _onClickFindProjects(): void {
    this.props.onClickFindProjects();
  }

  render(): React$Node {
    return (
      <div className="SplashScreen-root" style={{backgroundImage: 'url(' + cdn.image("dl_splash.jpg")+ ')' }}>
        <div className="SplashScreen-content">
          <h1>We connect skilled volunteers and tech-for-good projects</h1>
          <div className="SplashScreen-section">
            <Button className="SplashScreen-find-projects-btn" onClick={this._onClickFindProjects.bind(this)}>
              Find Projects
            </Button>
            <Button className="SplashScreen-create-project-btn" href={url.sectionOrLogIn(Section.CreateProject)}>
              Create A Project
            </Button>
          </div>
        </div>
        <div className="SplashScreen-mission">
          <p>DemocracyLab is a nonprofit organization.</p>
          <p>Our mission is to empower people who use technology to advance the public good.</p>
        </div>
      </div>
    );
  }

}
export default SplashScreen;
