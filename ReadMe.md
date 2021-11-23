# sampleRepo

## Screenshot

<a href="url"><img src="https://user-images.githubusercontent.com/73298854/142966320-c25c923d-8321-4095-aa36-917e6b15e802.png" height="300" width="150" ></a> <a href="url"><img src="https://user-images.githubusercontent.com/73298854/142966335-a4610e31-73e3-4a5e-b179-64ba4139abf7.png" height="300" width="150" ></a>

## Requirement
  - Android Studio (Android Studio Arctic Fox | 2020.3.1 Patch 3)
  - NDK Version (23.1.7779620)
  - react-native-cli version (2.0.1)

## How To Use
  - git clone https://github.com/pushpender-singh-ap/sampleRepo.git
  - cd sampleRepo
  - npm install
  - cd..
  - run project react-native run-android

  
## Possible Error
  
  ### Error 1
   - npm cache clean --force (if you got this error use this command in root project files)
      ```
      C:\Users\rahul\Desktop\Project\React-Native\sampleRepo\node_modules\metro-hermes-compiler\src\emhermesc.js:81
          throw ex;
          ^

      Error: EPERM: operation not permitted, lstat 'C:\Users\rahul\Desktop\Project\React-Native\sampleRepo\android\app\build\generated\res\react\release\drawable-       mdpi\src_assets_walkthrough_gothroughscreens1.jpg'
      Emitted 'error' event on NodeWatcher instance at:
      at NodeWatcher.<anonymous>
     at FSReqCallback.oncomplete (fs.js:192:21) {
     errno: -4048,
     code: 'EPERM',
     syscall: 'lstat',
     path: 'C:\\Users\\rahul\\Desktop\\Project\\React-Native\\sampleRepo\\android\\app\\build\\generated\\res\\react\\release\\drawable-                 mdpi\\src_assets_walkthrough_gothroughscreens1.jpg'
     }
     npm ERR! code ELIFECYCLE
     npm ERR! errno 7
     npm ERR! sampleRepo@0.0.1 start: `react-native start`
     npm ERR! Exit status 7
     npm ERR!
     npm ERR! Failed at the sampleRepo@0.0.1 start script.
     npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

     npm ERR! A complete log of this run can be found in:
     npm ERR!
     ```
   
  ### Error 2
   - Error: spawn ./gradlew EACCES at Process (if you got this error use this command in root project files)
      ```
      chmod 755 android/gradlew
      ```
  
  ### Error 3
   - Open root folder sampleRepo > android > open local.properties > copy and paste below lines after `sdk.dir`
   - ndk.dir=/Users/yourusername/Library/Android/sdk/ndk/23.1.7779620 (23.1.7779620 this version should be present in your ndk folder)
   - [Download NDK](https://github.com/pushpender-singh-ap/sampleRepo#how-to-download-ndk)
     ```
      > Task :realm:stripDebugDebugSymbols FAILED
     ```
     
## How to Download NDK
  <a href="url"><img src="https://user-images.githubusercontent.com/73298854/130235971-e78d1c54-d2b9-4417-b592-4bd946cc8cc5.png" height="300" width="600" ></a>
  <a href="url"><img src="https://user-images.githubusercontent.com/73298854/140639926-55dc2126-1416-41c8-a0dd-ba1f4f2b72b2.png" height="500" width="700" ></a>
  
### #happycoding
