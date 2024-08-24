# Creatorverse
Codepath Web-Development Advanced Prework


# WEB103 Prework - *Creatorverse*

Submitted by: **Miguel Angel Tamargo**

About this web app: **Creatorverse allows users to maintain a compiled list of all their favorite creators and keeps a list of all their social media links easy for you to find.**

Can be accessed: https://creatorverse-one.vercel.app/

Time spent: **36** hours

## Required Features

The following **required** functionality is completed:

- [X] **A logical component structure in React is used to create the frontend of the app**
- [X] **At least five content creators are displayed on the homepage of the app**
- [X] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [X] **API calls use the async/await design pattern via Axios or fetch()**
- [X] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [X] **Each content creator has their own unique URL**
- [X] **The user can edit a content creator to change their name, url, or description**
- [X] **The user can delete a content creator**
- [X] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [X] The content creator items are displayed in a creative format, like cards instead of a list
- [X] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [X] Used Embla Carosuel to implement an autoplaying, looping, free dragable carousel on the homepage to display the top 5 creators.
* [X] Applied Nice Form CSS Template to bring a more refined style to the forms and ensure correct input handling.
* [X] Implemented in Typescript+SWC
* [X] Used Bun to handle package management

## Video Walkthrough

Here's a walkthrough of implemented required features:
<gif src='https://imgur.com/a/bshoxNH' title='Video Walkthrough' width='' alt='Video Walkthrough' />
![Demo-ezgif com-resize](https://github.com/user-attachments/assets/293fb1a6-49cb-42ec-be1b-f4f5a6172e9a)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LICEcap:
https://github.com/justinfrankel/licecap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

### Project Challenges and Learnings

During this React project, I encountered several significant challenges. **State management** across components required careful synchronization to ensure smooth performance. I utilized the `useCallback` hook to optimize API call functions, reducing unnecessary re-renders and improving efficiency. Learning **TypeScript** for the first time was a crucial experience, enhancing my understanding of type safety and code reliability through accurate type definitions.

Additionally, I tackled **styling issues** and integrated the Embla Carousel library. This involved resolving CSS conflicts and ensuring the carousel’s functionality aligned with dynamic card components. Merging the card creation feature with the carousel presented its own set of challenges, requiring seamless integration for a cohesive user experience. These tasks highlighted my ability to manage complex state, optimize performance, and effectively handle interactive components and styling in a React application.

## License

Copyright [2024] Miguelangel Tamargo

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
