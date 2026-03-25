export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  nda?: boolean;
  slug: string;
  gridTitle: string;
  gridDescription: string;
  overview: string;
  contribution: string;
  team: string;
  year: string;
  fullBleedImage: string;
  process: string;
  process2: string;
  images: string[];
  outcome: string;
  metaItems?: { label: string; value: string }[];
  process2Blocks?: { type: 'h2' | 'h3' | 'p'; html: string }[];
  outcomeBlocks?: { type: 'h2' | 'h3' | 'p'; html: string }[];
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
const loremShort = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const loremShort2 = 'Phasellus euismod nisl eget ultricies tincidunt. Nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod nisl eget ultricies tincidunt, nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.';
const placeholderImages = [
  '/images/placeholder-1.jpg',
  '/images/placeholder-2.jpg',
  '/images/placeholder-3.jpg',
  '/images/placeholder-4.jpg',
  '/images/placeholder-5.jpg',
  '/images/placeholder-6.jpg',
];

export const projects: Project[] = [
  {
    title: 'LearnPath AI: Designing for the Generation That Learns Differently',
    subtitle: 'Adaptive learning platform',
    description: 'Designed an AI-powered adaptive learning platform that personalises educational content to individual learners. Led end-to-end UX from research to high-fidelity prototypes.',
    tags: ['UX Design', 'Design System', 'AI', 'B2B'],
    image: '/images/projects/card-learnpath.png',
    nda: true,
    slug: 'learnpath-ai',
    gridTitle: 'LearnPath — AI',
    gridDescription: 'Adaptive learning platform',
    overview: `Nearly half of people studying for professional certifications still fail. Not because they lack motivation — but because the tools they're using were designed for a different generation.\n\nWhen I joined the project, that was the core tension I was handed: a Gen Z workforce entering professional life at scale, being forced to learn through platforms built for how Millennials studied in 2012. Dense text, linear modules, no feedback loop, no personalization. A system that delivers content and calls it learning.\n\nGen Z didn't grow up with that. They grew up with TikTok's algorithm knowing exactly what they want before they do. With Spotify's Discover Weekly feeling more personally curated than anything a teacher ever handed them. With YouTube where you can slow down, speed up, skip, rewind, and learn at your own pace with a creator who actually makes it interesting. The standard LMS was never going to hold their attention — and honestly, it shouldn't have to.\n\nThat was the real design brief: stop trying to make Gen Z fit the old model, and build something that actually fits them.`,
    contribution: 'UX Design, Interaction Design, Prototyping',
    team: '2 Designers, 3 Engineers',
    year: '2025',
    metaItems: [
      { label: 'Year', value: '2025' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Platform', value: 'Web-first, with mobile and AR/VR on the roadmap' },
    ],
    fullBleedImage: '/images/projects/learnpath-asset-0.png',
    process: `My starting point was understanding who we were designing for. The platform targets young professionals balancing work, study, and limited time — primarily Gen Z and Millennials, whose learning habits are radically different from traditional audiences. They seek short, interactive content, expect instant feedback, and prefer mobile-first experiences that feel intuitive and rewarding.\n\nResearch confirmed what we already sensed:\n• Over half of these learners use mobile devices as their main study tool.\n• They value clarity and visible progress — they want to know where they stand, what's next, and how close they are to mastery.\n\nThat insight became the backbone of the adaptive system and the visual language of progress across the platform.`,
    process2: loremShort2,
    images: [
      '/images/projects/learnpath-asset-1.png',
      '/images/projects/learnpath-asset-2.png',
      '/images/projects/learnpath-asset-3.png',
      '/images/projects/learnpath-asset-5.png',
      '/images/projects/learnpath-asset-6.png',
      '/images/projects/learnpath-asset-7.png',
      '/images/projects/learnpath-asset-8.png',
    ],
    outcome: `What Prototyping Taught Me\n\nUsability testing across low-fidelity prototypes surfaced two critical insights. Learners struggled to understand why content was changing — even when the adaptive logic worked correctly, users felt uncertain. This pushed me to add contextual cues like "Recommended based on your quiz performance" that explained the AI's reasoning in the moment. The baseline assessment was equally make-or-break: if it felt too long or clinical, users disengaged before the experience began. We iterated three times — cutting from 20 questions to 12, rewriting the framing, and adding a progress indicator — until beta users described it as "finally a study experience that feels alive and personal."\n\nWhat This Project Taught Me as a Designer\n\nDesigning for motivation proved as complex as designing for information architecture — it draws from behavioral psychology, game design, and emotional storytelling, not just classic UX. The bigger lesson was about AI transparency: hiding the machine felt seamless in theory, but in an adaptive learning context, making the AI's decisions legible was the difference between a platform people trusted and one they abandoned. That principle, paired with the reality that Gen Z employees simply won't tolerate enterprise tools that feel like a step backward from the apps they live in, shaped every decision I made on this project.`,
    process2Blocks: [
      { type: 'h2', html: 'Designing the Experience: The Decisions That Mattered' },

      { type: 'h3', html: 'Smart Onboarding — Making the First 5 Minutes Count' },
      { type: 'p', html: 'Onboarding in most platforms is a formality. You set a username, pick a course, and suddenly you\'re inside a 40-module curriculum with no idea where to start.' },
      { type: 'p', html: 'I wanted our onboarding to feel like the first meaningful moment of the learning experience — not a registration form.' },
      { type: 'p', html: 'The approach was deliberately minimal at the surface but intelligent underneath. Two questions: <em>What\'s your goal?</em> and <em>When do you plan to reach it?</em> That\'s all the learner sees. But behind those two answers, the AI already has enough to start shaping a personalized schedule, set a study cadence, and calibrate expectations.' },
      { type: 'p', html: 'Then comes the baseline assessment — a short knowledge check across the core domains of their target certification. This wasn\'t busywork. The data from this moment powers the entire adaptive logic: where to start them, what to reinforce early, and which modules they can move through quickly. I designed this to feel more like a diagnostic conversation than a test — low stakes visually, high value functionally.' },
      { type: 'p', html: 'The design principle here: <strong>front-load intelligence, not complexity.</strong> The learner should feel welcomed and understood, not interrogated.' },

      { type: 'h3', html: 'The Adaptive Path — Making AI Visible' },
      { type: 'p', html: 'The hardest UX problem in adaptive systems is trust. If the platform silently changes what you\'re learning and you don\'t understand why, it feels arbitrary and unsettling. Learners need to see and understand the logic — <em>this module was prioritized because your assessment showed a gap here.</em>' },
      { type: 'p', html: 'I worked hard on making the adaptive roadmap legible. The visual metaphor we settled on was a living path — not a locked linear list, but a dynamic structure where upcoming modules clearly responded to performance in previous ones. Think of it as a GPS that reroutes as you drive, but shows you the new route instead of just changing it silently.' },
      { type: 'p', html: 'This was also a direct response to one of the biggest complaints I saw in research about adaptive platforms: black-box syndrome. Learners disengage when they feel the system is doing something <em>to</em> them rather than <em>with</em> them. Transparency about the AI\'s reasoning wasn\'t just good UX — it was essential for maintaining learner agency and motivation.' },

      { type: 'h3', html: 'The Motivation Dashboard — Progress as a Design Element' },
      { type: 'p', html: 'There\'s a meaningful difference between a dashboard that shows your data and a dashboard that makes you feel something about your data.' },
      { type: 'p', html: 'Most LMS dashboards are reporting tools — completion percentages, time logged, quiz scores. Useful for the L&D manager. Not particularly motivating for the learner.' },
      { type: 'p', html: 'I designed the dashboard around <em>readiness</em> rather than completion. The distinction matters psychologically. Completion is backward-looking — you\'re measuring how much of the course you\'ve consumed. Readiness is forward-looking — it\'s a live estimate of how prepared you are to succeed at the actual exam or task. That framing shifts the emotional experience entirely.' },
      { type: 'p', html: 'I drew heavily from how health apps like Oura or Whoop present personal metrics — not as raw numbers, but as interpreted signals that push you toward action. <em>Your weak area is Domain 3 — here\'s a 12-minute session that targets it.</em> Small wins, visible momentum, a sense that today\'s effort matters.' },

      { type: 'h3', html: 'MentorBot — The AI That Doesn\'t Feel Like a Chatbot' },
      { type: 'p', html: 'The AI assistant was one of the features I was most careful about. Chatbots have earned their bad reputation — they\'re either useless or uncanny, and learners are quick to abandon them.' },
      { type: 'p', html: 'The design intent for MentorBot was specificity. It doesn\'t answer generic questions — it knows which module you\'re in, what you got wrong in your last quiz, and what your study history looks like. The interaction design focused on proactive nudges over reactive Q&A. Instead of waiting to be asked, MentorBot surfaces at the right moment: after a difficult quiz, before a long gap in study activity, when a learner is about to enter their toughest domain.' },
      { type: 'p', html: 'The language and tone design was deliberate — warm and direct, never corporate, never over-explaining. The aim was to feel like a knowledgeable study partner, not a help desk.' },
    ],
  },
  {
    title: 'Rolla Health — Making Sense of the Body Without Losing the Person',
    subtitle: 'Wellness & habit tracking app',
    description: 'Full product design for a wellness and habit-tracking mobile app — from zero to launch. Defined the visual language, design system, and core user flows for iOS and Android.',
    tags: ['Mobile', 'iOS', 'Android', 'Design System'],
    image: '/images/projects/card-rolla.png',
    liveUrl: '#',
    slug: 'rolla-health',
    gridTitle: 'Rolla Health',
    gridDescription: 'Wellness & habit tracking app',
    overview: `When I joined Rolla, there was no documentation, no design system applied to health, and the brief was essentially: "We want a health module. Make it good."\n\nThat's both the most exciting and most dangerous kind of brief you can get as a designer. Exciting because the canvas is blank. Dangerous because without constraints, you can easily build something technically impressive that nobody actually uses.\n\nHealth tech is a crowded space with a well-documented failure pattern: products that drown users in data while delivering zero behavioral change. I'd seen it across the market — Garmin's powerful-but-overwhelming dashboards, the endless graphs that look great in screenshots but confuse people in real life. The question I kept coming back to was: what actually makes someone care about their health metrics tomorrow, not just on day one?\n\nThat question became the lens for everything that followed.`,
    contribution: 'UX Design, Interaction Design, Prototyping',
    team: '1 Designer, 1 PM, 3 Engineers',
    year: '2023/2024',
    fullBleedImage: '/images/projects/rolla-fullbleed.jpg',
    process2Blocks: [
      { type: 'h2', html: 'Who We Were Designing For' },
      { type: 'p', html: 'Three types of people would use this module, and they have almost nothing in common in terms of what they need from it.' },
      { type: 'p', html: '<strong>Sarah</strong> is 25, a student, new to all of this. She doesn\'t know what HRV means and she shouldn\'t have to. She wants to feel like she\'s making progress without needing a manual. If the first week overwhelms her, she\'s gone.' },
      { type: 'p', html: '<strong>Mark</strong> is 35, has good intentions but a packed calendar. He\'ll engage if it\'s fast and clearly useful. He needs the app to surface insights for him rather than expecting him to go looking. He\'s the kind of user who checks in during his morning commute and wants something actionable in under thirty seconds.' },
      { type: 'p', html: '<strong>David</strong> is 45 and a fitness trainer. He wants the depth. He\'ll dig into recovery data, adjust training intensity based on HRV trends, and feel frustrated if the app treats him like a beginner.' },
      { type: 'p', html: 'Designing for all three simultaneously is one of the hardest things in consumer health tech. The wrong move is to split the difference and build something mediocre for everyone. The right move is to design progressive disclosure — a surface that\'s clean and motivating by default, with depth available for those who want it.' },

      { type: 'h2', html: 'The Design Decisions That Actually Mattered' },
      { type: 'p', html: '<strong>The Health Score</strong> was the central bet. Instead of presenting raw numbers, I worked with the team to develop a unified score that reflected daily habits — a single, glanceable signal that your day is trending in the right direction or not. The goal was to make the complex simple without making it simplistic. A score that someone could understand in two seconds but that was backed by real data.' },
      { type: 'p', html: 'This mirrors what Apple Health attempted with their Activity Rings, but I wanted ours to be more holistic — incorporating sleep quality, heart rate patterns, and activity together rather than tracking them as separate isolated metrics.' },
      { type: 'p', html: '<strong>Gamification with purpose</strong> was the second major thread. Leaderboards and challenges aren\'t new ideas. The question is whether they serve the user\'s actual goals or just create anxiety. I focused on challenges that were grounded in health behaviors rather than raw performance, so that a recovering user or a complete beginner could still participate meaningfully. Competing on consistency is more sustainable than competing on raw output.' },
      { type: 'p', html: '<strong>The band integration</strong> had to be invisible. The worst thing a wearable integration can do is remind you it exists through friction — failed syncs, loading states, mismatched data. The design had to make the hardware disappear and let the data feel like it was just... there.' },

      { type: 'h2', html: 'Working Inside a Startup' },
      { type: 'p', html: 'Something worth naming directly: Rolla is a startup. Roadmaps shifted. Team sizes changed. Features got deprioritized and reprioritized. There were weeks where writing documentation was the most valuable thing I could do because it was the only thing keeping institutional knowledge alive.' },
      { type: 'p', html: 'I ran the full scope — research, UX writing, wireframes, high-fidelity design, stakeholder meetings, and enough documentation to make future designers\' lives easier. In a larger organization, those responsibilities would be split across multiple roles. Here, they weren\'t.' },
      { type: 'p', html: 'That context matters for anyone reading this as a founder or hiring manager: a designer who can operate like this is not just a "visual" asset. They\'re a product thinker who can hold the whole picture when the organization doesn\'t yet have the structure to do it for them.' },
    ],
    process: `Understanding the Market (and What It Gets Wrong)\n\nBefore touching a wireframe, I spent weeks actually using the competition — Garmin, Fitbit, Oura, Withings — alongside a small group of colleagues and beta testers. The data fragmentation was real and irritating: steps from Garmin, sleep from Oura, weight from Withings, none of it talking to each other cleanly. Users were doing mental math across three apps just to understand their own day. That's not a technical failure — it's a product philosophy failure.\n\nFitbit got one thing right that others didn't: streaks and simple visual feedback work. People aren't motivated by raw HRV data; they're motivated by a ring that's almost full. Garmin, on the other hand, is a masterclass in what happens when you design for your most advanced 5% of users and ignore everyone else. I documented both as design constraints: whatever we built had to work for a first-time tracker and someone who checks their recovery scores every morning.`,
    process2: loremShort2,
    images: [
      '/images/projects/rolla-asset-4.jpeg',
      '/images/projects/rolla-asset-5.jpeg',
      '/images/projects/rolla-asset-6.jpeg',
      '/images/projects/rolla-asset-7.jpeg',
      '/images/projects/rolla-asset-8.jpeg',
      '/images/projects/rolla-asset-9.jpeg',
    ],
    outcome: lorem,
    outcomeBlocks: [
      { type: 'h2', html: 'Working Inside a Startup' },
      { type: 'p', html: 'Something worth naming directly: Rolla is a startup. Roadmaps shifted. Team sizes changed. Features got deprioritized and reprioritized. There were weeks where writing documentation was the most valuable thing I could do because it was the only thing keeping institutional knowledge alive.' },
      { type: 'p', html: 'I ran the full scope — research, UX writing, wireframes, high-fidelity design, stakeholder meetings, and enough documentation to make future designers\' lives easier. In a larger organization, those responsibilities would be split across multiple roles. Here, they weren\'t.' },
      { type: 'p', html: 'That context matters for anyone reading this as a founder or hiring manager: a designer who can operate like this is not just a "visual" asset. They\'re a product thinker who can hold the whole picture when the organization doesn\'t yet have the structure to do it for them.' },

      { type: 'h2', html: 'Where It\'s Going' },
      { type: 'p', html: 'The module launched as the foundation of something larger. The next iterations will layer in AI-powered insights, more granular personalization, and deeper behavioral nudges informed by real usage data.' },
      { type: 'p', html: 'The KPIs I care about most aren\'t installs or screen time. They\'re goal achievement rate — are users actually hitting the health targets they set? — and weekly retention, which tells you whether the product earned its place in someone\'s routine or is quietly being ignored.' },
      { type: 'p', html: 'Health tech succeeds or fails on one question: does it change behavior, or does it just track it? I designed Rolla Health to push toward the first answer. The data will tell us how close we got.' },
    ],
  },
  {
    title: 'QuizCraft: Designing AI-Powered Learning Experiences',
    subtitle: 'Interactive learning conversion',
    description: 'Redesigned the core quiz and content creation flow to improve conversion and engagement. Conducted usability testing and iterated on findings to reduce friction significantly.',
    tags: ['UX Research', 'Interaction Design', 'Prototyping'],
    image: '/images/projects/card-quizcraft.png',
    liveUrl: '#',
    slug: 'quizcraft-ux',
    gridTitle: 'QuizCraft UX',
    gridDescription: 'Interactive learning conversion',
    overview: `QuizCraft is an innovative educational app that transforms static study materials into interactive, AI-generated quizzes. Utilizing advanced artificial intelligence, QuizCraft analyzes texts and images from academic resources to create personalized quizzes tailored to the learning needs of students and scholars. Users have the flexibility to select their preferred question types, such as multiple-choice or other formats, allowing them to customize their learning experience according to their study preferences. Designed for learners at all academic levels, QuizCraft simplifies the study process, making it more engaging and effective for users whether they are preparing for exams or exploring new academic topics.`,
    contribution: 'UX Design, Interaction Design, Prototyping',
    team: 'Product Designer',
    year: '2024',
    fullBleedImage: '/images/projects/quizcraft-asset-0.png',
    process: `Every designer has that one problem that just won't leave them alone. For me, it was watching students burn out not because they lacked discipline, but because their study tools were fundamentally broken — flashcards, PDFs, highlighters. The ritual hadn't changed in decades, and the apps trying to modernize it were mostly doing the same thing with a shinier coat of paint.\n\nI asked myself: what if studying felt less like a chore and more like a conversation with the material? That question became QuizCraft — an AI-powered app that transforms any academic text or image into an interactive, personalized quiz. Not a quiz someone else built. Yours.\n\nStarting with the Problem, Not the Solution\n\nBefore touching a single wireframe, I ran interviews and desk research to make sure I was solving a real problem. The same friction points kept surfacing: manual note-taking was eating hours, existing quiz apps were rigid with no room to adapt, and there was no feedback loop keeping students engaged beyond day one.\n\nThat last one hit me hardest. Motivation is a design problem. If an app doesn't reward engagement, users don't just stop using it — they stop believing it can help them. That became my north star for the entire project.`,
    process2Blocks: [
      { type: 'h2', html: 'Understanding the Competitive Landscape' },
      { type: 'p', html: 'I benchmarked Eduzen, QuizRise, and ProProfs — studying them not just as products but as experiences. Three gaps kept surfacing: meaningful AI integration (most were using AI as a buzzword, not a feature), real quiz personalization, and any form of gamification that could actually sustain engagement.' },
      { type: 'p', html: 'These weren\'t small gaps. They were the space between the product and the user — and that\'s where I saw QuizCraft\'s opportunity.' },

      { type: 'h2', html: 'Designing for Real People, Not Hypothetical Users' },
      { type: 'p', html: 'I built three personas as genuine anchors for every decision. Alex, the independent learner, pushed me to design depth — custom quizzes, performance analytics, fine-grained control. Emily, the social learner, made me fight for collaborative modes and gamified paths. Olivia, the traditional student, was the reason I kept pushing for simpler onboarding and clearer UI language.' },
      { type: 'p', html: 'Designing for all three at once forced me to hold two things in tension: simplicity for the newcomer and depth for the power user. It\'s one of the hardest balancing acts in product design — and it made the end result far stronger than designing for a single ideal user would have.' },

      { type: 'h2', html: 'Deciding What to Build First' },
      { type: 'p', html: 'With more feature ideas than any MVP could hold, I used the RICE framework — Reach, Impact, Confidence, Effort — to make decisions I could defend. Top priorities were clear: AI-generated quizzes, instant feedback, progress tracking, and a frictionless interface. Mid-tier features like gamification and spaced repetition earned their spot as the key drivers of long-term retention.' },
      { type: 'p', html: 'Ambitious ideas like AR/VR and LMS integrations were deprioritized — not abandoned, but honestly evaluated. A beautiful feature that takes months to build and barely moves the needle is not a good design decision. This is where product thinking and design thinking have to work together.' },

      { type: 'h2', html: 'Mapping the Journey from Curious to Committed' },
      { type: 'p', html: 'I mapped the full experience for each persona — from first discovery all the way to loyal, habitual use. What struck me was how much shared emotional territory existed across three very different people: a confident onboarding, an "aha" moment with the AI, reasons to go deeper, and then — critically — a reason to stay.' },
      { type: 'p', html: 'The user flows that came out of this weren\'t just diagrams. They were a blueprint for screen sequencing, the timing of prompts, and the moments where the product needed to either surprise the user or simply get out of their way.' },
    ],
    images: [
      '/images/projects/quizcraft-asset-5.png',
      '/images/projects/quizcraft-asset-6.png',
      '/images/projects/quizcraft-asset-7.png',
      '/images/projects/quizcraft-asset-8.png',
      '/images/projects/quizcraft-asset-9.png',
      '/images/projects/quizcraft-asset-10.png',
      '/images/projects/quizcraft-asset-11.png',
    ],
    outcomeBlocks: [
      { type: 'h2', html: 'What Came Out the Other Side' },
      { type: 'p', html: 'The low-fidelity prototype validated that core flows were intuitive and the value proposition landed clearly. One piece I was particularly proud of was the admin dashboard — a late addition that addressed the needs of educators and platform managers. For anyone thinking about EdTech adoption at an institutional level, that layer of oversight and control matters enormously.' },
      { type: 'p', html: 'The prioritized feature set addressed both functional needs — quiz generation, analytics — and the emotional drivers of personalization and motivation. The result was a product that felt considered at every level, not just built.' },

      { type: 'h2', html: 'What This Project Taught Me' },
      { type: 'p', html: 'QuizCraft reinforced something I keep coming back to: <strong>engagement is not a feature, it\'s an architecture.</strong> You don\'t solve for retention by adding a badge system at the end — you design for it from the first frame of your journey map. Frameworks like RICE aren\'t creativity killers; they\'re clarity tools that help you make the case for your decisions to stakeholders, developers, and yourself.' },
      { type: 'p', html: 'Most personally: designing for Alex, Emily, and Olivia taught me that the best design isn\'t the one that works perfectly for one ideal user. It\'s the one that holds together across real human diversity — meeting people where they are, and guiding them toward where they want to go.' },
    ],
  },
  {
    title: 'Photon Therapeutics — Designing for a World Where a Scan Could Change Everything',
    subtitle: 'Global medical device launch',
    description: 'Led design for the global product launch of a medical device — website, app interfaces, and marketing materials aligned to regulatory and accessibility standards.',
    tags: ['Product Design', 'Medical', 'Web', 'Accessibility'],
    image: '/images/projects/card-photon.png',
    liveUrl: '#',
    slug: 'photon-therapeutics',
    gridTitle: 'Photon Therapeutics',
    gridDescription: 'Global medical device launch',
    overview: `Photon Therapeutics had something genuinely rare — a medical device capable of detecting serious health conditions through a simple eye scan, serving both human healthcare professionals and veterinarians. My job wasn't to design the device. My job was to design everything around it.\n\nIn health-tech, the hardware gets the attention and the software is treated as an afterthought. But for a device being deployed across hospitals, clinics, and vet practices in up to 11 global markets, the portal is the product experience. If activation is confusing, the device doesn't get used. That framing shaped every decision I made.`,
    contribution: 'End-to-end UX, portal design, sales flow, device activation system',
    team: 'Product Designer',
    year: '2022–2023',
    fullBleedImage: '/images/projects/photon-asset-0.png',
    images: [
      '/images/projects/photon-asset-2.jpeg',
      '/images/projects/photon-asset-3.jpeg',
      '/images/projects/photon-asset-4.jpeg',
      '/images/projects/photon-asset-5.jpeg',
      '/images/projects/photon-asset-6.jpeg',
      '/images/projects/photon-asset-7.jpeg',
    ],
    process: `Understanding the Complexity Before Touching Figma\n\nThe business model alone required careful thought — direct and distributor sales channels, subscriptions and pay-as-you-go credits, all flowing through one portal. There were also two distinct user types: a Standard User who just needs their assigned device to work, and an Organization User managing a fleet of devices and a team of people. Getting that permission model right mattered. In health-tech, it's not just a UX concern — it's a compliance one.`,
    process2Blocks: [
      { type: 'h2', html: 'Research: The Medical Context You Can\'t Assume' },
      { type: 'p', html: 'Health-tech is a sector where assumptions are expensive. I conducted user interviews with medical technicians and hospital procurement managers, and one insight stayed with me: complicated activation processes don\'t just frustrate people — they delay the deployment of critical diagnostic tools. That\'s not a UX problem, that\'s a clinical operations problem.' },
      { type: 'p', html: 'I also ran a competitor analysis, looking specifically at how established players handle the complexities of device management and subscription infrastructure. Philips Healthcare gave me a mental model for fleet management at scale. ICU Medical\'s approach to credit purchasing showed me how to make pay-as-you-go feel predictable rather than anxious. Agiliti\'s multi-role admin system was the clearest example I found of handling admin vs. standard user permissions without burying either in menus.' },
      { type: 'p', html: 'The pattern across all of them was the same: the best medical portals don\'t try to be clever. They are clear, structured, and don\'t make the user think about the system — they let them focus on the work.' },

      { type: 'h2', html: 'The Design Thinking Behind the Flow' },
      { type: 'p', html: 'The core onboarding flow I designed worked like this: purchase the device → buy credits → scan the device\'s QR code → the admin system links it → a unique QR code is generated → scan it back into the device to activate. Done.' },
      { type: 'p', html: 'The QR code mechanic was a deliberate choice, not a default one. It creates a physical-digital handshake that\'s fast, familiar (QR codes had become second nature post-pandemic), and removes the risk of manual entry errors — which, in a medical context, you want to eliminate wherever possible. Cook Medical had validated a similar approach; I wasn\'t reinventing something, I was adapting what already worked and making it fit Photon\'s specific model.' },
      { type: 'p', html: 'Crucially, I integrated credit purchasing <em>directly into</em> the activation flow rather than making it a separate step. This is the kind of detail that looks small on a flow diagram but matters enormously in practice. A hospital technician receiving a new device shouldn\'t have to go back to a dashboard, find a billing section, purchase credits, then come back to activate. That\'s three opportunities to drop off, get confused, or escalate to support.' },
      { type: 'p', html: 'Collapsing those steps was a design decision rooted in the research. And it\'s the kind of thing that never makes the headline of a case study, but is exactly what separates a thoughtful designer from someone who just makes things look nice.' },

      { type: 'h2', html: 'The Portal Itself' },
      { type: 'p', html: 'The logged-in area was designed around the org structure — because that\'s how hospitals actually work. An organization like Surrey Memorial Hospital isn\'t a collection of individual users; it\'s a hierarchy with accountability. The portal reflected that: admins could add and remove users, reassign devices, monitor subscription statuses, and view purchase history. Standard users got a clean, focused view relevant only to their own device and usage.' },
      { type: 'p', html: 'The dashboard was built to make the critical information visible at a glance — device status, credit levels, assigned users — without overwhelming the screen. In health-tech, information overload is a real risk. Clinicians and procurement staff are busy people operating in high-stakes environments. The design had to respect that.' },
    ],
    outcomeBlocks: [
      { type: 'h2', html: 'What This Was Really About' },
      { type: 'p', html: 'Looking back, the most interesting design challenge on this project wasn\'t any single feature — it was the balance between two very different user contexts happening on the same platform. A hospital admin in London managing 40 devices across departments has radically different needs from a veterinarian in a single-practice clinic who just needs one device to work, reliably, every time.' },
      { type: 'p', html: 'Designing for that range — without creating two separate products — required a clear information architecture, a well-thought permission model, and a lot of discipline about what <em>not</em> to show to each user type.' },
      { type: 'p', html: 'The broader health-tech market is full of portals that try to do everything and end up doing nothing well. Portals that were clearly built by engineers for engineers, or by product managers who\'d never watched a medical professional actually use the software. The clinical users I spoke with during research weren\'t asking for more features. They were asking to stop having to think about the software at all.' },
      { type: 'p', html: 'That was the north star for this project. And I think we got close.' },
    ],
  },
  {
    title: 'Grow Pharma\'s Doctors Portal: A Secure, User-Centric Platform for Medical Cannabis Education & Prescription Management',
    subtitle: 'Cannabis education platform',
    description: 'Designed a cannabis education and patient-guidance platform, navigating complex regulatory constraints while creating a clear, trustworthy user experience.',
    tags: ['UX Design', 'Content Strategy', 'Web'],
    image: '/images/projects/card-grow-pharma.png',
    liveUrl: '#',
    slug: 'grow-pharma',
    gridTitle: 'Grow Pharma',
    gridDescription: 'Cannabis education platform',
    overview: `In 2021, medical cannabis in the UK was legal but barely understood. It had been prescribable on the NHS since 2018, yet the medical community remained cautious—partly because of stigma, but mostly because there was no reliable, centralised source of information for clinicians. Doctors who wanted to learn and prescribe were largely left to figure it out on their own.\n\nGrow Pharma, one of the UK's leading medical cannabis distributors, approached this problem head-on. They had the products. They had the clinical partnerships. What they lacked was a platform to connect both sides—a place where a GP or specialist could log in, understand the product landscape, manage their patients, and feel confident that what they were doing was compliant and evidence-backed.\n\nThat's where I came in.\n\n"The brief wasn't just 'build a portal.' It was: help doctors trust a category they've been taught to be suspicious of."\n\nThis was a project that required me to hold two things at once: designing for a highly regulated, risk-averse user group, while building something modern and intuitive enough that it would actually get used. The product had to feel credible before it could feel useful.`,
    contribution: 'User interviews · Surveys · Journey mapping · Wireframing · Prototyping · Usability testing · WCAG accessibility',
    team: '1 Product Designer, 1 PM, 6 Engineers',
    year: '2021–2022',
    metaItems: [
      { label: 'Year', value: '2021–2022' },
      { label: 'Team', value: '1 Product Designer, 1 PM, 6 Engineers' },
      { label: 'Tools & Methods', value: 'User interviews · Surveys · Journey mapping · Wireframing · Prototyping · Usability testing · WCAG accessibility' },
    ],
    fullBleedImage: '/images/projects/growpharma-asset-0.jpeg',
    process: `Why This Problem Was Different\n\nDesigning for doctors isn't like designing for consumers. They're time-starved, professionally accountable, and they abandon tools that waste their time without looking back. Layer in the specific context of medical cannabis — still stigmatized in the UK, regulatory landscape dense, clinical evidence scattered — and you had professionals who wanted to do the right thing but didn't feel supported enough to act confidently.\n\nLooking at health-tech products already on the market — Babylon Health, Accurx, NHS-facing tools — I noticed they were built around efficiency but rarely around confidence. For a product in a regulatory grey zone, that wasn't going to be enough. This platform needed to build trust at every step.\n\nThe Team and My Role\n\nThe squad was lean: one PM, me as the sole product designer, and six engineers. That ratio meant I was wearing multiple hats — researcher, interaction designer, visual designer, documentation lead — while staying closely aligned with engineering from discovery to launch.\n\nMy contributions covered the full lifecycle: user research, product design, documentation, and user testing. No handoff culture. I was in the room for all of it.`,
    process2Blocks: [
      { type: 'h2', html: 'Starting With the Right Questions' },
      { type: 'p', html: 'Before I opened Figma, I spent meaningful time in discovery. I needed to understand not just what doctors needed to do on this platform, but how they currently thought about medical cannabis, and where their anxiety lived.' },
      { type: 'p', html: 'I conducted interviews and surveys with healthcare professionals who had varying levels of familiarity with cannabis-based medicinal products (CBMPs). What I found shaped everything that followed:' },
      { type: 'p', html: '<strong>Doctors weren\'t uninformed — they were under-confident.</strong> Most had encountered patients asking about medical cannabis, but felt uncertain about which products were appropriate, what the evidence said, and how to prescribe compliantly. This wasn\'t an information gap so much as a trust gap. They needed a platform that felt authoritative and professional, not like a startup trying to push products.' },
      { type: 'p', html: '<strong>The prescription process felt legally and administratively intimidating.</strong> With no unified workflow, doctors were piecing things together from emails, PDFs, and phone calls. One wrong step in the regulatory chain felt career-threatening.' },
      { type: 'p', html: '<strong>Communication with Grow Pharma was slow and impersonal.</strong> Doctors wanted responsiveness — quick answers to clinical questions, fast access to updated product data — not a support ticket queue.' },
      { type: 'p', html: 'These insights told me something important: this platform needed to do more than organize information. It needed to reduce perceived risk at every step.' },

      { type: 'h2', html: 'Mapping Where Doctors Got Stuck' },
      { type: 'p', html: 'With the research in hand, I mapped the full doctor journey — from first login to completed prescription — and marked every moment where friction, doubt, or cognitive overload appeared.' },
      { type: 'p', html: 'The friction hotspots were predictable once I saw them clearly:<br><br>· Searching for reliable, current clinical information required leaving the platform entirely<br>· There was no structured way to understand a patient\'s full cannabis prescription history<br>· Prescribing required navigating between multiple systems with no connecting thread<br>· If a doctor had a clinical question, there was no fast path to a human at Grow Pharma' },
      { type: 'p', html: 'The journey map became my north star. Every design decision I made from that point was evaluated against one question: does this reduce the distance between a doctor and a confident, compliant decision?' },

      { type: 'h2', html: 'Designing for Professionals Who Don\'t Have Time to Learn Your Interface' },
      { type: 'p', html: 'When I moved into wireframing, I made an early decision that drove the rest of the design: I was building a working tool, not an onboarding experience. The interface had to be instantly readable to someone opening it at 8am between patient appointments. No tutorials. No walkthroughs. Just clear, purposeful design.' },
      { type: 'p', html: 'The low-fidelity wireframes went through stakeholder review and feedback from early-access doctors before I moved to high-fidelity. The features that survived that process were the ones that earned their place:' },
      { type: 'p', html: '<strong>Interactive Dashboard</strong> — The home screen wasn\'t a vanity page. It was a functional hub: pending prescriptions, recent patient activity, flagged updates from Grow Pharma, and direct links into the most-used parts of the portal. I kept it scannable. No hero images. No marketing copy. Just what a doctor needed to know right now.' },
      { type: 'p', html: '<strong>Resource Library</strong> — A searchable, filterable collection of clinical studies, product brochures, prescribing guidelines, and regulatory documents. I designed this to feel closer to a medical database than a content marketing library — because that\'s how doctors would trust it. The tone of the content architecture mattered as much as the UI.' },
      { type: 'p', html: '<strong>Patient Management System</strong> — This was the emotional center of the platform for doctors. A structured, clean view of each patient\'s prescription history, current medications, and clinical notes. I paid particular attention to how information was displayed here — density without confusion, because doctors are trained to read dense information, but only when it\'s well-organized.' },
      { type: 'p', html: '<strong>Secure Messaging</strong> — A direct, compliant channel between doctors and Grow Pharma\'s clinical support team. I deliberately kept this simple. No threads, no tags, no features for features\' sake. Fast in, fast out.' },
      { type: 'p', html: '<strong>Video Appointment Integration</strong> — One of the harder challenges. Embedding secure video consultation capability directly in the portal meant coordinating closely with engineering on authentication, data handling, and regulatory compliance. From a design perspective, my job was to make scheduling and launching a call feel as low-friction as possible while ensuring every relevant compliance note was surfaced at the right moment — not buried in settings.' },
      { type: 'p', html: '<strong>Data Analytics & Reporting</strong> — Tools for doctors to see their own prescribing patterns and patient outcomes over time. This was partly about clinical value, and partly about Grow Pharma\'s engagement strategy: a doctor who can see the positive impact of their prescribing behavior is more confident and more likely to continue.' },
    ],
    images: [
      '/images/projects/growpharma-asset-1.jpeg',
      '/images/projects/growpharma-asset-2.jpeg',
      '/images/projects/growpharma-asset-3.jpeg',
      '/images/projects/growpharma-asset-4.jpeg',
      '/images/projects/growpharma-home.png',
      '/images/projects/growpharma-products-grid.png',
    ],
    outcomeBlocks: [
      { type: 'h2', html: 'Beyond the Portal' },
      { type: 'p', html: 'Alongside the portal, I also supported Grow Pharma with social media assets, video thumbnails, prescription receipt documents, packaging, and medical documentation. This meant building a visual language that had to work both in a regulated web application and in printed medical materials — consistency and credibility across every touchpoint.' },

      { type: 'h2', html: 'What the Platform Achieved' },
      { type: 'p', html: 'The Doctors Portal gave healthcare professionals a single trusted place for all clinical, regulatory, and product information relevant to medical cannabis prescribing in the UK. Engagement increased, administrative burden dropped, and data security was built in — not bolted on — so Grow Pharma could operate with confidence and doctors could trust it with patient data.' },

      { type: 'h2', html: 'What I Took Away' },
      { type: 'p', html: 'Designing in health-tech is a responsibility, not just a craft. The decisions I made had downstream effects on patients waiting for access to treatments that could meaningfully improve their lives — and that stakes level changes how you approach every trade-off. The best design work in regulated industries isn\'t invisible; it\'s confidence-building. Success is measured by how quickly someone can do what they came to do, and how safe they feel doing it.' },
      { type: 'p', html: 'Compliance, handled well, isn\'t a design obstacle — it\'s a trust signal. And user research in specialized fields only works if you\'re genuinely curious and disciplined enough to let the findings lead, even when they contradict what you assumed going in.' },
    ],
  },
];
