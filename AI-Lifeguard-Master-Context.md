# AI LifeGuard — Master Project Context

> **Living Single Source of Truth for the AI LifeGuard Hackathon Project**
>
> **Status:** Initial Product Context  
> **Version:** 0.1.0  
> **Project:** AI LifeGuard  
> **Tagline:** Your AI Emergency Doctor, Medical Record, Family Guardian, and Health Assistant — All in One.

---

## 1. Document Purpose

This document is the shared project context for the entire 4-person AI LifeGuard team.

It is intended to be usable by:

- Developers
- Designers
- AI coding assistants
- Product/planning tools
- ChatGPT
- Gemini
- Claude
- GitHub Copilot
- Cursor
- Other AI development tools

### Living-document rule

This file must be updated whenever there is a meaningful change to:

- Product scope
- Features
- UI/UX
- User flows
- Frontend architecture
- Backend architecture
- Database schema
- API contracts
- Request/response payloads
- AI prompts
- AI context logic
- Third-party integrations
- Environment variables
- Security
- Deployment
- Testing
- Team ownership
- Technical decisions

Never allow this document to become stale.

### Status vocabulary

Use these statuses consistently:

- `PROPOSED`
- `PLANNED`
- `IN DESIGN`
- `IN DEVELOPMENT`
- `IMPLEMENTED`
- `TESTED`
- `DEMO READY`
- `DEFERRED`
- `REMOVED`
- `DEPRECATED`
- `DECISION REQUIRED`
- `ASSUMPTION`

Do not mark something as implemented unless the team has actually implemented and verified it.

---

# 2. Product Overview

## Product Name

**AI LifeGuard**

## Tagline

> Your AI Emergency Doctor, Medical Record, Family Guardian, and Health Assistant — All in One.

## Product Vision

AI LifeGuard is envisioned as a comprehensive AI-powered emergency and personal healthcare platform.

Instead of solving only the immediate emergency, the product should support the user across:

```text
Before Emergency
        ↓
During Emergency
        ↓
After Emergency
        ↓
Recovery
        ↓
Long-Term Health
```

## Big Vision

The product concept combines ideas from:

```text
Google Maps
      +
Apple Health
      +
ChatGPT
      +
Medical Record
      +
Emergency SOS
      +
Doctor Assistant
      +
Insurance Assistant
      =
AI LifeGuard
```

The project should evolve beyond a generic AI chatbot into a context-aware personal emergency healthcare platform.

---

# 3. Core Differentiator

The most important differentiator is **context-aware AI**.

Most generic systems follow:

```text
User
 ↓
AI
 ↓
Generic Answer
```

AI LifeGuard should aim for:

```text
User Health Profile
        +
Medical History
        +
Current Symptoms
        +
Emergency Context
        +
Family History
        +
Medication History
        +
Allergies
        +
Previous Emergencies
        +
Location
        +
Nearby Healthcare
        ↓
Personalized Emergency Guidance
```

The AI should provide personalized informational guidance while clearly avoiding claims of definitive medical diagnosis.

---

# 4. Product Modes

AI LifeGuard has two primary experiences.

## 4.1 Guest Mode

### Purpose

Provide immediate assistance without forcing a user to create an account.

### Positioning

> Need emergency help right now? Get instant AI assistance without creating an account.

### Guest Features

- Emergency AI Assistant
- AI chat
- Voice interaction
- Image upload
- Emergency classification
- First-aid guidance
- Nearby hospitals
- Emergency helpline information
- Basic health Q&A
- Symptom guidance
- Medicine information
- First Aid Guide
- Hospital Finder
- Ambulance Finder
- Pharmacy Finder
- Blood Bank Finder
- Multi-language support
- Voice Assistant
- Emergency Simulation Mode

### Guest Limitations

Guest users do not have access to persistent personalized features such as:

- Medical History
- Personalized AI Advice
- Health Dashboard
- QR Medical Card
- Family Members
- Emergency Timeline
- AI Health Analytics
- SOS History
- Stored Reports

---

# 5. Personalized Mode

## Purpose

Provide context-aware assistance based on the user's stored healthcare information.

### Personalized Context

Potential information includes:

- Blood Group
- Age
- Height
- Weight
- BMI
- Allergies
- Diseases
- Surgeries
- Medicines
- Vaccinations
- Medical Reports
- X-rays
- MRI
- ECG
- Lab Reports
- Family Disease History
- Emergency Contacts
- Insurance Details
- Previous Emergencies
- Family Members

### Core Value

The AI can use the user's saved health context to make responses more personalized than a generic chatbot.

---

# 6. Guest vs Personalized Experience

| Feature | Guest | Personalized |
|---|---:|---:|
| AI Chat | ✅ | ✅ |
| Voice Chat | ✅ | ✅ |
| First Aid | ✅ | ✅ |
| Hospital Finder | ✅ | ✅ |
| Medicine Scanner | ✅ | ✅ |
| Medical History | ❌ | ✅ |
| Personalized Advice | ❌ | ✅ |
| Health Dashboard | ❌ | ✅ |
| QR Medical Card | ❌ | ✅ |
| Family Members | ❌ | ✅ |
| Emergency Timeline | ❌ | ✅ |
| AI Health Analytics | ❌ | ✅ |
| SOS History | ❌ | ✅ |
| Reports Storage | ❌ | ✅ |

---

# 7. Complete High-Level User Flow

```text
Open Website
      │
      ├───────────────┐
      │               │
      ▼               ▼
Continue as Guest   Login / Register
      │               │
      ▼               ▼
General AI        Personalized AI
      │               │
      ├── Emergency Chat
      ├── Symptom Checker
      ├── First Aid
      ├── Hospital Finder
      ├── Medicine Scanner
      ├── Voice Assistant
      └── Emergency Help
                      │
                      ├── Medical History
                      ├── Health Dashboard
                      ├── AI Health Twin
                      ├── Reports
                      ├── QR Medical Card
                      ├── Family Members
                      └── AI Health Insights
```

---

# 8. Complete Module Registry

## Module 1 — Complete Personal Health Vault

### Concept

A centralized personal health record.

Think of it as:

> Google Drive for Health

### Potential Information

- Name
- Blood Group
- Age
- Height
- Weight
- BMI
- Allergies
- Diseases
- Surgeries
- Medicines
- Vaccination
- Medical Reports
- X-rays
- MRI
- ECG
- Lab Reports
- Family Disease History
- Organ Donor Status
- Insurance Details

### Status

`PROPOSED`

---

## Module 2 — AI Health Twin

### Concept

Create a digital representation of the user's health context.

### Context

Potentially includes:

- Blood Pressure
- Diabetes
- Asthma
- Heart Disease
- Allergies
- Previous Surgery
- Current Medicines
- Family History

### Goal

Provide personalized advice instead of generic advice.

### Status

`PROPOSED`

---

## Module 3 — Emergency AI

### Core Flow

```text
Emergency Button
      ↓
Voice / Text / Image
      ↓
AI Emergency Detection
      ↓
Risk / Urgency Assessment
      ↓
Hospital Recommendation
      ↓
SOS / Emergency Contact
      ↓
First Aid Guidance
      ↓
Live Guidance
```

### Status

`PROPOSED`

---

## Module 4 — Smart Medical Card / Emergency Health Passport

Every personalized user can have an emergency QR card.

### Scan Result

Potential information:

- Name
- Blood Group
- Age
- Allergies
- Diseases
- Current Medicines
- Emergency Contacts
- Insurance
- Family Doctor

### Use Case

An ambulance or emergency responder could scan the QR to access essential emergency information.

### Status

`PROPOSED`

---

## Module 5 — Family Health Tree

One account can represent a family.

Potential members:

- Father
- Mother
- Brother
- Child
- Grandparents

Each family member can have their own medical history.

### Status

`PROPOSED`

---

## Module 6 — AI Symptom Checker

### Example

Input:

> Chest pain + sweating + breathing difficulty

Potential output:

- Possible emergency category
- Risk level
- Immediate actions
- Recommendation to seek urgent medical evaluation

### Safety

This must be presented as informational guidance, not definitive diagnosis.

### Status

`PROPOSED`

---

## Module 7 — AI Medicine Scanner

### Flow

```text
Upload Medicine Photo
        ↓
OCR
        ↓
AI Processing
        ↓
Information
```

Potential output:

- Uses
- Dosage information
- Warnings
- Side Effects
- Interactions

### Status

`PROPOSED`

---

## Module 8 — Medical Report Analyzer

### Supported Conceptual Inputs

- Blood Test
- MRI
- ECG
- CBC
- X-ray
- Lab reports

### Flow

```text
Upload Report
      ↓
OCR / Document Processing
      ↓
AI
      ↓
Summary
      ↓
Abnormal / notable values
      ↓
Questions to ask a doctor
      ↓
Track changes over time
```

### Safety

The system should not replace professional medical interpretation.

### Status

`PROPOSED`

---

## Module 9 — AI Health Score

Concept:

> A CIBIL-like health preparedness / wellness score.

Example:

```text
Health Score
88 / 100
```

Potential factors:

- Sleep
- Exercise
- Water Intake
- BMI
- Blood Pressure
- Blood Sugar
- Smoking
- Alcohol
- Stress

### Status

`PROPOSED`

---

## Module 10 — Emergency Timeline

After an incident, AI can create a timeline.

Example:

```text
8:10 PM
Chest Pain
    ↓
8:12 PM
SOS Sent
    ↓
8:13 PM
Hospital Selected
    ↓
8:18 PM
Ambulance
    ↓
8:42 PM
Reached Hospital
```

### Status

`PROPOSED`

---

## Module 11 — Voice Doctor

Users can speak instead of typing.

Example:

> I am feeling dizzy.

The AI can respond through voice.

### Status

`PROPOSED`

---

## Module 12 — Medicine Reminder

Potential capabilities:

- Recurring reminders
- Missed medicine detection
- Family notification

### Status

`PROPOSED`

---

## Module 13 — Nearby Healthcare

Potential search categories:

- Hospitals
- Clinics
- Blood Banks
- Pharmacy
- Ambulance
- ICU
- 24x7 healthcare

### Status

`PROPOSED`

---

## Module 14 — Blood Donor Finder

Example:

```text
Emergency
   ↓
Need O-
   ↓
Nearby Registered Donors
```

### Status

`PROPOSED`

---

## Module 15 — Disaster Mode

Potential triggers:

- Earthquake
- Flood
- Fire
- Explosion
- Mass accident

The interface can switch to an emergency-oriented mode.

Potential information:

- Emergency instructions
- Nearby shelters
- Emergency contacts

### Status

`PROPOSED`

---

## Module 16 — AI Doctor Notes

Generate a concise patient summary containing:

- Current diseases
- Medicines
- Allergies
- Recent reports
- Emergency history

Goal:

> Help a doctor understand the patient quickly.

### Status

`PROPOSED`

---

## Module 17 — Emergency Wellness Trend Indicator

Use recorded data to identify potentially concerning trends.

Example:

```text
High BP trend increasing
        ↓
Potentially concerning wellness trend
        ↓
Consult a doctor
```

### Safety

This must be framed as a wellness trend indicator based on recorded data, not a definitive medical prediction.

### Status

`PROPOSED`

---

## Module 18 — Insurance Assistant

### Flow

```text
Upload Insurance
      ↓
AI
      ↓
Coverage
Hospital
Claim Process
```

### Status

`PROPOSED`

---

## Module 19 — Offline Emergency Mode

Potential offline capabilities:

- Emergency Data
- QR Medical Card
- First Aid
- Essential emergency information
- SOS actions queued until connectivity returns where technically appropriate

### Important

Clearly distinguish between:

- Fully offline
- Requires connectivity
- Queued until connectivity

### Status

`PROPOSED`

---

## Module 20 — AI Care Companion

After an emergency, AI can support recovery.

Potential check-ins:

- How are you today?
- Did you take your medicine?
- Pain level?
- Water intake?

### Concept

Recovery tracker.

### Status

`PROPOSED`

---

# 9. Hackathon WOW Features

These are optional differentiators and should be prioritized based on implementation reliability.

## Smart Ambulance Mode

When SOS is triggered, generate an emergency summary containing:

- Patient Name
- Blood Group
- Allergies
- Diseases
- Current Medicines
- Location
- Emergency Summary

### Status

`PROPOSED`

---

## Wearable Integration — Mock

Potential integrations:

- Apple Watch
- Fitbit
- Samsung Watch
- Google Fit

For the hackathon, simulated wearable data can be used if actual hardware is unavailable.

### Status

`PROPOSED`

---

## Emotion Detection

Conceptual flow:

```text
Voice
 ↓
Stress / Fear / Panic Indicators
 ↓
Emergency Confidence / Context
```

This should not be treated as a definitive psychological diagnosis.

### Status

`PROPOSED`

---

## Injury Detection

Potential flow:

```text
Upload Injury Image
        ↓
AI
        ↓
Possible Injury Category
        ↓
Immediate First-Aid Guidance
        ↓
Recommendation for Medical Evaluation
```

Avoid definitive diagnoses.

### Status

`PROPOSED`

---

## Car Crash Detection — Mock

Concept:

```text
Phone Movement
      ↓
Acceleration / Sensor Data
      ↓
Possible Accident
      ↓
Auto SOS
```

For a hackathon this can be simulated with mock device sensor data.

### Status

`PROPOSED`

---

## Guardian Dashboard

Potential capabilities:

- Monitor children
- Monitor elderly family members
- Medication status
- Emergency alerts
- Location

### Status

`PROPOSED`

---

## Mental Health Emergency Assistance

Potential context:

- Panic
- Anxiety
- Stress

Potential response:

- Grounding techniques
- Encourage contacting trusted people
- Encourage professional help when appropriate

### Status

`PROPOSED`

---

# 10. Emergency Readiness Score

A personalized user can receive an emergency preparedness score.

Example:

```text
Emergency Preparedness
82%
```

Potential checklist:

```text
✓ Emergency Contacts Added
✓ Blood Group Available
✗ Allergies Added
✗ Insurance Missing
✗ No Medical Reports Uploaded
```

Potential recommendations:

- Upload ECG
- Add Insurance
- Add Family Doctor
- Complete Vaccination History

### Purpose

Encourage users to prepare their health information before an emergency.

### Status

`PROPOSED`

---

# 11. Smart AI Context Engine

This is a core architectural concept.

## Context Priority

```text
User Question
      ↓
Emergency Detection
      ↓
Current Symptoms
      ↓
Medical History
      ↓
Medicine History
      ↓
Allergies
      ↓
Family History
      ↓
Previous Emergencies
      ↓
Location
      ↓
Nearby Hospitals
      ↓
Personalized Response
```

## Core Rule

AI responses should use relevant context rather than blindly injecting every stored medical field.

### Status

`PROPOSED`

---

# 12. Example: Generic vs Personalized AI

## Guest User

User:

> I have chest pain.

Potential guidance:

> Chest pain can have many causes. If it is severe, persistent, or associated with symptoms such as shortness of breath or fainting, seek emergency medical care immediately.

## Personalized User

Stored context:

```text
Age: 63
Diabetes: Yes
Hypertension: Yes
Heart Surgery: 2022
Blood Thinners: Yes
```

User:

> I have chest pain.

Potential context-aware guidance:

- Previous heart surgery
- Diabetes
- High blood pressure
- Blood thinner medication

The system should recommend appropriate urgent medical evaluation while clearly communicating that it is informational guidance and not a diagnosis.

---

# 13. Emergency Simulation Mode

This is an important hackathon demonstration feature.

Example scenarios:

- My father collapsed.
- My child swallowed a battery.
- My friend is choking.

The app can walk the user through a simulated emergency workflow:

```text
Scenario
  ↓
AI Guidance
  ↓
Emergency Classification
  ↓
Hospital Recommendation
  ↓
Simulated SOS
  ↓
Emergency Notification
  ↓
Emergency Timeline
```

### Purpose

Allows the judges to see the complete workflow without creating a real emergency.

### Status

`PROPOSED`

---

# 14. UI/UX Direction

The product should feel like a serious, modern healthcare platform rather than a generic AI chatbot.

## UX Priorities

- Clear hierarchy
- Low cognitive load
- Fast emergency access
- Consistent navigation
- Strong visual hierarchy
- Responsive design
- Accessibility
- Clear emergency states
- Clear loading states
- Clear empty states
- Clear error states
- Trustworthy visual language
- Meaningful micro-interactions
- Consistent component system

## Emergency UX Principle

During an emergency, the interface should reduce cognitive load.

Important actions should be immediately understandable.

Do not bury emergency actions inside complex navigation.

---

# 15. UI Design System — To Be Finalized

The following must be finalized before serious implementation.

## Brand

- Logo: `DECISION REQUIRED`
- Primary color: `DECISION REQUIRED`
- Secondary color: `DECISION REQUIRED`
- Emergency color: `DECISION REQUIRED`
- Background: `DECISION REQUIRED`
- Typography: `DECISION REQUIRED`

## Components

Required reusable component registry:

- Navbar
- Sidebar
- Buttons
- Cards
- Inputs
- Modals
- Dialogs
- Toasts
- Alerts
- Emergency Button
- AI Chat
- Voice Interface
- Medical Card
- Charts
- Tables
- Upload Components
- QR Card
- Timeline
- Health Score
- Maps
- Loading States
- Empty States
- Error States

### Rule

Do not create multiple visually inconsistent versions of the same component.

---

# 16. Screen Inventory — Initial

The final screen list is `DECISION REQUIRED`, but the product concept may include:

## Public / Guest

- Landing Page
- Guest Emergency Assistant
- Symptom Checker
- First Aid
- Medicine Scanner
- Hospital Finder
- Voice Assistant
- Emergency Simulation

## Authenticated

- Login
- Registration
- Dashboard
- Health Profile
- Medical History
- Medical Reports
- AI Health Twin
- Emergency Assistant
- Emergency Timeline
- Emergency Health Passport
- Family Health Tree
- Guardian Dashboard
- Medicine Reminders
- Health Analytics
- Health Score
- Insurance Assistant
- Doctor Notes
- Care Companion

## Doctor / Admin

- Doctor Dashboard
- Admin Dashboard

Final routes and screen specifications must be approved before implementation.

---

# 17. Frontend Technology

## Preferred Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Query
- Zustand or Redux

## Important

The final state-management choice between Zustand and Redux is:

`DECISION REQUIRED`

Do not change the stack without recording a technical decision.

---

# 18. Backend Technology

## Preferred Stack

- Node.js
- Express
- MongoDB
- MongoDB Atlas
- JWT
- Socket.io

### Status

`PROPOSED`

---

# 19. AI Layer

Potential technologies:

- OpenAI GPT
- Whisper for speech-to-text
- OCR using Tesseract or a cloud OCR service

## Important

Specific AI model versions and production providers are:

`DECISION REQUIRED`

Do not assume a model/version is selected until the team explicitly approves it.

---

# 20. Maps

Potential technologies:

- Google Maps API
- OpenStreetMap

### Final choice

`DECISION REQUIRED`

---

# 21. Storage

Potential:

- Cloudinary for media
- MongoDB Atlas for application data

### Status

`PROPOSED`

---

# 22. Deployment

Potential deployment architecture:

## Frontend

Vercel

## Backend

One of:

- Render
- Railway
- Azure App Service

## Database

MongoDB Atlas

## Media

Cloudinary

### Final deployment choice

`DECISION REQUIRED`

---

# 23. Database Collections

Initial proposed collections:

```text
Users
HealthProfiles
MedicalHistory
Medications
Allergies
EmergencyContacts
EmergencyIncidents
UploadedReports
AIConversations
FamilyMembers
HealthScores
Notifications
```

## Database documentation requirement

For every collection, eventually document:

- Purpose
- Schema
- Required fields
- Optional fields
- Validation
- Indexes
- Relationships
- Example document
- APIs using the collection

### Status

`PROPOSED`

---

# 24. API Registry

No API should be considered implemented until the team defines and verifies it.

For every API maintain:

```text
Endpoint
Method
Purpose
Authentication
Authorization
Headers
Request Payload
Response Payload
Error Payload
Status Codes
Frontend Consumer
Backend Controller
Backend Service
Database Impact
Validation
Current Status
```

## Initial API categories

Potential categories:

- Authentication
- Users
- Health Profiles
- Medical History
- Medications
- Allergies
- Emergency Contacts
- Emergency Incidents
- AI
- Reports
- Hospital Search
- Family
- Health Analytics
- Reminders
- Notifications
- QR Health Passport
- Doctor
- Admin

Actual endpoints:

`DECISION REQUIRED`

---

# 25. Payload Registry

All important payloads must be version-controlled in this document.

Potential payloads:

- Login
- Registration
- Health Profile
- Medical History
- Medication
- Allergy
- Emergency Contact
- Emergency Incident
- AI Request
- AI Response
- Report Upload
- Medicine Scan
- SOS
- Family Member
- Health Score
- Notification
- QR Medical Card

No actual payload should be invented and marked implemented before backend/API approval.

---

# 26. Environment Variables

Never store real secrets in this document.

Example placeholders:

```env
NODE_ENV=
PORT=
MONGODB_URI=
JWT_SECRET=
OPENAI_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
GOOGLE_MAPS_API_KEY=
```

Actual values must remain in local `.env` files or secure deployment secret managers.

---

# 27. Security Requirements

Because the platform handles sensitive healthcare information, security must be treated as a core requirement.

Areas to document and implement:

- Authentication
- JWT handling
- Password hashing
- Authorization
- Role-based access
- Input validation
- Rate limiting
- File validation
- Upload restrictions
- CORS
- Secret management
- Sensitive data protection
- Logging restrictions
- Data exposure prevention

### Status

`PLANNED`

---

# 28. AI Safety Requirements

AI LifeGuard must not present itself as a replacement for doctors or emergency services.

The AI must:

- Avoid definitive diagnoses.
- Communicate uncertainty.
- Encourage professional medical evaluation where appropriate.
- Escalate urgent situations appropriately.
- Avoid dangerous medical instructions.
- Avoid fabricated medical information.
- Handle incomplete information safely.
- Protect sensitive medical data.
- Never claim an action occurred when it did not.
- Clearly distinguish informational guidance from diagnosis.

---

# 29. Real-Time Architecture

Potential Socket.io events:

```text
emergency:created
emergency:updated
sos:triggered
guardian:alert
location:updated
notification:new
```

These are currently:

`PROPOSED`

For every implemented event document:

- Event name
- Producer
- Consumer
- Payload
- Authentication
- Reconnection behavior
- Failure handling

---

# 30. Location Architecture

Potential functionality:

- Location permission
- Current location
- Nearby hospitals
- Ambulances
- Pharmacies
- Blood banks
- Distance calculation
- Route information

Important considerations:

- Permission denied
- Location unavailable
- No nearby result
- API failure
- Privacy

Final provider:

`DECISION REQUIRED`

---

# 31. File / Media Architecture

Potential files:

- Medical reports
- X-rays
- MRI
- ECG
- Lab reports
- Medicine images
- Injury images

Potential pipeline:

```text
Upload
 ↓
Validation
 ↓
Storage
 ↓
OCR / Processing
 ↓
AI Analysis
 ↓
Structured Result
 ↓
User Review
```

File types, size limits, storage provider, retention policy and validation rules are:

`DECISION REQUIRED`

---

# 32. Offline Emergency Mode

The product concept includes offline emergency support.

Potential offline information:

- Emergency medical card
- QR information
- First Aid
- Emergency contacts
- Essential medical information

Actions requiring network connectivity must be clearly identified.

---

# 33. Testing Strategy

Testing should eventually cover:

- Unit Testing
- Integration Testing
- API Testing
- AI Testing
- UI Testing
- End-to-End Testing
- Security Testing
- Edge Cases
- Emergency Scenarios
- Failure Scenarios

## Test Registry

| ID | Feature | Scenario | Expected Result | Status |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | NOT STARTED |

---

# 34. Error / Edge Case Registry

Important scenarios to cover:

- No Internet
- Location permission denied
- AI unavailable
- Invalid medical report
- OCR failure
- Empty medical history
- Missing emergency contact
- Invalid medicine image
- Hospital API failure
- Authentication failure
- Expired JWT
- Upload failure
- Socket disconnection
- Database unavailable

For each scenario, define the UX and fallback behavior.

---

# 35. Performance Requirements

Potential considerations:

- Lazy loading
- Code splitting
- Image optimization
- API caching
- React Query caching
- Database indexes
- AI latency
- File upload optimization
- API response performance
- Bundle size

Exact targets:

`DECISION REQUIRED`

---

# 36. Team Structure

There are 4 developers.

The exact ownership is:

`DECISION REQUIRED`

Recommended ownership categories to assign:

```text
Member 1 — Product / Frontend / UI
Member 2 — Backend / Database / APIs
Member 3 — AI / Integrations
Member 4 — Frontend / Backend Integration / Testing / Demo
```

This is only a proposed division and must not be treated as the final assignment.

---

# 37. Git Workflow

To be finalized:

- Main branch
- Development branch
- Feature branch convention
- Commit convention
- Pull request process
- Code review
- Merge strategy
- Release/tag strategy

### Status

`DECISION REQUIRED`

---

# 38. Development Philosophy

The project should be developed slowly and deliberately.

Do not:

- Generate the whole application at once.
- Add features randomly.
- Change architecture without recording it.
- Create duplicate APIs.
- Create duplicate components.
- Guess database fields.
- Guess payloads.
- Treat proposed features as implemented.
- Store secrets in documentation.
- Sacrifice reliability for flashy features.

Prioritize:

1. User value
2. Judge impact
3. UX quality
4. Technical feasibility
5. Demo reliability
6. Differentiation
7. Scalability

---

# 39. Recommended Development Phases

## Phase 0 — Product Definition

Finalize:

- Vision
- Problem
- Target users
- MVP
- Features
- User flows
- Differentiators

## Phase 1 — UX / UI

Finalize:

- Information architecture
- Navigation
- Wireframes
- Design system
- High-fidelity screens
- Responsive behavior

## Phase 2 — Architecture

Finalize:

- Frontend architecture
- Backend architecture
- Database schema
- API contracts
- AI architecture
- Security

## Phase 3 — Foundation

Build:

- Repository
- Frontend
- Backend
- Database
- Authentication
- Base UI system

## Phase 4 — Core Features

Build the highest-priority MVP features.

## Phase 5 — AI

Integrate:

- AI assistant
- Context engine
- Voice
- OCR
- Report analysis

## Phase 6 — Emergency

Build:

- SOS
- Emergency workflow
- Hospital locator
- Emergency summary
- QR health passport

## Phase 7 — Polish

Focus on:

- Animations
- Micro-interactions
- Accessibility
- Responsive UI
- Loading states
- Empty states
- Error states
- Performance

## Phase 8 — Testing

Test critical workflows and failure scenarios.

## Phase 9 — Demo

Create the strongest 5–7 minute judge experience.

---

# 40. Initial Judge Demo Flow

Potential demo sequence:

```text
1. Open AI LifeGuard
2. Show Guest Mode
3. Demonstrate emergency assistance
4. Login
5. Show personalized health profile
6. Upload medical report
7. Show AI summary
8. Ask emergency assistant about symptoms
9. Show context-aware response
10. Trigger simulated SOS
11. Generate emergency summary
12. Show QR Emergency Health Passport
13. Show Health Dashboard
14. Show Emergency Readiness Score
15. Explain the broader product vision
```

The demo should demonstrate the product's core differentiator:

> Personalized emergency assistance powered by health context.

---

# 41. MVP Candidates

The full vision is intentionally larger than the hackathon MVP.

Potential high-value MVP:

```text
Guest Mode
    +
Authentication
    +
Health Profile
    +
Medical History
    +
AI Emergency Assistant
    +
Smart AI Context Engine
    +
Hospital Locator
    +
Emergency Contacts
    +
Simulated SOS
    +
Emergency Summary
    +
QR Medical Card
    +
Medical Report Analyzer
```

Final MVP scope:

`DECISION REQUIRED`

---

# 42. Future Product Possibilities

Potential future capabilities:

- Full wearable integration
- Real device sensor integration
- Production emergency services integration
- Advanced guardian system
- More comprehensive family management
- Advanced health analytics
- Long-term recovery tracking
- Insurance automation
- Doctor workflows
- Hospital integrations
- Offline-first emergency architecture
- Multi-language expansion

These should not automatically be included in the hackathon build.

---

# 43. Decision Log

## DECISION-001

**Topic:** Product direction

**Decision:** AI LifeGuard should be positioned as a broader AI Emergency & Personal Healthcare Platform rather than only an emergency chatbot.

**Status:** Approved concept

---

## DECISION-002

**Topic:** Guest + Personalized Modes

**Decision:** Provide immediate Guest Mode assistance and a Personalized Mode for context-aware health assistance.

**Status:** Approved concept

---

## DECISION-003

**Topic:** Context-aware AI

**Decision:** Context-aware AI is the core differentiator.

**Status:** Approved concept

---

## DECISION-004

**Topic:** Emergency Simulation

**Decision:** Include an Emergency Simulation Mode as a potential hackathon demonstration feature.

**Status:** Proposed

---

# 44. Open Decisions

The following require explicit team decisions.

- Final MVP
- Final feature priority
- Final UI visual identity
- Color palette
- Typography
- Logo
- Navigation structure
- Zustand vs Redux
- Final OpenAI model
- OCR provider
- Maps provider
- Storage architecture
- Authentication details
- Database schema
- API naming conventions
- API versioning
- Socket event architecture
- Deployment platform
- Git workflow
- Team ownership
- Testing framework
- Production security requirements
- Offline capability scope

---

# 45. Current Project State

## Current Phase

`PHASE 0 — PRODUCT DEFINITION`

## Current Goal

Finalize the product scope, UX architecture, MVP and technical architecture before implementation.

## Completed Concept Work

- AI LifeGuard product vision
- Guest Mode
- Personalized Mode
- Smart AI Context Engine concept
- Emergency Health Passport concept
- Emergency Simulation concept
- Broad module inventory
- Initial technology stack
- Initial database collection list
- Initial deployment direction
- Potential hackathon demo flow

## In Progress

- Product scope refinement
- MVP selection
- UX architecture
- UI design system
- Technical architecture
- Team ownership

## Blocked

No technical blocker identified yet.

## Decisions Required

See [Open Decisions](#44-open-decisions).

---

# 46. Change Log

## 2026-08-12 — v0.1.0

- Created initial AI LifeGuard Master Project Context.
- Consolidated the product vision.
- Documented Guest Mode and Personalized Mode.
- Documented initial module architecture.
- Documented Smart AI Context Engine.
- Documented initial technology stack.
- Documented proposed database collections.
- Documented proposed development phases.
- Added decision and open-question sections.
- Added living-document rules.

---

# 47. AI Handoff Rules

Any AI working on this project must:

1. Read this document before making architectural changes.
2. Never assume an unlisted feature is implemented.
3. Never invent an existing API.
4. Never invent database fields.
5. Never silently change a payload.
6. Never change the technology stack without a decision record.
7. Check existing components before creating new ones.
8. Check existing APIs before creating new endpoints.
9. Check existing database models before creating new collections.
10. Preserve the UI design system.
11. Clearly separate proposed, planned and implemented functionality.
12. Update this document after meaningful changes.
13. Never store secrets in this document.
14. Flag contradictions instead of silently resolving them.
15. Keep implementation realistic for the hackathon.

---

# 48. Source of Truth Priority

When conflicts occur, use this order:

```text
1. Current implemented code
2. Current API contracts
3. Current database schema
4. Current UI implementation
5. Latest approved architecture decision
6. This master context document
7. Old discussions / outdated ideas
```

If a conflict exists:

```text
ARCHITECTURE CONFLICT — DECISION REQUIRED
```

Do not silently choose one side.

---

# 49. Master Rule

> **AI LifeGuard is a living project. This document is its shared memory.**

Every meaningful development action must leave the project in a state where another developer or AI can understand:

- What exists
- What does not exist
- What changed
- Why it changed
- How components connect
- What APIs exist
- What payloads exist
- What database schemas exist
- What UI exists
- What AI logic exists
- What remains
- What is blocked
- What decisions are pending

**Never let the context become stale.**

---

# 50. Quick Project Snapshot

| Category | Current State |
|---|---|
| Product | AI LifeGuard |
| Vision | AI Emergency + Personal Healthcare Platform |
| Modes | Guest + Personalized |
| Core Differentiator | Context-aware AI |
| Frontend | React + TypeScript + Tailwind CSS |
| UI Motion | Framer Motion |
| Data Fetching | React Query |
| State | Zustand / Redux — Decision Required |
| Backend | Node.js + Express |
| Database | MongoDB / MongoDB Atlas |
| Auth | JWT |
| Realtime | Socket.io |
| AI | OpenAI GPT — Model TBD |
| Speech | Whisper — Provider/implementation TBD |
| OCR | Tesseract or Cloud OCR — TBD |
| Maps | Google Maps or OpenStreetMap — TBD |
| Media | Cloudinary — Proposed |
| Frontend Deployment | Vercel — Proposed |
| Backend Deployment | Render / Railway / Azure — TBD |
| Current Phase | Product Definition |
| MVP | Decision Required |
| Team | 4 Developers |
| Secrets | Never store in this file |

---

## END OF MASTER CONTEXT

**Document status:** Living / Continuously Updated  
**Next action:** Team review → resolve open decisions → finalize MVP → finalize UX architecture → finalize technical architecture → begin implementation.
