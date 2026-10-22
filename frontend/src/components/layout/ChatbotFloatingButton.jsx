import React from 'react';
import { MessageCircle, X } from 'lucide-react';
import './ChatbotFloatingButton.css';

function ChatbotFloatingButton({ isOpen = false, onClick }) {
	return (
		<button
			type="button"
			className={`chatbot-fab${isOpen ? ' is-open' : ''}`}
			aria-label={isOpen ? 'Close MedIQ assistant' : 'Open MedIQ assistant'}
			title="MedIQ Assistant"
			onClick={onClick}
			aria-expanded={isOpen}
			aria-controls="mediq-chat-panel"
			aria-haspopup="dialog"
		>
			<span className="chatbot-fab-icon" aria-hidden="true">
				{isOpen ? <X size={23} strokeWidth={1.8} /> : <MessageCircle size={24} strokeWidth={1.8} />}
			</span>
			{!isOpen && <span className="chatbot-fab-label">Ask MedIQ</span>}
		</button>
	);
}

export default ChatbotFloatingButton;
