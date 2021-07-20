class User {
  constructor(userInfo) {
    this.id = userInfo.id;
    this.name = userInfo.name;
    this.email = userInfo.email;
    this.address = userInfo.address;
    this.strideLength = userInfo.strideLength;
    this.dailyStepGoal =  userInfo.dailyStepGoal;
    this.friends = userInfo.friends;
  }
  showFirstName() {
    return this.name.split(' ')[0];
  }

  determineFriends(userList) {
    console.log(userList);
    console.log(this.friends);
    return this.friends.reduce((arr, friend) => {
      let num = userList.userID.indexOf(friend);
      arr.push(userList.userName[num])
      return arr
    }, [])
  }

  determineTimeOfDay () {
    let time = new Date();
    let hour = time.getHours();
    if(hour < 10) {
      return 'Good Morning, '
    }
    if(hour < 17) {
      return 'Good Afternoon, '
    }
    return 'Good Evening, '
  }
}

export default User;
