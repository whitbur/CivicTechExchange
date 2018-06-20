// @flow

import ProjectSearchDispatcher from '../stores/ProjectSearchDispatcher.js';
import TagDispatcher from '../stores/TagDispatcher.js';
import ProjectCardsContainer from '../componentsBySection/FindProjects/ProjectCardsContainer.jsx';
import ProjectSearchContainer from '../componentsBySection/FindProjects/ProjectSearchContainer.jsx';
import {FindProjectsArgs} from "../stores/ProjectSearchStore.js";
import urls from "../utils/url.js";
import React from 'react';
import _ from 'lodash'

class FindProjectsController extends React.PureComponent<{||}> {

  componentWillMount(): void {
    let args: FindProjectsArgs = urls.arguments(document.location.search);
    args = _.pick(args, ['keyword','issues','tech', 'role']);
    ProjectSearchDispatcher.dispatch({type: 'INIT', findProjectsArgs: !_.isEmpty(args) ? args : null});
    TagDispatcher.dispatch({type: 'INIT'});
  }

  render(): React$Node {
    return (
      <div className="FindProjectsController-root">
        <ProjectSearchContainer />
        <ProjectCardsContainer />
      </div>
    );
  }
}

export default FindProjectsController;
