This is an MCVE for [a bug](https://github.com/firebase/firebase-tools/issues/3796) created at `firebase/firebase-tools` repo.

### Steps to reproduce

<!-- Provide the steps needed to reproduce the issue with the above test case. -->

1. clone/fork the repo
2. Create your [service account key](https://firebase.google.com/docs/admin/setup#initialize-sdk) (name it _service-account.json_) and place it in this path:
_functions\service-account.json_
3. Create _user.name_ config by:
* Login to firebase: run `firebase login`
* run `firebase functions:config:set user.name=yourname`
* logout from firebase: run `firebase logout`
4. run `npm run deploy-using-service-account`
