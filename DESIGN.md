| **Class Name**: UserAccount                                         |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Store username, password, and avatar                     |                   |
| **Responsibilities**                                               | **Collaborators**     |
| Store user account data, including avatarID, username, password | userAccountSchema |
| Retrieve user objects from database                             | UserAccountIndex  |

| Class Name: userAccountSchema                                       |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Indicate user account requirements                    |                   |
| **Responsibilities**                                               | **Collaborators**     |
| indicate user account components requirement and initial setting | UserAccount |

| **Class Name**: AvatarSelection                                      |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Display avatars selection menu                   |                   |
| **Responsibilities**                                                | **Collaborators**     |
| Showcase 6 avatars options for user  |  |
| Get avatar name, id, image source ||
| Store avatar name, id, image source ||

| Class Name: WorldMap                       |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Display game scene         |                   |
| **Responsibilities**                                                | **Collaborators**     |
| Generate game map with assets and collideables  | Video |
| Generate game sprites and animations for local and non local users | Player |
| Preload sprite data | Phaser  |
| Handle sprite physics and map interaction |  |

| Class Name: Video                          |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Set local user’s tokens and video support            |                   |
| **Responsibilities**                                                | **Collaborators**     |
| Hold local user state (all local variables for joining town, userName, video token, session token)  | WorldMap |
| Hold local user’s avatar | TownsServiceClient|
| Teardown video session when user is finished |  |

| Class Name: Player                         |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Store player’s local information        |                   |
| **Responsibilities**                                                | **Collaborators**     |
| Hold a user’s player information (id, userName, avatarID)  | WorldMap |
| Hold a user’s sprite (generated in WorldMap.tsx and assigned to player) | TownsServiceClient|
| Maintain user location and direction information | App |
