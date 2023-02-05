import Foundation
import Capacitor
import Firebase

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(FcmSubPlugin)
public class FcmSubPlugin: CAPPlugin {
    private let implementation = FcmSub()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        Messaging.messaging().subscribe(toTopic: "public")
        
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
