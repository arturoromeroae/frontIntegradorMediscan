import React, { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    if (!window.chatbotInitialized) {
      const loadWatsonAssistantScript = () => {
        window.watsonAssistantChatOptions = {
          integrationID: "44167245-45cf-4136-9ee8-3b3ad8e0ff3e",
          region: "us-south",
          serviceInstanceID: "135a4d67-81e0-4c12-932a-e56048ce62b6",
          onLoad: async (instance) => {
            await instance.render();
          }
        };

        const t = document.createElement('script');
        t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);

        window.chatbotInitialized = true;
      };

      loadWatsonAssistantScript();
    }
  }, []);

  return (
    <div>
      {/* Contenido del Chatbot */}
    </div>
  );
}

export default Chatbot;
