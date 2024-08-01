export default interface JwtPayload {
  userid: string // Example: User ID
  name?: string // Optional: User's Name
  email?: string // Optional: User's Email
  picture?: string
  // Add other claims as needed
}
