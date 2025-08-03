# Front-End Specification: kanoon.ai

## 1. Introduction

This document details the User Interface (UI) and User Experience (UX) specifications for **kanoon.ai**, a law-specialized LLM chat website. Building upon the established Project Brief, Product Requirements Document (PRD), and Frontend Architecture, this specification outlines the visual design, interaction patterns, and user flows for the initial frontend prototype. The goal is to create a visually appealing, intuitive, and highly functional user experience, leveraging Next.js, Tailwind CSS, Shadcn UI, Framer Motion, and GSAP to deliver a polished and responsive interface with mock data.

## 2. User Flows & Key Screens

#### **2.1. Landing Page**

**Purpose:** To introduce kanoon.ai, communicate its value proposition, and guide users to the main chat interface.

**Visual Elements:**

*   **Hero Section:**
    *   **Headline:** Prominent, engaging headline (e.g., "Your AI Legal Assistant for Every Question").
    *   **Sub-headline/Tagline:** Concise explanation of kanoon.ai's specialization (e.g., "Law-Specialized LLM Chat for Citizens and Professionals").
    *   **Brief Description:** A short paragraph explaining what kanoon.ai offers and its benefits.
    *   **Call to Action (CTA) Button:** A prominent button (e.g., "Start Chatting Now," "Ask a Legal Question") that leads to the Chat Interface Page.
    *   **Illustrative Graphic/Animation:** A subtle, professional graphic or animation that visually represents AI, law, or conversation (e.g., a stylized legal scale with AI elements, a chat bubble with a gavel icon). This can leverage Framer Motion/GSAP for subtle entrance animations.
*   **Feature Highlights Section (Optional but Recommended):**
    *   Visually appealing cards or sections highlighting 2-3 key benefits or features (e.g., "Instant Legal Insights," "AI Judge Mode," "Global Law Knowledge"). Each with a small icon and brief description.
*   **Testimonial/Trust Section (Conceptual):**
    *   Placeholder for future testimonials or trust signals (e.g., "Trusted by Legal Professionals").
*   **Footer:**
    *   Standard footer with copyright, privacy policy link (conceptual), and social media links (conceptual).

**Interaction Patterns:**

*   **CTA Button:** On click, smoothly navigates the user to the `/chat` route.
*   **Responsive Design:** Layout adapts gracefully to different screen sizes (desktop, tablet, mobile).
*   **Theme Awareness:** Colors and elements adjust automatically based on the selected light/dark theme.

#### **2.2. Chat Interface Page**

**Purpose:** To provide the primary interaction point for users to chat with the law-specialized LLM and access the "AI Judge" mode.

**Overall Layout:**
*   **Header (Top):** Persistent across all main application pages.
*   **Sidebar (Left):** Persistent across all main application pages.
*   **Main Content Area (Right):** Occupies the majority of the screen, dedicated to the chat interface or the AI Judge workspace.

**Visual Elements & Components:**

*   **Header:**
    *   **Left:** "kanoon.ai" logo/text (prominent).
    *   **Right:** Theme toggle (icon button, e.g., sun/moon), conceptual user avatar/name (small circle with initial/image).
    *   **Styling:** Clean, minimalist, with subtle shadow or border to separate from content. Light/dark theme adaptable.

*   **Sidebar:**
    *   **Top:** "New Chat" button (prominent, perhaps with a "+" icon).
    *   **Middle:** Scrollable list of previous chat sessions.
        *   Each session represented by a clickable item (e.g., first few words of the conversation, date/time, or a generated summary).
        *   Active session clearly highlighted.
        *   Subtle hover effects.
    *   **Bottom:** Navigation links to "About Us," "How It Works," and "FAQ" (icon + text).
    *   **Styling:** Fixed width, clean background, scrollable content. Light/dark theme adaptable.

*   **Main Content Area (Chat View - Default):**
    *   **Chat History Display:**
        *   Scrollable container filling most of the vertical space.
        *   **User Messages:** Right-aligned, distinct background color (e.g., a subtle blue/green in light mode, darker shade in dark mode), slightly rounded corners.
        *   **LLM Responses:** Left-aligned, different background color (e.g., light gray/white in light mode, medium gray in dark mode), slightly rounded corners.
        *   **Loading Indicator:** Appears below the last LLM message when a response is pending (e.g., three pulsating dots, a small spinning icon).
        *   **Typography:** Clear, readable font. Markdown rendering for LLM responses (bolding, lists, code blocks for mock legal citations).
    *   **Chat Input Area (Bottom):**
        *   **Textarea:** Multi-line input field, expands vertically as text is typed (up to a max height). Placeholder text: "Type your legal question here..."
        *   **Send Button:** Icon button (e.g., paper airplane) to the right of the textarea. Enabled when text is present.
        *   **Optional: Legal Topic Suggestions:** A row of clickable buttons or a dropdown above the input field, offering common legal topics (e.g., "Contract Law," "Intellectual Property," "Family Law"). Clicking pre-fills the input or initiates a specific mock response.

*   **Main Content Area (AI Judge View - Activated):**
    *   **Dedicated Interface/Workspace:** When "AI Judge" mode is activated (e.g., via a button in the chat or a specific prompt), the main content area transforms.
    *   **Layout:** Could be a multi-panel layout.
        *   **Left Panel:** Chat-like interaction with the "AI Judge" persona.
        *   **Right Panel:** Dedicated sections for "Case Details Input" (mock text fields for facts, parties, etc.), "Evidence Upload" (mock file input), "Legal Precedents/Statutes" (mock display area for relevant legal texts).
    *   **Visual Cues:** Subtle changes in accent color, icons, or background to signify "AI Judge" mode. The LLM's responses in this mode would be more structured and analytical.

**Interaction Patterns:**

*   **Typing & Sending:** Standard text input, `Enter` key sends message, `Shift+Enter` for new line.
*   **Scrolling:** Chat history scrolls automatically to the bottom on new messages. Manual scrolling to view past history.
*   **Theme Toggle:** Clicking the theme icon in the header instantly switches between light and dark modes, updating all UI elements.
*   **Sidebar Navigation:** Clicking a chat session loads its history. Clicking a navigation link loads the respective page.
*   **AI Judge Activation:** A clear button or command within the chat interface to switch to the AI Judge mode.
*   **Responsive Design:** All components and layouts adapt fluidly to different screen sizes, ensuring usability on mobile, tablet, and desktop.

#### **2.3. "About Us" / "How It Works" Page**

**Purpose:** To provide users with information about kanoon.ai, its mission, benefits, and a conceptual understanding of how the law-specialized LLM operates.

**Visual Elements:**

*   **Content Area:** A clean, readable layout with clear headings and paragraphs.
*   **Sections:**
    *   **"Our Mission/Vision":** Explains the core purpose of kanoon.ai.
    *   **"What is kanoon.ai?":** A more detailed explanation of the platform.
    *   **"How It Works (Conceptual)":** Simple, high-level explanation of the LLM's specialization and how it processes legal information (e.g., "Trained on vast legal datasets," "Understands legal nuances"). Can include simple diagrams or icons.
    *   **"Benefits":** Bullet points or short paragraphs highlighting advantages for users (e.g., "Instant Access," "Specialized Knowledge," "User-Friendly").
*   **Illustrative Graphics:** Subtle, professional graphics or icons to break up text and enhance understanding.
*   **Call to Action:** A subtle link or button to "Start Chatting" or "Go to Chat" at the end of the content.

**Interaction Patterns:**

*   **Standard Scrolling:** Users can scroll through the content.
*   **Responsive Design:** Content adapts to various screen sizes.
*   **Theme Awareness:** Colors and typography adjust based on the selected light/dark theme.

#### **2.4. FAQ Page**

**Purpose:** To address common questions users might have about kanoon.ai, its functionality, and legal information in general.

**Visual Elements:**

*   **Content Area:** A clean layout, primarily using an accordion or expandable list format for questions and answers.
*   **Search Bar (Optional):** A search input at the top to quickly find answers within the FAQ.
*   **FAQ Categories (Optional):** If there are many questions, categories (e.g., "General," "Using the Chat," "Legal Information") can help organize them.
*   **Individual FAQ Items:**
    *   **Question:** Clearly visible, clickable heading.
    *   **Answer:** Hidden by default, expands on click.
    *   **Content:** Should be concise and easy to understand.

**Interaction Patterns:**

*   **Accordion/Expandable List:** Clicking a question expands/collapses its answer.
*   **Search Functionality (if implemented):** Typing in the search bar filters the FAQ list dynamically.
*   **Responsive Design:** Layout adapts to various screen sizes.
*   **Theme Awareness:** Colors and typography adjust based on the selected light/dark theme.

### **3. Visual Design Guidelines**

These guidelines ensure a consistent and professional visual identity for kanoon.ai, aligning with its legal specialization and modern aesthetic.

#### **3.1. Branding & Logo**

*   **Logo:** The "kanoon.ai" logo should be prominently displayed in the header and potentially on the landing page. It should be clean, modern, and easily recognizable.
*   **Brand Colors:** While the primary palette will be theme-dependent, a core brand accent color (e.g., a specific shade of blue or green often associated with trust and professionalism) should be defined for CTAs, active states, and key elements.

#### **3.2. Color Palette**

The application will support both light and dark themes, with a carefully curated palette for each to ensure readability and visual comfort.

*   **Light Theme:**
    *   **Backgrounds:** Predominantly light (e.g., off-white, very light gray).
    *   **Text:** Dark grays for primary text, lighter grays for secondary text.
    *   **Accents:** Brand accent color for interactive elements.
    *   **UI Elements:** Subtle shadows and borders for depth.
*   **Dark Theme:**
    *   **Backgrounds:** Predominantly dark (e.g., deep charcoal, dark blue-gray).
    *   **Text:** Light grays and whites for primary text, slightly darker grays for secondary text.
    *   **Accents:** Brand accent color for interactive elements, ensuring sufficient contrast.
    *   **UI Elements:** Minimalist design with focus on content, subtle use of borders or very dark shadows.

#### **3.3. Typography**

*   **Font Family:** A clean, modern, and highly readable sans-serif font family will be chosen for all text. Consideration will be given to fonts that convey professionalism and clarity.
*   **Font Sizes:** A consistent typographic scale will be used across the application for headings, body text, and smaller elements, ensuring hierarchy and readability.
*   **Line Height & Spacing:** Optimized for comfortable reading.

#### **3.4. Iconography**

*   **Style:** Icons will be minimalist, line-based or filled, and consistent in style (e.g., Material Design icons, Feather icons).
*   **Usage:** Used sparingly to enhance navigation, indicate actions (e.g., send, theme toggle), and visually represent concepts (e.g., chat, settings).

#### **3.5. Spacing & Layout**

*   **Grid System:** A consistent spacing and grid system will be applied to ensure proper alignment, visual balance, and responsiveness across different screen sizes.
*   **White Space:** Ample white space will be used to reduce cognitive load and improve readability.

#### **3.6. Animations**

*   **Purposeful Animations:** Animations (Framer Motion, GSAP) will be used purposefully to enhance user experience, provide feedback, and guide attention, rather than for mere decoration.
*   **Subtle Transitions:** Smooth transitions for page changes, component mounts/unmounts, and state changes.
*   **Micro-interactions:** Subtle animations for button hovers, input focus, and message sending/receiving to provide delightful feedback.

### **4. Accessibility Considerations**

Ensuring kanoon.ai is accessible to all users is a core principle of its design. The following considerations will be integrated throughout the development process:

*   **Semantic HTML:** Proper use of HTML5 semantic elements (e.g., `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`) to provide meaningful structure for assistive technologies.
*   **Keyboard Navigation:** All interactive elements (buttons, links, form fields) will be fully navigable and operable using only the keyboard. Focus indicators will be clearly visible.
*   **ARIA Attributes:** Appropriate WAI-ARIA attributes will be used where native HTML semantics are insufficient to convey meaning or state to assistive technologies (e.g., `aria-label`, `aria-describedby`, `aria-live` for dynamic content updates).
*   **Color Contrast:** All text and important UI elements will meet WCAG 2.1 AA contrast ratios for both light and dark themes to ensure readability for users with low vision or color blindness.
*   **Focus Management:** Careful management of focus, especially for modal dialogs, dynamic content updates, and navigation changes, to ensure a logical and predictable user experience for keyboard and screen reader users.
*   **Alternative Text for Images:** All meaningful images will have descriptive `alt` text. Decorative images will have empty `alt` attributes.
*   **Form Labels & Validation:** All form fields will have associated `<label>` elements. Clear and accessible error messages will be provided for form validation.
*   **Responsive Design for Accessibility:** Beyond visual responsiveness, the layout and content flow will remain logical and usable on smaller screens for users who zoom or use screen readers.
*   **Motion & Animation:** Animations will be designed to be subtle and non-distracting. Users will have the option to reduce motion (e.g., via `prefers-reduced-motion` media query) if animations are deemed too intense.
