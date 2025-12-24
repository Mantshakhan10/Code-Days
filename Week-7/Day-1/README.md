# Week-7 Day-1 – Authentication & Authorization

## Authentication
Authentication is the process of verifying the identity of a user.
Examples:
- Email & password login
- OTP verification
- Google login

Real-life example:
Checking ID card at office entry.

## Authorization
Authorization determines what an authenticated user is allowed to do.
Examples:
- Admin can access admin panel
- User cannot delete other users

Real-life example:
Only admin can enter server room.

## Difference
Authentication answers "Who are you?"
Authorization answers "What can you do?"

## Authentication Methods
1. Session-based authentication
2. Cookie-based authentication
3. Token-based authentication (JWT)

## JWT (JSON Web Token)
JWT is a token used to securely transmit information between client and server.
It has 3 parts:
1. Header
2. Payload
3. Signature

JWT is stateless and scalable, hence used in modern applications.
