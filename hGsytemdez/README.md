# Hidden Gems System Design

---

> What does it mean to be a Travel application?

> What is there to do?

> Where do the locals go?

> Where do they eat?

> Recommended sight-seeing?

> Hotels, Adventures, Food

## Functional Requirements

Travel Application [1.0]

### In Scope

- Users can post video XP w/ Description.
- Users can view video posts.
- Experiences can be deleted/Removed.
- Users can reach out to other Users w/ questions

### Out of Scope

- User Authentication
- Yelp/ Google Ratings API
- Map w/ Location Services
- Categories/ Subs (Hotels, Adventures, Food)
- UI Enhancements(Likes,Comments, DarkMode, etc)

## Non-Functional Requirements

- Availabiliy: If a User opens the app they always see something.
- Reliablitly/Redundancy Built in: Posts are never lost.
- Application is Snappy! Latency: Response times < 200 m/s.

## Database/Schema Design (Models + Schema)

> "What does it mean to be a Experience Posting?"

- Name (of User)
- Content(Video)
- Description

> "How should we store this Question?"
