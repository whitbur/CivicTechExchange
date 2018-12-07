// @flow

import type {ProjectDetailsAPIData} from '../utils/ProjectAPIUtils.js';

class CurrentUser {

  static userID(): ?number {
    return Number(window.DLAB_GLOBAL_CONTEXT.userID) || null;
  }

  static isLoggedIn(): boolean {
    return Boolean(this.userID());
  }
  
  static isEmailVerified(): boolean {
    return Boolean(window.DLAB_GLOBAL_CONTEXT.emailVerified);
  }

  static firstName(): string {
    return window.DLAB_GLOBAL_CONTEXT.firstName;
  }

  static lastName(): string {
    return window.DLAB_GLOBAL_CONTEXT.lastName;
  }

  static isStaff() : boolean {
    return window.DLAB_GLOBAL_CONTEXT.isStaff;
  }

  static isCoOwner(project: ProjectDetailsAPIData) {
    const currentUserId = this.userID();
    if (!currentUserId || currentUserId === project.project_creator) return false;
    const thisVolunteer = project.project_volunteers.find(volunteer => volunteer.user.id === currentUserId);
    return thisVolunteer && thisVolunteer.isCoOwner;
  }
}

export default CurrentUser;
