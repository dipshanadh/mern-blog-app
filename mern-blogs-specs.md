# MERN blog app specifications

### Blogs

-   List all blogs in the database
    -   Search blogs
    -   Pagination
    -   Select specific fields in result
    -   Limit number of results
    -   Filter by fields
-   Get single bootcamp
-   Create new blog
    -   Authenticated users only
    -   Only one blog per day (admins can create more)
    -   Field validation via Mongoose
-   Upload a photo for a user
    -   Owner only
    -   Photo will be uploaded to local filesystem
-   Update blog
    -   Owner only
    -   Validation on update
-   Delete blog
    -   Owner only
-   Calculate the average reading time of each blog

### Reviews

-   List all comments for a blog
-   Create a comment
    -   Authenticated users only
    -   Blog owners can't comment in their own blog
-   Update comment
    -   Owner only
-   Delete comment
    -   Owner only

### Users & Authentication

-   Authentication will be done using JWT
    -   JWT and cookie should expire in 15 days
-   User registration
    -   Register with name, a valid email and a strong password
    -   User can't login without verifying their email
    -   Once registered, a token will be sent along with a token
    -   Passwords must be hashed
-   User login
    -   User can login with email and password
    -   Plain text password will compare with stored hashed password
    -   Once logged in, a token will be sent
-   Get user
    -   Route to get the currently logged in user (via token)
-   Password reset (lost password)
    -   User can request to reset password
    -   A hashed token will be emailed to the users registered email address
    -   A put request can be made to the generated url to reset password
    -   The token will expire after 10 minutes
-   Update user info
    -   Authenticated user only
    -   Separate route to update password
-   User CRUD
    -   Admin only
-   Users can only be made admin by updating the database field manually

## Security

-   Encrypt passwords and reset tokens
-   Prevent cross site scripting - XSS
-   Prevent NoSQL injections
-   Add a rate limit for requests of 100 requests per 10 minutes
-   Add headers for security (helmet)
-   Use cors to make API public

## Code Related Suggestions

-   Config file for important constants
-   Use controller methods with documented descriptions/routes
-   Error handling middleware
-   Authentication middleware for protecting routes and setting user roles
-   Validation using Mongoose and no external libraries
-   Use async/await (create asyncHandler to clean up controller methods)
-   Create a database seeder to import and destroy data
-   Utility funtions to send responses and emails
