# Ava Dignam Cushon Scenario

In my solution, I have attempted to recreate the full user flow as closely as possible using only a front end service. I have used a store context and some JSON files to emulate responses from a backend as well as updating and persisting the state across the app.

## Assumptions

I have tried to keep the assumptions to a minimum, other than assuming that the user has already created an account. I have also assumed that we would allow a user to deposit more than the maximum ISA allowance, but have given them some information to indicate this.

## Enhancements

There were a number of things that occurred to me while completing this assignment that I would have included had this have been a more exhaustive exercise:

- Dark mode
- Mobile view/responsiveness
- Information about the funds available
- Each component would have a test suite
- Loading states (these weren't necessary here as I was not actually calling an API)
- Focus trap to the navigation panel for accessibility
