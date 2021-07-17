const msalConfig = {
  auth: {
    clientId: "96c3ff06-aa43-491e-a5fd-a95bdebb0cc2",
    authority: "845d5628-38f4-4e71-bf69-633e14fe596b",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
const loginRequest = {
 scopes: ["openid", "profile", "User.Read"]
};

// Add scopes here for access token to be used at Microsoft Graph API endpoints.
const tokenRequest = {
 scopes: ["User.Read", "Mail.Read"]
};