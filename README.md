# Unfinished Google Doc Clone (Wont Complete)

I got what I needed to learn from this so I am moving on to other projects. Main learning lessons are:

- ShadCN is a nice component library, and they are pretty nice to get UI up an running quickly. ShadCN also has helper functions for semi-dynamic classes (the cn function).

- Convex is a good alternative to Firebase, as they both are realtime databases. Convex is better for type safety with React w/ Typescript apps, but firebase seems like a more mature product with a slightly more generous free tier

- Clerk is good for authentication with a customizable UI component, making it much easier.

- Liveblocks and Velt are good for multiplayer apps (any app with real-time collaboration, not just real-time updates). However both seem to have not-so-generous free tears (max is 100 MACs) so making it from scratch seems to be the best call. Next project will be focused on learning how to do that.

- TipTap is a very robust text editor that can be used for any document-like tool. Free tier is all that is needed for document editing, but TipTap paid features offer much more. Have to learn how to get creative with other tools to simulate pro features.

- Next.js helps with routing. Next.js has some nice features such as using [] for paramaterized parts of the url, and () if a developer wants a folder structure without it affecting the apps routing. (the parenthesis omit the folder name). Mixed feelings on it for bigger projects as I believe folder structure should be mainly focused on code organization and not app routing, but can be useful for getting the ball rolling quickly and prototyping.

- Zustand is similar to Redux, as that it is for global state, but is arguably "better" as it is easier to use. It is a less mature product, maybe not suitable for very large projects.

- Combining the free tiers of multiple products in a creative way makes it possible to create very robust apps for cheap or free.

- When building a startup or app, consider using paid resources to get the ball rolling with their free or cheaper tiers, and upgrade to more cheaper/custom solutions when users are rolling in and costs are a problem

- TailwindCSS helps with hyper-specific rules. TailwindCSS also has an VSCode import that makes it more convenient to understand what the tailwind css classes are doing

- For installing dependencies, consider using --legacy-peer-deps over --force, as --force can cause problems down the road by overriding necessary dependencies. This can cause a problem sometimes where not all dependencies are installed, but that can be fixed with some manual dependency installations.

- For version safety and following along tutorials, always ensure the versions are consistent with the person you are following. This can be specified by appending @(version-number) at the end of every import, where you replace "(version-number)" with the version-number you desire.

- 