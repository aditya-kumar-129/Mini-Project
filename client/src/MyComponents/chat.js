import React, { Component } from "react";

class KommunicateChat extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"3627177d7a759e8968c983631270b79bb","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
    
    render(){
        return(
            
            <div> </div>
            
        )
    }
}
export default KommunicateChat;