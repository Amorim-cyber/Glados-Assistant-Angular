window.onload = function(){
    const element = document.querySelector('.chatElement');
    window.watsonAssistantChatOptions = {
        integrationID: "6bdeceb9-f31a-4e98-877f-ad9c3dd9c6b1", // The ID of this integration.
        region: "us-south", // The region your integration is hosted in.
        serviceInstanceID: "1ff0ad46-079b-45fd-bd9b-26f6e024bd2b", // The ID of your service instance.
        // Provide the custom element.
        element: element,
        // Hide the close button since we want it always open.
        hideCloseButton: true,
        // Hide the default launcher.
        showLauncher: false,
        // Make the window open by default.
        openChatByDefault: true,
        onLoad: function(instance) { instance.render(); }
        };
    setTimeout(function(){
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
        document.head.appendChild(t);
    });
}

