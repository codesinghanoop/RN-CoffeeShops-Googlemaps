package com.coffeecenter;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.uimanager.IllegalViewOperationException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * Created by macbook on 15/05/18.
 */

public class DataManager extends ReactContextBaseJavaModule {
    private static final String E_LAYOUT_ERROR = "E_LAYOUT_ERROR";
    public DataManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Override
    public String getName() {
        return "DataManager";
    }

    private static WritableMap convertJsonToMap(JSONObject jsonObject) throws JSONException {
        WritableMap map = new WritableNativeMap();

        Iterator<String> iterator = jsonObject.keys();
        while (iterator.hasNext()) {
            String key = iterator.next();
            Object value = jsonObject.get(key);
            if (value instanceof JSONObject) {
                map.putMap(key, convertJsonToMap((JSONObject) value));
            } else if (value instanceof  JSONArray) {
                map.putArray(key, convertJsonToArray((JSONArray) value));
            } else if (value instanceof  Boolean) {
                map.putBoolean(key, (Boolean) value);
            } else if (value instanceof  Integer) {
                map.putInt(key, (Integer) value);
            } else if (value instanceof  Double) {
                map.putDouble(key, (Double) value);
            } else if (value instanceof String)  {
                map.putString(key, (String) value);
            } else {
                map.putString(key, value.toString());
            }
        }
        return map;
    }

    private static WritableArray convertJsonToArray(JSONArray jsonArray) throws JSONException {
        WritableArray array = new WritableNativeArray();

        for (int i = 0; i < jsonArray.length(); i++) {
            Object value = jsonArray.get(i);
            if (value instanceof JSONObject) {
                array.pushMap(convertJsonToMap((JSONObject) value));
            } else if (value instanceof  JSONArray) {
                array.pushArray(convertJsonToArray((JSONArray) value));
            } else if (value instanceof  Boolean) {
                array.pushBoolean((Boolean) value);
            } else if (value instanceof  Integer) {
                array.pushInt((Integer) value);
            } else if (value instanceof  Double) {
                array.pushDouble((Double) value);
            } else if (value instanceof String)  {
                array.pushString((String) value);
            } else {
                array.pushString(value.toString());
            }
        }
        return array;
    }

    @ReactMethod
    public void measureLayout(
            int tag,
            int ancestorTag,
            Promise promise) {
        try {
//            measureLayout(tag, ancestorTag, mMeasureBuffer);
            JSONObject cafe1 = new JSONObject();
            try {
                cafe1.put("rating", 4.5);
                cafe1.put("review_count", 44);
                cafe1.put("display_phone", 1194.7392542559999);
                cafe1.put("id", "man-versus-machine-münchen");
                cafe1.put("image_url", "https://s3-media2.fl.yelpcdn.com/bphoto/rEFJSvLhqaiZxWinLBeAyQ/o.jpg");
                cafe1.put("name", "Man Versus Machine");
                cafe1.put("url", "https://www.yelp.com/biz/man-versus-machine-m%C3%BCnchen?adjust_creative=g_cO5JMMQ-aAST6Q7p2ovQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g_cO5JMMQ-aAST6Q7p2ovQ");
                cafe1.put("is_closed", false);
                cafe1.put("phone", "+498980046681");
                cafe1.put("display_address", new JSONArray().put("Müllerstr. 23").put("80469 Munich").put("Germany"));
                cafe1.put("coordinates", new JSONObject().put("longitude", 11.57123).put("latitude", 48.13102));
            } catch (JSONException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            WritableMap cafe1map1 = null;
            try {
                cafe1map1 = convertJsonToMap(cafe1);
            } catch (JSONException e) {
                e.printStackTrace();
            }
//
            WritableMap map = Arguments.createMap();
            WritableArray writableArray = new WritableArray() {
                @Override
                public void pushNull() {

                }

                @Override
                public void pushBoolean(boolean value) {

                }

                @Override
                public void pushDouble(double value) {

                }

                @Override
                public void pushInt(int value) {

                }

                @Override
                public void pushString(String value) {

                }

                @Override
                public void pushArray(WritableArray array) {

                }

                @Override
                public void pushMap(WritableMap map) {

                }

                @Override
                public int size() {
                    return 0;
                }

                @Override
                public boolean isNull(int index) {
                    return false;
                }

                @Override
                public boolean getBoolean(int index) {
                    return false;
                }

                @Override
                public double getDouble(int index) {
                    return 0;
                }

                @Override
                public int getInt(int index) {
                    return 0;
                }

                @Override
                public String getString(int index) {
                    return null;
                }

                @Override
                public ReadableArray getArray(int index) {
                    return null;
                }

                @Override
                public ReadableMap getMap(int index) {
                    return null;
                }

                @Override
                public Dynamic getDynamic(int index) {
                    return null;
                }

                @Override
                public ReadableType getType(int index) {
                    return null;
                }

                @Override
                public ArrayList<Object> toArrayList() {
                    return null;
                }
            };
            writableArray.pushMap(cafe1map1);
            map.putArray("businesses", writableArray);
//            Log.("the array is", map);
//                    map.putString("relativeX", "hello");
//            map.putString("relativeY", "bro");


            promise.resolve(map);
        } catch (IllegalViewOperationException e) {
            promise.reject(E_LAYOUT_ERROR, e);
        }
    }
}
