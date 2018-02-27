# meteorissue

A repo to reproduce two meteor issues

I have installed
- Meteor 1.6.1
- Android Studio 2.3.3 (also tested with Android Studio 3.0.1)
- Android SDK Tools 25.2.5

To reproduce:


NOTE: in my original project this worked before update Android Studio and Meteor

## Issue 1: cannot run the app

When I launch the app with `meteor run android-device` or simply `meteor run` I get this error in the console

```bash
(19:21:32)[meteortest]$ meteor run android-device
[[[[[ ~/meteor-projects/meteortest ]]]]]      

=> Started proxy.                             
=> Errors prevented startup:                  

   While loading plugin `basicFileTypes` from package `meteor`:
   packages/basicFileTypes_plugin.js:39:9: Package._define is not a function
   at packages/basicFileTypes_plugin.js:39:9
   at packages/basicFileTypes_plugin.js:41:3


=> Your application has errors. Waiting for file change.
=> Meteor 1.6.1 is available. Update this project with 'meteor update'.
=> Started MongoDB.
```

Just after a simple change in the code the app continues launching. For example: add a console.log in the client or clear a line, just to force Meteor to detect that code has been modified. If I stop the app with Ctrl+C and relaunch again, same error occurs.


## Issue 2: Meteor 1.4.4.5 with cordova-plugin-facebook4

I tested with:
- cordova-plugin-facebook4@1.8.0
- cordova-plugin-facebook4@1.9.1

Here I past the output in the console after `meteor run android-device`
```shell
=> Errors executing Cordova commands:

   While running Cordova app for platform Android with options --device:
   Error: Command failed: /Users/violeta/meteor-projects/meteortest/.meteor/local/cordova-build/platforms/android/cordova/run --device
   FAILURE: Build failed with an exception.

   * What went wrong:
   A problem occurred configuring root project 'android'.
   > Could not resolve all dependencies for configuration ':_debugApkCopy'.
   > Could not find com.android.support:support-annotations:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-core:4.30.0
   > Could not find com.android.support:support-core-utils:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-core:4.30.0
   > Could not find com.android.support:support-v4:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-common:4.30.0
   > Could not find com.android.support:appcompat-v7:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-common:4.30.0
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-login:4.30.0
   > Could not find com.android.support:cardview-v7:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-common:4.30.0
   > Could not find com.android.support:customtabs:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-common:4.30.0

   * Try:
   Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.
   { [Error: /Users/violeta/meteor-projects/meteortest/.meteor/local/cordova-build/platforms/android/gradlew: Command failed with exit code 1 Error output:
   FAILURE: Build failed with an exception.

   * What went wrong:
   A problem occurred configuring root project 'android'.
   > Could not resolve all dependencies for configuration ':_debugApkCopy'.
   > Could not find com.android.support:support-annotations:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-core:4.30.0
   > Could not find com.android.support:support-core-utils:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-core:4.30.0
   > Could not find com.android.support:support-v4:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-common:4.30.0
   > Could not find com.android.support:appcompat-v7:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-common:4.30.0
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-login:4.30.0
   > Could not find com.android.support:cardview-v7:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-common:4.30.0
   > Could not find com.android.support:customtabs:27.0.2.
   Required by:
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-common:4.30.0

   * Try:
   Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.] code: 1 } 'Error:
   /Users/violeta/meteor-projects/meteortest/.meteor/local/cordova-build/platforms/android/gradlew: Command failed with exit code 1 Error output:\nFAILURE:
   Build failed with an exception.\n\n* What went wrong:\nA problem occurred configuring root project \'android\'.\n> Could not resolve all dependencies
   for configuration \':_debugApkCopy\'.\n   > Could not find com.android.support:support-annotations:27.0.2.\n     Required by:\n
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-core:4.30.0\n   > Could not find
   com.android.support:support-core-utils:27.0.2.\n     Required by:\n         :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 >
   com.facebook.android:facebook-core:4.30.0\n   > Could not find com.android.support:support-v4:27.0.2.\n     Required by:\n         :android:unspecified
   > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-common:4.30.0\n   > Could not find
   com.android.support:appcompat-v7:27.0.2.\n     Required by:\n         :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 >
   com.facebook.android:facebook-common:4.30.0\n         :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 >
   com.facebook.android:facebook-login:4.30.0\n   > Could not find com.android.support:cardview-v7:27.0.2.\n     Required by:\n
   :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 > com.facebook.android:facebook-common:4.30.0\n   > Could not find
   com.android.support:customtabs:27.0.2.\n     Required by:\n         :android:unspecified > com.facebook.android:facebook-android-sdk:4.30.0 >
   com.facebook.android:facebook-common:4.30.0\n\n* Try:\nRun with --stacktrace option to get the stack trace. Run with --info or --debug option to get
   more log output.\n    at ChildProcess.whenDone
   (/Users/violeta/meteor-projects/meteortest/.meteor/local/cordova-build/platforms/android/cordova/node_modules/cordova-common/src/superspawn.js:169:23)\n
   at emitTwo (events.js:87:13)\n    at ChildProcess.emit (events.js:172:7)\n    at maybeClose (internal/child_process.js:862:16)\n    at
   Process.ChildProcess._handle.onexit (internal/child_process.js:222:5)'
   at ChildProcess.exitCallback (/tools/utils/processes.js:151:23)
   at emitTwo (events.js:87:13)
   at ChildProcess.emit (events.js:172:7)
   at Process.ChildProcess._handle.onexit (internal/child_process.js:211:12)
   => awaited here:
   at Function.Promise.await
   (/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/isopackets/cordova-support/npm/node_modules/meteor/promise/node_modules/meteor-promise/promise_server.js:35:12)
   at CordovaProject.runCommands (/tools/cordova/project.js:715:22)
   at CordovaProject.run$ (/tools/cordova/project.js:261:10)
   at tryCatch
   (/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/regenerator-runtime/runtime.js:63:40)
   at GeneratorFunctionPrototype.invoke [as _invoke]
   (/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/regenerator-runtime/runtime.js:337:22)
   at GeneratorFunctionPrototype.prototype.(anonymous function) [as next]
   (/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/regenerator-runtime/runtime.js:96:21)
   at tryCatch
   (/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/regenerator-runtime/runtime.js:63:40)
   at invoke
   (/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/regenerator-runtime/runtime.js:139:20)
   at
   /Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/regenerator-runtime/runtime.js:184:11
   at callInvokeWithMethodAndArg
   (/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/regenerator-runtime/runtime.js:183:16)
   at AsyncIterator.enqueue
   (/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/regenerator-runtime/runtime.js:206:13)
   at AsyncIterator.prototype.(anonymous function) [as next]
   (/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/regenerator-runtime/runtime.js:96:21)
   at Object.runtime.async
   (/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/regenerator-runtime/runtime.js:226:14)
   at
   /Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/isopackets/cordova-support/npm/node_modules/meteor/promise/node_modules/meteor-promise/fiber_pool.js:32:39

/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/isopackets/cordova-support/npm/node_modules/meteor/promise/node_modules/meteor-promise/promise_server.js:190
      throw error;
      ^
undefined
 => awaited here:
    at Function.Promise.await (/Users/violeta/.meteor/packages/meteor-tool/.1.4.4_5.nglk8c.lqc4d++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/isopackets/cordova-support/npm/node_modules/meteor/promise/node_modules/meteor-promise/promise_server.js:35:12)
    at /tools/cordova/runner.js:98:17
    at /tools/utils/buildmessage.js:271:13
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:264:29
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:262:18
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:253:23
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at Object.capture (/tools/utils/buildmessage.js:252:19)
    at CordovaRunner.startRunTargets (/tools/cordova/runner.js:97:37)
    at [object Object]._.extend._runOnce (/tools/runners/run-app.js:777:21)
    at [object Object]._.extend._fiber (/tools/runners/run-app.js:890:28)
    at /tools/runners/run-app.js:417:12

```
