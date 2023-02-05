package com.mycompany.plugins.example;

import android.util.Log;
import com.google.firebase.messaging.FirebaseMessaging;

public class FcmSub {

    public String echo(String value) {
        Log.i("Echo", value);
        FirebaseMessaging.getInstance().subscribeToTopic("public");
        return value;
    }
}
