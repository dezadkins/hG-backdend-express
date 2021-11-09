# Hidden Gems System Design

---

## Qustions to be answered.

> What does it mean to be a Travel application?

> What is there to do at Location?

> Where do the locals hangout?

> Links to exsisting sites?

> Where do they eat?

> Recommended sight-seeing?

> Hotels, Adventures, Food

## Functional Requirements

Travel Application [1.0]

### In Scope

- Users can post video XP w/ Description.
- Users can post XP pictures w/ Description
- Users can view/hear video posts and read Description.
- Experiences can be Deleted/Removed.

### Out of Scope

- User Authentication
- Users can reach out to other Users w/ questions
- DM section for Users
- Yelp/ Google Ratings API
- Link to hashtags/Twitter
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
- User Profile
- Content(Video/Photo)
- Description

> "How should we store this Video/Photo Data?"

### MongoDB (Non-Relational, NoSQL)

        {
            1: {
            _id: 1,
            name: '',
            content: '',

            },

            2: {
            _id: 2,
            name: '',
            content: '',

            },
        }
