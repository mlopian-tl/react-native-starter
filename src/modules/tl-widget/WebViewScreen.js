import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WIDGET_SCRIPT_URL =
  'https://widget.staging.transactionlink.io/transactionlink-widget.umd.js';

const workflowToken = 'YOUR WIDGET TOKEN';

const htmlContent = `
<!DOCTYPE HTML>
<html>
  <head>
    <title>Transactionlink.io widget</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  </head>
  <body>
    <h1>transactionlink.io widget webview test page</h1>
    <div style="border: 1px solid red">
      <transactionlink-widget />
    </div>
    <script>
      window.transactionlink_ready = () => {
        transactionlink.setOptions({
          token: '${workflowToken}',
          inline: true,
          autoHeight: true
        });
        window.transactionlink.open();
      };
    </script>
    <script src="${WIDGET_SCRIPT_URL}?v=${Date.now()}"></script>
  </body>
</html>
`;

const WebViewScreen = () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: htmlContent }}
      style={styles.container}
      javaScriptEnabled={true}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default WebViewScreen;
