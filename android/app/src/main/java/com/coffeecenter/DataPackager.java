package com.coffeecenter;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

/**
 * Created by macbook on 15/05/18.
 */


public class DataPackager implements ReactPackage {

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new DataManager(reactContext));

        return modules;
    }
////    @Override
////    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
////        return Collections.emptyList();
////    }
//
//    @Override
//    public List<NativeModule> createNativeModules(
//            ReactApplicationContext reactContext) {
//        List<NativeModule> modules = new ArrayList<>();
//
////        modules.add(new ToastModule(reactContext));
//
//        return Collections.emptyList();
//    }
//
//    @Override
//    public List<ViewManager>
//    createViewManagers(ReactApplicationContext reactContext) {
//        return Collections.<ViewManager>singletonList(
//                new DataManager()
//        );
//    }

}