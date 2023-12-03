import React, { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    if (!window.chatbotInitialized) {
      const loadWatsonAssistantScript = () => {
        window.watsonAssistantChatOptions = {
          integrationID: "10f2ae1a-a431-43b1-927b-efebc6b2ccd8",
          region: "us-south",
          serviceInstanceID: "1d6ba26e-287d-4807-9604-dfbc879b5eed",
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
