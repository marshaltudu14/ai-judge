# Project Brief: kanoon.ai Frontend Prototype

## 1. Project Name

kanoon.ai

## 2. Project Goal

To develop a functional and visually appealing frontend prototype for kanoon.ai, a law-specialized LLM chat website, demonstrating core chat functionalities with mock data, without backend or live LLM API integration.

## 3. Key Features

### Pages:

*   **Landing Page:** An introductory page that explains what kanoon.ai is, its value proposition (law-specialized LLM), and a clear call to action to start chatting.
*   **Chat Interface Page:** The core page featuring the chat window, an input field for user queries, and a display area for the LLM's (mock) responses.
*   **"About Us" / "How It Works" Page:** Explains the concept behind kanoon.ai, its benefits, and a conceptual overview of how the law-specialized LLM operates.
*   **FAQ Page:** A section addressing common questions users might have about the service.

### Chat Interface Specifics:

*   Prominent, multi-line text input area at the bottom of the screen for users to type their legal questions, with a "Send" button.
*   Clear visual distinction between user messages and LLM responses (e.g., different background colors, alignment).
*   Subtle loading indicator that appears while the "LLM" is "typing" a response.
*   Optional: Legal Topic Suggestions (pre-defined buttons or a dropdown menu) to reinforce specialization.
*   **Dedicated Interface/Workspace for AI Judge Mode:** A distinct visual layout or additional tools specific to legal case analysis will be present when in AI Judge mode, not available in normal chat.

### Navigation & Layout:

*   **Sidebar:**
    *   Scrollable list of previous chat sessions (persistent history), allowing users to click and resume/view old conversations.
    *   "New Chat" button to start a fresh conversation.
    *   Navigation links to "About Us," "How It Works," and "FAQ."
*   **Header:**
    *   "kanoon.ai" logo/name, prominently displayed.
    *   Theme toggle button/switch for light and dark modes.
    *   Small display of the current (mock) user's avatar or name.

### Visuals:

*   Light and Dark Theme friendly design.
*   Professional, slightly muted color scheme (e.g., blues, grays, whites) to evoke trust and seriousness.
*   Clean, readable font choices.

## 4. Scope

### In Scope:

*   Development of a functional and visually appealing frontend prototype.
*   Implementation of all agreed-upon pages (Landing, Chat Interface, About/How It Works, FAQ).
*   Integration of mock data to simulate LLM responses and chat history.
*   Design and implementation of a responsive UI that supports both light and dark themes.
*   Implementation of the specified Sidebar and Header elements.

### Out of Scope (for this initial prototype):

*   Backend development (APIs, databases).
*   Live LLM integration.
*   User authentication and management.
*   Complex analytics.
*   Deployment to a live server.

## 5. Target Audience

*   **Normal citizens from all over the world:** Seeking general legal information.
*   **Lawyers and Law Firms:** Who would eventually benefit from advanced features such as drafting legal documents, summarization of legal data, knowledge of all countries' constitutions, laws of all countries' databases, and the "demo AI Judge" concept (which will act as a real judge, helping lawyers with their cases by assessing strength, identifying weaknesses, and suggesting relevant legal articles).

## 6. Technical Requirements

*   **Framework:** Next.js
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** Shadcn UI
*   **Animations:** Framer Motion and GSAP (for beautiful animations)
