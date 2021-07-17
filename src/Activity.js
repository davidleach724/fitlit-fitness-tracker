class Activity {
  constructor(activityInfo, currentID) {
    this.activityInfo = activityInfo;
    this.currentUserID = currentID;
    this.currentUser = this.findUserActivity();
  }

  findUserActivity() {
    return this.activityInfo.filter(user => user.userID === this.currentUserID);
  }

  // return steps for date

  // return miles based on steps and stridelength

  // return active minutes for date

  // return average active minutes for week

  // return if step goal was met for date

  // return days step goal was met

  // find all-time stair record

  // return ALL USERS
    // average stairs for date
    // average steps for date
    // average minutes for date

  // return steps user vs. all users

  // return minutes user vs. all users
  
  // return stairs user vs. all users

  // return week step count

  // return week stairs

  // return week min active

}

export default Activity;