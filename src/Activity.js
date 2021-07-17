class Activity {
  constructor(activityInfo, currentID) {
    this.activityInfo = activityInfo;
    this.currentUserID = currentID;
    this.currentUser = this.findUserActivity();
  }

  findUserActivity() {
    return this.activityInfo.filter(user => user.userID === this.currentUserID);
  }
  
}