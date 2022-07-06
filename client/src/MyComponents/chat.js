import React, { Component } from "react";

class KommunicateChat extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "3e28c50b27db8c6baccce72a158621a0c",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  render() {
    return <div> </div>;
  }
}
export default KommunicateChat;
