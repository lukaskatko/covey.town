# DESIGN
Below is the high-level architecture of our updated Covey.Town. Original components are in white and grey, added and modified components are in green.

![Covey.Town Architecture](docs/updated-covey-town-architecture.png)


We created user account objects on the server side and stored them using MongoDB with data such as: avatarID, username, password, and object ID. We followed the CRUD operation and model, creating the ability to retrieve the users list, specific user, delete user, add user, and update user from the backend, and also using as the communication tool for the front end to the backend. Added additional RESTful API to be able to retrieve and pass user accounts as objects from the backend to the front end. 

Significant changes were made to `WorldMap.tsx` to remove the hard coded sprite ‘misa’ and replace all references to ‘misa’ with generic variables that are pulled from players and vdeo objects. Multiple new assets were added to the `public/assets` folder under `sprites` which we modified `WorldMap.tsx` to pull sprite data from. For each sprite asset we generated a new `.json` file to define the individual frames that Phaser could use to generate animations. The animation generation process was modified to run as a loop over all available avatars to generate their animations instead of being hardcoded.

Modifications also needed to be made to the `Player` class and the `Video` class to support avatar continuity between local and non-local users. An avatarID field was added to both classes and gets populated through the `AvatarSelection.tsx` which gets displayed to the frontend through `TownSelection.tsx`. These avatarIDs then get passed to `WorldMap.tsx` to correctly display the selected avatar for all players.

Below are the CRC cards related to the modifications we made. This doesn’t include all the CRC cards for the entire App, just the ones we created or modified.

CRC cards for MongoDB changes:

| **Class Name**: UserAccount                                         |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Store username, password, and avatar                     |                   |
| **Responsibilities**                                               | **Collaborators**     |
|||
| Store user account data, including avatarID, username, password | userAccountSchema |
| Retrieve user objects from database                             | UserAccountIndex  |

| Class Name: userAccountSchema                                       |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Indicate user account requirements                    |                   |
| **Responsibilities**                                               | **Collaborators**     |
|||
| indicate user account components requirement and initial setting | UserAccount |

CRC cards for Avatar Selection and Display:

| **Class Name**: AvatarSelection                                      |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Display avatars selection menu                   |                   |
| **Responsibilities**                                                | **Collaborators**     |
|||
| Showcase 6 avatars options for user  | TownSelection |
| Get avatar name, id, image source | UserProfile |
| Store avatar name, id, image source |  |

| Class Name: WorldMap                       |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Display game scene         |                   |
| **Responsibilities**                                                | **Collaborators**     |
|||
| Generate game map with assets and collideables  | Video |
| Generate game sprites and animations for local and non local users | Player |
| Preload sprite data | Phaser  |
| Handle sprite physics and map interaction |  |

| Class Name: Video                          |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Set local user’s tokens and video support            |                   |
| **Responsibilities**                                                | **Collaborators**     |
|||
| Hold local user state (all local variables for joining town, userName, video token, session token)  | WorldMap |
| Hold local user’s avatar | TownsServiceClient|
| Teardown video session when user is finished |  |

| Class Name: Player                         |                   |
|-----------------------------------------------------------------|-------------------|
| **State**: Store player’s local information        |                   |
| **Responsibilities**                                                | **Collaborators**     |
|||
| Hold a user’s player information (id, userName, avatarID)  | WorldMap |
| Hold a user’s sprite (generated in WorldMap.tsx and assigned to player) | TownsServiceClient|
| Maintain user location and direction information | App |
