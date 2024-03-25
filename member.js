function skillsMember() {
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }

  var member = {
    name: name,
    email: email,
    photoUrl: photoUrl,
    emailVerified: emailVerified,
    uid: uid
  };

  return member;
}